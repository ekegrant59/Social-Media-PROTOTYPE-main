require('dotenv').config()
const express = require('express') 
const ejs = require('ejs')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const session = require('express-session')
// const adminschema = require('./schema/adminschema')
const userschema = require('./schema/userschema')
const balanceSchema = require('./schema/balanceSchema')
const depositSchema = require('./schema/depositSchema')
const withdrawSchema = require('./schema/withdrawSchema')
// const fetch = require('node-fetch')

const adminkey = process.env.ADMINKEY
const secretkey = process.env.SECRETKEY

const mongodb = process.env.MONGODB
mongoose.connect(mongodb)
.then(() => {
   console.log('Connection successful')
}).catch((err) => {
    console.log(err, "Connection failed")
})

const app = express()
app.use('/assets', express.static('assets')) 
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json())
app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: 'secret',
    })
);

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.get('/', protectRoute, async function(req,res){ 
    try{
      const auser = req.user.user.email
      const theuser = await userschema.findOne({email: auser})
      const theuser1 = await balanceSchema.findOne({email: auser})
      const deposits = await depositSchema.find({email: auser})
      const withdrawals = await withdrawSchema.find({email: auser})
      res.render('index', {user: theuser, user1: theuser1, deposits: deposits, withdrawals: withdrawals })
  } catch(err){
      console.log(err)
  }
})


function protectRoute(req, res, next){
    const token = req.cookies.logintoken
    try{
        const user = jwt.verify(token, secretkey)
  
        req.user = user
        // console.log(req.user)
        next()
    }
    catch(err){
        res.clearCookie('logintoken')
        req.flash('danger', 'Session Expired, Please Sign In')
        res.redirect('https://alpeada.com/dashboard')
        // res.redirect('http://localhost:5000/dashboard');
    }
  }

app.post('/deposit', async (req,res)=>{
    const details = req.body
    const date = new Date().toLocaleDateString()
    const email = details.email

    const theuser = await userschema.findOne({email:email})
    // console.log(theuser)
  
    deposited()
  
    async function deposited(){
      try{
          const deposit = new depositSchema({
              email: details.email,
              name: `${theuser.firstName} ${theuser.lastName}`,
              coin: details.coin,
              amount: details.amount,
              status: 'Pending',
              date: date
          })
          await deposit.save()
  
          res.redirect('/#history')
      } catch(err){
          console.log(err)
      }
  }
  
  })

  app.post('/withdraw',async(req,res)=>{
    const details = req.body
    const date = new Date().toLocaleDateString()
    const email = details.email
    const address = details.address

    const theuser = await userschema.findOne({email:email})


    function truncateString(str, maxLength) { 
      if (str.length > maxLength) { 
          return str.slice(0, maxLength - 3) + '...'; 
      } 
      return str; 
    } 
    
  let truncatedAddress = truncateString(address, 15); 
  console.log(truncatedAddress);

    // console.log(details)
  
    withdraw()
  
    async function withdraw(){
      try{
        const withdraw = new withdrawSchema({
            email: details.email,
            name: `${theuser.firstName} ${theuser.lastName}`,
            address: truncatedAddress,
            coin: details.coin,
            amount: details.amount,
            status: 'Pending',
            date: date
        })
        await withdraw.save()

        res.send('OK')
        } catch(err){
            console.log(err)
        }
    }
  
  })

const port = process.env.PORT || 9000

app.listen(port, ()=>{
    console.log(`App started on port ${port}`)
} )
const profile = [
    {
      id: 1,
      name: "Miranda",
      img: "./img/img8.webp",
    },
    {
      id: 2,
      name: "Taylor",
      img: "./img/img7.webp",
    },
    {
      id: 3,
      name: "Jack",
      img: "./img/img6.webp",
    },
    {
      id: 4,
      name: "Jimmy",
      img: "./img/img5.webp ",
    },
    {
      id: 5,
      name: "Alex",
      img: "./img/img4.webp",
    },
    {
      id: 6,
      name: "Henry",
      img: "./img/img3.webp",
    },
    {
      id: 7,
      name: "Susan",
      img: "./img/img2.webp",
    },
    {
      id: 8,
      name: "Jamies",
      img: "./img/img1.webp",
    },

 ];

 const personProfie = document.querySelector(".live")

 window.addEventListener("DOMContentLoaded",function(){
    displayProfile(profile)
 })

 function displayProfile(profilePic){
    let displayProfile = profilePic.map(function(item){
        return  ` 
        <div class="person mr-[20px] text-center">
            <div style="background-image:url('${item.img}');" class="profile-pic relative bg-[50%] bg-cover h-[60px] w-[60px] rounded-full"></div>
            <p class="name text-[14px] pt-4">${item.name}</p>
        </div>
     `
    })
displayProfile = displayProfile.join("")
personProfie.innerHTML = displayProfile
//console.log(displayProfile)
 }


 /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 10,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navlist a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);

const currentDateElement = document.getElementById('currentDate');
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);

        currentDateElement.textContent = formattedDate;

        function updateCurrentTime() {
          // Create a new Date object to get the current date and time
          var currentTime = new Date();

          // Extract hours, minutes, and seconds
          var hours = currentTime.getHours();
          var minutes = currentTime.getMinutes();
          var seconds = currentTime.getSeconds();

          // Format the time as HH:MM:SS
          var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

          // Update the content of the "current-time" element
          document.getElementById('current-time').textContent = formattedTime;
      }

      // Call the function initially to display the current time
      updateCurrentTime();

      // Update the current time every second (1000 milliseconds)
      setInterval(updateCurrentTime, 1000);        
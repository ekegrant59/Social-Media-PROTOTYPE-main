(function(){
     'use strict';



    function copyERC() {
                // Get the input element
                var inputElement = document.getElementById("ERCToCopy");

                // Select the text in the input element
                inputElement.select();
                inputElement.setSelectionRange(0, 99999); // For mobile devices

                // Copy the selected text to the clipboard
                document.execCommand("copy");

                // Deselect the text
                inputElement.setSelectionRange(0, 0);

                // Optionally, provide visual feedback or notify the user
                alert("Tether USDT ERC20 address has been copied: " + inputElement.value);
    }

    function copyUSDCn() {
        // Get the input element
        var inputElement = document.getElementById("USDCnToCopy");

        // Select the text in the input element
        inputElement.select();
        inputElement.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Deselect the text
        inputElement.setSelectionRange(0, 0);

        // Optionally, provide visual feedback or notify the user
        alert("USD Coin TRC20 address has been copied: " + inputElement.value);
    }


    function copyBTC() {
        // Get the input element
        var inputElement = document.getElementById("BTCToCopy");

        // Select the text in the input element
        inputElement.select();
        inputElement.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Deselect the text
        inputElement.setSelectionRange(0, 0);

        // Optionally, provide visual feedback or notify the user
        alert("BITCOIN address has been copied: " + inputElement.value);
    }
    
    function copyText() {
        // Get the input element
        var inputElement = document.getElementById("textToCopy");

        // Select the text in the input element
        inputElement.select();
        inputElement.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Deselect the text
        inputElement.setSelectionRange(0, 0);

        // Optionally, provide visual feedback or notify the user
        alert("USDT TRC20 address has been copied: " + inputElement.value);
    }

    

    async function getBTCPriceWithRetry(maxRetries = 3) {
        let retries = 0;

        while (retries < maxRetries) {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                const data = await response.json();
                
                // Extract the BTC price from the response
                const btcPrice = data.bitcoin.usd;
                
                return btcPrice;
            } catch (error) {
                console.error('Error fetching BTC price:', error);

                // Increment the retry count
                retries++;

                // Add a delay before retrying (adjust as needed)
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
        }

        // If max retries reached without success, return null or throw an error
        console.error(`Failed to fetch BTC price after ${maxRetries} retries.`);
        return null;
    }

        // Example usage:
        getBTCPriceWithRetry().then((price) => {
            if (price !== null) {
                console.log('Current BTC Price:', price);
            } else {
                console.log('Failed to fetch BTC price.');
            }
        });


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

function generateProfitLossValue() {
    // Assuming the deposit value is $676.80
    let deposit = 676.80;

    // Calculate approximately 2% of the deposit
    const twoPercent = deposit * 0.015;

    // Function to generate a random number between 0 and 1
    function getRandomNumber() {
        return Math.random();
    }

    // Function to generate an array of random numbers, each approximately 2% of the deposit
    function generateRandomNumberArray(length) {
        const randomArray = [];
        for (let i = 0; i < length; i++) {
            const randomValue = getRandomNumber() * twoPercent;
            randomArray.push(parseFloat(randomValue.toFixed(2))); // Convert to float and limit to 2 decimal places
        }
        return randomArray;
    }

    // Generate an array of 1 random number (adjust as needed)
    const randomArray = generateRandomNumberArray(1);

    // Display the generated array
    console.log("Generated Value:", randomArray);

    return randomArray;
}

        // Array to store values
        const generatedValues = [];

        // remember this momemnt when yiu comment about the three cras


        function createHistoryDiv(datetime, btcPrice, amount) {
            const historyDiv = document.createElement('div');
            historyDiv.className = 'block';

            const table = document.createElement('table');
            table.className = 'w-[90%] mx-auto';

            const row1 = document.createElement('tr');
            const btcLabel = document.createElement('th');
            btcLabel.className = 'text-left ';
            btcLabel.textContent = 'BTC buy';
            const datetimeCell = document.createElement('td');
            datetimeCell.className = 'text-right font-light text-xs';
            datetimeCell.textContent = datetime;
            row1.appendChild(btcLabel);
            row1.appendChild(datetimeCell);

            const row2 = document.createElement('tr');
            const btcPriceCell = document.createElement('th');
            btcPriceCell.className = 'text-left font-semibold text-xs';
            btcPriceCell.textContent = btcPrice.toFixed(2);
            const amountCell = document.createElement('td');
            amountCell.className = 'text-right font-bold text-base tracking-wide text-[#93c5fd]';
            amountCell.textContent = `$${amount.toFixed(2)}`;
            row2.appendChild(btcPriceCell);
            row2.appendChild(amountCell);

            table.appendChild(row1);
            table.appendChild(row2);
            historyDiv.appendChild(table);

            return historyDiv;
        }

        function createSellHistoryDiv(datetime, btcPrice, amount) {
        const historySellDiv = document.createElement('div');
        historySellDiv.className = 'block';

        const sellTable = document.createElement('table');
        sellTable.className = 'w-[90%] mx-auto';

        const row3 = document.createElement('tr');
        const btcLabel1 = document.createElement('th');
        btcLabel1.className = 'text-left ';
        btcLabel1.textContent = 'BTC sell';
        const datetimeCell1 = document.createElement('td');
        datetimeCell1.className = 'text-right font-light text-xs';
        datetimeCell1.textContent = datetime;
        row3.appendChild(btcLabel1);
        row3.appendChild(datetimeCell1);

        const row4 = document.createElement('tr');
        const btcPriceCell1 = document.createElement('th');
        btcPriceCell1.className = 'text-left font-semibold text-xs';
        btcPriceCell1.textContent = btcPrice.toFixed(2);
        const amountCell1 = document.createElement('td');
        amountCell1.className = 'text-right font-bold text-base tracking-wide text-[#93c5fd]';
        amountCell1.textContent = `$${amount.toFixed(2)}`;
        row4.appendChild(btcPriceCell1);
        row4.appendChild(amountCell1);

        sellTable.appendChild(row3);
        sellTable.appendChild(row4);
        historySellDiv.appendChild(sellTable);

        return historySellDiv;
        }

        function createLossHistoryDiv(datetime, btcPrice, amount) {
            const historyLossDiv = document.createElement('div');
            historyLossDiv.className = 'block';

            const lossTable = document.createElement('table');
            lossTable.className = 'w-[90%] mx-auto';

            const row5 = document.createElement('tr');
            const btcLabel2 = document.createElement('th');
            btcLabel2.className = 'text-left ';
            const buyOrSell = Math.random() < 0.5;
            btcLabel2.textContent = buyOrSell ? 'BTC buy' : 'BTC sell';

            
            const datetimeCell2 = document.createElement('td');
            datetimeCell2.className = 'text-right font-light text-xs';
            datetimeCell2.textContent = datetime;
            row5.appendChild(btcLabel2);
            row5.appendChild(datetimeCell2);

            const row6 = document.createElement('tr');
            const btcPriceCell2 = document.createElement('th');
            btcPriceCell2.className = 'text-left font-semibold text-xs';
            btcPriceCell2.textContent = btcPrice.toFixed(2);
            const amountCell2 = document.createElement('td');
            amountCell2.className = buyOrSell
              ? 'text-right font-bold text-base tracking-wide text-[#93c5fd]'
              : 'text-right text-red-500 font-bold text-base tracking-wide ';
            amountCell2.textContent = buyOrSell
              ? `$${amount.toFixed(2)}`
              : `-$${amount.toFixed(2)}`;
            row6.appendChild(btcPriceCell2);
            row6.appendChild(amountCell2);

            lossTable.appendChild(row5);
            lossTable.appendChild(row6);
            historyLossDiv.appendChild(lossTable);

            return historyLossDiv;
        }


        // Array to store history entry objects
        const historyEntries = [];

        // Load bot history from local storage on page load
        function loadBotHistoryFromLocalStorage() {
            const storedHistory = localStorage.getItem('botHistory');
            if (storedHistory) {
              // Parse the stored history from JSON and update the historyEntries array
              const parsedHistory = JSON.parse(storedHistory);
              console.log('Parsed History:', parsedHistory);
              // Clear the existing history entries
              historyEntries.length = 0;

              // Load the new history entries
              historyEntries.push(...parsedHistory);

              // Add the loaded history entries to the HTML
              const eachHistoryContainer =document.getElementById('eachHistory');
              if (eachHistoryContainer) {
                // Clear the HTML container before appending new entries
                console.log('Clearing HTML container...');
                eachHistoryContainer.innerHTML = '';
                parsedHistory.forEach((entry) => {
                  // Determine the transaction type and create the appropriate history div
                  let historyDiv;
                  if (entry.transactionType === 'buy') {
                    historyDiv = createHistoryDiv(
                      entry.dateTime,
                      entry.btcPrice,
                      entry.profitLossValue
                    );
                  } else if (entry.transactionType === 'sell') {
                    historyDiv = createSellHistoryDiv(
                      entry.dateTime,
                      entry.btcPrice,
                      entry.profitLossValue
                    );
                  } else if (entry.transactionType === 'loss') {
                    historyDiv = createLossHistoryDiv(
                      entry.dateTime,
                      entry.btcPrice,
                      entry.profitLossValue
                    );
                  }
                  // Append the history div to the container
                  eachHistoryContainer.appendChild(historyDiv);
                });
              }
            }  else {
                console.log('No stored history found.');
            }
            
        }

        // Function to save bot history to local storage
        setInterval(function saveBotHistoryToLocalStorage() {
          if (shouldClearLocalStorage()) {
            localStorage.clear(); // Clear local storage if 24 hours have passed
          }
          localStorage.setItem('botHistory', JSON.stringify(historyEntries));
          // Update the last update time
          localStorage.setItem('lastUpdateTime', new Date().toISOString());
        }, 300000);
      

        function shouldClearLocalStorage() {
            const lastUpdateTime = localStorage.getItem('lastUpdateTime');
            if (!lastUpdateTime) {
                return false; // Local storage has never been updated
            }

            const currentTime = new Date();
            const lastUpdateDate = new Date(lastUpdateTime);
            const hoursInMilliseconds = 24 * 60 * 60 * 1000;


            console.log('lastUpdateTime:', lastUpdateTime);
            console.log('currentTime:', currentTime.toISOString());
             console.log(
               'Difference in milliseconds:',
               currentTime - lastUpdateDate
             );

        //    const clearLocalStorage = currentTime - lastUpdateDate >= hoursInMilliseconds;
        //    console.log('Clear Local Storage:', clearLocalStorage);

        //    return clearLocalStorage;

               const shouldClear =
                 currentTime - lastUpdateDate >= hoursInMilliseconds;
               console.log('Should clear local storage?', shouldClear);

               return shouldClear;
   

            // Calculate the time difference in milliseconds
           // const timeDifference = currentTime - lastUpdateDate;

            // Check if 24 hours have passed
            //const hoursInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
            // return timeDifference >= hoursInMilliseconds;
        }


        // Initial account balance
        let accountBalance = 986.66;

        // Counter to track the number of trades made in a day
        let tradesCount = 0;

        // Variable to keep track of the total profit or loss
        let totalProfitLoss = 0;

        // Function to get the current date in the format 'YYYY-MM-DD'
        function getCurrentDate() {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

// Variable to store the last reset date
let lastResetDate = getCurrentDate();

        // Function to run generateProfitLossValue, update BTC price, and store the result in the array
        async function runAndStore() {
            try {
                // Fetch the current BTC price
                const btcPrice = await getBTCPriceWithRetry();
            
                if(btcPrice != null){

                // Update the date and time in the history section
                const currentDate = new Date();
                const formattedDateTime = currentDate.toLocaleString();


                // Check if the current date is different from the last reset date
                if (getCurrentDate() !== lastResetDate) {
                    // Reset the tradesCount and totalProfitLoss for the new day
                    tradesCount = 0;
                    totalProfitLoss = 0;

                    // Update the last reset date
                    lastResetDate = getCurrentDate();
                }

                // Generate profit/loss value
                const result = generateProfitLossValue();

                // Determine whether to perform a buy or sell transaction
                const isBuyTransaction = Math.random() < 0.5;

                // Calculate the new account balance based on the generated profit/loss value
                const profitLossValue = result[0];
                accountBalance += profitLossValue;

                    // Update the total profit or loss
                totalProfitLoss += profitLossValue;

                    // Update the total profit or loss in the HTML table
                    const profitElement = document.getElementById('total-profit');
                    if (profitElement) {
                        profitElement.textContent = `$${totalProfitLoss.toFixed(2)}`;
                    }


                // Check if the maximum number of trades for the day has been reached
                if (tradesCount < 6) {
                    // Update the account balance in the HTML table
                    const balanceElement = document.getElementById('account-balance');
                    if (balanceElement) {
                        balanceElement.textContent = `$${accountBalance.toFixed(2)}`;
                    }

                    
                    // Create a history entry object
                    const historyEntry = {
                        transactionType: isBuyTransaction ? 'buy' : 'sell',
                        btcPrice: btcPrice,
                        profitLossValue: result[0],
                        dateTime: formattedDateTime,
                    };

                    // Push the history entry object into the array
                    historyEntries.push(historyEntry);

                    // Log the array of history entry objects
                    console.log("History Entries:", historyEntries);


                        // Save the updated bot history to local storage
                    saveBotHistoryToLocalStorage();

                    // Create a new history div based on the transaction type
                    const newHistoryDiv = isBuyTransaction
                        ? createHistoryDiv(formattedDateTime, btcPrice, result[0])
                        : createSellHistoryDiv(formattedDateTime, btcPrice, result[0]);

                    // Append the new history div to the parent container
                    const eachHistoryContainer = document.getElementById('eachHistory');
                    if (eachHistoryContainer) {
                        eachHistoryContainer.appendChild(newHistoryDiv);
                    }

                    // Increment the trades count
                    tradesCount++;
                } else {
                    console.log("Maximum number of trades reached for the day.");
                }

                } 
                else{
                console.log("Failed to fetch BTC price. Skipping transaction.");
    
                } 
            } catch (error) {
                console.error('Error in runAndStore:', error);
            }
        }

        // Function to generate loss and update account balance
        async function generateLossAndStore() {
            try {
                // Fetch the current BTC price
                const btcPrice = await getBTCPriceWithRetry();

                if(btcPrice != null) {
                        // Check if the current date is different from the last reset date
            if (getCurrentDate() !== lastResetDate) {
                // Reset the tradesCount and totalProfitLoss for the new day
                tradesCount = 0;
                totalProfitLoss = 0;

                // Update the last reset date
                lastResetDate = getCurrentDate();
            }

                // Check if the maximum number of trades for the day has been reached
                if (tradesCount < 6) {
                    // Generate loss value
                    const lossResult = generateProfitLossValue();

                    // Subtract the loss value from the account balance
                    const lossAmount = lossResult[0];
                    accountBalance -= lossAmount;

                    // Update the account balance in the HTML table
                    const balanceElement = document.getElementById('account-balance');
                    if (balanceElement) {
                        balanceElement.textContent = `$${accountBalance.toFixed(2)}`;
                    }

                    // Update the total profit or loss in the HTML table
                    const profitElement = document.getElementById('total-profit');
                    if (profitElement) {
                        profitElement.textContent = `$${totalProfitLoss.toFixed(2)}`;
                    }

                    // Update the date and time in the history section
                    const currentDate = new Date();
                    const formattedDateTime = currentDate.toLocaleString();

                    // Create a loss history entry object
                    const lossHistoryEntry = {
                        transactionType: 'loss',
                        btcPrice: btcPrice, // You may set this to a default value or leave it as 0 for loss entries
                        profitLossValue: -lossAmount, // Negative for losses
                        dateTime: formattedDateTime,
                    };

                    // Push the loss history entry object into the array
                    historyEntries.push(lossHistoryEntry);

                    // Log the array of history entry objects
                    console.log("Loss History Entry:", lossHistoryEntry);

                    // Create a new loss history div
                    const newLossHistoryDiv = createLossHistoryDiv(formattedDateTime, btcPrice, lossAmount);

                    // Append the new loss history div to the parent container
                    const eachHistoryContainer = document.getElementById('eachHistory');
                    if (eachHistoryContainer) {
                        eachHistoryContainer.appendChild(newLossHistoryDiv);
                    }

                    // Increment the trades count
                    tradesCount++;
                } else {
                    console.log("Maximum number of trades reached for the day.");
                }


                }else{
                    console.log("Failed to fetch BTC price. Skipping transaction.");
    
                }

                
            } catch (error) {
                console.error('Error in generateLossAndStore:', error);
            }
        }

        // Set interval for generating loss and storing every 1 minute (adjust as needed, values are in milliseconds)
        setInterval(generateLossAndStore, 900000);

        // Run the function every 3 to 7 hours (adjust as needed, values are in milliseconds)
        // setInterval(runAndStore, Math.floor(Math.random() * (7 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000 + 1)) + 3 * 60 * 60 * 1000);
        // setInterval(runAndStore, Math.floor(Math.random()*(180000 - 120000 + 1)) + 120000)
        // Log the generated values every 30 seconds (for testing purposes)
        //setInterval(() => console.log("Generated Values:", generatedValues), 30000);
    // Set interval for updating BTC price and date/time
        setInterval(runAndStore, 600000);  // Run every 30 seconds
        // setInterval(getBTCPriceWithRetry, 600000)

        // Log the generated values every 30 seconds (for testing purposes)
        setInterval(() => console.log("Generated Values:", generatedValues), 1800000);

        // Set interval for fetching current time every second
        setInterval(updateCurrentTime, 1000);

        // Load bot history from local storage on page load
        loadBotHistoryFromLocalStorage();

        // Set interval for saving bot history to local storage every 5 minutes (adjust as needed, values are in milliseconds)
        // setInterval(saveBotHistoryToLocalStorage, 300000);


    

}())

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
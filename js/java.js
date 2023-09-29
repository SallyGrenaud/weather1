//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const day=document.getElementById("day");
const date=document.getElementById("date");
const locationUse=document.getElementById("locationUse");
const windSpeed=document.getElementById("windSpeed");
const tempKey=document.getElementById("tempKey");
const search=document.getElementById("searchValue")
const searchBtn=document.getElementById("searchBtn");
const searchId=document.getElementById("searchId");
const API_KEY = "168771779c71f3d64106d8a88376808a";
async function showWeather(cityIn) {
  
    if(cityIn)
    {
      try {
        var city = cityIn;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
    
        const data = await response.json();
        // console.log("Weather -> ", data);
    
        renderWeatherInfo(data);
      } catch (err) {
        console.warn(err);
      }
    }
}

showWeather();

function renderWeatherInfo(data)
{
    locationUse.innerText=data.name;
    windSpeed.innerText=data.wind.speed; 
    tempKey.innerText=Math.floor(data.main.temp);
}


document.getElementById("searchId").addEventListener("submit", function(event) {
  event.preventDefault(); 
});

searchBtn.addEventListener("click",function()
{
    showWeather(search.value);
});


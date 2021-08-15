//pages 
var homePage = document.getElementById("home-page"); 
var aboutMePage = document.getElementById("about-me-page"); 
var projectsPage = document.getElementById("projects-page"); 
var contactMePage = document.getElementById("contact-me-page"); 
var resumePage = document.getElementById("resume-page"); 

//nav bar links 
var navAbout = document.getElementsByClassName("nav-about"); 
var navProjects = document.getElementsByClassName("nav-projects"); 
var navResume = document.getElementsByClassName("nav-resume"); 
var navContact = document.getElementsByClassName("nav-contact"); 

//buttons & links 
var profileLink = document.getElementById("profile-link"); 
var contactMeSubmit = document.getElementById("submit-btn"); 
var projectLeftArrow = document.getElementsByClassName("left-arrow"); 
var projectRightArrow = document.getElementsByClassName("right-arrow"); 

//project cards 
var brainBreaks = document.getElementById("brain-breaks"); 
var weatherApp = document.getElementById("weather-app"); 
var codeQuiz = document.getElementById("code-quiz"); 

// This controls the nav bar transition
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  function init() {

  }

  init(); 
  //TO DO: make screen transitions 

  //TO DO: animate the projects page so that is it like an image carosal

  //TO DO: get Contact Me section to work 

  //TO DO: add downloadable resume feature 
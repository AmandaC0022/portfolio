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
var homeBtn = document.getElementById("home-icon-wrapper"); 

//buttons & links 
var profileLink = document.getElementById("profile-link"); 
var contactMeSubmit = document.getElementById("submit-btn"); 
var projectLeftArrow = document.getElementsByClassName("left-arrow"); 
var projectRightArrow = document.getElementsByClassName("right-arrow");
var projectNav1 = document.getElementById("project-nav-1"); 
var projectNav2 = document.getElementById("project-nav-2"); 
var projectNav3 = document.getElementById("project-nav-3");  

//project cards 
var brainBreaks = document.getElementById("brain-breaks"); 
var weatherApp = document.getElementById("weather-app"); 
var codeQuiz = document.getElementById("code-quiz"); 

// This controls the nav bar transition
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

//hides all screens except for home 
function init() {
  aboutMePage.classList.add("hide"); 
  projectsPage.classList.add("hide"); 
  contactMePage.classList.add("hide"); 
  resumePage.classList.add("hide"); 
}

init(); 

function hideAllPages() {
  homePage.classList.add("hide"); 
  aboutMePage.classList.add("hide"); 
  projectsPage.classList.add("hide"); 
  resumePage.classList.add("hide"); 
  contactMePage.classList.add("hide"); 
}

//when user clicks home button, then they are taken to the home page
homeBtn.addEventListener("click", function(){
  homePage.classList.remove("hide"); 
  init(); 
}); 

//when user clicks on SEE MY FULL STORY, they are taken to the about me page
profileLink.addEventListener("click", function() {
  homePage.classList.add("hide"); 
  aboutMePage.classList.remove("hide"); 
}); 

//when user clicks on About in Nav bars then it takes them to the about me page 
navAbout[0].addEventListener("click", function() {
  hideAllPages(); 
  aboutMePage.classList.remove("hide"); 
}); 
navAbout[1].addEventListener("click", function() {
  hideAllPages(); 
  aboutMePage.classList.remove("hide"); 
});

//when user clicks on projects tab in nav, they are taken to the project page 
navProjects[0].addEventListener("click", function() {
  hideAllPages(); 
  hideAllProjects(); 
  projectsPage.classList.remove("hide"); 
  brainBreaks.classList.remove("hide"); 
})
navProjects[1].addEventListener("click", function() {
  hideAllPages();
  hideAllProjects();  
  projectsPage.classList.remove("hide"); 
  brainBreaks.classList.remove("hide"); 
})

//when user clicks on Contact me in the nav bar, then they are taken to the contact me page 
navContact[0].addEventListener("click", function() {
  hideAllPages(); 
  contactMePage.classList.remove("hide"); 
}); 
navContact[1].addEventListener("click", function() {
  hideAllPages(); 
  contactMePage.classList.remove("hide"); 
}); 

navResume[0].addEventListener("click", function(){
  hideAllPages(); 
  resumePage.classList.remove("hide"); 
})
navResume[1].addEventListener("click", function(){
  hideAllPages(); 
  resumePage.classList.remove("hide"); 
})
//this hides all project cards 
function hideAllProjects() { 
  brainBreaks.classList.add("hide"); 
  weatherApp.classList.add("hide"); 
  codeQuiz.classList.add("hide"); 
}

//removes active status from all project nav buttons
function removeActive() {
  document.getElementById("project-1").classList.remove("active-custom");  
  document.getElementById("project-2").classList.remove("active-custom");  
  document.getElementById("project-3").classList.remove("active-custom");  
}

projectNav1.addEventListener("click", function() {
  hideAllProjects(); 
  brainBreaks.classList.remove("hide"); 
  removeActive(); 
  document.getElementById("project-1").classList.add("active-custom");  
}); 
projectNav2.addEventListener("click", function() {
  hideAllProjects(); 
  weatherApp.classList.remove("hide");
  removeActive(); 
  document.getElementById("project-2").classList.add("active-custom");  

}); 
projectNav3.addEventListener("click", function() {
  hideAllProjects(); 
  codeQuiz.classList.remove("hide"); 
  removeActive(); 
  document.getElementById("project-3").classList.add("active-custom");  
}); 

//TO DO: get Contact Me section to work 

//TO DO: add downloadable resume feature 
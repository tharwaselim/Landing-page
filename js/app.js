/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/*
 Global Variables
*/
const fragment = document.createDocumentFragment();
const secList = document.querySelectorAll('section');

/*function*/
/*
create the navigation bar 
*/
function createNavBar(){
  for (let i=0; i < secList.length; i++){
      const menu = document.createElement('li');
      const secId = secList[i].getAttribute('id');
      const secName = secList[i].getAttribute('data-nav');
      menu.innerHTML = createNav(secId, secName);
      fragment.appendChild(menu);
  }
  const navBar = document.getElementById('navbar__list')
  navBar.appendChild(fragment);
}

/*
anchor function
*/
function createNav(id, name){
    const item = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return item;
}

/* 
function to get bounding
*/
function view (elem) {
    const rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.top<200
    );
}

/*
function for active section
*/
function activeSec(){
  for (let i=0; i < secList.length; i++){
      if (view(secList[i])){
          secList[i].classList.add("your-active-class");
      }else{
          secList[i].classList.remove("your-active-class");
      }
  }
}

/*Events*/

function scrollPage(event){
  if(event.target.nodeName === 'A'){
      const secId = event.target.getAttribute('data-id');
      const sec = document.getElementById(secId);
      sec.scrollIntoView({behavior: "smooth"});
  }
}
/*
click event
*/
const bar = document.getElementById('navbar__list')
bar.addEventListener('click', function(event){
  scrollPage(event)
})
/*
scroll event
*/
document.addEventListener('scroll', function(){
    activeSec();
});

/*
call the nav bar
*/
createNavBar()


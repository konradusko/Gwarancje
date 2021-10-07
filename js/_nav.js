//? Ukrywanie i pokazywanie menu
let ScrollList1 = document.querySelector(".WarrantyList__ItemsList"); 
let ScrollList2 = document.querySelector(".User__SettingList");
let MainMenu = document.querySelector(".GW__nav");
let DefaultPosition = 0;


//? Dodawanie chowania menu gdy scrolujemy 
[ScrollList1, ScrollList2].forEach(function(item) {
   item.addEventListener("scroll", function(){ 
      let st = item.scrollTop; 
      if (st > DefaultPosition){
         // w dól
         MainMenu.classList.add("nav--hidden");
         MainMenu.classList.remove("nav--show");
      } else {
         // w góre
         MainMenu.classList.remove("nav--hidden");
         MainMenu.classList.add("nav--show");
      }
      DefaultPosition = st <= 0 ? 0 : st; 
   }, false);
});


//? Menu i nawigacja
const getURL = new URLSearchParams(window.location.search);
const menuLink = getURL.get("page");

switch(menuLink) {
   case "home":
   break;

   case "user":
      document.querySelector(".GW__User").classList.remove("User--hide");
      document.querySelector(".nav__link").classList.remove("nav__link--active");
      document.querySelector(`.nav__link--user`).classList.add("nav__link--active");
   break;

   // default:
   //   console.log("default");
 }



//? Ukrywanie i pokazywanie menu
let ScrollList1 = document.querySelector(".WarrantyList__ItemsList");
let ScrollList2 = document.querySelector(".User__SettingList");
let MainMenu = document.querySelector(".GW__nav");
let DefaultPosition = 0;



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
      DefaultPosition = st <= 0 ? 0 : st; // For Mobile or negative scrolling
   }, false);

});
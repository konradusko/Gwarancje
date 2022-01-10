//? Partanina bo i tak to pewnie bedzie trzba na nowo napisac
document.querySelector(".Product__BoxEditButton").addEventListener("click", (e) => {
    let ButtonText = e.target.innerText;
    e.target.innerText = ButtonText == 'Edytuj' ? 'Zapisz' : 'Edytuj';
    if(ButtonText == "Edytuj"){
        document.querySelector(".Product__BoxEditButton").classList.add("Product__BoxEditButton--save");
    }
    else{
        document.querySelector(".Product__BoxEditButton").classList.remove("Product__BoxEditButton--save");
    }
 });


 //Procent przeminiionej gwarancji + ustawienia gradientu
 let color4 = "#9C27B0"
 let color5 = "#FFFFFF"
 let getProductProcent = document.querySelector(".Product__TopImage").dataset.gradientprocent;
 document.querySelector(".Product__TopImage").style.background = `linear-gradient(360deg, ${color4} 0%, ${color4} ${getProductProcent}%, ${color5} 0%, ${color5} 100%)`;
 document.querySelector(".Product__TopFirst").innerHTML = `${getProductProcent} %`
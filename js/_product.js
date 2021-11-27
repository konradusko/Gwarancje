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
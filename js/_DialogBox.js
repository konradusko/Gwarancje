
 //Boxy
 const getURLbox = new URLSearchParams(window.location.search);
 const MBox = getURLbox.get("box");

 switch(MBox) {
    case "additem":
        document.querySelector(`.BoxDialog[data-dialogName="additem"]`).show();
        DialogBoxReset("additem");
    break;
 
    case "filters":
        document.querySelector(`.BoxDialog[data-dialogName="filters"]`).show();
        DialogBoxReset("filters");
    break;    
        
    case "chEmail":
        document.querySelector(`.BoxDialog[data-dialogName="chEmail"]`).show();
        DialogBoxReset("chEmail");
    break;

    case "chPass":
        document.querySelector(`.BoxDialog[data-dialogName="chPass"]`).show();
        DialogBoxReset("chPass");
    break;

    case "chName":
        document.querySelector(`.BoxDialog[data-dialogName="chName"]`).show();
        DialogBoxReset("chName");
    break;

    case "chAvatar":
        document.querySelector(`.BoxDialog[data-dialogName="chAvatar"]`).show();
        DialogBoxReset("chAvatar");
    break;

    case "eventItem":
        document.querySelector(`.BoxDialog[data-dialogName="eventItem"]`).show();
        DialogBoxReset("eventItem");
    break;
 
    // default:
    //   console.log("default");
}


function DialogBoxReset(nameBox) {
    //!Debug:
    //console.log(nameBox);

    
    //Odczyt wysokości boxa (0% - 100%)
    if(document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).open == true){
        let HeightDialog = document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).dataset.dialogheight;
        document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"] .BoxDialog__BoxFull`).style.setProperty(`height`, `${HeightDialog}vh`);
    }

    // Scrotule do boxa po otwarciu
    document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).scrollTo(0,document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).scrollHeight);


    // Jeśli box jest ukryty to dalgobox się zamyka
    document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).addEventListener("scroll", (event)=>{
        let scrollPostion = document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).scrollTop;
        if(scrollPostion == 0){
            document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).close();
            
            var queryParams = new URLSearchParams(window.location.search);
            queryParams.delete("box");
            history.replaceState(null, null, "?"+queryParams.toString());
        }
    })


    //Przycisk X zamyka dialogbox
    document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"] .BoxDialog__MenuClose`).addEventListener("click", ()=>{
        document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).close();

        var queryParams = new URLSearchParams(window.location.search);
        queryParams.delete("box");
        history.replaceState(null, null, "?"+queryParams.toString());
    })

    
    //Przycisk anuluj zamyka box
    document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"] .BoxDial__Button--cancel`).addEventListener("click", ()=>{
        document.querySelector(`.BoxDialog[data-dialogName="${nameBox}"]`).close();

        var queryParams = new URLSearchParams(window.location.search);
        queryParams.delete("box");
        history.replaceState(null, null, "?"+queryParams.toString());
    })


}

//Nazwa wrzuconego pliku

document.querySelector(".BoxDial__uploadFile").addEventListener("change",function() {
    var input = document.querySelector(".BoxDial__uploadFileInput");
  
    for (var i = 0; i < input.files.length; ++i) {
        this.innerHTML += '<div>' + input.files.item(i).name + '</div>';
    }

})

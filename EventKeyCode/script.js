var key = document.getElementById('body');

function KeyPreassBody(){
    var main = document.getElementById('main');
    var styleKey = document.getElementById('key-style');
    var styleCard = document.getElementById('key-info');
    main.classList.replace("block","none");
    styleKey.classList.replace("none","block");
    styleCard.classList.replace("none","block");

    styleKey.innerHTML = event.which;

    document.getElementById('1').innerHTML = event.key;
    document.getElementById('2').innerHTML = event.location;
    document.getElementById('3').innerHTML = event.which;
    document.getElementById('4').innerHTML = event.code;
    
    console.log(event.ctrlKey);

    if(event.which == 13){
        document.getElementById('btnEntr').classList.replace('purple','green');
    }else{document.getElementById('btnEntr').classList.replace('green','purple');}

    if(event.ctrlKey){
        document.getElementById('btnCtrl').classList.replace('purple','green');
    }else{document.getElementById('btnCtrl').classList.replace('green','purple');}
    
}

key.addEventListener('keypress', KeyPreassBody);
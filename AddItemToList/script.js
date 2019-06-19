var button = document.getElementById('button');
var input = document.getElementById('input');
// var item = document.getElementsByTagName('li');
// var list = document.getElementById('list');

var ul = document.querySelector('ul');

function inputLength () {
    return input.value.length;
}
function CreateListElement () {
    var li = document.createElement('li');
        li.innerHTML += '<span id="delete-item" class="delete-item">x</span>';
        li.appendChild(document.createTextNode(input.value));
        console.log(li);
        ul.appendChild(li);
        input.value = '';
}
function SetTimer(){
    setTimeout(()=>{
        document.getElementById('error').innerHTML = '';
    }, 1000);
}
function ShowError () {
    document.getElementById('error').innerHTML = ' input is empty';
}
function AddListAfterClick(){
    if (inputLength() > 0 ){
        CreateListElement();
    }else {
        ShowError();
        SetTimer();
    }
}
function AddListAfterKeypress(){
    if (event.which === 13){
        if (inputLength() > 0){
            CreateListElement();
            }else {
                ShowError();
                SetTimer();
            }        
    }
}

// item.addEventListener('click',()=>{
//     console.log('click');
// });

button.addEventListener('click', AddListAfterClick);

input.addEventListener('keypress',AddListAfterKeypress);


// var button = document.getElementById('button');
// var input = document.getElementById('input');
// var ul = document.querySelector('ul');

// function inputLength(){
//     return input.value.length;
// }
// function ShowError(){
//     document.getElementById('error').innerHTML = 'input is empty';
// }

// function AddListAfterClick () {
//     if (inputLength() > 0){
//         var li = document.createElement('li');
//         li.innerHTML += '<span id="delete-item" class="delete-item">x</span>';
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//     }else{
//         ShowError();
//         SetTimer();
//     }
    
// };

// function AddListAfterKeypress () {
//     if (event.keyCode == 13) {
//         if (inputLength() > 0 ){
//                 var li = document.createElement('li');
//                 li.innerHTML += '<span id="delete-item" class="delete-item">x</span>';
//                 li.appendChild(document.createTextNode(input.value));
//                 ul.appendChild(li);
//             } else {
//                 ShowError();
//                 SetTimer();
//             }
//     }
    
    
// };

// function SetTimer(){
//     setTimeout(()=>{
//         document.getElementById('error').innerHTML = '';
//     }, 1000);
// };

// button.addEventListener('click',AddListAfterClick);
// input.addEventListener('keypress',AddListAfterKeypress);



let addBtn = document.querySelector('#addBtn')
let uList = document.querySelector('#uList')
let newTask = document.querySelector('#newTask')

addBtn.addEventListener("click", addItem)


$(document).ready(function(){
    
    if(localStorage.getItem('uList')) {
        document.querySelector('#uList').innerHTML = localStorage.getItem('uList')}
    
        else{document.querySelector('#uList').innerHTML = ''}
   
    document.querySelector('#newTask').focus()
   
    newTask.addEventListener('keydown', insert)
    function insert(key) {
        if(key.key === "Enter"){
            addItem()
        }
    }
       
 })


function addItem(item){

    let value = document.querySelector('#newTask').value.trim()
  
    if (value == "" || !value) { $(".error").toast("show"); 
    } 
    else {
        $(".success").toast("show");
        let msg = document.querySelector('#successMsg')
        msg.innerHTML = ` '${value}' added to the list! `
        uList.innerHTML += ` <li onclick="check(this)">  ${value} <i onclick="removeTask(this.parentElement)" class="far     fa-times-circle close"></i></li> ` ; 
        newTask.value = ""
        localStorage.setItem('uList', document.querySelector('#uList').innerHTML)
    }
}


function check(id) {
    id.classList.toggle('checkIt');
    localStorage.setItem('uList', document.querySelector('#uList').innerHTML)
    
}


function removeTask(id){
    
   $('.deleted').toast("show");
    document.querySelector('#uList').removeChild(id)
    localStorage.setItem('uList', document.querySelector('#uList').innerHTML)
    
}

function clearStorage(){
    localStorage.clear()
    window.location.reload(); 
   
}
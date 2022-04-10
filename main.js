let sub = document.getElementById('sub')
let names = document.getElementById('name')
let pass = document.getElementById('pass')
let info = document.getElementById('info')
let dlt = document.getElementById('dlt')
let mode = document.getElementById('mode')
let searchh = document.getElementById('search')

let mood = 'add'
let tmp;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
function ss() {
    ml.innerHTML = mainarr.length
    if (localStorage.task.length <= 2) {
        alll.style.display = 'none'
        searchh.style.display = 'none'
       
    } else {
       alll.style.display = 'inline'
        searchh.style.display = 'inline'
    }
}


let mainarr;

if (localStorage.task !== undefined) {


    mainarr = JSON.parse(localStorage.task)



} else {

    let mainarr = [];



}



function addtarr() {
    let tasks = {
        names: names.value.toLowerCase(),
        password: pass.value.toLowerCase()
    }

    if (mood === 'update') {
     
     
        mainarr[tmp] = tasks
        sub.innerHTML = 'add <i class="fa-solid fa-square-plus"></i>'

    } else {

        if (localStorage.task === undefined) {
            mainarr = [tasks]
        } else { mainarr.push(tasks) }

    }
    mood = 'add'


    if (localStorage.task !== undefined) {
        ss()
    }

}






function showcards() {



    let table = ''
    for (let i = 0; i < mainarr.length; i++) {

       
tmp5 = i

        table += `
      <div class="card text-center">
  <div class="card-header"><span class='hash'>${i + 1}</span>
  </div>
  <div class="card-body">
    <h5 class="card-title">${mainarr[i].names.toLowerCase()}</h5>
    <p class="card-text">${mainarr[i].password.toLowerCase()}</p>
    <button type="button" id="dlt" onmouseleave='undeleto(${i})' onmouseover="deleto(${i})" onclick='deletethtask(${i})' class="btn btn-outline-danger"  class='delto'><i class="fa-solid fa-trash-can"></i></button>
    <button type="button" id="upd" onmouseleave='unedito(${i})' onmouseover="edito(${i})" onclick='updatethtask(${i})'  class="btn btn-outline-success"><i class="fa-solid fa-pen"></i></button>
  </div>
  <div class="card-footer text-muted">
  
  </div>
</div>
      
      
      
      
      `





    }

    info.innerHTML = table

    if (localStorage.task !== undefined) {
        ss()
    }

}









if (localStorage.task !== undefined) {
    showcards()
    if (localStorage.task !== undefined) {
        ss()
    }
}

function deletethtask(i) {
    mainarr.splice(i, 1);
    localStorage.task = JSON.stringify(mainarr)
    showcards()
    if (localStorage.task !== undefined) {
        ss()
    }
}


function updatethtask(i) {
    mood = 'update'
    sub.innerHTML = 'update <i class="fa-solid fa-pen-to-square"></i>'
    searchh.style.display = 'none';
    tmp = i;

    let table;
    table = `<div class="card text-center">
    <div class="card-header">${i + 1}
    </div>
    <div class="card-body">
      <h5 class="card-title">${mainarr[i].names}</h5>
      <p class="card-text">${mainarr[i].password}</p>
      <button type="button" id="dlt" onmouseleave='undeleto(${i})' onmouseover="deleto(${i})" onclick='deletethtask(${i})' class="btn btn-outline-danger"  class='delto'><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <div class="card-footer text-muted">
    
    </div>
  </div> 
        `
        info.innerHTML = table
    names.value = mainarr[i].names.toLowerCase()
    pass.value = mainarr[i].password.toLowerCase()

    alll.style.display = 'none'
    }

console.log(mainarr);

sub.addEventListener('click', (eo) => {






    addtarr()
    showcards()
    localStorage.setItem('task', JSON.stringify(mainarr))

    names.value = ''
    pass.value = ''

    if (localStorage.task !== undefined) {
        ss()
    }
})

document.onkeyup = function (e) {

    if (e.key === 'Enter') {
        names.focus()
        addtarr()
        showcards()
        localStorage.setItem('task', JSON.stringify(mainarr))

        names.value = ''
        pass.value = ''
        if (localStorage.task !== undefined) {
            ss()
        }

    }


}


function searchtask(value) {
    tmp2 = value.toLowerCase()

    let table = ''
    for (let i = 0; i < mainarr.length; i++) {
        tmp3 = i;

        if (mainarr[i].names.includes(tmp2)) {



            table += ` <div class="card text-center">
            <div class="card-header">${i + 1}
            </div>
            <div class="card-body">
              <h5 class="card-title">${mainarr[i].names}</h5>
              <p class="card-text">${mainarr[i].password}</p>
              <button type="button" id="dlt"   onclick='deletethtask(${i})' class="btn btn-outline-danger"  class='delto'><i class="fa-solid fa-trash-can"></i></button>
              <button type="button" id="upd" onclick='updatethtask(${i})'  class="btn btn-outline-success"><i class="fa-solid fa-pen"></i></button>
            </div>
            <div class="card-footer text-muted">
            
            </div>
          </div> 
                `

            info.innerHTML = table

        }
        
        if (value === '') {
            showcards()
        }

        if (localStorage.task !== undefined) {
            ss()
        }

    }

}


function deleteall(){
    localStorage.clear()
    info.innerHTML = ''
    alll.style.display = 'none'
    searchh.style.display = 'none'
}




function deleto(x){
    let delto = document.getElementsByClassName("btn-outline-danger")[x];
tmp4 = delto
    delto.innerHTML = 'delete'


}

function undeleto(){
    tmp4.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
}


function edito(x){
    let editoo = document.getElementsByClassName("btn-outline-success")[x];
tmp5 = editoo
    editoo.innerHTML = 'update'


}

function unedito(){
    tmp5.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
}












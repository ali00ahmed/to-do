let sub = document.getElementById('sub')
let names = document.getElementById('name')
let pass = document.getElementById('pass')
let info = document.getElementById('info')
let dlt = document.getElementById('dlt')
let mode = document.getElementById('mode')
let searchh = document.getElementById('search')
let mood = 'add'
let tmp2;
let tmp;



function ss() {
    if (localStorage.task.length <= 2) {
        searchh.style.display = 'none'
    } else {

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
        names: names.value,
        password: pass.value
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

        tmp = i;


        table += `
      <div class="card text-center">
  <div class="card-header">${i + 1}
  </div>
  <div class="card-body">
    <h5 class="card-title">${mainarr[i].names}</h5>
    <p class="card-text">${mainarr[i].password}</p>
    <button type="button" id="dlt" onclick='deletethtask(${i})' class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
    <button type="button" id="upd" onclick='updatethtask(${i})'  class="btn btn-outline-success"><i class="fa-solid fa-pen"></i></button>
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
    names.value = mainarr[i].names
    pass.value = mainarr[i].password
}



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


function searchtask(v) {
    for (let i = 0; i < mainarr.length; i++) {
        tmp2 = i
        let table = ''
        if (mainarr[i].names.includes(v)) {



            table += ` <div class="card text-center">
            <div class="card-header">${i + 1}
            </div>
            <div class="card-body">
              <h5 class="card-title">${mainarr[i].names}</h5>
              <p class="card-text">${mainarr[i].password}</p>
              <button type="button" id="dlt" onclick='deletethtask(${i})' class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
              <button type="button" id="upd" onclick='updatethtask(${i})'  class="btn btn-outline-success"><i class="fa-solid fa-pen"></i></button>
            </div>
            <div class="card-footer text-muted">
            
            </div>
          </div> 
                `

            info.innerHTML = table

        }

    }
    if (v === '') {
        showcards()
    }
    if (!mainarr[tmp2].names.includes(v) && mainarr[tmp2].password.includes(v)) {
        info.innerHTML = `<h1 class='no'>no elemnts with this name</h1>`
    }
    if (localStorage.task !== undefined) {
        ss()
    }
}























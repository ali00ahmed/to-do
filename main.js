let sub = document.getElementById('sub')
let names = document.getElementById('name')
let pass = document.getElementById('pass')
let info = document.getElementById('info')
let dlt = document.getElementById('dlt')
let mode = document.getElementById('mode')
let searchh = document.getElementById('search')
let mood = 'add'






let mainarr;
if (localStorage.task !== undefined) {


    mainarr = JSON.parse(localStorage.task)

    ss()

} else {

    let mainarr = [];

    ss()

}



function addtarr() {
    let tasks = {
        names: names.value,
        password: pass.value
    }

    if (mood === 'update') {

        mainarr[tmp] = tasks
    } else {

        if (localStorage.task === undefined) {
            mainarr = [tasks]
        } else { mainarr.push(tasks) }

    }
    mood = 'add'
    mode.innerHTML = 'create'
    ss()
}






function showcards() {



    let table = ''
    for (let i = 0; i < mainarr.length; i++) {

        tmp = i;


        table += `<div class="card">
        <div class="values">  <h4>${mainarr[tmp].names}</h4>
          <h4>${mainarr[tmp].password}</h4></div>
          <button id="dlt" onclick='deletethtask(${i})' >delete ${i + 1}</button>
          <button id="upd" onclick='updatethtask(${tmp})' >update</button>
      </div>`





    }

    info.innerHTML = table

    ss()

}









if (localStorage.task !== undefined) {
    showcards()
    ss()
}

function deletethtask(i) {
    mainarr.splice(i, 1);
    localStorage.task = JSON.stringify(mainarr)
    showcards()
    ss()
}


function updatethtask(i) {
    mood = 'update'
    mode.innerHTML = 'update'
    names.value = mainarr[i].names
    pass.value = mainarr[i].password
}

sub.addEventListener('click', (eo) => {






    addtarr()
    showcards()
    localStorage.setItem('task', JSON.stringify(mainarr))

    names.value = ''
    pass.value = ''
    ss()
})

document.onkeyup = function (e) {

    if (e.key === 'Enter') {
        names.focus()
        addtarr()
        showcards()
        localStorage.setItem('task', JSON.stringify(mainarr))

        names.value = ''
        pass.value = ''
        ss()

    }


}


function searchtask(v) {
    for (let i = 0; i < mainarr.length; i++) {
        let table = ''
        if (mainarr[i].names.includes(v)) {



            table += `<div class="card">
        <div class="values">  <h4>${mainarr[i].names}</h4>
          <h4>${mainarr[i].password}</h4></div>
          <button id="dlt" onclick='deletethtask(${i})' >delete ${i + 1}</button>
          <button id="upd" onclick='updatethtask(${i})' >update</button>
      </div>`

            info.innerHTML = table

        }

    }
    if (v === '') {
        showcards()
    }
 ss()   
}


function ss() {
    if (localStorage.task === undefined) {
        searchh.style.display = 'none'
    } else {
        
        searchh.style.display = 'block'
    }
}























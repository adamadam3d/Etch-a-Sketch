const container = document.querySelector('div.container')
let count = 0;
const btn = document.createElement('button')
btn.textContent='reset'
newGame(16)
container.appendChild(btn)
const mid =  document.querySelector('#r1 #g8 ')
//mid.setAttribute('style','background: red;')
//mid.appendChild(btn)
function newGame(grid) {
    container.innerHTML='';
    for (let i =1;i<=grid;i++){
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        row.setAttribute("id", `r${i}`)
    
        for (let x =1;x<=grid;x++){
            const grid = document.createElement('div')
            grid.classList.add('grid')
            row.appendChild(grid)
            grid.setAttribute('id',`g${x}`)
            grid.addEventListener("mouseover",()=>grid.classList.add('hover'))
    
        }
    }
}
function click(){
    let promp = prompt('new grid (under 100)')
    while (promp>=100 || !(promp) ){
        promp = prompt('needs to less')
    }
    newGame(promp)
}
btn.addEventListener('click',click)

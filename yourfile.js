
const container = document.querySelector('div.container')
const touch = document.querySelector('.touch');

let count = 0;
const btn = document.createElement('button')
btn.textContent='reset'
let size = 10;
newGame(size)
const grids = document.querySelectorAll('.grid')
container.appendChild(btn);
grids.forEach((grid)=>grid.addEventListener("mouseover",()=>{
    grid.style.backgroundColor='black';
    console.log("test2");
}));
grids.forEach((grid)=>grid.addEventListener("touchmove",(e)=>{
    e.target.style.backgroundColor='black';
    console.log("test");
}));
console.log(grids);

touch.addEventListener("touchmove",(e)    =>{
    const grid =document.querySelector('.grid');
    const grids = document.querySelectorAll('.grid');
    let x =e.touches[0].clientX;
    let y = e.touches[0].clientY;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    console.log(grids)
    grids[(Math.floor(x/(grid.offsetWidth)))+size*Math.floor(((y/(grid.offsetHeight))))].style.backgroundColor='black';
});
/*
touch.addEventListener("touchstart",(e)    =>{
    const grid =document.querySelector('.grid');
    const grids = document.querySelectorAll('.grid');
    let x =e.touches[0].clientX;
    let y = e.touches[0].clientY;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    console.log(Math.floor(height/grid.offsetHeight))
    console.log((Math.floor(x/(grid.offsetWidth)))+", "+Math.floor(height/grid.offsetHeight)*Math.floor((2*(y/(grid.offsetHeight)))));

    //grids[(x/(grid.offsetWidth))+(2*(y/(grid.offsetHeight)))].style.backgroundColor='black';
    grids[(Math.floor(x/(grid.offsetWidth)))+Math.floor(height/grid.offsetHeight)*Math.floor(((y/(grid.offsetHeight))))].style.backgroundColor='black';
});
*/

const colour = document.createElement('button')
colour.textContent = 'Colorful'
colour.setAttribute('style','transform: translate( -150%);')
colour.addEventListener('click',e=>{
    ran(e);
    grids = document.querySelectorAll('.grid');
})
container.appendChild(colour)


const fading = document.createElement('button')
fading.textContent = 'Fading'
fading.setAttribute('style','transform: translate(50%);')
fading.addEventListener('click',bla)
container.appendChild(fading)


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
            
    
        }
    }
    //grids = document.querySelectorAll('.grid');
}
let i = 0;


function bla(){

    this.setAttribute('style',`filter: brightness(${100-i}%);`)
    grids = document.querySelectorAll('.grid')
    grids.forEach((grid)=>grid.addEventListener("mouseover",()=>{
        grid.setAttribute('style',`filter: brightness(${100-i}%);`);
        i+=1
    }));

    fading.setAttribute('style','transform: translate(50%);')
    container.appendChild(fading)
    


}

function ran(e){
    let col = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor ="#" + col;
    //
    const gr = document.querySelectorAll('.grid');
    gr.forEach((grid)=>grid.addEventListener("mouseover",ran))
}

function click(){
    let promp = prompt('new grid (under 100)')
    while (promp>=100){
        promp = prompt('needs to less')
    }
    newGame(promp)
  size = promp
    container.appendChild(btn)
    container.appendChild(fading)
    container.appendChild(colour)
    i =0;
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid)=>grid.addEventListener("mouseover",()=>grid.style.backgroundColor='black'))

}
btn.addEventListener('click',click)


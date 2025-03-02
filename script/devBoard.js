
document.getElementById('discover-box').addEventListener('click', function(){
     window.location.href="question.html";
})

const boardBtn = document.querySelectorAll(".board-btn");
for(let btn of boardBtn){
  
    btn.addEventListener("click", function(){
       
        alert("Board updated Successfully");
        btn.disabled = true;

    const counterDecrement = document.getElementById('count');
    const counter1 = parseInt(counterDecrement.innerText);
    counterDecrement.innerText = counter1 - 1;

    const counterIncrement = document.getElementById('header-counter');
    const counter2 = parseInt(counterIncrement.innerText);
    counterIncrement.innerText = counter2 + 1;
    

    // if(counter1 > 0 || counter2 > 0){
    
    //  counterDecrement.innerText = counter1 - 1;
    //  counterIncrement.innerText = counter2 + 1;
    // }

    
    
    const body = document.getElementById('Table-body');

    const tr = document.createElement('tr');
    tr.innerHTML=`
    <p class="bg-slate-300 rounded-md p-4 lg:w-64 w-[690px]  mt-6 ">You have completed the task Fix Mobile Button Issue
    at <span>${new Date().toLocaleTimeString()}
    
    `
    body.appendChild(tr);

    });
}

document.getElementById('clear-btn').addEventListener("click", function(){
    
  const textShow = document.getElementById('text-show');
  textShow.innerHTML="";

})


let colors = ['#80CBC4', '#FFB433','#E53888','#F37199','#F8ED8C','#66D2CE','#F2E2B1'];
let index = 0;

const body =document.getElementById('body');

document.getElementById('theme').addEventListener('click', function(){

  body.style.backgroundColor = colors[index];
  index = index + 1;
 
   if(index >= colors.length){
   index = 0;
   
   };
});

const date = document.getElementById('date');

date.innerHTML=`
    
 <p>${new Date().toLocaleDateString()}</p>
 
`

document.getElementById("six-number-btn").addEventListener("click", function(){
  alert("congrates!!! You have completed all the current task")
})





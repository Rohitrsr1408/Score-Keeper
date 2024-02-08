const p1display=document.querySelector('#P1display');
const p2display=document.querySelector('#P2display');
const p1btn=document.querySelector('#player1');
const p2btn=document.querySelector('#player2');
const rst=document.querySelector('#Reset');
const winningScoreSelect=document.querySelector('#match');
let  winningScore=3;
let p1score=0;
let p2score=0;
let isMatchOver=false;
p1btn.addEventListener('click',()=>{
    if(!isMatchOver){
        p1score++;
        if(p1score===winningScore){
            isMatchOver=true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
        }
        p1display.textContent=p1score;
    }
})

p2btn.addEventListener('click',()=>{
    if(!isMatchOver){
        p2score++;
        if(p2score===winningScore){
            isMatchOver=true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
        }
       
        p2display.textContent=p2score;
    }
})

winningScoreSelect.addEventListener('change',()=>{
    winningScore=parseInt(winningScoreSelect.value);
    reset();
})

rst.addEventListener('click',reset);

function reset(){
    isMatchOver=false;
    p1score=0;
    p2score=0;
    p1display.textContent=p1score;
    p2display.textContent=p2score;
    p2display.classList.remove('winner','loser');
    p1display.classList.remove('winner','loser');
}


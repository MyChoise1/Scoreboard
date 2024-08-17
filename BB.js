let scoreE1 = document.getElementById("score1")
let scoreE2 = document.getElementById("score2")
let sum1 = 0
let sum2 = 0

function addE1(){
    sum1 += 1  
    scoreE1.textContent = sum1
}

function addE2(){
    sum1 += 2
    scoreE1.textContent = sum1
}

function addE3(){
    sum1 +=3
    scoreE1.textContent = sum1
}

function addD1(){
    sum2 +=1
    scoreE2.textContent = sum2
}

function addD2(){
    sum2 +=2
    scoreE2.textContent = sum2
}

function addD3(){
    sum2 += 3
    scoreE2.textContent = sum2
}

function reset(){
    sum1 = 0
    sum2 = 0
    scoreE1.textContent = sum1
    scoreE2.textContent = sum2
}

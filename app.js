function randomNumbers(){
  return Math.random()*255
}

function randomColors(){
  let num1 = randomNumbers()
  let num2 = randomNumbers()
  let num3 = randomNumbers()
  return `rgb(${num1}, ${num2}, ${num3})`
}


document.getElementById("start").addEventListener("click" , function(){

  setInterval(function(){
    document.getElementById("bg").style.backgroundColor = randomColors()
    document.getElementById("start").style.backgroundColor = randomColors()
  }, 1000);
  
})
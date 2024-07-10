let btn = document.getElementById("btn")
let img = document.getElementById("imgon")
btn.addEventListener('click',change);
function change(e){
    if(btn.textContent.includes('On')){
        img.src = "Bulb 2.jpg"
        btn.style.backgroundColor = "red"
        btn.style.color = "black"
        btn.style.borderColor = "black"
        btn.textContent = "Turn Off"
    }else{
        img.src = "Bulb 3.jpg"
        btn.style.backgroundColor = "green"
        btn.style.color = "yellow"
        btn.style.borderColor = "yellow"
        btn.textContent = "Turn On"
    }
}
var user_number = document.getElementById("user_number")
var random_number = document.getElementById("random_number")
var result = document.getElementById("result")
var box_result = document.getElementById("info_box_result")
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss")
var total = document.getElementById("total")
var msg = document.getElementById("msg")

var total_count = 0
var win = 0
var loss = 0

function tryMyLuck(user) {
var randomNumber = Math.random() * 6
var ceil = Math.ceil(randomNumber)
console.log(ceil)
user_number.innerText = user
random_number.innerText = ceil
total.innerText = ++total_count

// total count mein se aik minus krdo
// total.innerText = ++count;
 
if (ceil === user) {
  result.innerText ="You win";
  info_box_result.style.backgroundColor = "Green"
  result.style.color = "yellow"
  win_html.innerText = ++win

// total count mein se aik minus krdo
// win_html.innerText = ++win;
} else {
  result.innerText ="You Loss"
  info_box_result.style.backgroundColor = "red"
  result.style.color = "black"
  loss_html.innerText = ++loss  
}

checkResult();
}

function checkResult() {
    if (total_count === 10) {
      if (loss == 10 || win == 2) {
        msg.innerText = "Sorry! You loss try again";
        msg.style.color = "red"
      } else {
        msg.innerText = "Congrats! You win";
        msg.style.color = "green"
      }
      total_count = 0;
      win = 0;
      loss = 0;
      total.innerText = 10;
      win_html.innerText = 3;
      loss_html.innerText = 10;
    }
 }
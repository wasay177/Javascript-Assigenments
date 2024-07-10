var counter = document.querySelector('.counter');
var incr = document.querySelector('.incr');
var decr = document.querySelector('.decr');
let count=0;
incr.addEventListener("click",()=>{
    count=count+1;
    counter.innerHTML = count;
});
decr.addEventListener("click",()=>{
    count=count-1;
    counter.innerHTML = count;
});
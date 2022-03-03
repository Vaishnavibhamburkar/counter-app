var data = 0;
document.getElementById("counting").innerHTML = data;
function increment(){
    data = data+1;
    document.getElementById("counting").innerHTML = data;
}

function decrement(){
    data = data-1;
    document.getElementById("counting").innerHTML = data;
}
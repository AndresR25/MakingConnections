
var Name = document.querySelector("#Name");
var requestSpan = document.querySelector("#Requests");
var connectionSpan = document.querySelector("#connections");

function Remove(){
    if(Name.innerText =="Jane Doe"){
        Name.innerText = "Marisa G";
    }else if(Name.innerText =="Marisa G"){
        Name.innerText ="Jane Doe";
    }
    
}
function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}
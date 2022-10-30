var ul = document.querySelector("ul");
var button=document.getElementById("enter");
var tinp = document.getElementById("myValues");
var myNodelist = document.getElementsByTagName("li");

// creating a list
function createList(){
  var li= document.createElement("li");
  li.appendChild(document.createTextNode(tinp.value));
  ul.appendChild(li);
  tinp.value="";
  var btn = document.createElement("button");
  btn.innerHTML="DELETE!";
  li.appendChild(btn);
  btn.onclick=removeParent;
}

// calculating input length
function inputLength(){
  return tinp.value.length;
}

// created function for click addEventListener on button
function addAfterClick(){
  if (inputLength()>0){
    createList();
  } else{
    alert("provide input in the field");
  }
}

// created function for enter key for keypress addEventListener
function addAfterEkey(event){
  if (inputLength()>0 && event.keyCode==13){
    createList();
  }
}

function removeParent(event){
  event.target.parentNode.remove();
}

button.addEventListener("click",addAfterClick);
tinp.addEventListener("keypress",addAfterEkey);

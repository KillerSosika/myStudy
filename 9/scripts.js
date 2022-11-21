var radio =document.getElementsByName('prim');
var ApplePassword = document.getElementById("ApplePassword");
var current = document.getElementById("current");
var ssn = document.getElementById("cars");


for(var i=0; i<radio.length;i++){
    radio[i].onchange = testRadio;
}


function testRadio(){
    console.log(this.value)
}

document.onclick = function(event) { var target = event.target;  
    var id = target.getAttribute('data-toggle-id');
if (!id) return;
var elem = document.getElementById(id);
elem.hidden = !elem.hidden;
  };

  
  
  document.getElementById("Apple_password").onclick = function(event) {
            this.addEventListener('click',alert(ApplePassword.value))
  }

  ssn.oninput = function(event) {
    current.innerHTML = ssn.value;
  }
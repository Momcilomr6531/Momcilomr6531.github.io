
var x = 5;

var a,b,c;

a = 5;

b = a + 2; 

c = a + b; 

let name = "Marko"; 

const w = 5; 

let carName = "toyota";

document.getElementById("car").innerHTML = carName + "'s are my " + a + "th favourite car";

// Now we can say something in html file <h1 id = "car"</h1> 




let result = (a*b)/x; 


document.getElementById("math").innerHTML = "(" + a + "*" + b + ")/" + x + " = " + result; 


var myName = "Momcilo"; 

var age = 21; 

let java = true; 


document.getElementById("practice").innerHTML = "Hello, my name is " + myName + ", I am "  + age + " years old and I can code Javascript: " + java;

function sumValues(a,b) {
    let c = a + b; 
    document.getElementById("explain").innerHTML = " your result was equal to " + a + "+" + b + "!"; 
    alert("The Value of z is " + c + "."); 
    
}


var isOn = true; 
function switchOff(){
if(isOn == true){alert("isOn is set to true, swithig to false now.");
isOn = false; 
}
else{alert("isOn is false, swithing to true now."); 
    isOn = true; 
}
}



 
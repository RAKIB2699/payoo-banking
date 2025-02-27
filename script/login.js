document.getElementById("btn").addEventListener("click", function (event) { 
    event.preventDefault;
    const inputNumber = document.getElementById("number").value;
    const inputPin = document.getElementById("pin").value;
    
    const convertPin = parseInt(inputPin);

    if(inputNumber.length === 11){
        if(convertPin === 1234){
            window.location.href = "./main.html"
        }else{
            alert("wrong pin");
        }
    }
    else{
        alert("Invalid Number");
    }
  
})
document.getElementById("addmoneybtn").addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById("addamount").value;
    const enterPin = document.getElementById("pin").value;
    const balance = document.getElementById("mainBalance").innerText;
    const converAmount = parseFloat(inputAmount);
    const convertPin = parseFloat(enterPin);
    const convertbalance = parseFloat(balance);

    if(convertPin === 1234){
        const sum = converAmount + convertbalance;
        const balance = document.getElementById("mainBalance").innerText = sum;
    }else{
        alert("wrong pin");
    }

});

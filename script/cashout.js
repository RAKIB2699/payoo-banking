document.getElementById("cashoutbtn").addEventListener("click", function (event) { 
    event.preventDefault();
   
    const cashoutpin = document.getElementById("cashoutpin").value;
    const convertCashoutpin = parseInt(cashoutpin)

    const withdrawamount = document.getElementById("cashoutamount").value;
    const convertWidthdramount = parseFloat(withdrawamount);

    const mainbalance = document.getElementById("mainBalance").innerText;
    const convertmainbalance = parseFloat(mainbalance);

    if(convertCashoutpin === 1234){
        const withdrawSum = convertmainbalance - convertWidthdramount;
        document.getElementById("mainBalance").innerText = withdrawSum;
        console.log(withdrawSum);

    }else{
        alert("enter valid pin");
    }
})
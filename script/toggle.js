document.getElementById("addmoney").addEventListener("click", function (event) { 
    document.getElementById("cashoutsection").style.display = "none";
    document.getElementById("addmoneysection").style.display = "block";
})
document.getElementById("cashout").addEventListener("click", function (event) { 
    
    document.getElementById("cashoutsection").style.display = "block";
    document.getElementById("addmoneysection").style.display = "none";
})
function totalProduction(){    
    var shadeA= parseInt(document.querySelector("#litres1").value);
    var shadeB = parseInt(document.querySelector("#litres2").value);
    var shadeC= parseInt(document.querySelector("#litres3").value);
    var shadeD = parseInt(document.querySelector("#litres4").value);

    var sum = shadeA + shadeB + shadeC + shadeD;
    document.querySelector("#result").innerHTML = sum;
    // alert("The total production is "+sum+ " litres per day");
}



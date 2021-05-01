function totalProduction(){    
    var shadeA= parseInt(document.querySelector("#litres1").value);
    var shadeB = parseInt(document.querySelector("#litres2").value);
    var shadeC= parseInt(document.querySelector("#litres3").value);
    var shadeD = parseInt(document.querySelector("#litres4").value);

    var sum = shadeA + shadeB + shadeC + shadeD;
    document.querySelector("#result").innerHTML = sum;
    // alert("The total production is "+sum+ " litres per day");
}
var row = 1;

function displayDetails(){
    var shade = document.getElementById("shade").value;
    var litres = document.getElementById("litres").value;

    if(!shade || !litres){
        alert("Please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = shade;
    cell2.innerHTML = litres;
    row++;
    totalProduction();
}


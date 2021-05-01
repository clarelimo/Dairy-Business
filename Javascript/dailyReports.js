var row = 1;
function displayDetails(){
    var shadeA= parseInt(document.getElementById("litres1").value);
    var shadeB = parseInt(document.getElementById("litres2").value);
    var shadeC= parseInt(document.getElementById("litres3").value);
    var shadeD = parseInt(document.getElementById("litres4").value);
    
    if(!shadeA || !shadeB || !shadeC || !shadeD){
        alert("Please fill all the boxes");
        return;
    }
    
    var production = [];
    production.push({name:"Shade A",litres:shadeA},{name:"Shade B",litres:shadeB},{name:"Shade C",litres:shadeC},{name:"Shade D",litres:shadeD});
    let n = production.length;
    let sum =0;
    for(let i=0;i<n;i++){
        sum+=production[i].litres;
        var display = document.getElementById("display");
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
    
        cell1.innerHTML = production[i].name;
        cell2.innerHTML = production[i].litres;
        row++;
    }
    document.querySelector("#result").innerHTML = sum + " litres per day.";    
}


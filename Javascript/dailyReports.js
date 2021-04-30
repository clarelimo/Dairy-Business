var production = [{shade:"A",litres:510},{shade:"B",litres:308},{shade:"C",litres:486},{shade:"D",litres:572}];

var totalProduction= function(production){
    let n = production.length;
    let sum =0;
    for(let i=0;i<n;i++){
        console.log("Your Production in Shade "+production[i].shade + " is "+production[i].litres+" litres per day");
        sum+=production[i].litres;
    }
    return "The total production is "+sum+" litres per day.";

}
console.log(totalProduction(production));
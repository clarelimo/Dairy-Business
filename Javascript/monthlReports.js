
var leapYear = [{month:"January", days:31},
                {month:"February", days:29},
                {month:"March", days:31},
                {month:"April", days:30},
                {month:"May", days:31},
                {month:"June", days:30},
                {month:"July", days:31},
                {month:"August", days:31},
                {month:"September", days:30},
                {month:"October", days:31},
                {month:"November", days:30},
                {month:"December", days:31}];

let n = leapYear.length;
function monthlyReport(price,totalProduction){
    let result =[];
    for(let i = 0; i<n;i++){
        let amount = leapYear[i].days * price * totalProduction;
        result.push({month:leapYear[i].month,sales:amount});   
    }
    return result;
   
}
var months =[];
 months = monthlyReport(45,1876);
 let len = months.length;
for(let i = 0; i<len;i++){
    console.log(months[i].month);
    let month = months[i].month;
    let sales = months[i].sales;
    console.log("#"+month+":"+ "Your income for " + month + " is" +sales);
    // document.querySelector("#"+month).innerHTML = "Your income for " + month + " is" +sales;  
 } 
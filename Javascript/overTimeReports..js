function overTime(price, time, total){
    let weekly, yearly, projection = 0;
    if(time === weekly){
        projection = 10 * price * 7;
       
    }else if(time == yearly){
        projection = total * price * 365;
    }else{
        projection = total * price * 30;
    }
    return projection;
}
console.log(overTime(45,"weekly", 10));
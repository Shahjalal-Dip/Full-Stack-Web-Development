let getTodayDate=()=>{
    let date=new Date();
    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
}
console.log(getTodayDate());
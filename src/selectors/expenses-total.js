export default(expenses)=>{
    let sum=0;
    for(let i=0;i<expenses.length;i++){
        sum+=expenses[i].amount;
    }
    return sum/100
}  
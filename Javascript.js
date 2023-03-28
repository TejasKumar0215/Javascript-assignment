/*let ages=[32,32,33,27,25,26,38,37,31,34,24,26,27,27,24,33,29,26,31,26,34,37,27,26]
const mean=ages => {
    let total=0;
    for(let i=0;i<=ages.length;i++){
    total+=ages[i]
}
return total/ages.length;
}*/

/*const median =ages=>
{
    const{length}=ages;
    ages.sort((a,b) => a-b);
    if(length%2===0)
    {
        return(ages[length/2-1]+ages[length/2])/2;
    }
    return ages[(length-1)/2]
 }*/

 /*const mode=ages => {
    const mode={};
    let max=0,count=0;
    for(let i=0;i<ages.length;i++)
    {
        const item=ages[i];
        if(mode[item]){
            mode[item]++;
        }else{
            mode[item=1];

        }
        if(count<mode[item])
        {
            max=item;
            count=mode[item];
        }
        }
        return max;
    }*/
 
/*const range=arr=>{
    ages.sort((a,b)=>a-b);
    return[ages[0],ages[ages.length-1]];
}*/

//let ages=[32,32,33,27,25,26,38,37,31,34,24,26,27,27,24,33,29,26,31,26,34,37,27,26]
//console.log(Math.max(...ages));
//console.log(Math.min(...ages));


/*function sumages(ages)
{
    let sum=0
    for(let i=0;i=ages.length;i+=1)
    {
        sum += ages[i]
    }
    console.log(sum)
   
}*/

/*let ages=[32,32,33,27,25,26,38,37,31,34,24,26,27,27,24,33,29,26,31,26,34,37,27,26]
const calculateVariance=(ages)=>
{
    const average = calculateMean(ages);
    const squareDiffs=ages.map((ages)=>{
        const diff=ages-average;
        console.log(diff*diff);
    });
    const variance=calculateMean(squareDiffs);
    console.log(variance);
};

const calculateSD=(variance)=>{
    return Math.sqrt(variance);
}*/

/*fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(console.log);*/
/*function makefunc()
{
    var name='Hello world';
    function displayName()
    {
       console.log(name);
    }
    return displayName;
}
var makeFunc=makeFunc();
{
    console.log(name);
}
makeFunc();*/

//var employee={firstName:"Arpitha",lastName:"V",skills:"HTML",country:"INDIA",age:22}
//window.localStorage.setItem('employee',JSON.stringify(employee))



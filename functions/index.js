/*const cars =["volvo", "mclaren" ,"benz"]
console.log(cars)*/
const myArray = []
for (let i = 1; i < 101; i++) {
  myArray.push(i)
}
function divisible(i){
    return i%5==0;
}
function filter(nums, divisible){
    const array=[]
    nums.forEach(num => 
        {
            if(divisible(num)){
                array.push(num);
            }
        
    })
    return array;
}
function add(){
    const sum =filter(myArray, divisible).reduce( (accumulator, num)=>{
        return accumulator+num
    });
    return sum
}
console.log(add());




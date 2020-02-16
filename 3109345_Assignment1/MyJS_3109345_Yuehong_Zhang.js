let array = new Array(1000);//array to store objects
let first_name = "Yuehong";//my first name
//array to store the upper case objects
let upper = [];
//array to store the lower case objects
let lower = [];

//create a function to construct object.
function makeObject(name, value) {
    return {
        name: name,
        value: value
    }
}

//loop for 1000 times to create 1000 objects and store in array
for(let i=0; i<1000; i++){
    array[i] = makeObject(first_name+i, i);
}

/*Create a function called toUpperTimesFive() that will convert every object
so that the name is all uppercase, and the values are the original multiplied by 5.
 */
function toUpperTimesFive(){
    for (let i = 0; i < array.length; i++) {
       let name = array[i].name.toUpperCase();
       let value = array[i].value * 5;
       upper[i] = makeObject(name,value);//store each object in upper
    }
}

///call the toUpperTimesFive function
toUpperTimesFive();
console.log(upper);//output upper array to console



/*Create a function called toLowerTimesThree() that will convert every object
so that the name is all lowercase and the values are the original multiplied by 3.
 */
function toLowerTimesThree() {
    for (let i = 0; i < array.length; i++) {
        let name = array[i].name.toLowerCase();
        let value = array[i].value * 3;
        lower[i] =makeObject(name,value);
    }
}

///call the toUpperTimesFive function
toLowerTimesThree();
console.log(lower);//output lower array to console

/*Create a function called divisibles() that will take each object in upper
and find all objects in lower that evenly divide into it, ignoring zero
 */
function divisibles(upper, lower) {
    let new_upper = [];
    for(let i=1; i<upper.length;i++){
        new_upper[i]=makeObject(upper[i].name,upper[i].value);
        new_upper[i].found=[];
        for(let j=0; j<lower.length; j++){
            if(new_upper[i].value%lower[j].value===0){
                new_upper[i].found.push(lower[j]);
            }
        }
    }
    return new_upper;
}
//call the divisibles function to get the new upper array
let new_upper = divisibles(upper, lower);
console.log(new_upper);//output result to console






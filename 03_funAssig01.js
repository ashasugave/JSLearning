
console.log("01------No argument no return type------");
function projectDetails (){
    console.log("Project Name: Farmer App");
    console.log("Technology: Java");
    
}
projectDetails();

console.log("02-------argument with  no return value------");
function personalDetails(firstName,lastName,collegeName){
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("College Name:", collegeName);

}
personalDetails("Asha", "Sugave", "TSSM Pune");

console.log("03---------argument with no return value-------");
function swapValues(val1, val2){
    console.log("Before Swap value:", val1, val2);
    var temp = val1;
    var val1 = val2;
    var val2 = val1;
     val2 = temp;
console.log("After swap value:", val1, val2);
}
swapValues("Virat", "Anushka");
swapValues(1000,2000);

console.log("04-----------argument with return value------");
function addThreeValues(val1, val2, val3){
    var result = val1 + val2 + val3;
    return result;
}
var add = addThreeValues(10.3,600,40);
console.log("value:", add);
add = addThreeValues("Hello ", "Good ", "Morning");
console.log("Message:", add);




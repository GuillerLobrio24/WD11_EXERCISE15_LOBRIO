

// function firstFunction (){
    
//     let num1 = 12;
//     let num2 = 11;
//     let result = num1 + num2;

//     alert(result);
// }

// firstFunction();

// function firstFunction (num1, num2){
//     let result = num1 + num2;
//     alert(result);
// }

// firstFunction(12, 11);

// function firstFunction (num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// alert(firstFunction(12, 11));



// const firstFunction = function(num1,num2){
//     let result = num1 + num2;
//     alert(result);
// };

// alert(firstFunction(num1, num2));

const firstFunction = function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    result = Number(num1) + Number(num2);
    return result;
};

const secondFunction = function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    result = Number(num1) - Number(num2);
    return result;
};

const thirdFunction = function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    result = Number(num1) * Number(num2);
    return result;
};

const fourthFunction = function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    result = Number(num1) / Number(num2);
    return result;
};

// add two numbers
function sum(a, b){
    return a+b;
}

// test assertion

function expect(actual){
    return {
        toEqual : function(expected){
        if(result !== expected){
          throw new Error(`${actual} is not equal to ${expected}`);
    }
        }
    }
}


  // test framework

function test(message, callback){
    try{
          callback();
          console.log("✅",message);
    } catch(error){
        console.error(error);
        console.log("❌",message) 
    }
}
  
 function add(){
    var result = sum(10,20);
    var expected = 30;
     expect(result).toEqual(expected);
 } test("sum of result and expected",add);
  
// // try{
// //     if(result !== expected){
// //         throw new Error(`${result} is not equal to ${expected}`);
// //     }
// // } catch(error){
// //     console.error(error);
// //     console.log("catched 20 ") 
// // }

// function add2(){
//     let result = sum(10,20);
//     let expected = 30;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }  
// test("sum of result and expected2 ", add2);
// function add3(){
//     let result = sum(10,20);
//     let expected = 10;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }  
// test("sum of result and expected2 ", add3);

// function add4(){
//     let result = sum(10,20);
//     let expected = 30;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }  
// test("sum of result and expected2 ", add4);

// function add5(){
//     let result = sum(10,20);
//     let expected = 10;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }  
// test("sum of result and expected2 ", add5);
// try{
//     if(result !== expected2){
//         throw new Error(`${result} is not equal to ${expected2}`);
//     }
// } catch(error){
//     console.error(error);
//     console.log("catched 20 ") 
// }



// multiply two numbers



// function product(a, b){
//     return a*b;
// }

// function test(message, callback){
//     try{
//           callback();
//           console.log("✅",message)
//     } catch(error){
//         console.error(error);
//         console.log("❌",message);
//     }
// }  

// function multiply(){
//     let result = product(10,2);
//     let expected = 20;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }
//  test("product of 10 and 2", multiply);

//  function multiply2(){
//     let result = product(10,6);
//     let expected = 60;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }
//  test("product of 10 and 2", multiply2);

//  function multiply3(){
//     let result = product(10,3);
//     let expected = 20;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }
//  test("product of 10 and 3", multiply3);

//  function multiply4(){
//     let result = product(10,4);
//     let expected = 20;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }
//  test("product of 10 and 4", multiply4);

//  function multiply5(){
//     let result = product(10,2);
//     let expected = 20;
//     if(result !== expected){
//         throw new Error(`${result} is not equal to ${expected}`);
//     }
// }
//  test("product of 10 and 2", multiply5);
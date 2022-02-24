
// function electricBill(unit){
//   let bills;
//     if(unit <= 100){
//         bills = unit * 5;
//     }
//     else if(unit <= 200){
//         firststepBill = 100 * 5;
//         afterfirstStepUnit = unit - 100;
//         bills = (afterfirstStepUnit * 6) + firststepBill;
//     }
//     else if(200 < unit){
//         firststepBill = 100 * 5;
//         secondStepbill = 100 * 6;
//         aftersenondStepUnit = unit - 200;
//         bills = (aftersenondStepUnit * 7) + firststepBill + secondStepbill;
//     }
//     return bills;
// }
// let eletricbill = electricBill(190);
// console.log(eletricbill);


// function findLarge(array){
//     for (i = 0 ; i < array.length; i++){
//         if(array[i] < 0){
//             return 'please input valid array'
//         }
//     }  
//     let largest = array[0];
//     for(const element of array){
     
//         if ( largest < element){
//             largest = element;
//         }
//     }
//     return largest;
// }
// console.log(findLarge([34,546,1]))



function findsecondLargenumber(numbers){

    let firstlargenumber = numbers[0];
    let secondlargenumber = numbers[0];
    let thirdlargestnumber = [0];
    for (const largest of numbers){
        if ( largest > firstlargenumber){
            secondlargenumber =  firstlargenumber;
           firstlargenumber = largest;
        }
        else if (secondlargenumber < largest){
            secondlargenumber = largest;
        }
        else if (thirdlargestnumber > largest){
            thirdlargestnumber = largest;
           
        }
      
    }
    return thirdlargestnumber;
}
console.log(findsecondLargenumber([60,3,570,67,34,40,80]))
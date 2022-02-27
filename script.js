// let contador = [];

// alwaysHungry = [3.14, "comida", "pastel", true, "comida"];

// alwaysHungry.forEach(element => {
//   if(element == "comida") {
//     contador.push("Delicioso");
//   } else {
//   }
// });

// console.log(contador);

function alwaysHungry(arr) {
  var delicioso = false;
  arr.forEach(element => {
    if(element == "comida") {
      delicioso = true;
      console.log("delicioso");
    }
  }); if(!delicioso) {
    console.log("tengo hambre");
  }
}
 
// alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
// alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"



function highPass(arr, cutoff) {
  var filteredArr = [];
  
  arr.forEach(element => {
    if(element > cutoff) {
      filteredArr.push(element);
    }
  })

  return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // esperamos de vuelta [6, 8, 10, 9]


function betterThanAverage(arr) {
  var sum = 0;
  arr.forEach(element => {
    sum += element;
  })
  var promedio = sum/arr.length;
  var count = 0
  arr.forEach(element => {
    if(element > promedio) {
      count++;
    }
  })
  return count;
}
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // esperamos 4 de vuelta




function reverse(arr) {
  arreglo = [];
  arr.forEach(value => {
  arreglo.unshift(value);
  
  }) 
  return arreglo;
} 

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
  // [0, 1] son los valores inciales del arreglos para calcular el resto
  var fibArr = [0, 1];
  
  var fibArr = [0, 1];
  for (var i = n; i >= 3; i--) {
    var num = (fibArr[fibArr.length-2] + fibArr[fibArr.length-1]);
    fibArr.push(num);
  }
  
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

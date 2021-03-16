// random number 
function getRandom() {
  return new Promise(function(myResolve, myReject){
    setTimeout(function(){
    let num = Math.floor((Math.random() * 100 +1));
      myResolve(num);
    }, 500);
    });
  }

  let randomPromise = getRandom();

  randomPromise.then(function(num){
    console.log(num);
  });

  getRandom();

// working on this code
  // async function getRandom() {

//     let promise = new Promise((resolve, reject) =>
//  {
//       setTimeout(() => resolve(Math.floor(Math.random() * 55)), 500)
//     });

//     let result = await promise;
//     console.log(result);
//   }
//   getRandom();






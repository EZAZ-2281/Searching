Promise
var p = new Promise(function(resolve, reject){
    let x = "kibria"; 
    let y = "kibria"; 
    if(x === y){
        resolve(); 
    }else{
        reject(); 
    }
});
p
    .then(function (resolve) {
        console.log("Success"); //Success
    })
    .catch(function (reject) {
        console.log("Error Occur");
    });
	




/* Promise Resolved */
let p = new Promise(function(resolve, rejected){
    resolve("Resolve it Kibria");
}); 
p   
    .then(function(resolve){
        console.log("Resolved");
    }),
    function(rejected){
        console.log("Error Occur");
    }











/* Promise Reject */
var p = new Promise(function(resolve, reject) {
    reject('Promise Rejected')
})
   
p
    .then(function(successMessage) {
        console.log(successMessage);
    }, function(errorMessage) {
       //error handler function is invoked
        //console.log(errorMessage); //Promise Rejected
        console.log("Error occured"); //Error occured
    })
	








/* Promise Reject */
var p = new Promise(function(resolve, reject) {
    reject("Promise Rejected"); 
})
   
p
    .then(function(successMessage) {
        console.log(successMessage);
    })
    .catch(function(errorMessage) {
       //error handler function is invoked
        console.log(errorMessage); //Promise Rejected
    });









/* Promise Example */
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
myPromise
        .then(function(myResolve){
            console.log("OK good");
        }),
        function(myReject){
            console.log("Error occured");
        }

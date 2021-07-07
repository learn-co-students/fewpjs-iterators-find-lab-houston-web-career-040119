const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {//ASK HOW TO GET THIS ONE WORKING
  // console.log(arr[1].result)
let r = arr.find(e => e.result === "W")
if (r !== undefined){
  return r.year
}
else{
  return r
}


/////////////////MY ORIGINAL SOLUTION/////////////////////////////////////////////////
  //based on this arrangement of conditions, it is never entering the else
// let r = arr.find(e => e.result === "W")
//  if (r.result == "W"){
//    console.log(r);
//     console.log("soereiurg");
//    return r.year
// }
//   else {
//   console.log(r.year);
//   console.log("aiwudfia");
//   return  r// HOW TO RETURN UNDEFINED IF IT IS EVEN POSSIBLE
//return null   ///??????
   }

// console.log(r);
// console.log(r.year)
// console.log(r.result);

//////////JING'S SOLUTION/////////////
// let r = arr.find(e => e.result === "W")
//  if (r !== undefined)
//    // return r.year
//    return r.year
// else {
//   return r
//
//    }

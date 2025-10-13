let numTest
numTest = 45.324568
console.log(numTest)

let twoDecimals = numTest.toFixed(2)
console.log(twoDecimals)

let strTest = " Iam the very model of a modern major general"
let indexOfM = strTest.indexOf("m")
console.log(indexOfM)

let strStart = strTest.indexOf("model")
let strEnd = strTest.indexOf("major")
let strSub = strTest.substring(strStart,strEnd)
console.log(strSub)

document.write("<h1>" + strSub.toUpperCase() + "</h1>")
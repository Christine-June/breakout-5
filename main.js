//Question 1
let username = "breakout-5" 
console.log(username) 
//Question 2
let age = "65" 
let member = "true"
if (age >= 65 && member === "true") {
    console.log("Eligible for discount")
}
//Question 3
let city = ""
if (!city) {
    console.log("city is not set")
}
//Question 4
let isstudent = "true"
let years = 18
if (years >= 18 && years <= 30 && isstudent === "true") {
    console.log("Eligible for youth program")
}
//Question 5
let israining = false
if (!israining) {
    console.log("Let's go outside")
}
//Question 6
let temperature = 35
if (temperature >30) {
    console.log("Hot day")
}
else if (temperature <30) {
    console.log("Comfortable day")
}
//Question 7
let isLoggedIn = false;
let guestAccess = true;
if (isLoggedIn || guestAccess) {
    console.log("Access granted");
}
//Question 8
let score = 100
if (typeof score === "number") {
    console.log("Valid score")
}
else {
    console.log("Invalid score")
}
//Question 9
let hasTickets = false;
let isVip = true;
if (hasTickets || isVip) {
    console.log("Access granted")
}
//Question 10
function canDrive(age,hasLicense) {
    return age >= 18 && hasLicense === "true"}

console.log(canDrive(18,"true"))

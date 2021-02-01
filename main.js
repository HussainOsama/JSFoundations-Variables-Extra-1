let name = prompt("What is your name ?")

let Hello = alert(`Hello ${name} to your activity of the day page 😇🤠👏🏻`)

let activity = prompt(`OK ${name}, choose one of these activities ( running - swimming - football )`)

let result;

if (activity == "running"){
    result = `I will challenge you today to Run for 30 min. Lets Do it ${name} 🏃🏻‍♂️`
} else if ( activity == "swimming") {
    result = `Your challenge for the day is swimming 45 min. Lets Do it ${name} 🏊🏻‍♂️`
}
else if ( activity == "football") {
    result = `This is my favorite Activity ${name}, you will play football for 1 hour 😍⚽️.`
}else{
    result = `Please be sure you type the activity in lower case`
}

alert(result)




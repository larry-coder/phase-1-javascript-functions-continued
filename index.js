// test 1
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

// test 2
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;    
}

console.log(mondayWork());
console.log(mondayWork("work from home"));

// test 3

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer"));
console.log(encouragingPromptFunction());

  
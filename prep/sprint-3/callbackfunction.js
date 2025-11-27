function printMessage(name) {
    console.log(`My name is ${name}`);
}

printMessage("David");
setTimeout(printMessage, 3000, "Sally");
// Given an textarea and a character limit of 200
// When a user types characters into the textarea
// Then the interface should update with how many characters they’ve got left.

// Steps to solve the problem stated above

// 1. Define the character liimit of 200
// 2. Access the textarea in the DOM

const characterLimit = 200;
const textArea = document.querySelector("#comment-input");
const charLimitInfo = document.querySelector("#character-limit-info");

// Keyup event is fired when a key is released
// react to this event

// run some code whenever the keyup takes place

function updateCharLimit() {
    const charLeft = characterLimit - textArea.value.length;
    console.log(charLeft, "remaining character");
    charLimitInfo.textContent = `You have ${charLeft} characters remaining`;
  }

textArea.addEventListener("keyup", updateCharLimit);

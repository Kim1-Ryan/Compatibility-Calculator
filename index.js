
// 1. Select elements
const myButton = document.querySelector('.btn');
const myText = document.querySelector('.subheading');

// 2. Add the event listener
myButton.addEventListener('click', () => {
    // 3. Replace the text
    let compatibilityScore = Math.floor(Math.random() * 100) + 1;
    let x = "";   

    if (compatibilityScore > 80) {
        x = `Your compatibility score is: ${compatibilityScore}% You are a great match!`;
    } else if (compatibilityScore > 50) {
        x = `Your compatibility score is: ${compatibilityScore}% You have decent compatibility.`;
    } else {
        x = `Your compatibility score is: ${compatibilityScore}% You might want to reassess your relationship.`;
    } 

    myText.textContent = x;
});


    






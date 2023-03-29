//Business Logic
const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
function countVowels(text)  {
  
}


// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const inputText = parseInt(document.getElementById("input").value);
}

window.addEventListener("load", function()  {
  document.getElementById("user-form").addEventListener("submit", handleFormSubmission);
});
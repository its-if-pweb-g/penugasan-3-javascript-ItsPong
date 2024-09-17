document.addEventListener("DOMContentLoaded", function () {
    const textField = document.getElementById("textField");
    const textOutput = document.getElementById("textOutput");
  
    // Check if there's any saved text in localStorage
    const savedText = localStorage.getItem("userText");
  
    if (savedText) {
      textField.value = savedText;
      textOutput.textContent = savedText;
    }
  
    // Update text and localStorage when user types
    textField.addEventListener("input", function () {
      const userInput = textField.value;
      textOutput.textContent = userInput;
  
      // Save the input to localStorage
      localStorage.setItem("userText", userInput);
    });
  });
  
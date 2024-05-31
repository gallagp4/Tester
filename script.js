document.addEventListener("DOMContentLoaded", function() {
    // Function to retrieve the saved value from localStorage and display it
    function displaySavedValue() {
        const savedValue = localStorage.getItem("userInputValue");
        if (savedValue) {
            document.getElementById("savedValue").textContent = savedValue;
        }
    }

    // Function to save the input value to localStorage
    function saveValue() {
        const userInput = document.getElementById("userInput").value;
        localStorage.setItem("userInputValue", userInput);
        displaySavedValue();
    }

    // Display the saved value when the page loads
    displaySavedValue();

    // Attach the saveValue function to the global scope so it can be called from the HTML button onclick attribute
    window.saveValue = saveValue;
});

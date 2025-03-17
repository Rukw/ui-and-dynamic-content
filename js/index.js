// Save the reference to text-field into a variable.
const inputField = document.querySelector('input[type="text"]');

// Save the reference to new-item button into a variable.
const addButton = document.querySelector('button');

// Save the reference to unordered or ordered list into a variable.
const itemList = document.querySelector('ul');

// Save the reference to paragraph for feedback
const feedbackParagraph = document.querySelector('.feedback');

// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    const newItem = document.createElement('li');
    
    // Check if user entered the value in input text-field.
    if (inputField.value.trim() !== '') {
        // If so:
        // Use textContent property on created list-item
        // and assign it with the value of the text written in the text-field
        newItem.textContent = inputField.value;
        
        // Append list item to unordered list.
        itemList.appendChild(newItem);
        
        // Clear a feedback-message.
        feedbackParagraph.textContent = '';
        
        // Clear the text-field.
        inputField.value = '';
        
        // Put the cursor back to text-field
        inputField.focus();
    // End if.
    } 
    // Otherwise:
    else {
        // Print the message nothing entered in the paragraph "feedback"
        feedbackParagraph.textContent = 'Nothing entered!';
    }
    // End otherwise.
}
// End function addItem.

// Register your function addItem for click event on button.
addButton.addEventListener('click', addItem);
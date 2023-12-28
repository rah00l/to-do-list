// Function to add task
function addTask() {

	// Get the input value
	const taskInput = document.getElementById('taskInput');
	const inputText = taskInput.value;

	// Check if input is not empty
	if (inputText.trim() !== '') {

		// Create a new list item
		const listItem = document.createElement('li');
		listItem.textContent = inputText;

		const taskList = document.getElementById('taskList');
		taskList.appendChild(listItem);

		// Clear the input
		taskInput.value = '';
	}
	else{
		alert("Please enter task!");
	}
}
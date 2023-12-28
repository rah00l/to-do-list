document.addEventListener('DOMContentLoaded', function() {
	// Select elements 
	const taskInput = document.getElementById('taskInput');
	const addTaskBtn = document.getElementById('addTaskBtn');
	const taskList = document.getElementById('taskList');

	// Function to add task
	function addTask() {

		// Get the input value
		const taskText = taskInput.value.trim();

		// Check if input is not empty
		if (taskText !== '') {
			
			// Create a new list item
			const listItem = createTaskItem(taskText);
			taskList.appendChild(listItem);
			taskInput.value = '';	// Clear the input

		}
		else{
			alert("Please enter task!");
		}
	}
	
	// Create task list item
	function createTaskItem(taskText) {

		const listItem = document.createElement('li');
		listItem.textContent = taskText;

		
		// Add a delete button to the list item
		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete';
		deleteBtn.ClassName = 'deleteBtn';
		listItem.appendChild(deleteBtn);

		// Attach a click event listner to the delete button
		deleteBtn.addEventListener('click', function() {
			// Call a funtion to handle task delete
			deleteTask(listItem);
		})

		return listItem;
	}

	function deleteTask(taskItem) {
		// Remove the task item from task list
		taskList.removeChild(taskItem);
	}

	// Attach a click event listner to the "Add Task" button
	addTaskBtn.addEventListener('click', addTask);

})

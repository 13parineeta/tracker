// Listen for form submission to add new tasks
document.getElementById('task-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  // Get the input values
  const title = document.getElementById('task-title').value;
  const desc = document.getElementById('task-desc').value;
  const deadline = document.getElementById('task-deadline').value;
  const priority = document.getElementById('task-priority').value;

  // Create a new task element
  const taskList = document.getElementById('task-list');
  const div = document.createElement('div');
  div.classList.add('task');

  // Populate the new task element with task details
  div.innerHTML = `
    <h2>${title}</h2>
    <p>${desc}</p>
    <p>Deadline: ${new Date(deadline).toLocaleString()}</p>
    <p>Priority: ${priority}</p>
    <button class="complete-task">Mark as Complete</button>
    <button class="delete-btn">Delete</button>
  `;

  // Add the task to the task list
  taskList.appendChild(div);

  // Add event listener for the delete button
  div.querySelector('.delete-btn').addEventListener('click', function() {
      taskList.removeChild(div); // Remove task when "Delete" is clicked
  });

  // Add event listener for the complete button
  div.querySelector('.complete-task').addEventListener('click', function() {
      div.classList.add('completed-task'); // Mark the task as completed
      this.style.display = 'none'; // Hide the complete button after task completion
  });

  // Reset the form fields
  e.target.reset();
});

// Dark Mode Toggle Function
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Function to create a new row in the table
function addData(name, email) {
    var table = document.getElementById("dataTable");
    var row = table.insertRow();
  
    var nameCell = row.insertCell();
    var emailCell = row.insertCell();
    var actionsCell = row.insertCell();
  
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    actionsCell.innerHTML = '<div class="actions"><button onclick="editData(this)">Edit</button><button onclick="deleteData(this)">Delete</button></div>';
  }
  
  // Function to handle form submission
  document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    addData(name, email);
    this.reset();
  });
  
  // Function to edit a row
  function editData(button) {
    var row = button.parentNode.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var email = row.cells[1].innerHTML;
  
    var newName = prompt("Enter the new name:", name);
    var newEmail = prompt("Enter the new email:", email);
  
    if (newName && newEmail) {
      row.cells[0].innerHTML = newName;
      row.cells[1].innerHTML = newEmail;
    }
  }
  
  // Function to delete a row
  function deleteData(button) {
    var row = button.parentNode.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
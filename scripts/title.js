const spreadsheetTitle = document.getElementById("spreadsheetTitle");

// Add an input event listener to the title for changes
spreadsheetTitle.addEventListener('input', updateHeaderTitle);

function updateHeaderTitle() {
  const newTitle = spreadsheetTitle.innerText;
  document.title = `${newTitle} - Google Sheets`;
}

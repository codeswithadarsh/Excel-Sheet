function addSheet() {
    var sheetNumber = document.querySelectorAll('.sheetBtn').length + 1;

    // Create a new sheet element
    var newSheet = document.createElement("div");
    newSheet.className = "sheetBtn";
    newSheet.innerHTML = `
        <span>Sheet${sheetNumber}</span>
        <div class="deleteBtn" onclick="deleteSheet(this)">X</div>
    `;

    // Add click event listener to the new sheet
    newSheet.addEventListener("click", function() {
        highlightSheet(this);
    });

    // Append the new sheet to the sheets container
    document.getElementById("sheetsContainer").appendChild(newSheet);

    // Highlight the newly added sheet
    highlightSheet(newSheet);
}

function deleteSheet(btn) {
    // Get the parent sheet element and remove it
    var sheetElement = btn.parentNode;
    sheetElement.parentNode.removeChild(sheetElement);
}

function highlightSheet(sheet) {
    // Remove 'highlighted' class from all sheets
    var allSheets = document.querySelectorAll('.sheetBtn');
    allSheets.forEach(function(item) {
        item.classList.remove('highlighted');
    });

    // Add 'highlighted' class to the clicked sheet
    sheet.classList.add('highlighted');
}


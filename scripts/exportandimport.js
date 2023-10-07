 // Export Function
 function exportSheet() {
    const rows = document.querySelectorAll('.tableRow');
    const csvContent = [];

    rows.forEach(row => {
        const rowData = [];
        const cells = row.querySelectorAll('div');

        cells.forEach(cell => {
            rowData.push(cell.innerText);
        });

        const rowString = rowData.join(',');
        csvContent.push(rowString);
    });

    const csvString = csvContent.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'sheet_export.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//Import Function-----------------------------------------------------

 function importSheet() {
    const fileInput = document.getElementById('fileInput');

    if (fileInput.files.length === 0) {
        alert('Please select a CSV file for import.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const content = e.target.result;
        const rows = content.split('\n');
        
        // Clear existing sheet content
        clearSheet();

        // Populate sheet with imported data
        rows.forEach((row, rowIndex) => {
            const cells = row.split(',');

            const tableBody = document.getElementById('tableBody');
            const newRow = document.createElement('div');
            newRow.className = 'tableRow';

            cells.forEach((cellData, cellIndex) => {
                const newCell = document.createElement('div');
                newCell.contentEditable = true;

                // Special handling for the first cell (S.No column)
                if (cellIndex === 0) {
                    newCell.innerText = rowIndex + 1; // Use the row index as the S.No value
                } else {
                    newCell.innerText = cellData.trim(); // Remove leading/trailing spaces
                }

                newRow.appendChild(newCell);
            });

            tableBody.appendChild(newRow);
        });
    };

    reader.readAsText(file);
}

function clearSheet() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear all rows
}

// -----------------Print Function------------------------

function printPage() {
    window.print();
}

// -----------------Share Function------------------------

function sharePage() {
    // Check if the browser supports the Web Share API
    if (navigator.share) {
        navigator.share({
            title: 'Your Page Title',
            text: 'Check out this awesome web page!',
            url: window.location.href
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
        // Fallback for browsers that do not support Web Share API
        alert('Sharing is not supported in your browser.');
    }
}

// -----------------Copy Link Function------------------------

function copyLink() {
 
    const inputElement = document.createElement('input');
    
    inputElement.value = window.location.href;

    document.body.appendChild(inputElement);
   
    inputElement.select();
   
    document.execCommand('copy');

    document.body.removeChild(inputElement);
    alert('Link copied to clipboard!');
}

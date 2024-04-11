
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    
    // Check if a file is selected
    if (file) {
        // Create a FormData object and append the file
        var formData = new FormData();
        formData.append('file', file);
        
        // Use fetch API to send the file to the server
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please select a file to upload.');
    }
});

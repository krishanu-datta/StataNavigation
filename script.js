async function predictImage() {
    const input = document.getElementById('imageUpload');
    const file = input.files[0];
    if (!file) {
        alert('Please upload an image file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://your-backend-endpoint', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const result = await response.json();
        document.getElementById('prediction').innerText = `Predicted class: ${result.prediction}`;
    } else {
        document.getElementById('prediction').innerText = 'Prediction failed. Please try again.';
    }
}

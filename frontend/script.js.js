async function downloadReel() {
    const reelUrl = document.getElementById('reel-url').value;
    const resultDiv = document.getElementById('result');
    
    if (!reelUrl) {
        resultDiv.innerHTML = "Please enter a valid URL!";
        return;
    }

    try {
        resultDiv.innerHTML = "Downloading...";
        
        // Send request to backend
        const response = await fetch('http://localhost:3000/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: reelUrl })
        });

        const data = await response.json();
        
        if (data.success) {
            resultDiv.innerHTML = `<a href="${data.videoUrl}" download>Click Here to Download</a>`;
        } else {
            resultDiv.innerHTML = "Error: " + data.message;
        }
    } catch (error) {
        resultDiv.innerHTML = "Failed to download. Try again!";
    }
}
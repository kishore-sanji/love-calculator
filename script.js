function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === '' || name2 === '') {
        document.getElementById('result').innerText = 'Please enter both names.';
        return;
    }

    // Simple algorithm for demonstration purposes
    const loveScore = Math.floor(Math.random() *100) + 1;
    document.getElementById('result').innerText = `Love Score: ${loveScore}%`;
}

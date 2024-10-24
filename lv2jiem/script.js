document.getElementById('startButton').addEventListener('click', function() {  
    document.getElementById('launcher').style.display = 'none';  
    const loadingProgress = document.getElementById('loadingProgress');  
    loadingProgress.textContent = 'Game is starting...';
});  

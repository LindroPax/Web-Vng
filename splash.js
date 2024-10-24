document.addEventListener('DOMContentLoaded', function() {  
    const logo = document.getElementById('gameLogo');  
  
    setTimeout(function() {  
        logo.classList.add('fade-in');  
    }, 500);
  
    setTimeout(function() {  
        logo.classList.remove('fade-in');  
        logo.classList.add('fade-out');  
    
        setTimeout(function() {  
            window.location.href = 'lv2jiem/index.html';  
        }, 500);  
    }, 3500); 
});
function changeNoToYes() {
    document.getElementById('no').innerHTML = 'Yes';
    document.getElementById('no').style.background = '#ff69b4';
    document.getElementById('no').style.color = '#fff';
    document.getElementById('no').onclick = function() {
        showWelcomeMessage();
    }
}

function showWelcomeMessage() {
    document.querySelector('.background').style.display = 'none';
    document.querySelector('.welcome-message').style.display = 'flex';
}

function goBack() {
    document.querySelector('.welcome-message').style.display = 'none';
    document.querySelector('.permanent-member').style.display = 'flex';
}

document.getElementById('meow-button').addEventListener('click', function() {
    var kissPhoto = document.createElement('img');
    kissPhoto.src = 'download.jpg';
    kissPhoto.style.position = 'absolute';
    kissPhoto.style.top = Math.random() * 500 + 'px';
    kissPhoto.style.left = Math.random() * 500 + 'px';
    kissPhoto.style.borderRadius = '50%';
    kissPhoto.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    kissPhoto.style.width = '50px';
    kissPhoto.style.height = '50px';
    document.body.appendChild(kissPhoto);
});

document.getElementById('clear-button').addEventListener('click', function() {
    var kissPhotos = document.querySelectorAll('img[src="download.jpg"]');
    var intervalId = setInterval(function() {
        if (kissPhotos.length > 0) {
            kissPhotos[0].remove();
            kissPhotos = document.querySelectorAll('img[src="download.jpg"]');
        } else {
            clearInterval(intervalId);
        }
    }, 500);
});
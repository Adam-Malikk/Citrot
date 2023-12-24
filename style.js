function moveButton() {
    var button = document.getElementById('movingButton');
 
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
  
    var maxMoveX = viewportWidth - 500; 
    var maxMoveY = viewportHeight - 1000; 
 
    var randomX = Math.random() * maxMoveX;
    var randomY = Math.random() * maxMoveY;
    
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  
    button.classList.add('moved');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var typedText = document.getElementById('typed-text');
    var textToType = '';
  
    typeWriter(typedText, textToType);
  });
  
  function typeWriter(element, text) {
    var speed = 50; 
    var index = 0;
  
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
  
    type();
  }

  document.addEventListener('DOMContentLoaded', function() {
    createBubbles(); 
  });
  
  function createBubbles() {
    var bubbleContainer = document.getElementById('bubbleContainer');
    
    for (var i = 0; i < 10; i++) { 
      var bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = Math.random() * 100 + '%'; 
      bubbleContainer.appendChild(bubble);
    }
  }
  
  function sendMessage() {
    var phoneNumber = '628892264612';
    var message = encodeURIComponent('Adam jelek banget ga kaya Putra sama Ading');

    var whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappLink, '_blank');
  }
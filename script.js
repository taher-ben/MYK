  // JavaScript code will go here
  const chatBox = document.getElementById('chat-box');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-btn');

  sendButton.addEventListener('click', () => {
      const message = messageInput.value.trim();
      if (message !== '') {
          appendMessage('You', message);
          // Here you would typically send the message to the server
          // and receive a response if necessary
          // For the sake of this example, let's assume it's sent successfully
          messageInput.value = ''; // Clear the input field
      }
  });

  function appendMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('mb-2');
      messageElement.innerHTML = `
          <strong>${sender}:</strong> ${message}
      `;
      chatBox.appendChild(messageElement);
      // Optional: Scroll to the bottom of the chat box after appending a message
      chatBox.scrollTop = chatBox.scrollHeight;
  }
// Clear chat when 'Clear History' is clicked
document.addEventListener('DOMContentLoaded', () => {
  const clearBtn = document.querySelector('.gpt-sidebar-item:nth-child(2)');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      chatMessages.innerHTML = '';
      location.reload();
    });
  }
});
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage('user', message);
  userInput.value = '';
  userInput.focus();

  try {
    const response = await fetch('http://localhost:3000/fetch-response', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const text = await response.text();
    appendMessage('bot', text);
  } catch (err) {
    appendMessage('bot', 'Error: Could not reach backend.');
  }
});

userInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    chatForm.dispatchEvent(new Event('submit'));
  }
});

function appendMessage(sender, text) {
  const div = document.createElement('div');
  div.className = sender === 'user' ? 'user-message' : 'bot-message';
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

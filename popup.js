document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('addressInput');
    const pasteButton = document.getElementById('pasteClipboardBtn');
    const errorMessage = document.getElementById('errorMessage');

    // Clipboard functionality
    pasteButton.addEventListener('click', async () => {
      try {
        const clipboardText = await navigator.clipboard.readText();
        if (clipboardText) {
          inputField.value = clipboardText;
          errorMessage.style.display = 'none'; // Hide error message on success
        } else {
          errorMessage.textContent = 'Clipboard is empty.';
          errorMessage.style.display = 'block';
        }
      } catch (error) {
        console.error('Clipboard read failed:', error);
        errorMessage.textContent = 'Clipboard access denied. Please allow permissions.';
        errorMessage.style.display = 'block';
      }
    });
  
    // Handle platform button clicks
    document.querySelectorAll('.platform').forEach(button => {
      button.addEventListener('click', () => {
        const address = inputField.value.trim();
        if (!address) {
          errorMessage.textContent = 'Please enter a crypto address.';
          errorMessage.style.display = 'block';
          return;
        }
  
        const baseUrl = button.getAttribute('data-url');
        const fullUrl = `${baseUrl}${address}`;
        chrome.tabs.create({ url: fullUrl }); // Open the backup link with the appended address
      });
    });

    // Handle backup button clicks
    document.querySelectorAll('.backup-btn').forEach(button => {
    button.addEventListener('click', () => {
        const address = inputField.value.trim();
        if (!address) {
          errorMessage.textContent = 'Please enter a crypto address.';
          errorMessage.style.display = 'block';
          return;
        }
        
        const baseUrl = button.getAttribute('data-url');
        const fullUrl = `${baseUrl}${address}`;
        chrome.tabs.create({ url: fullUrl }); // Open the backup link with the appended address
      });
    });
  });
  
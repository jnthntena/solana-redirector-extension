document.querySelectorAll('.platform').forEach(button => {
    button.addEventListener('click', () => {
      const address = document.getElementById('addressInput').value.trim();
      if (!address) {
        alert('Please enter a crypto address.');
        return;
      }
  
      const baseUrl = button.getAttribute('data-url');
      const fullUrl = `${baseUrl}${address}`;
  
      chrome.tabs.create({ url: fullUrl });
    });
  });
  
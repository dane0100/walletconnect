(function() {
  const waitForProfile = setInterval(() => {
    const header = document.querySelector('header');
    if (!header) return;
    clearInterval(waitForProfile);

    const badge = document.createElement('div');
    badge.textContent = '💰';
    badge.style.cssText = 'margin-left:10px;cursor:pointer;font-size:18px;';
    header.appendChild(badge);

    badge.onclick = () => alert('Wallet portfolio data would appear here (demo).');
  }, 1500);
})();

window.addEventListener('DOMContentLoaded', () => {
  const textEl = document.getElementById('my-text');
  const text = textEl.textContent;
  textEl.textContent = ''; // Clear existing text

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.05}s`; // Stagger the animation
    textEl.appendChild(span);
  });
});
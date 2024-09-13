const typingText = document.getElementById('typing-text');
const sentences = ["This is a typing animation.", "My name is Ankit."];
let index = 0;
let currentSentence = 0;
let isTypingForward = true;

function typeText() {
  const sentence = sentences[currentSentence];
  if (isTypingForward) {
    typingText.innerHTML = sentence.substring(0, index++) + "<span style='color:red; font-weight: 700;'>|</span>";
    if (index > sentence.length + 1) {
      isTypingForward = false;
      setTimeout(typeText, 500);
    } else {
      setTimeout(typeText, 50);
    }
  } else {
    typingText.innerHTML = sentence.substring(0, index--) + "<span style='color:red; font-weight: 700;'>|</span>";
    if (index === -1) {
      currentSentence = (currentSentence + 1) % sentences.length;
      isTypingForward = true;
      setTimeout(typeText, 500);
    } else {
      setTimeout(typeText, 50);
    }
  }
}

typeText();
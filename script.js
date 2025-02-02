const messages = [
    "😳 Are you really sure?",
    "🤔 Think again??",
    "😅 Positive about that?",
    "🥺 Pretty please...",
    "🤯 Just consider it one more time!",
    "😢 If you say no, I'll be heartbroken...",
    "😭 Seriously, I'll be super sad...",
    "😩 Extremely, terribly sad...",
    "😔 Okay, I'll stop bothering you...",
    "😜 Just kidding, say yes pleeeease! 💖"
];

const noButton = document.getElementById('noButton');

// Create a message div at the bottom if it doesn't exist
let messageDiv = document.getElementById('message');
if (!messageDiv) {
    messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.className = 'font-blod text-pink-600  text-2xl mt-4 fixed bottom-10 w-full text-center';
    document.body.appendChild(messageDiv);
}

let messageIndex = 0;

noButton.addEventListener('click', () => {
    // Move the button randomly
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Display the next message
    messageDiv.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
});
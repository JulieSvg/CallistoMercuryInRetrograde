function handleFeedback(liked) {
    const message = document.getElementById('response-message');
    if (liked) {
      message.textContent = "We're glad you found it helpful!";
    } else {
      message.textContent = "Thanks for the feedback! What would you like to see more of?";
    }
  }
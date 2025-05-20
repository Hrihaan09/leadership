document.addEventListener("DOMContentLoaded", function () {
    // Submit page logic
    const form = document.getElementById("ideaForm");
    const message = document.getElementById("submitMessage");
  
    form?.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const type = document.getElementById("type").value;
      message.style.display = "block";
      message.style.color = "green";
      message.innerText = `Thanks, ${name}! Your ${type} has been submitted.`;
      form.reset();
    });
  
    // Forum replies toggle
    const replyButtons = document.querySelectorAll(".reply-btn");
    replyButtons.forEach(button => {
      button.addEventListener("click", function () {
        const replies = this.closest(".post").nextElementSibling?.classList.contains("reply")
          ? this.closest(".post").parentElement.querySelectorAll(".reply")
          : [];
        replies.forEach(reply => {
          reply.style.display = reply.style.display === "none" ? "block" : "none";
        });
      });
    });
  
    // Like button logic
    const posts = document.querySelectorAll(".post");
    posts.forEach(post => {
      const likeBtn = document.createElement("button");
      likeBtn.innerText = "👍 Like";
      likeBtn.className = "like-btn";
      likeBtn.style.marginTop = "10px";
      let liked = false;
      likeBtn.addEventListener("click", () => {
        liked = !liked;
        likeBtn.innerText = liked ? "💙 Liked" : "👍 Like";
      });
      post.appendChild(likeBtn);
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
  // Hover effect for nav links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#ffdd00";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "white";
    });
  });

  // Click effect on profile picture
  const profilePic = document.querySelector(".profile-pic");
  if (profilePic) {
    profilePic.addEventListener("click", () => {
      profilePic.style.transform = "scale(1.1)";
      setTimeout(() => {
        profilePic.style.transform = "scale(1)";
      }, 500);
      alert("Welcome to my Bio-data page!");
    });
  }
});
 // Video Modal Functionality
 const playButton = document.getElementById("playButton");
 const videoModal = document.getElementById("videoModal");
 const closeButton = document.getElementById("closeButton");
 const videoPlayer = document.getElementById("videoPlayer");
 // Open modal when play button is clicked
 playButton.addEventListener("click", () => {
   videoModal.classList.add("active");
   videoPlayer.play();
 });
 // Close modal when close button is clicked
 closeButton.addEventListener("click", () => {
   closeModal();
 });
 // Close modal when clicking outside the video container
 videoModal.addEventListener("click", (e) => {
   if (e.target === videoModal) {
     closeModal();
   }
 });
 // Close modal function
 function closeModal() {
   videoModal.classList.remove("active");
   videoPlayer.pause();
   videoPlayer.currentTime = 0;
 }
 // Close modal with Escape key
 document.addEventListener("keydown", (e) => {
   if (e.key === "Escape" && videoModal.classList.contains("active")) {
     closeModal();
   }
 });
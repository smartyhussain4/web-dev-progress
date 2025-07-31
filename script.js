const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}
//blog page Continue Reading
const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // prevent page jump

      const moreText = this.previousElementSibling.querySelector(".more-text");

      if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        this.textContent = "Continue Reading";
      } else {
        moreText.style.display = "inline";
        this.textContent = "Read Less";
      }
    });
  });
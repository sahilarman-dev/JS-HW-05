let cursor = document.querySelector(".cursor");
let cursorSm = document.querySelector(".cursorSm");
function cursorMove(event) {
  let left = event.pageX;
  let top = event.pageY;
  cursor.style.top = `${top}px`;
  cursor.style.left = `${left}px`;
  cursorSm.style.top = `${top}px`;
  cursorSm.style.left = `${left}px`;
}
window.addEventListener("mousemove", cursorMove);

let faqs = document.querySelectorAll(".faq");

function toggleFAQ(event) {
  for (faq of faqs) {
    faq.classList.remove("active");
  }

  event.currentTarget.classList.add("active");
}

for (faq of faqs) {
    faq.addEventListener("click", toggleFAQ);
}
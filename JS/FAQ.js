const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const ans = this.nextElementSibling;
    if (ans.style.maxHeight) {
      ans.style.maxHeight = null;
    } else {
      ans.style.maxHeight = ans.scrollHeight + "px";
    }
  });
}

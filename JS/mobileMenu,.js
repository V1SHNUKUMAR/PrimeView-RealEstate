const closeBtn = document.getElementsByClassName("closeMenu")[0];
const openMobileMenuBtn = document.getElementsByClassName("openMenu")[0];
const mobileMenu = document.getElementsByClassName("mobileMenu")[0];

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("opened");
  if (mobileMenu.classList.contains("opened")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

openMobileMenuBtn.addEventListener("click", toggleMobileMenu);

closeBtn.addEventListener("click", toggleMobileMenu);

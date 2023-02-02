const hamMenuBtn = document.querySelector('.ham-menu')
function toggleHideMenuClass() {
  const navMenu = document.querySelector('.nav-menu')
  navMenu.classList.toggle('hide')
}

function toggleMenu() {
  const hamMenuImg = document.querySelector('.open-btn')
  const hamMenuCloseImg = document.querySelector('.close-btn')
  hamMenuImg.classList.toggle('display-none')
  hamMenuCloseImg.classList.toggle('display-none')
  toggleHideMenuClass()
}

hamMenuBtn.addEventListener('click', toggleMenu)

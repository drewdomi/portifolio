const hamMenuBtn = document.querySelector('.ham-menu')
const navMenu = document.querySelector('.nav-menu')
const linkItem = navMenu.querySelectorAll('* a')

function toggleHideMenuClass() {
  navMenu.classList.toggle('hide')
}

function toggleMenu() {
  const hamMenuImg = document.querySelector('.open-btn')
  const hamMenuCloseImg = document.querySelector('.close-btn')
  hamMenuImg.classList.toggle('display-none')
  hamMenuCloseImg.classList.toggle('display-none')
  toggleHideMenuClass()
}

hamMenuBtn.addEventListener('pointerdown', toggleMenu)

linkItem.forEach(linkItem => {
  linkItem.addEventListener('pointerdown', () => {
   setTimeout(toggleMenu, 500)
  })
})
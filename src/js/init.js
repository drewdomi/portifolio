const hamMenuBtn = document.querySelector('.ham-menu')
const linkItem = document.querySelectorAll('.link-item a')

function toggleHideMenuClass(){
  const navMenu = document.querySelector('.nav-menu')
  navMenu.classList.toggle('hide')
}

function toggleMenu(){
  const hamMenuImg = document.querySelector('.open-btn')
  const hamMenuCloseImg = document.querySelector('.close-btn')
  hamMenuImg.classList.toggle('display-none')
  hamMenuCloseImg.classList.toggle('display-none')
  toggleHideMenuClass()
}

linkItem.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu()
    setTimeout(() => {
     window.scrollBy(0, -65)
    }, 5)

  })
})

hamMenuBtn.addEventListener('click', toggleMenu)
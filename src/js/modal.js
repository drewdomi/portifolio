export default function modal() {
  const body = document.querySelector('body')
  const cards = document.querySelectorAll('.proj-card')
  const modal = document.querySelector('.modal')
  const modalCloseBtn = document.querySelector('.close-modal-btn')
  let projects = ''

  function getIdByRegex(id) {
    const regex = /[0-9]/
    return id.match(regex).toString()
  }

  function getJSON(path) {
    return fetch(path).then((response) => response.json())
  }

  getJSON('/src/js/data.json').then((data) => {
    projects = data.projects
  })

  const modalTitle = modal.querySelector('.modal-title')
  const modalImg = modal.querySelector('img')
  const modalDesc = modal.querySelector('p')
  const modalWebLink = modal.querySelector('a.webLink')
  const modalGithubLink = modal.querySelector('a.githubLink')

  function cleanModalContent() {
    modalTitle.innerText = ''
    modalImg.src = ''
    modalDesc.innerText = ''
    modalWebLink.href = ''
    modalGithubLink.href = ''
  }

  function getModalContent(id) {
    modalTitle.innerText = projects[id].name
    if (window.innerWidth >= 800) {
      modalImg.src = projects[id].images.bgLand
    } else {
      modalImg.src = projects[id].images.bgPort
    }
    modalDesc.innerText = projects[id].desc
    modalWebLink.href = projects[id].links.web
    modalGithubLink.href = projects[id].links.github
  }

  function openModal() {
    modal.style.display = 'initial'
    body.style.overflow = 'hidden'
  }

  function closeModal(event) {
    if (event.target == modal || event.target == modalCloseBtn) {
      modal.style.display = 'none'
      body.style.overflow = 'initial'
    }
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      openModal()
      let cardId = getIdByRegex(card.id)
      cleanModalContent()
      getModalContent(cardId)
    })
  })

  modal.addEventListener('click', closeModal)
}

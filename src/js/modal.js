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

  function getModalContent(id) {
    const modalTitle = document.querySelector('.modal-title')
    modalTitle.innerText = projects[id].name
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
      getModalContent(cardId)
      console.log(cardId)
    })
  })

  modal.addEventListener('click', closeModal)
}

export default function modal() {
  const body = document.querySelector('body')
  const cards = document.querySelectorAll('.proj-card')
  const modal = document.querySelector('.modal')
  const modalCloseBtn = document.querySelector('.close-modal-btn')

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
    card.addEventListener('click', openModal)
  })
  modal.addEventListener('click', closeModal)
  modalCloseBtn.addEventListener('click', () => {})
}

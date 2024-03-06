import './style.css'

const dropdownButton = document.getElementById(
  'dropdown-button',
) as HTMLButtonElement

const dropdownContent = document.getElementById(
  'dropdown-content',
) as HTMLDivElement

dropdownButton.addEventListener('click', function () {
  dropdownButton.dataset.state =
    dropdownButton.dataset.state === 'closed' ? 'open' : 'closed'

  dropdownContent.classList.toggle('flex')
  dropdownContent.classList.toggle('hidden')
})

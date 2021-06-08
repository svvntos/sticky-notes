const notesEl = document.querySelector('.notes')
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const main = notesEl.querySelector('.main');
const textArea = notesEl.querySelector('textarea');

editBtn.addEventListener('click' || 'touchstart', (e) => {

    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden')

})
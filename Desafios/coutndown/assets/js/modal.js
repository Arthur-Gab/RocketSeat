const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modalWrapper = document.getElementById('modalWrapper');

openModalButton.addEventListener('click', () => {
    modalWrapper.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
});

modalWrapper.addEventListener('click', (event) => {
    if (event.target === modalWrapper) {
        modalWrapper.style.display = 'none';
    }
});


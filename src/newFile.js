import { markupModalLogin } from './partials/markup';
import { btns, modals } from '.';

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modals[index].style.display = 'block'; // Показываем модальное окно по индексу
        if (index == 0) {
            modals[index].insertAdjacentHTML('beforeend', markupModalLogin);
            console.dir(modals[index]);
        }
        const closeModal = modals[index].querySelector('.close');
        closeModal.addEventListener('click', () => {
            modals[index].style.display = 'none'; // Скрываем модальное окно при нажатии на кнопку закрытия
        });
    });
});

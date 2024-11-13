// Задание 1

// При изменении значения в <input> с id="from", значение, содержащееся в нем, должно моментально отображаться в <span>.
// Это значит, что при каждом изменении текста в инпуте, текст в <span> должен обновляться соответственно.

const input = document.getElementById('from');
const span = document.querySelector('span');

input.addEventListener('input', () => {
        span.textContent = input.value;
    });

//-----------------------------------------------------

// Задание 2
// При клике на кнопку с классом messageBtn необходимо выполнить следующие действия для элемента с классом message:
// ○ Добавить два класса: animate_animated и animate_fadeInLeftBig.
// ○ Установить стиль visibility в значение 'visible'.

const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');

messageBtn.addEventListener('click', () => {
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    message.style.visibility = 'visible';
});

//-----------------------------------------------------

// Задание 3
// При отправке формы проверьте, заполнены ли все поля.
// ○ Если какое-либо поле не заполнено, форма не должна отправляться.
// ○ Незаполненные поля должны быть подсвечены (добавлен класс error).
// ○ Как только пользователь начинает заполнять поле, выполните проверку:
///// ■ Если поле пустое, подсветите его (добавьте класс error).
///// ■ Если поле заполнено, уберите подсветку (удалите класс error).

const form = document.querySelector('form');
const inputs = form.querySelectorAll('.form-control');

form.addEventListener('submit', (event) => {
    let isValid = true;
    inputs.forEach(input => {
            if (input.value.trim() === '') {
                    input.classList.add('error');
                        isValid = false;
                    }
                });
                if (!isValid) {
                    event.preventDefault();
                    }
                    });
                    inputs.forEach(input => {
                        input.addEventListener('input', () => {
                            if (input.value.trim() === '') {
                                input.classList.add('error');
                            } else {
                                input.classList.remove('error');
                            }
                        });
                    });



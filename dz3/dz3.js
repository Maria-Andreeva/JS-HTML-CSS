// Задачи:
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
    });


// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', () => {
    console.log('страница загрузилась');
    });


// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение следующего вида:
// ○ Класс "super_element" присутствует в элементе "div".
// ○ Сообщение должно определять присутствует ли класс "super_element" у элемента и выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
// ○ Необходимо использовать делегирование.


document.body.addEventListener('click', function(event) {
    const targetElement = event.target;
    const tagName = targetElement.tagName.toLowerCase();
    if (targetElement.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
    }
});


// 4. Сделайте так, чтобы при наведении на <textarea> в консоли появлялось сообщение: "Вы навели на textarea."

const textareaElement = document.querySelector('textarea');

textareaElement.addEventListener('mouseover', function() {
    console.log("Вы навели на textarea.");
});


// 5. Необходимо повесить событие клика на тег <ul>. В обработчике события в консоль выводите текст, который записан внутри элемента кнопки, по которой был произведен клик. 
//Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulElement = document.querySelector('ul');

ulElement.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        console.log(event.target.textContent);
    }
});



// 6. Вопрос: Почему в console.log сначала пишется текст из 5 задания и только потом текст из 3 задания, если мы кликаем по кнопкам в <ul>?
// Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// В данном случае текст из 5 задания появляется в console.log раньше текста из 3 задания, потому что обработчики событий вызываются в порядке их добавления к элементу. Поскольку в коде обработчик из 5 задания установлен на <ul>, он срабатывает первым, когда мы кликаем на кнопку внутри этого списка <ul>. Этот обработчик выводит текст кнопки в консоль.

// После этого событие продолжается и доходит до обработчика на более высоком уровне, установленного в 3 задании на document.body. Обработчик из 3 задания срабатывает после обработчика из 5 задания, так как находится выше в дереве DOM, и также выводит в console.log сообщение о наличии класса super_element у кликнутого элемента или его отсутствии.

// Тогда мы делаем вывод, что порядок вывода в консоли зависит от порядка, в котором обработчики были добавлены, а также от всплытия каждого события.


// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега <li>.

const listItems = document.querySelectorAll('li');


listItems.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
        item.style.backgroundColor = 'lightblue';
    }
});

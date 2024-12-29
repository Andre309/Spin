document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button:not(.circle)");
    const spinButton = document.querySelector(".circle");
    let currentIndex = 0;
    let interval;

    // Масив дій
    const actions = ["Погладити", "Ущипнути", "Поцілувати", "Помасажувати", "Обійняти", "Полоскотати", "Лясьнути"];

    // Масив частин тіла
    const bodyParts = [
        "руку", 
        "ногу", 
        "голову", 
        "спину", 
        "живіт", 
        "вухо", 
        "лоб", 
        "ніс", 
        "дупу", 
        "ключицю", 
        "пальці"
    ];
    //Масив історій
    const stories = [
      "Вигадай історію, використовуючи всі слова на букву ",
      "Опиши себе, використовуючи всі слова на букву ",
      "Розкажи про свою мрію, використовуючи всі слова на букву ",
      "Похвали інших учасників, використовуючи всі слова на букву ",
      "Весь наступний раунд говори тільки словами, які починаються на букву "
    ];
    //Масив букв
    const letters = ["А", "Б", "В", "Г", "Д", "Е", "Є", "Ж", "З", "І", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Я"];
    //Спортивна категорія
    const exercies = [
        "Присядь ",
        "Відіжмись від підлоги ",
        "Пострибай на одній нозі ", 
        "Відіжмись від стіни ", 
        "Покачай прес ",
        "Планка (в секундах) ",
        "Оберти головою "
    ];
    //Кількість спроб
    const digitals = ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    //Повтори звук
    const sounds = ["Повтори будь-який звук, який запропонує твій опонент"];
    //Пропуск ходу
    const step = ["Пропусти хід"];
    //Пародія
    const emotions = ["Весь наступний раунд веди себе "];
    //Види емоцій
    const emotions2 = [
        "сумно",
        "весело",
        "наче під наркотиками",
        "здивовано",
        "злим",
        "закохано",
        "наче ти в стані ейфорії",
        "наче ти в суїцидальному настрої",
        "схвильовано",
        "загадково",
        "високо інтелігентно",
        "по дебільному",
        "самозакохано",
        "злякано",
        "артистично",
        "як дуже тупа людина",
        "як дитина",
        "наче тобі скучно"
    ]
    //Імпровізація
    const laught = [
        "Скажи позитивний комплімент оппоненту, використовуючи тільки негативні слова",
        "Виконай серйозну сцену з кіно, сміючись на кожному слові",
        "Протягом наступного раунду говори лише римами",
        "Придумай жарт на ходу про будь-який предмет у кімнаті",
        "Переплутай ролі та розкажи казку, у якій вовк рятує Червону Шапочку",
        "Весь наступний раунд чаклуєш на свою перемогу",
        "Наступний раунд веди себе, наче зламаний робот",
        "Скажи випадкову фразу, ніби це життєва мудрість",
        "Вигадай нові слова, які, на твою думку, мають бути в мові",
        "Виконай пісню, ніби ти раптом забув усі слова",
        "Пожартуй так, щоб ніхто не зрозумів, але всі сміялись",
        "Зобрази, як би ти сміявся, якщо був би суперзлодієм",
        "Розкажи історію, де герої - чайник і виделка",
        "Спробуй пояснити щось очевидне, але максимально заплутано",
        "Імітуй людину, яка дізналася, що в неї зникли брови",
        "Вигадай нові форми привітання і привітайся з кожним учасником",
        "Зобрази, що ти читаєш думки інших учасників",
        "Скажи щось важливе, але так тихо, щоб тебе ледве чули",
        "Весь наступний раунд кривляй все, що говорять інші учасники, але з різними інтонаціями, емоціями і т.д."
    ];
    //Розкажи з акцентом
    const accent = [
        "Весь наступний раунд розмовляй з ",
        "Розкажи анекдот з ",
        "Прочитай абзац з книги з ",
        "Проспівай куплет пісні з ",
        "Спародіюй Януковича з "
    ];
    //Види акцентів
    const accent2 = [
        "Американським ",
        "Китайським ",
        "Японським ",
        "Італійським ",
        "Африканським ",
        "Турецьким ",
        "Індійським ",
        "Вигаданим "
    ]

    // Функція для підсвічування кнопки
    function highlightButton(index) {
        buttons.forEach(button => button.classList.remove("highlight")); // Прибираємо підсвічування
        buttons[index].classList.add("highlight"); // Додаємо підсвічування потрібній кнопці
    }

    // Функція для початку підсвічування по колу
    function startSpinning() {
        currentIndex = 0; // Починаємо з першої кнопки
        interval = setInterval(() => {
            highlightButton(currentIndex);
            currentIndex = (currentIndex + 1) % buttons.length; // Оновлюємо індекс для переходу по колу
        }, 100); // Кожні 100 мілісекунд змінюємо підсвічену кнопку
    }

    // Функція для зупинки підсвічування
    function stopSpinning() {
        clearInterval(interval); // Зупиняємо підсвічування
        const randomIndex = Math.floor(Math.random() * buttons.length); // Випадковий індекс для зупинки
        highlightButton(randomIndex); // Підсвічуємо випадкову кнопку

        // Якщо кнопка, на якій зупинилось підсвічування, це "Емоції"
        if (buttons[randomIndex].textContent === "Емоції") {
            generateTask1(); // Викликаємо функцію для генерації завдання з Емоцією
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Частини тіла"
        if (buttons[randomIndex].textContent === "Частини тіла") {
            generateTask2(); // Викликаємо функцію для генерації завдання з частинами тіла
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Не смішно"
        if (buttons[randomIndex].textContent === "Не смішно") {
            generateTask3(); // Викликаємо функцію для генерації завдання "Не смішно"
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "пропуск ходу"
        if (buttons[randomIndex].textContent === "Пропусти хід") {
            generateTask4(); // Викликаємо функцію для генерації завдання "пропуск ходу"
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Буквар"
        if (buttons[randomIndex].textContent === "Буквар") {
            generateTask5(); // Викликаємо функцію для генерації завдання з букварем
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "повтори звук"
        if (buttons[randomIndex].textContent === "Повтори звук") {
            generateTask6(); // Викликаємо функцію для генерації завдання "Повтори звук"
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Спортивна категорія"
        if (buttons[randomIndex].textContent === "Спортивна категорія") {
            generateTask7(); // Викликаємо функцію для генерації завдання зі Спортивної категорії
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Акценти"
        if (buttons[randomIndex].textContent === "Акценти") {
            generateTask8(); // Викликаємо функцію для генерації завдання "Акценти"
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

    }

    // Функція для зміни кольору тексту категорії
function changeCategoryColor(button) {
    button.style.color = "black"; // Змінюємо колір тексту на чорний
}

    // Функція для генерації завдання з пародіями
    function generateTask1() {
        const randomEmotions = emotions[Math.floor(Math.random() * emotions.length)]; // Випадковий вибір звуку
        const randomEmotions2 = emotions2[Math.floor(Math.random() * emotions2.length)]; // Випадковий вибір звуку
        const taskElement1 = document.getElementById("task1"); // Де виводимо завдання з звуками
        taskElement1.innerHTML = `${randomEmotions} <span style="color: blue;">${randomEmotions2}</span>`; // Виведення завдання на екран
    }

    // Функція для генерації завдання з частинами тіл
    function generateTask2() {
        const randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)]; // Випадковий вибір частини тіла
        const randomAction = actions[Math.floor(Math.random() * actions.length)]; // Випадковий вибір дії
        const taskElement2 = document.getElementById("task2");
        taskElement2.textContent = `${randomAction} ${randomBodyPart}`;
    }

    // Функція для генерації завдання імпровізації
    function generateTask3() {
        const randomLaught = laught[Math.floor(Math.random() * laught.length)]; // Випадковий вибір завдання імпровізації
        //const randomImprov = laught[Math.floor(Math.random() * laught.length)];
        const taskElement3 = document.getElementById("task3"); // Де виводимо завдання імпровізації
        taskElement3.textContent = `${randomLaught}`; // Виведення завдання на екран
    }

    // Функція для генерації завдання з відтворенням звуків
    function generateTask4() {
        const randomStep = step[Math.floor(Math.random() * step.length)]; // Випадковий вибір звуку
        const taskElement4 = document.getElementById("task4"); // Де виводимо завдання з звуками
        taskElement4.textContent = `${randomStep}`; // Виведення завдання на екран
    }

    // Функція для генерації завдання з історіями та буквами
    function generateTask5() {
        const randomStory = stories[Math.floor(Math.random() * stories.length)];
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        const taskElement5 = document.getElementById("task5");
        taskElement5.innerHTML = `${randomStory} <span style="color: blue;">${randomLetter}</span>`;
    }

     // Функція для генерації завдання з відтворенням звуків
     function generateTask6() {
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)]; // Випадковий вибір звуку
        const taskElement6 = document.getElementById("task6"); // Де виводимо завдання з звуками
        taskElement6.textContent = `${randomSound}`; 
    }

    // Функція для генерації завдання зі спортивними вправами
    function generateTask7() {
        const randomExercies = exercies[Math.floor(Math.random() * exercies.length)];
        const randomDigitals = digitals[Math.floor(Math.random() * digitals.length)];
        const taskElement7 = document.getElementById("task7");
        taskElement7.innerHTML = `${randomExercies} <span style="color: blue;">${randomDigitals}</span> раз`;
    }
    

    // Функція для генерації завдання з анекдотом
    function generateTask8() {
        const randomAccent = accent[Math.floor(Math.random() * accent.length)]; // Випадковий вибір звуку
        const randomAccent2 = accent2[Math.floor(Math.random() * accent2.length)]; // Випадковий вибір звуку
        const taskElement8 = document.getElementById("task8"); // Де виводимо завдання з звуками
        taskElement8.innerHTML = `${randomAccent} <span style="color: blue;">${randomAccent2}</span> акцентом`;

    }

    // Функція для очищення попередніх завдань
    function clearTasks() {
        const taskElement1 = document.getElementById("task1");
        const taskElement2 = document.getElementById("task2");
        const taskElement3 = document.getElementById("task3");
        const taskElement4 = document.getElementById("task4");
        const taskElement5 = document.getElementById("task5");
        const taskElement6 = document.getElementById("task6");
        const taskElement7 = document.getElementById("task7");
        const taskElement8 = document.getElementById("task8");
        
        taskElement1.textContent = ""; // Очищаємо текст для завдання з пародією
        taskElement2.textContent = ""; // Очищаємо текст для завдання з частинами тіла
        taskElement3.textContent = ""; // Очищаємо текст для завдання імпровізації
        taskElement4.textContent = ""; // Очищаємо текст для завдання з пропуком ходу
        taskElement5.textContent = ""; // Очищаємо текст для завдання зі букварем
        taskElement6.textContent = ""; // Очищаємо текст для завдання зі звуками
        taskElement7.textContent = ""; // Очищаємо текст для завдання зі спортивними вправами
        taskElement8.textContent = ""; // Очищаємо текст для завдання з анекдотом

         // Очищення кольору тексту кнопок
    buttons.forEach(button => {
        button.style.color = ""; // Скидаємо колір тексту на стандартний
    });
    }

    

    // Додаємо подію для кнопки Spin
    spinButton.addEventListener("click", function() {
        clearTasks(); // Очищаємо попередні завдання перед початком нового обертання
        startSpinning(); // Починаємо анімацію підсвічування

        setTimeout(() => {
            stopSpinning(); // Через кілька секунд зупиняємо анімацію
        }, 3000); // Зупиняємо через 3 секунди (3000 мс)
    });
});

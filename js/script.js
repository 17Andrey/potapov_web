document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.getElementById("subscribeButton");
    const nameInput = document.getElementById("subscriberName");
    const emailInput = document.getElementById("subscriberEmail");
    const phoneInput = document.getElementById("subscriberPhone");
    const messageOutput = document.getElementById("subscriptionMessage");

    if (!subscribeButton || !nameInput || !emailInput || !phoneInput || !messageOutput) {
        console.error("Некоторые элементы не найдены в DOM.");
        return;
    }

    // Регулярные выражения для проверки
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;

    const validateInput = (input, regex, feedbackElement, errorMessage) => {
        if (!regex.test(input.value.trim())) {
            feedbackElement.textContent = errorMessage;
            feedbackElement.style.color = "red";
            return false;
        } else {
            feedbackElement.textContent = "";
            return true;
        }
    };

    subscribeButton.addEventListener("click", function () {
        const nameValid = validateInput(nameInput, nameRegex, document.getElementById("nameFeedback"), "Имя должно быть от 2 до 50 символов и содержать только буквы.");
        const emailValid = validateInput(emailInput, emailRegex, document.getElementById("emailFeedback"), "Введите корректный email.");
        const phoneValid = validateInput(phoneInput, phoneRegex, document.getElementById("phoneFeedback"), "Введите корректный телефон (7-15 цифр).");

        if (!nameValid || !emailValid || !phoneValid) {
            messageOutput.textContent = "Исправьте ошибки в форме.";
            messageOutput.style.color = "red";
            return;
        }

        messageOutput.textContent = "Спасибо за подписку!";
        messageOutput.style.color = "green";

        console.log(`Подписка: Имя=${nameInput.value.trim()}, Email=${emailInput.value.trim()}, Телефон=${phoneInput.value.trim()}`);
    });
});

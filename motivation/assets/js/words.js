let array_text = ["Твой код говно", "Изменив свою жизнь, ты изменишь себя", "Не признавать поражение - путь к успеху", "У тебя мало денег"],
    array_new_text,
    slider__p = document.querySelector("p"),
    active_slide = 1;

newText();

function newText() {

    if (active_slide == array_text.length) {
        active_slide = 0;
    }
    
    if (active_slide < array_text.length) {
        array_new_text = array_text[active_slide];
        array_new_text = array_new_text.split('');
        active_slide++;
    }

    setTimeout(() => {
        slider__p.textContent = " ";
        showText(array_new_text, 0);
    }, 5000); // Время заадержки фразы

};

function showText(array_new_text, index) {
    setTimeout(() => {
        if (index < array_new_text.length) {
            slider__p.textContent += array_new_text[index];
            index++;
            showText(array_new_text, index);
        }
        else {
            newText();
        }
    }, 70) // Время появление символа
}
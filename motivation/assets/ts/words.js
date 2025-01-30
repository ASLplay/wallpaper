let array_text = ["Твой код говно", "У тебя 8 GB оперативки", "Ты тощий", "У тебя мало денег"],
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
    }, 2000);

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
    }, 100)
}
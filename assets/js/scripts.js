SUBMIT.addEventListener('click', (e) => {
    OUTPUT.innerHTML = translator(INPUT.value);
})

function translator(text) {
    let counter = 0;
    let tempArr = [];
    let arr = ["блять", "нахуй", "блять", "нахуй", "пиздец блять!"];
    text = text.split(".");
    text.forEach((elem) => {
        if (counter == 5) counter = 0;
        elem = elem + " " + arr[counter];
        if (counter < 4) elem += ".";
        else elem += "!";
        tempArr.push(elem);
        counter++;
    });
    text = tempArr.join("");
    tempArr = [];
    counter = 0;
    text = text.split(",");
    text.forEach((elem) => {
        if (counter == 4) counter = 0;
        tempArr.push(elem + " ," + arr[counter] + ",");
        counter++;
    });
    text = tempArr.join("");
    return text;
}

    INPUT.addEventListener('keyup', function () {
        INPUT.style.overflow = 'hidden';
        INPUT.style.height = INPUT.scrollHeight + 'px';
    }, false);

    OUTPUT.addEventListener('keyup', function () {
        OUTPUT.style.overflow = 'hidden';
        OUTPUT.style.height = OUTPUT.scrollHeight + 'px';
    }, false);



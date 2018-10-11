function translator(text) {
	let counter = 1;
	let tempArr = [];
	let arr = ["блять","нахуй","блять","нахуй","Пиздец блять!"];
	text = text.split(".");
	text.forEach((elem) => {
		if(text.indexOf(elem) != text.indexOf(text[text.length - 1])) {
			if(counter == 5) counter = 0;
			elem = elem + " " + arr[counter];
            if(counter < 4) elem += ".";
            else elem += "!";
            tempArr.push(elem);
			counter++;
        }
		else tempArr.push(elem);
    });
	text = tempArr.join("");
	tempArr = [];
	counter = 0;
	text = text.split(",");
	text.forEach((elem) => {
		if(text.indexOf(elem) != text.indexOf(text[text.length - 1])) {
			if(counter == 4) counter = 0;
            tempArr.push(elem + ", " + arr[counter] + ",");
            counter++;
        }
		else tempArr.push(elem);
    });
	text = tempArr.join("");
	return text;
}

SUBMIT.addEventListener('click', (e) => {
    OUTPUT.value = translator(INPUT.value);
    OUTPUT.style.height = OUTPUT.scrollHeight + 'px';
})

INPUT.addEventListener('keyup', function () {
    INPUT.style.height = INPUT.scrollHeight + 'px';
}, false);

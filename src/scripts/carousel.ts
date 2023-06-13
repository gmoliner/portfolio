const typeSentence = async (sentence, eleRef, delay = 100) => {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);

        eleRef.append(letters[i]);
        i++;
    }
    return;
};

const deleteSentence = async (eleRef) => {
    const sentence = eleRef.innerHTML();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        eleRef.innerHTML(letters.join(""));
    }
};

const carousel = async (carouselList, eleRef) => {
    var i = 0;
    while (true) {
        updateFontColor(eleRef, carouselList[i].color);
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++;
        if (i >= carouselList.length) {
            i = 0;
        }
    }
};

const updateFontColor = (eleRef, color) => {
    eleRef.style.color = color;
};

const waitForMs = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export default carousel;

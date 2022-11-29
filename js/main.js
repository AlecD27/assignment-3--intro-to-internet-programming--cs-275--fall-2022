function songs(json) {
    let message = document.getElementsByClassName(`carousel-slides`);
    let content = ``;

    message.textContent = json[0].artist;
    console.log (json[0].artist);
}

window.onload = () => {
    let leftButton = document.querySelectorAll(`img`)[0];
    let rightButton = document.querySelectorAll(`img`)[1];
    let parent = document.getElementsByClassName(`carousel-slides`)[0];
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);
    script.setAttribute(`src`,`json/data.json`);
    body.append(script);
    let width = 0;
    let index = 0;

    leftButton.classList.add(`hidden button`);
    rightButton.classList.add(`button`);

    // let checkSlide = () => {
    //     if (index > 0 && index < 3) {
    //         leftButton.classList.remove(`hidden`);
    //         rightButton.classList.remove(`hidden`);
    //     } else if (index === 0) {
    //         leftButton.classList.add(`hidden`);
    //     } else if (index === 3){
    //         rightButton.classList.add(`hidden`);
    //     }
    // };

    // rightButton.addEventListener(`click`, () => {
    //     width -= 465;
    //     parent.style.transform = `translate(`+width+`px)`;
    //     index += 1;
    //     checkSlide();
    // });
}
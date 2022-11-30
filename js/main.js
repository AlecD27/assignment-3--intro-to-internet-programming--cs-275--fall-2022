function songs(json) {  
    let slideshow = document.querySelectorAll(`div`)[1];
    let slide = 0;

    for (let i = 0; i < 4; i++) {
      let div = document.createElement(`div`);
      div.setAttribute(`class`, `container`);
      div.innerHTML = 
        `<div class="item">
          <h3>`+(json[slide].album)+`</h3>
          <a href="`+(json[slide].url)+`">`+(json[slide].artist)+`</a>
        </div>
        <img class="item" src="`+(json[slide].cover_image.path)+`" width="`+(json[slide].cover_image.width)+`"
        height="`+(json[slide].cover_image.height)+`" alt="`+(json[slide].cover_image.alt_content)+`">
        <p>`+(json[slide].review.content)+`</p>
        <p>--<a href="`+(json[slide].review.url)+`">`+(json[slide].review.source)+`</a></p>`;
      slideshow.append(div);
      slide += 1;
    }
}

window.onload = () => {
    let leftButton = document.querySelectorAll(`nav > a > img`)[0];
    let rightButton = document.querySelectorAll(`nav > a > img`)[1]; // selecting my 2 buttons
    leftButton.classList.add(`hidden`); // giving it the hidden class at the start
    leftButton.classList.add(`button-L`);
    rightButton.classList.add(`button-R`);
    let movement = document.querySelectorAll(`div`)[1];
    movement.classList.add(`move`);
    let parent = document.getElementsByClassName(`carousel-slides`)[0];
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);
    script.setAttribute(`src`,`json/data.json`);
    body.append(script);
    let width = 0;
    let index = 0;

    let checkSlide = () => {
        if (index > 0 && index < 3) {
            leftButton.classList.remove(`hidden`);
            rightButton.classList.remove(`hidden`);
        } else if (index === 0) {
            leftButton.classList.add(`hidden`);
        } else if (index === 3){
            rightButton.classList.add(`hidden`);
        }
    };

    // the below functions enable user interaction
    rightButton.addEventListener(`click`, () => {
        width -= 640;
        parent.style.transform = `translate(`+width+`px)`;
        index += 1;
        checkSlide();
    });

    leftButton.addEventListener(`click`, () => {
        width += 640;
        parent.style.transform = `translate(`+width+`px)`;
        index -= 1;
        checkSlide();
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.key === `ArrowRight` && !rightButton.classList.contains(`hidden`)) {
            rightButton.click();
        } else if (e.key === `ArrowLeft` && !leftButton.classList.contains(`hidden`)) {
            leftButton.click();
        }
    });
};

function songs(json) {  
  let slideshow = document.querySelectorAll(`div`)[1];
  
    //slide 1
    let div = document.createElement(`div`);
    div.setAttribute(`class`, `container`);
    div.innerHTML = 
      `<div class="item">
        <h3>`+(json[0].album)+`</h3>
        <a href="`+(json[0].url)+`">`+(json[0].artist)+`</a>
      </div>
      <img class="item" src="`+(json[0].cover_image.path)+`" width="`+(json[0].cover_image.width)+`" height="`+(json[0].cover_image.height)+`" alt="`+(json[0].cover_image.alt_content)+`">
      <p>`+(json[0].review.content)+`</p>
      <p>--<a href="`+(json[0].review.url)+`">`+(json[0].review.source)+`</a></p>`;
    slideshow.append(div);

    // slide 2
    let div2 = document.createElement(`div`);
    div2.setAttribute(`class`, `container`);
    div2.innerHTML = 
      `<div class="item">
        <h3>BLACK</h3>
        <a href="`+(json[1].url)+`">`+(json[1].artist)+`</a>
      </div>
      <img class="item" src="`+(json[1].cover_image.path)+`" width="`+(json[1].cover_image.width)+`" height="`+(json[1].cover_image.height)+`" alt="`+(json[1].cover_image.alt_content)+`">
      <p>`+(json[1].review.content)+`</p>
      <p>--<a href="`+(json[1].review.url)+`">`+(json[1].review.source)+`</a></p>`;
    slideshow.append(div2);
    
    // slide 3
    let div3 = document.createElement(`div`);
    div3.setAttribute(`class`, `container`);
    div3.innerHTML = 
      `<div class="item">
        <h3>`+(json[2].album)+`</h3>
        <a href="`+(json[2].url)+`">`+(json[2].artist)+`</a>
      </div>
      <img class="item" src="`+(json[2].cover_image.path)+`" width="`+(json[2].cover_image.width)+`" height="`+(json[2].cover_image.height)+`" alt="`+(json[2].cover_image.alt_content)+`">
      <p>`+(json[2].review.content)+`</p>
      <p>--<a href="`+(json[2].review.url)+`">`+(json[2].review.source)+`</a></p>`;
    slideshow.append(div3);
    
    // slide 4
    let div4 = document.createElement(`div`);
    div4.setAttribute(`class`, `container`);
    div4.innerHTML = 
      `<div class="item">
        <h3>`+(json[3].album)+`</h3>
        <a href="`+(json[3].url)+`">`+(json[3].artist)+`</a>
      </div>
      <img class="item" src="`+(json[3].cover_image.path)+`" width="`+(json[3].cover_image.width)+`" height="`+(json[3].cover_image.height)+`" alt="`+(json[3].cover_image.alt_content)+`">
      <p>`+(json[3].review.content)+`</p>
      <p>--<a href="`+(json[3].review.url)+`">`+(json[3].review.source)+`</a></p>`;
    slideshow.append(div4);
}

window.onload = () => {
    // let main = document.querySelector(`nav`);
    // let leftBox = document.createElement(`div`);
    // leftBox.setAttribute(`class`, `container`);
    // leftBox.innerHTML = `<div class="box-L"></div>`;
    // main.append(leftBox);
    // let rightBox = document.createElement(`div`);
    // rightBox.setAttribute(`class`, `container`);
    // rightBox.innerHTML = `<div class="box-R"></div>`;
    // slideshow.append(rightBox);
    let leftButton = document.querySelectorAll(`nav > a > img`)[0];
    let rightButton = document.querySelectorAll(`nav > a > img`)[1];
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

    rightButton.addEventListener(`click`, () => {
        width -= 650;
        parent.style.transform = `translate(`+width+`px)`;
        index += 1;
        checkSlide();
    });

    leftButton.addEventListener(`click`, () => {
      width += 650;
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
}
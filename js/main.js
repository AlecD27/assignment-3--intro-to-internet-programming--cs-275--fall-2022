function songs(json) {
    console.log (json[0].artist);
    
    // Here I call the div for the slides and put the html into it.
    let slideshow = document.querySelectorAll(`div`)[1];
    let div = document.createElement(`div`);
    div.setAttribute(`class`, `container`);
    div.innerHTML = 
      `<div class="item">
        <h3>`+(json[0].album)+`</h3>
        <a href="`+(json[0].url)+`">`+(json[0].artist)+`</a>
      </div>
      <img class="item" src="`+(json[0].cover_image.path)+`" width="400px" height="100px" alt="`+(json[0].cover_image.alt_content)+`">
      <p>`+(json[0].review.content)+`</p>
      <p>--<a href="`+(json[0].review.url)+`">`+(json[0].review.source)+`</a></p>`;
    slideshow.append(div);
    let div2 = document.createElement(`div`);
    div2.setAttribute(`class`, `container`);
    div2.innerHTML = 
      `<div class="item">
        <h3>`+(json[1].album)+`</h3>
        <a href="`+(json[1].url)+`">`+(json[1].artist)+`</a>
      </div>
      <img class="item" src="`+(json[1].cover_image.path)+`" width="400px" height="100px" alt="`+(json[1].cover_image.alt_content)+`">
      <p>`+(json[1].review.content)+`</p>
      <p>--<a href="`+(json[1].review.url)+`">`+(json[1].review.source)+`</a></p>`;
    slideshow.append(div2);
    let div3 = document.createElement(`div`);
    div3.setAttribute(`class`, `container`);
    div3.innerHTML = 
      `<div class="item">
        <h3>`+(json[2].album)+`</h3>
        <a href="`+(json[2].url)+`">`+(json[2].artist)+`</a>
      </div>
      <img class="item" src="`+(json[2].cover_image.path)+`" width="400px" height="100px" alt="`+(json[2].cover_image.alt_content)+`">
      <p>`+(json[2].review.content)+`</p>
      <p>--<a href="`+(json[2].review.url)+`">`+(json[2].review.source)+`</a></p>`;
    slideshow.append(div3);
    let div4 = document.createElement(`div`);
    div4.setAttribute(`class`, `container`);
    div4.innerHTML = 
      `<div class="item">
        <h3>`+(json[3].album)+`</h3>
        <a href="`+(json[3].url)+`">`+(json[3].artist)+`</a>
      </div>
      <img class="item" src="`+(json[3].cover_image.path)+`" width="400px" height="100px" alt="`+(json[3].cover_image.alt_content)+`">
      <p>`+(json[3].review.content)+`</p>
      <p>--<a href="`+(json[3].review.url)+`">`+(json[3].review.source)+`</a></p>`;
    slideshow.append(div4);
}

window.onload = () => {
    // let leftButton = document.querySelectorAll(`img`)[0];
    // let arrows = document.querySelectorAll(`container > img`);
    // const LEFT_ARROW = 0;
    // const RIGHT_ARROW = 1;
    // arrows[LEFT_ARROW].classList.add(`button`);
    
    //let rightButton = document.querySelectorAll(`img`)[1];
    let parent = document.getElementsByClassName(`carousel-slides`)[0];
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);
    script.setAttribute(`src`,`json/data.json`);
    body.append(script);
    let width = 0;
    let index = 0;

    // leftButton.classList.add(`hidden button`);
    // rightButton.classList.add(`button`);

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
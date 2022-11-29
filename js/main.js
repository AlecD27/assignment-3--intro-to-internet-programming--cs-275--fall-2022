function songs(json) {
    let message = document.getElementsByClassName(`carousel-slides`);
    let content = ``;

    message.innerHTML = json[0].artist;
    console.log (json[0].artist);
}

window.onload = () => {
    // let leftButton = document.querySelectorAll(`img`)[0];
    // let arrows = document.querySelectorAll(`container > img`);
    // const LEFT_ARROW = 0;
    // const RIGHT_ARROW = 1;
    // arrows[LEFT_ARROW].classList.add(`button`);

    // Here I call the div for the slides and put the html into it
    let slideshow = document.querySelectorAll(`div`)[1];
    let div = document.createElement(`div`);
    div.setAttribute(`class`, `container`);
    div.innerHTML = 
        `<img class="item" src="img/black.png" alt="black">
        <div class="item">
          <h3>BLACK</h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aut, fugiat. Accusantium sunt, voluptatibus laboriosam tenetur, ad quisquam, nam blanditiis itaque similique sapiente iure quae doloribus deleniti debitis? Doloremque, iste.
        </div>`;
    slideshow.append(div);
    let div2 = document.createElement(`div`);
    div2.setAttribute(`class`, `container`);
    div2.innerHTML = `<p>this has a class</p>`;
    slideshow.append(div2);
    
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
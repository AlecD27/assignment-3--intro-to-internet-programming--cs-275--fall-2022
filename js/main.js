function songs(json) {
    let message = document.getElementsByClassName(`carousel-slides`);
    let content = ``;

    message.textContent = json[0].artist;
    console.log (json[0].artist);
}

window.onload = () => {
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);
    script.setAttribute(`src`,`json/data.json`);
    body.append(script);
}
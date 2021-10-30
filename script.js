function createHeard() {
    let heardEl = document.createElement("div");
    heardEl.classList.add("heard");
    // heardEl.classList.add("beat");
    heardEl.innerHTML = `<i class="fas fa-heart"></i>`
    heardEl.style.top = "-70px";
    heardEl.style.transform = `rotateZ(${Math.random()*20 - 10}deg)`;
    heardEl.style.fontSize = Math.random()*3 +2 + "rem";
    heardEl.style.left = Math.random() * document.body.clientWidth -40 + "px";
    let duration = Math.random() * 3 + 2;
    heardEl.style.animationDuration = duration + "s"
    document.body.appendChild(heardEl)
    setTimeout(()=> {heardEl.remove()},duration * 1000)
}


setInterval(createHeard,300)
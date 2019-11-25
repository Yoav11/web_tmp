function bgChanger() {
    if(this.scrollY > this.innerHeight / 1.3) {
        document.body.classList.add("bg-active");
    } else {
        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll", bgChanger);

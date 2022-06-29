const menuToggle = document.getElementById("toggle");
const links = document.querySelectorAll(".text-wrapper");
const cards = document.querySelectorAll(".card");
const mediaLinks = document.querySelectorAll("div.social-media a")
const cardWrappers = document.querySelectorAll(".card-wrapper");
const logoWrapper = document.getElementsByClassName("logo-wrapper")[0];
const project = document.getElementById("projetos");
const frontWrapper = document.getElementsByClassName("front-wrapper");
const screenHeight = window.innerHeight;

const beepSound = new Audio();
beepSound.src = "./assets/snd/beep.mp3";

let distanceScrolled = Math.ceil(window.scrollY);

cards[0].addEventListener("click", () => {
    location.href = "https://thiagoomiranda.github.io/snack-e/";
});
cards[1].addEventListener("click", () => {
    location.href = "https://thiagoomiranda.github.io/to-do-list/";
});
cards[2].addEventListener("click", () => {
    location.href = "https://thiagoomiranda.github.io/poke-memory/";
});
cards[3].addEventListener("click", () => {
    location.href = "https://thiagoomiranda.github.io/click-counter/";
});
cards[4].addEventListener("click", () => {
    location.href = "https://thiagoomiranda.github.io/gameflix/";
});

function unCheck() {
    if (menuToggle.checked) {
        menuToggle.checked = false;
    };
};

links.forEach((element) => {
    element.addEventListener("click", unCheck);
    element.addEventListener("mouseover", () => {
        setTimeout(() => {
            beepSound.play();
        }, 250);
    });
});

mediaLinks.forEach((element) => {
    element.addEventListener("mouseover", () => {
        beepSound.play();
    });
});

let screenSize = window.matchMedia("(max-width: 850px)");

function changeFront() {
    links[0].addEventListener("click", () => {
        frontWrapper[1].classList.add("dnone");
        frontWrapper[0].classList.remove("dnone");
    });
    links[2].addEventListener("click", () => {
        frontWrapper[0].classList.add("dnone");
        frontWrapper[1].classList.remove("dnone");
    });
};

changeFront();

function screenMobile(screenSize) {
    if (screenSize.matches) {
        cards[0].style.backgroundImage = "url('./assets/imgs/snake.gif')";
        cards[1].style.backgroundImage = "url('./assets/imgs/to-do.gif')";
        cards[2].style.backgroundImage = "url('./assets/imgs/pokemem.gif')";
        cards[3].style.backgroundImage = "url('./assets/imgs/click-counter.gif')";
        cards[4].style.backgroundImage = "url('./assets/imgs/gameflix.gif')";
        links[1].addEventListener("click", () => {
            distanceScrolled = project.offsetTop;
            logoWrapper.classList.add("hidden");
        });

        window.addEventListener("scroll", () => {
            setTimeout(() => {
                distanceScrolled = Math.ceil(window.scrollY);
            }, 525);

            if (distanceScrolled > project.offsetTop + 5 || distanceScrolled < project.offsetTop - 5) {
                logoWrapper.classList.remove("hidden");
            };
        });

        cards.forEach((element) => {
            element.classList.add("card-modify");
        });

        cardWrappers.forEach((element) => {
            element.classList.add("card-modify");
        });

    } else {
        cards.forEach((element) => {
            if (element.classList.contains("card-modify")) {
                element.classList.remove("card-modify");
            };
        });
        cardWrappers.forEach((element) => {
            if (element.classList.contains("card-modify")) {
                element.classList.remove("card-modify");
            };
        });
    }
};
screenMobile(screenSize);
screenSize.addListener(screenMobile);
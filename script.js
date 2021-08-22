const changeLowerGridColor = function () {
    let secondGridItem = document.querySelectorAll(".the-second-grid-item");
    for(let item of secondGridItem) {
        item.classList.toggle("active");
    }
}

const changeUpperGridColor = function () {
    let firstGridItem = document.querySelectorAll(".grid-item");
    for(let item of firstGridItem) {
        item.classList.toggle("active");
    }
}

const changeTopGridNumbers = function () {
    let numbers = document.querySelectorAll(".grid-item h1");
    for(let item of numbers) {
        item.classList.toggle("active");
    }
}

const changeBottomGridNumbers = function () {
    let numbers = document.querySelectorAll(".the-second-grid-item .view-numbers p");
    for(let item of numbers) {
        item.classList.toggle("active");
    }
}

const changeSpanColor = function () {
    let color = document.querySelectorAll(".the-second-grid-item .logo-container span");
    for(let item of color) {
        item.classList.toggle("active");
    }
}

const changeUserNameColor = function () {
    let color = document.getElementsByClassName("username");
    for(let item of color) {
        item.classList.toggle("active");
    }
}


document.querySelector(".toggle-container").addEventListener("click", () => {
    document.querySelector(".toggle-circle").classList.toggle("active");
    document.querySelector("header").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".header-statement h1").classList.toggle("active");
    document.querySelector(".header-statement p").classList.toggle("active");
    document.querySelector(".toggle-container").classList.toggle("active");
    document.querySelector(".overview").classList.toggle("active");
    changeLowerGridColor();
    changeUpperGridColor();
    changeTopGridNumbers();
    changeBottomGridNumbers()
    changeSpanColor();
    changeUserNameColor()
})
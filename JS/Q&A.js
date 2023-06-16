let click_num = document.getElementsByClassName("select_num");

function handleClick(event) {
    for (let i = 0; i < click_num.length; i++) {
        click_num[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
}

function init() {
    for (var i = 0; i < click_num.length; i++) {
        click_num[i].addEventListener("click", handleClick);
    }
}

init();
var link = document.querySelector(".btn-fullback");
var popup = document.querySelector(".feedback-form");
var overlay = document.querySelector(".feedback-overlay");
var close = document.querySelector(".modal-close-big");

var form = popup.querySelector("form");
var yourName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var question = popup.querySelector("[name=question]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("yourName");
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");
    overlay.classList.add("overlay-show");

    yourName.focus();
    if (storage) {
        yourName.value = storage;
        email.focus();
    } else {
        yourName.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
    overlay.classList.remove("overlay-show");
    popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function(evt) {
    if (!yourName.value || !email.value || !question.value) {
        evt.preventDefault();
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("yourName", yourName.value);
            localStorage.setItem("email", email.value);
        }
    }
});


window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            overlay.classList.remove("overlay-show");
            popup.classList.remove("feedback-error");
        }
    }
});


ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [59.939130, 30.329400],
            zoom: 16
        }),
        myPlacemark = new ymaps.Placemark([59.938631, 30.323055]);

    myMap.geoObjects.add(myPlacemark);
});
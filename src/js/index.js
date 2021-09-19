const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".sec1-btn");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
    let addAnimation = false;
    // Elements that contain the "FLASH" class, add a listener to remove
    // animation-class when the animation ends
    if (element.classList[1] == "FLASH") {
        element.addEventListener("animationend", (e) => {
            element.classList.remove(ANIMATEDCLASSNAME);
        });
        addAnimation = true;
    }

    // If The span element for this element does not exist in the array, add it.
    if (!ELEMENTS_SPAN[index])
        ELEMENTS_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", (e) => {
        ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
        ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

        // Add an animation-class to animate via CSS.
        if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
    });

    element.addEventListener("mouseout", (e) => {
        ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
        ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    });
});

var slideIndex = 1;

const slideChange = (n) => {
    slideShow((slideIndex += n));
};

const slideJump = (n) => {
    slideShow((slideIndex = n));
};

const slideShow = (n) => {
    var i;
    var slideImages = document.getElementsByClassName("main_image");
    var bottomImages = document.getElementsByClassName("slider_image");
    // console.log(bottomImages);
    if (n <= 0) {
        slideIndex = slideImages.length;
    }
    if (n > slideImages.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = "none";
        bottomImages[i].classList.remove("active");
    }
    slideImages[slideIndex - 1].style.display = "block";
    bottomImages[slideIndex - 1].classList.add("active");
};

slideShow(slideIndex);

// Section 8 "Sgn Up form"

const signupButton = document.getElementById("sec8_submit");
const emlInput = document.getElementById("sec8_eml");

const toggleSignupButton = () => {
    // alert("Button is clicked");
    console.log("call toggleSignupButton function");
    if (signupButton.classList.contains("btn_inactive") === true) {
        signupButton.classList.remove("btn_inactive");
        signupButton.classList.add("btn_active");
        emlInput.classList.remove("eml_inactive");
        emlInput.classList.add("eml_active");
    } else {
        signupButton.classList.remove("btn_active");
        signupButton.classList.add("btn_inactive");
        emlInput.classList.remove("eml_active");
        emlInput.classList.add("eml_inactive");
    }
};

// Section 9 "Google map"

function myMap() {
    var location = new google.maps.LatLng(26.8467, 80.9462);
    //  { lat: 26.8467, lng: 80.9462 };
    // center:new google.maps.LatLng(26.8467,80.9462),
    var mapProp = {
        center: location,
        zoom: 7,
    };
    var map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp
    );
}

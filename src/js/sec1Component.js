var mainIndex = 0;

const sec1Change = () => {
    var slide = document.getElementsByClassName("back_img");
    if (mainIndex >= slide.length) {
        console.log(mainIndex);
        mainIndex = 0;
    }
    for (let i = 0; i < slide.length; i++) {
        if (!slide[i].classList.contains("sec1_img_inactive"))
            slide[i].classList.add("sec1_img_inactive");
        slide[i].classList.remove("sec1_img_active");
    }
    slide[mainIndex].classList.remove("sec1_img_inactive");
    slide[mainIndex].classList.add("sec1_img_active");
    mainIndex++;
    setTimeout(() => {
        sec1Change();
    }, 5000);
};

sec1Change();

$("#carousel-left").click(function () {
    let dir = "left";
    navigateCarousel(dir);
});

$("#carousel-right").click(function () {
    let dir = "right";
    navigateCarousel(dir);
});

let carouselArray = [];

let numOfCarouselImgs = $("#carousel-img-container > div").length - 1;
console.log("number of imgs: " + numOfCarouselImgs);

function getCarouselImages() {
    for (let i = 0; i <= numOfCarouselImgs; i++) {
        console.log("forloop ran"); //is forloop running?

        let carouselImg = $(".carouselImg").eq(i);//current targeted carousel image div
        let getImg = $(".carouselImg").eq(i).attr("carouselImg"); //get next carousel image data

        $(".carouselImg").eq(i).attr("carouselNumber", i);

        $(".carouselImg").eq(i).css("background-image", "url('" + getImg + "')"); //apply carousel image data as css background image style

        $(".carouselImg").eq(i).addClass("carouselDeselect");//hide all then unhide currentImgNum later
    };
};

getCarouselImages();

let currentImgNum = 0; //We will start on this img

function navigateCarousel(dir) {
    if (currentImgNum != numOfCarouselImgs && dir === "right") {

        $(".carouselImg").attr("caourselNumber", currentImgNum).addClass("carouselDeselect");
        currentImgNum++;
        $(".carouselImg").eq(currentImgNum).removeClass("carouselDeselect");
        // console.log("current img num: " + currentImgNum);

    } else if (currentImgNum > 0 && dir === "left") {

        $(".carouselImg").attr("caourselNumber", currentImgNum).addClass("carouselDeselect");
        currentImgNum--;
        $(".carouselImg").eq(currentImgNum).removeClass("carouselDeselect");
        // console.log("current img num: " + currentImgNum);

    } else if (currentImgNum === numOfCarouselImgs && dir === "right") {

        $(".carouselImg").attr("caourselNumber", currentImgNum).addClass("carouselDeselect");
        currentImgNum = 0;
        $(".carouselImg").eq(currentImgNum).removeClass("carouselDeselect");
        // console.log("current img num: " + currentImgNum);

    } else if (currentImgNum === 0 && dir === "left") {

        $(".carouselImg").attr("caourselNumber", currentImgNum).addClass("carouselDeselect");
        currentImgNum = numOfCarouselImgs;
        $(".carouselImg").eq(currentImgNum).removeClass("carouselDeselect");
        // console.log("current img num: " + currentImgNum);

    };
};

$(".carouselImg").eq(currentImgNum).removeClass("carouselDeselect");//reset img order and display
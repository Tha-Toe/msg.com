const maincontainer = document.querySelector(".maincontainer");

const humburgaSite = document.querySelector(".humburgaSite");

const mobileContainer = document.querySelector(".mobileContainer");
const line = document.querySelector(".line");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const humburgaListTag = document.querySelector(".humburgaListTag");

mobileContainer.addEventListener("click", () => {
    if (humburgaSite.classList.contains("humburgaSiteOpacity")) {
        line2.classList.remove("line2Opacity");
        line1.classList.remove("line1PlusDeg");
        line3.classList.remove("line3MinusDeg");
        humburgaSite.classList.remove("humburgaSiteOpacity");
        maincontainer.classList.remove("mainContainerRemove");
        humburgaListTag.classList.remove("humburgaListTagTransform")

    } else {
        line2.classList.add("line2Opacity");
        line1.classList.add("line1PlusDeg");
        line3.classList.add("line3MinusDeg");
        humburgaSite.classList.add("humburgaSiteOpacity");
        maincontainer.classList.add("mainContainerRemove");
        humburgaListTag.classList.add("humburgaListTagTransform")
    }

})
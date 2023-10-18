let images = [
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJm7YkuR53TP9u5W6a9Wt_pWbC8JtQPDRcQ&usqp=CAU",
    "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
    "https://i.insider.com/60638bd66183e1001981966a?width=1136&format=jpeg",
    "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
    "https://www.nature.com/immersive/d41586-022-04372-2/assets/FCYxD00tLr/tonga-sh-h-2560x1440.jpg",
    "https://media.istockphoto.com/id/477903335/photo/satellite-orbiting-mars.jpg?s=612x612&w=0&k=20&c=POybtFlNDeiRL6Iuaef0O51hIoC3t-c2SszhhEcubHE=",
    "https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX",
    "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg",
]

let miniGallery = document.getElementById("miniGallery");
for (let i = 0; i < images.length; i++) {
    miniGallery.innerHTML += `<img id="galleryImage" src="${images[i]}"></img>`
}

var mainImage = document.getElementById("mainImage");
mainImage.src = images[1];
let childrens = miniGallery.children
for (let i = 0; i < childrens.length; i++) {
    childrens[i].setAttribute("draggable", false);
    childrens[i].addEventListener("click", (e) => {
        mainImage.src = childrens[i].src;
    });
}

function mainSlider() {
    var index = 1;
    var maxIndex = 4;

    setInterval(() => {
        galleryImage.style.marginLeft = `-${index * 1000}px`;
        index++;
        if (index == maxIndex) {
            index = 0;
        }
    }, 1000);
}

var mouseX = 0;
document.onmousedown = (e) => {
    mouseX = e.clientX;
};

var galleryImage = document.getElementById("galleryImage");
galleryImage.style.transitionProperty = "margin-left";
galleryImage.style.transitionDuration = "2s";
galleryImage.style.marginLeft = "0px";

var index = 1;
var maxIndex = 3;
document.onmouseup = (e) => {
    if ((e.clientX - mouseX) < 0) {
        if (index == 0) {
            index++;
        }

        if (index != maxIndex) {
            galleryImage.style.marginLeft = `-${index * 800}px`;
            index++;
        }

        else {
            galleryImage.style.marginLeft = "0px";
            index = 1;
        }
    }

    else if ((e.clientX - mouseX) > 100) {
        if (index != 1) {

            index--;
        }
        index--;
        galleryImage.style.marginLeft = `-${index * 800}px`;
    }
};
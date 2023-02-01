let saturate=document.getElementById("saturate");
let contrast =document.getElementById("contrast");
let brightness =document.getElementById("brightness");
let sepia =document.getElementById("sepia");
let grayscale =document.getElementById("grayscale");
let blur =document.getElementById("blur");
let hueRotate =document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let reset = document.getElementById("reset");

let img = document.getElementById("imgs");
let img_box = document.getElementById("img-box");

let canvas = document.getElementById("canvas");
let ctx =canvas.getContext("2d");

//Step Five
function resetValus() {
    img.style.filter = 'none';
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    blur.value = "0";
    hueRotate.value = "0";
}


//Step one
window.onload = function () {
    download.style.display = "none";
    reset.style.display = "none";
    img_box.style.display = "none";
};
//Step two
upload.onchange = function () {
    resetValus();
    download.style.display = "block";
    reset.style.display = "block";
    img_box.style.display = "block";
    //Step there
    let fille = new FileReader();
    fille.readAsDataURL(upload.files[0])
    fille.onload = function () {
        img.src = fille.result;
    }
    //Step Seven
    img.onload = function () { 
        canvas.width= img.width;
        canvas.height= img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display="none";
    }
}
//Step Four
let filtersColor = document.querySelectorAll("ul li input");
filtersColor.forEach( filterz => {
    filterz.addEventListener("input", function () {
       ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    })
})

//Step Sex
download.onclick = function () {
    download.href = canvas.toDataURL();
}
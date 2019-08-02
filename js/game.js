var output = document.getElementById("result");
var game = () => {
    setTimeout(function () {
        let startNumber = 1;
        let endNumber = 6;
        let mix = Math.floor(Math.random() * endNumber) + startNumber;
        let afterMix = "";
        output.style.display = "block";
        if (mix == 1) {
            afterMix = "ខ្លា";
            output.style.background = "url(images/tigers.jpg) center/cover no-repeat";
        } else if (mix == 2) {
            afterMix = "ឃ្លោក";
            output.style.background = "orange";
            output.style.background = "url(images/k.jpg) center/cover no-repeat";            
        } else if (mix == 3) {
            afterMix = "មាន់";
            output.style.background = "purple";
            output.style.background = "url(images/chicken.jpg) center/cover no-repeat";
        } else if (mix == 4) {
            afterMix = "បង្កង";
            output.style.background = "red";
            output.style.background = "url(images/sea_food.png) center/cover no-repeat";
        } else if (mix == 5) {
            afterMix = "ក្តាម";
            output.style.background = "green";
            output.style.background = "url(images/crab.jpg) center/cover no-repeat";
        } else {
            afterMix = "ត្រី";
            output.style.background = "pink";
            output.style.background = "url(images/fish.jpg) center/cover no-repeat";
        }

        output.innerHTML = afterMix;
    }, 1000);



}

var resetGame = () => {
    output.style.display = "none";
    output.innerHTML = "";
    output.style.background = "";
}

let btn = document.querySelector("#mix");
let reset = document.querySelector("#reset");
reset.addEventListener('click', resetGame);
btn.addEventListener('click', game);


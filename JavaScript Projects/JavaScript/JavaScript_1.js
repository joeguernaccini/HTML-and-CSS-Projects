function band_Function() {
    var band_output;
    var bands = document.getElementById("band_choice").value;
    var band_string = " are awesome!";
    switch (bands) {
        case "Beastie Boys":
            band_output = "Beastie Boys" + band_string;
            break;
        case "The Disco Biscuits":
            band_output = "The Disco Biscuits" + band_string;
            break;
        case "Phish":
            band_output = "Phish" + band_string;
            break;
        case "The Pretenders":
            band_output = "The Pretenders" + band_string;
            break;
        case "The Who":
            band_output = "The Who" + band_string;
            break;
    
        default:
    }
    document.getElementById("output").innerHTML = band_output;
}

function anotherFunction() {
    var x = document.getElementsByClassName("Step_212");
    x[0].innerHTML = "I am not a paragraph. I am a sentence."
    
}

var x = document.getElementById("firstCanvas");
var xy = x.getContext("2d");
var grd = xy.createLinearGradient(200,300,400,400);
grd.addColorStop(0, "blue");
grd.addColorStop(1,"white");
xy.fillStyle = grd;
xy.fillRect(00  ,0,500,380);




window.onload = function() {
    var g = document.getElementById("secondCanvas");
    var gg = g.getContext("2d");
    var img = document.getElementById("joe");
    gg.drawImage(img, 20, 20, 390, 490);

}























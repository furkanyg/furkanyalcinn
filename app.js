const background_colors_btn1 = ["LightBlue ", "YellowGreen", "Tomato", "DarkOrange", "MediumPurple", "White", "Gold"];
const background_colors_btn2 = ["LightBlue ", "YellowGreen", "Tomato", "DarkOrange", "MediumPurple", "White", "Gold"];
const colorNames_btn2 = ["Blue ", "Green", "Red", "Orange", "Purple", "White", "Yellow"];
const colorNames_btn1 = ["Blue ", "Green", "Red", "Orange", "Purple", "White", "Yellow"];
let newColors = ["button1","button2","button3","button4"];
var score = 0;
let time_ = 0;
const music_selector = document.getElementById('music-switch');
function ColorSelection() {
    // custom variables:

    let btn1IsTrue = "";
    let btn2IsTrue = "";
    let btn3IsTrue = "";
    let btn4IsTrue = "";
    correctBut = null;
    // defined the dom objects
    var score_text = document.getElementById('score-text');
    var button1_ = document.getElementById('button_1');
    var button2_ = document.getElementById('button_2');
    var button3_ = document.getElementById('button_3');
    var button4_ = document.getElementById('button_4');
    var button1_text = document.getElementById('color-text-1');
    var button2_text = document.getElementById('color-text-2');
    var button3_text = document.getElementById('color-text-3');
    var button4_text = document.getElementById('color-text-4');

    function RandomNumberGeneration(){
        let randomNumber = Math.floor(Math.random(0, background_colors_btn1.length) * 7);
        return randomNumber;
    }
    // random number generation
    let random_number_btn1 = RandomNumberGeneration();
    let random_number_btn2 = RandomNumberGeneration();
    let random_number_btn3 = RandomNumberGeneration();
    let random_number_btn4 = RandomNumberGeneration();
    let random_number_colorNames_btn1 = RandomNumberGeneration();
    let random_number_colorNames_btn2 = RandomNumberGeneration();
    let random_number_colorNames_btn3 = RandomNumberGeneration();
    let random_number_colorNames_btn4 = RandomNumberGeneration();
    let random_number_Text_color_btn1 = RandomNumberGeneration();
    let random_number_Text_color_btn2 = RandomNumberGeneration();
    let random_number_Text_color_btn3 = RandomNumberGeneration();
    let random_number_Text_color_btn4 = RandomNumberGeneration();
    // setting the colors of the objects what depends on color arrays
    button1_.style.backgroundColor = background_colors_btn1[random_number_btn1];
    button2_.style.backgroundColor = background_colors_btn2[random_number_btn2];
    button3_.style.backgroundColor = background_colors_btn1[random_number_btn3];
    button4_.style.backgroundColor = background_colors_btn2[random_number_btn4];
    // setting the dom objects' name 
    button1_text.innerHTML = colorNames_btn1[random_number_colorNames_btn1];
    button2_text.innerHTML = colorNames_btn2[random_number_colorNames_btn2];
    button3_text.innerHTML = colorNames_btn1[random_number_colorNames_btn3];
    button4_text.innerHTML = colorNames_btn2[random_number_colorNames_btn4];

    button1_text.style.color = background_colors_btn1[random_number_Text_color_btn1];
    button2_text.style.color = background_colors_btn2[random_number_Text_color_btn2];
    button3_text.style.color = background_colors_btn1[random_number_Text_color_btn3];
    button4_text.style.color = background_colors_btn2[random_number_Text_color_btn4];
    setInterval(() => {
        if (button1_text.style.color == button1_.style.backgroundColor) {
            ColorSelection();
        }
        else if (button2_text.style.color == button2_.style.backgroundColor) {
            ColorSelection();
        }
        else if (button3_text.style.color == button3_.style.backgroundColor) {
            ColorSelection();
        }
        else if (button4_text.style.color == button4_.style.backgroundColor) {
            ColorSelection();
        }
        //-
        else if (button1_.style.backgroundColor == button2_.style.backgroundColor || button1_.style.backgroundColor == button3_.style.backgroundColor || button1_.style.backgroundColor == button4_.style.backgroundColor) {
            ColorSelection();
        }
        else if (button2_.style.backgroundColor == button3_.style.backgroundColor || button2_.style.backgroundColor == button4_.style.backgroundColor) {
            ColorSelection();
        }
        else if (button3_.style.backgroundColor == button4_.style.backgroundColor) {
            ColorSelection();
        }
        else if (button1_text.innerHTML == button2_text.innerHTML ) {
            ColorSelection();
        }
        else if(button1_text.innerHTML == button3_text.innerHTML){
            ColorSelection();
        }
        else if(button1_text.innerHTML == button4_text.innerHTML){
            ColorSelection();
        }
        else if(button2_text.innerHTML == button3_text.innerHTML){
            ColorSelection();
        }
        else if(button2_text.innerHTML == button4_text.innerHTML){
            ColorSelection();
        }
        else if(button3_text.innerHTML == button4_text.innerHTML){
            ColorSelection();
        }
        
        }, 1);
    if (colorNames_btn1.indexOf(colorNames_btn1[random_number_colorNames_btn1]) == background_colors_btn1.indexOf(background_colors_btn1[random_number_btn1])) {
        btn1IsTrue = true;

    }
    else {
        btn1IsTrue = false;
    }
    if (colorNames_btn2.indexOf(colorNames_btn2[random_number_colorNames_btn2]) == background_colors_btn2.indexOf(background_colors_btn2[random_number_btn2])){
        btn2IsTrue = true;
    }
    else {
        btn2IsTrue = false;
    }
    if (colorNames_btn2.indexOf(colorNames_btn2[random_number_colorNames_btn3]) == background_colors_btn2.indexOf(background_colors_btn2[random_number_btn3])){
        btn3IsTrue = true;

    }
    else {
        btn3IsTrue = false;
    }
    if(colorNames_btn1.indexOf(colorNames_btn1[random_number_colorNames_btn4]) == background_colors_btn1.indexOf(background_colors_btn1[random_number_btn4])){
        btn4IsTrue = true;

    }
    else {
        btn4IsTrue = false;
    }

        if(btn1IsTrue == true && btn2IsTrue == true && btn3IsTrue == true && btn4IsTrue == true){
            correctBut = "";
            ColorSelection();
            
        }
        else if(btn1IsTrue == false && btn2IsTrue == false && btn3IsTrue == false && btn4IsTrue == false){
            correctBut = "";
            ColorSelection();
            
        }
        else if(btn1IsTrue == true && btn2IsTrue == true && btn3IsTrue == false && btn4IsTrue == false){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == true && btn2IsTrue == false && btn3IsTrue == true && btn4IsTrue == false){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == true && btn2IsTrue == false && btn3IsTrue == false && btn4IsTrue == true){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == false && btn2IsTrue == true && btn3IsTrue == true && btn4IsTrue == false){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == false && btn2IsTrue == true && btn3IsTrue == false && btn4IsTrue == true){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == false && btn2IsTrue == false && btn3IsTrue == true && btn4IsTrue == true){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == true && btn2IsTrue == true && btn3IsTrue == true && btn4IsTrue == false){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == true && btn2IsTrue == true && btn3IsTrue == false && btn4IsTrue == true){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == false && btn2IsTrue == true && btn3IsTrue == true && btn4IsTrue == true){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == true && btn2IsTrue == false && btn3IsTrue == false && btn4IsTrue == true){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == false && btn2IsTrue == true && btn3IsTrue == true && btn4IsTrue == true){
            correctBut = "";
            ColorSelection();
        }
        else if(btn1IsTrue == true && btn2IsTrue == false && btn3IsTrue == false && btn4IsTrue == false){
            correctBut = "button1";

        }
        else if(btn1IsTrue == false && btn2IsTrue == true && btn3IsTrue == false && btn4IsTrue == false){
            correctBut = "button2";

        }
        else if(btn1IsTrue == false && btn2IsTrue == false && btn3IsTrue == true && btn4IsTrue == false){
            correctBut = "button3";

        }
        else if(btn1IsTrue == false && btn2IsTrue == false && btn3IsTrue == false && btn4IsTrue == true){
            correctBut = "button4";

        }
        else if(btn1IsTrue == true && btn2IsTrue == false && btn3IsTrue == true && btn4IsTrue == true){
            ColorSelection();

        }
        console.log(correctBut);

    
}

function start() {
    const interval1 = setInterval(() => {
        time_++;
        document.getElementById('time-text').innerText = ` time: ${time_}`
        if(time_ == 30){
            clearInterval(interval1);
            document.getElementById('wrong-answer').innerText = `your score is: ${score}`;
            let inputValue = document.getElementById('inputText').value;
            document.getElementById('inputText').value = `${inputValue} : ${score}`
            document.getElementById('form').submit();
        }
    }, 1000);
    document.getElementById('button_1').style.display = "inline-block";
    document.getElementById('button_2').style.display = "inline-block";
    document.getElementById('button_3').style.display = "inline-block";
    document.getElementById('button_4').style.display = "inline-block";
    document.getElementById('start-button').style.display = "none";
    setTimeout(() => {
        document.getElementById('wrong-answer').style.opacity = "100";
        document.getElementById('wrong-answer').innerText = `your score is: ${score}`;
        document.getElementById('wrong-answer').style.top = "2px";
        document.getElementById('wrong-answer').style.fontSize = "60px"
        document.getElementById('button_1').style.display = "none";
        document.getElementById('button_2').style.display = "none";
        document.getElementById('button_3').style.display = "none";
        document.getElementById('button_4').style.display = "none";
        document.getElementById('restart-button').style.display = "inline-block"
        document.getElementById('restart-button').style.top = "30px";
    } ,30000)
}
function restart(){
    location.reload();
}
function Go(){
    document.getElementById('formDiv').style.display = "none";
}
window.onload = function () {



    document.getElementById('button_1').style.display = "none";
    document.getElementById('button_2').style.display = "none";
    document.getElementById('button_3').style.display = "none";
    document.getElementById('button_4').style.display = "none";

    var button1_ = document.getElementById('button_1');
    var button2_ = document.getElementById('button_2');
    var button1_ = document.getElementById('button_1');
var button2_ = document.getElementById('button_2');
var button3_ = document.getElementById('button_3');
var button4_ = document.getElementById('button_4');
        // running a function when it is triggered
        button1_.addEventListener("click", function(){
            if(correctBut == "button1"){
                console.log("Doğru");
                document.getElementById("wrong-answer").style.opacity = "0";
                score++;
                document.getElementById('score-text').innerHTML = `score: ${score}`;
                ColorSelection();
            }
            else if(correctBut == "button1" || correctBut == "button2" || correctBut == "button3" || correctBut == "button4"){
                score--;
                document.getElementById('score-text').innerHTML = `score: ${score}`;
            }

        });
        button2_.addEventListener("click", function(){
            if(correctBut == "button2"){
                console.log("Doğru");
                document.getElementById("wrong-answer").style.opacity = "0";
                score++;
                document.getElementById('score-text').innerHTML = `score: ${score}`;
                ColorSelection();
            }  
            else if(correctBut == "button1" || correctBut == "button2" || correctBut == "button3" || correctBut == "button4"){
                score--;
                document.getElementById('score-text').innerHTML = `score: ${score}`;
            }

        });
        button3_.addEventListener("click", function(){
            if(correctBut == "button3"){
                console.log("Doğru");
                document.getElementById("wrong-answer").style.opacity = "0";
                score++;
                document.getElementById('score-text').innerHTML = `score: ${score}`;
                ColorSelection();
            }  
            else if(correctBut == "button1" || correctBut == "button2" || correctBut == "button3" || correctBut == "button4"){
                score--;
                document.getElementById('score-text').innerHTML = `score: ${score}`;
            }
        });
        
        button4_.addEventListener("click", function(){
            if(correctBut == "button4"){
                console.log("Doğru");
                document.getElementById("wrong-answer").style.opacity = "0";
                score++;
                document.getElementById('score-text').innerHTML = `score: ${score}`;
                ColorSelection();
            } 
            else if(correctBut == "button1" || correctBut == "button2" || correctBut == "button3" || correctBut == "button4"){
                score--;
                document.getElementById('score-text').innerHTML = `score: ${score}`;
            } 
        });

    ColorSelection();

}

<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://kit.fontawesome.com/a3d37ede7a.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Furkan Yalçın </title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<script src="app.js"></script>
    <script></script>
    <!--All Rights Reserved by FURKAN YALÇIN, 2023 -->
    <a href="../" id="back-button"><i id="back-arrow" class="fa-solid fa-arrow-left"></i></a>
    <div id="All">
        <div id="time"><p  id="time-text">time: 0</p></div><div id="score"><p id="score-text">score: 0</p></div>

        <p id="wrong-answer" style="color: rgb(229, 236, 130); text-align: center; font-family: 'Bebas Neue', cursive;"> </p>
        <div id="formDiv">
            <form id="form" onkeydown="return event.key != 'Enter';" action="leaderboard.php" method="post" name="form">
                <input type="text" id="inputText" name="inputText" placeholder="Your name"><br>
                <a href="#" onclick="Go()" id="goBtn" >Go!</a>

            </form>
        </div>
        <div id="maindiv">

            <div id="start"><a id="start-button" onclick="start()">start</a></div>

            <a id="restart-button" onclick="restart()">restart</a>

            <div class="but" id="button_1">
                <p id="color-text-1" class="color-text">Blue</p>
            </div>  

            <div class="but" id="button_2">
                <p id="color-text-2" class="color-text">Red</p>
            </div><br>

            <div class="but" id="button_3">
                <p id="color-text-3" class="color-text">Blue</p>
            </div>  

            <div class="but" id="button_4">
                <p id="color-text-4" class="color-text">Red</p>
            </div>


        </div>
        
    </div>
    <div id="footerbut-div">
        <a class="footer-buttons" id="coffee"  href="https://www.buymeacoffee.com/furkanyalcinn">Buy me a coffee!</a>
        <a class="footer-buttons" id="linkedin" href="https://www.linkedin.com/in/furkan-yal%C3%A7%C4%B1n-a75b9423a/">Linkedin</a>
        <p id="furkan-yalcin">Furkan Yalçın | All Right Reserved. -2023-</p>
</div>
</body>
</html>
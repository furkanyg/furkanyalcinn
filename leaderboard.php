<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>gelenistek</title>
    <link rel="stylesheet" href="leaderboard.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@1,600&display=swap" rel="stylesheet">

</head>
<body>
</div>
    <?php 
    $doc = fopen("leaderboard.txt", "a");
    fwrite($doc, $_POST["inputText"]."\r\n");
    $lines = file("leaderboard.txt");
    foreach($lines as $value1){
        echo $value1."<br>";

        }
    


    ?>

</body>
    <style>
        html {
            font-family: 'Shantell Sans', cursive;
            text-align: center;
        }
    </style>
</html>
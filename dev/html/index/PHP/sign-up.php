<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .data-box{
            height: 100px;
            background-color: rgba(0,0,0,.5);
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translate(-50%,-50%);
            padding: 10px 20px 
        }
    </style>
</head>

<body>
    <div class="data-box">
        <p class=":email">sign-up-電子信箱 : <? echo $_GET["upEmail"], "<br>"; ?></p>
        <p class=":paw"  >sign-up-密碼 : <? echo $_GET["upPaw"], "<br>"; ?></p>
    </div>
</body>

</html>
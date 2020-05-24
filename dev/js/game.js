// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const question1 = document.getElementById("question1");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const dexBox = document.getElementById("des");
const dexBox1 = document.getElementById("des1");
const dexBoxDis = document.querySelector("#des>a");
const dexBoxDis1 = document.querySelector("#des1>a");
const container = document.querySelector("#container");

//說明箱
dexBoxDis.addEventListener('click', () => {
    dexBox.style.display = 'none';
    // container.style.height= '680px';
})
//說明箱1
dexBoxDis1.addEventListener('click', () => {
    dexBox1.style.display = 'none';
})
scoreDiv.addEventListener('click', () => {
    scoreDiv.style.display = 'none';
})

var xhr = new XMLHttpRequest();
xhr.open('get', '../../dest/PHP_program/game/db.php', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(null);
xhr.onload = function () {
    questions = JSON.parse(xhr.responseText);

    const lastQuestion = questions.length - 1;
    let runningQuestion = 0;
    let count = 0;
    let TIMER;
    let score = 0;
    let scorePerCent;

    start.addEventListener("click", startQuiz);

    function renderQuestion() {
        let q = questions[runningQuestion];
        question.innerHTML = "<p>" + q.question + "</p>";
        question1.innerHTML = "<a>" + q.question1 + "</a>";
        qImg.innerHTML = "<img src=" + q.imgSrc + ">";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
    }

    function startQuiz() {
        start.style.display = "none";
        renderQuestion();
        quiz.style.display = "block";
        rightanswer()
    }

    $('.choice').click(function () {

        let answer = this.id;

        if (answer == questions[runningQuestion].correct) {
            score++;
        };
        count = 0;
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    });

    function rightanswer() {

        el = document.querySelector(".tag_question");
        var elLen = questions.length

        var str = "";

        for (var i = 0; i < elLen; i++) {
            var content = '<li class="answer_part">' + "題目" + (i + 1) + ":" + questions[i]["question"] + '<a href="#">' + questions[i]["question1"] + '</a>' + '</li>';
            str += content;
        }
        el.innerHTML = str

        el2 = document.querySelector(".tag_answer");
        var elLen = questions.length

        var str1 = "";
        for (var i = 0; i < elLen; i++) {
            var content = '<li class="answer_part">' + "答案" + (i + 1) + ":" + questions[i]["correct"] + ":" + questions[i]["RIGHT_ANSWER"] + '</li>';
            str1 += content;
        }
        el2.innerHTML = str1

    };

    function scoreRender() {
        scoreDiv.style.display = "block";
        des1.style.display = "block";
        // calculate the amount of question percent answered by the user

        scorePerCent = Math.round(100 * score / questions.length);
        const quer = "恭喜您獲得"
        const point = "分"
        const scoreEnd = "點"
        let img = (scorePerCent >= 80) ? "../dest/image/game/img/1.png" :
            (scorePerCent >= 60) ? "../dest/image/game/img/2.png" :
                (scorePerCent >= 40) ? "../dest/image/game/img/3.png" :
                    (scorePerCent <= 20) ? "../dest/image/game/img/3.png" :
                        "img/3.png";

        scoreDiv.innerHTML = "<img src=" + img + ">";
        scoreDiv.innerHTML +=
            `
    <p class='anwser'>
    <span class='score_text_size'>${quer + scorePerCent + point}，經計算後獲得${(scorePerCent / 10) + scoreEnd}<span>
    <br>
     <h1 class="close">X</h1>
    </p>
     `
        ShowHello()
        //   point_des()
    };
    function ShowHello() {
        
        let MEM_TIME;
        let MEM_BOOLE = sessionStorage.getItem('boolen');
        let GAME_DATE = sessionStorage.getItem('gamedate');
        let first_game = sessionStorage.getItem('point');
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        month = (month.toString().length == 1) ? ("0" + month) : month;
        day = (day.toString().length == 1) ? ("0" + day) : day;
        var result = myDate.getFullYear() + '-' + month + '-' + day;

        if (MEM_BOOLE > 0 && result > GAME_DATE) {
            point_add()
        }
        else if (MEM_BOOLE == 1 && first_game == 0) {
            point_add()
        }
        else {
            no_point();
        };

        function point_add() {
            xhr = new XMLHttpRequest();
            xhr.open('POST', '../../dest/PHP_program/game/db_member_point_poi.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            MEM_POI = scorePerCent;
            MEM_NO = sessionStorage.getItem('no');
            MEM_POINT = MEM_NO - 1;
            MEM_TIME = 1;

            xhr.send(`MEM_POI=${MEM_POI}&MEM_NO=${MEM_NO}&MEM_TIME=${MEM_TIME}&GAME_LASTTIME=${result}`);
            xhr.onload = function () {
                member_point = JSON.parse(xhr.responseText);
                var session = sessionStorage;
                session.setItem('point', member_point[MEM_POINT]["MEM_POI"]);
                session.setItem('boolen', member_point[MEM_POINT]["MEM_TIME"]);
                session.setItem('gamedate', member_point[MEM_POINT]["GAME_LASTTIME"]);

            };
        };

        function no_point() {
            xhr = new XMLHttpRequest();
            xhr.open('POST', '../../dest/PHP_program/game/db_member_point_poi.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            MEM_POI = "0";
            MEM_NO = sessionStorage.getItem('no');
            MEM_POINT = MEM_NO - 1;
            MEM_TIME = 1;
            xhr.send(`MEM_POI=${MEM_POI}&MEM_NO=${MEM_NO}&MEM_TIME=${MEM_TIME}&GAME_LASTTIME=${result}`);
            xhr.onload = function () {
                member_point = JSON.parse(xhr.responseText);
                var session = sessionStorage;
                session.setItem('point', member_point[MEM_POINT]["MEM_POI"]);
                session.setItem('boolen', member_point[MEM_POINT]["MEM_TIME"]);
                session.setItem('gamedate', member_point[MEM_POINT]["GAME_LASTTIME"]);
            };
        };
    };
};

























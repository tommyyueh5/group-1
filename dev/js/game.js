document.write("<script type='text/javascript' src='/dest/js/var.js'></script>");
// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const dexBox = document.getElementById("des");
const dexBoxDis = document.querySelector("#des>a");




//說明箱
dexBoxDis.addEventListener('click',()=>{
    dexBox.style.display = 'none';
})

// create our questions
let questions = [
    {
        question: "冠狀病毒的簡稱是什麼？?",
        imgSrc: "/dest/image/game/img/pic1.png",
        choiceA: "convid-19",
        choiceB: "convid-18",
        choiceC: "convid-17",
        correct: "A"
    }, {
        question: "冠狀病毒屬會造成什麼樣的人類疾病？?",
        imgSrc: "/dest/image/game/img/pic2.png",
        choiceA: "發燒",
        choiceB: "肚子痛",
        choiceC: "全身痠痛",
        correct: "A"
    }, {
        question: "我要怎麼預防感染2019新型冠狀病毒?",
        imgSrc: "/dest/image/game/img/pic3.png",
        choiceA: "儘量避免出入人潮多的地方",
        choiceB: "多去運動公園與大眾運動增加抵抗力",
        choiceC: "多吃為它命",
        correct: "A"
    }, {
        question: "2019新型冠狀病毒的潛伏期是多久？?",
        imgSrc: "/dest/image/game/img/pic4.png",
        choiceA: "2至12天",
        choiceB: "1小時",
        choiceC: "19天",
        correct: "A"
    }, {
        question: "現在還可以去中國武漢嗎??",
        imgSrc: "/dest/image/game/img/pic5.png",
        choiceA: "疾病管制署已第三級旅遊警示建議避免所有非必要的旅遊。",
        choiceB: "不可以去",
        choiceC: "經過申請才可以去",
        correct: "A"
    }, {
        question: "要在哪裡可以看國內最新疫情變化及防疫建議？?",
        imgSrc: "/dest/image/game/img/pic6.png",
        choiceA: "疾病管制署",
        choiceB: "中央通訊社",
        choiceC: "youtube",
        correct: "A"
    }, {
        question: "如果一定要去有疫情的地區，要怎麼保護自己？",
        imgSrc: "/dest/image/game/img/pic7.png",
        choiceA: "落實肥皂勤洗手、咳嗽戴口罩等個人防護措施。",
        choiceB: "多去人多的地方",
        choiceC: "無法避免",
        correct: "A"
    }, {
        question: "要在哪裡看到國際疫情？？",
        imgSrc: "/dest/image/game/img/pic8.png",
        choiceA: "疾病管制署",
        choiceB: "中央通訊社",
        choiceC: "youtube",
        correct: "A"
    }, {
        question: "下列何者非2019新型冠狀病毒傳播方式？",
        imgSrc: "/dest/image/game/img/pic9.png",
        choiceA: "口鼻分泌物或體液",
        choiceB: "電腦病毒檔案下載",
        choiceC: "吃野味",
        correct: "A"
    },{
        question: "下列何者非2019新型冠狀病毒傳播方式？",
        imgSrc: "/dest/image/game/img/pic9.png",
        choiceA: "口鼻分泌物或體液",
        choiceB: "電腦病毒檔案下載",
        choiceC: "吃野味",
        correct: "A"
    }

];



// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "blue";
    // document.getElementsByClassName(choice).style.backgroundColor = "blue";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);
    const quer = "恭喜您獲得"
    const point = "分"
    const scoreEnd = "點"


    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "/dest/image/game/img/1.png" :
              (scorePerCent >= 60) ? "/dest/image/game/img/2.png" :
              (scorePerCent >= 40) ? "/dest/image/game/img/3.png" :
              (scorePerCent >= 20) ? "/dest/image/game/img/3.png" :
              "/dest/image/game/img/3.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += `
    <p>
    <span style=''>${quer + scorePerCent + point}，經計算後獲得${(scorePerCent / 10) + scoreEnd}<span>
    <br>
    <a class='endSelect' href="/dest/game.html" rel="noopener noreferrer">重玩</a>
    <a class='endSelect' href="/dest/Epidemic-shop.html" rel="noopener noreferrer">前往商店</a>
    <a class='endSelect' href="/dest/index.html" rel="noopener noreferrer">返回首頁</a>
    </p>
    `




        ;
}






















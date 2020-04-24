const fs = require('fs');
const util = require('util');
const moment = require('moment');

//將 exec 非同步化 (可以使用 await，以及 .then, .catch)
const exec = util.promisify(require('child_process').exec);

//引入 jQuery 機制
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const $ = require('jquery')(window);



加入排程
var schedule = require('node-schedule');
　　var rule = new schedule.RecurrenceRule();

　　rule.minute = 40;

　　var j = schedule.scheduleJob(rule, function(){

　　　　console.log("執行任務");

　　});





// var j = schedule.scheduleJob(rule, function(){
//     console.log('The answer to life, the universe, and everything!');
// });


//瀏覽器標頭，讓對方得知我們是人類，而非機器人 (爬蟲)
const headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
};
//放置資料的陣列
let arrLink = [];


let url = `https://news.campaign.yahoo.com.tw/2019-nCoV/index.php`;
(
    async function () {
        let { stdout, stderr } = await exec(`curl -X GET ${url} -L -H "User-Agent: ${headers['User-Agent']}" -H "Accept-Language: ${headers['Accept-Language']}" -H "Accept: ${headers['Accept']}"`, { encoding: 'utf8', maxBuffer: 500 * 1024 });
        //定義縣市別、病例數
        let city = "",number1="", sick = "";

        //物件變數，用來放置縣市及病例數的相關資訊
        let obj = {};
        //取得病例數的表格
        $(stdout).find('div.twForm').each((index, element) => {
            //走訪取得每一個縣市的表格資料
            $(element).find(' tbody tr').each((idx, elm) => {
               
               // 編號
                number1 = $(elm).find('td:eq(0)').text();
                //縣市
                city = $(elm).find('td:eq(1)').text();
                //病例數
                sick = $(elm).find('td:eq(2)').text();

                //若是比格是空的則跳到下一個元墅去執行
               
                //用物件整理縣市資訊

                
                


             var obj =  {
                   
                    number:number1,
                    name: city,
                    brithplace: sick,
                };



           
                //加入陣謝變數
                arrLink.push(obj);
                //物件初始化
                obj = {};


            });
        });
         console.log({data:arrLink});
        let result = {data:arrLink};
        await fs.writeFileSync(`downloads/index.json`, JSON.stringify(result, null ,4));  
        // await fs.writeFileSync(`downloads/index.json`, JSON.stringify(arrLink, null,4));  
        //console.log(typeof JSON.stringify(arrLink));
  
       
       


    }


   
  
)();

window.addEventListener('load', function(){
    // console.log(window.screen.availHeight);
    let joke = document.getElementById('joke');
    let slideContainer = document.getElementById('slideContainer');
    let mark = document.getElementById('sec1-mark');
    let hint = document.getElementById('sec1-hint');

    let mask = document.getElementById('sec1-mask');
    let maskImg = document.getElementById('sec1-mask-img');

    let equipment = document.getElementById('sec-equipment');
    // document.getElementById('pinContainer').style.height = `${window.screen.availHeight}px`;
   
    let v = 0;
    let c = 1;


    let s = 0;     
    let inter = 1; 

    let slideContainerMove;

    let dranimate = document.getElementById('doctor');
    let mask1 = document.getElementById('item');
    
    let mask2 = document.getElementById('item2')
    let mask3 = document.getElementById('item3')
    let bag = document.getElementById('alcohol');
    

    
    // plane
    var aaa = new TimelineMax()
    .to('.airplane-img',2,{
        y:100,
        rotation: -10,  
        scale: 1.1,
        ease: Power0.easeNone,
        delay: 5,    
    })
    .to('.airplane-img',2,{
        y:200,
        rotation: 0, 
        ease: Power0.easeNone,      
        scale: 1.2,   
    })
    .to('.airplane-img',2,{
        y:300,
        rotation: 10,
        ease: Power0.easeNone,  
        scale: 1.3,          
    })
    .to('.airplane-img',2,
    {
        y:300,
        rotation: 0, 
        scale: 2,
        
    }).to('.stair-img', 1, {
        opacity: 1,

    })
    .to(['.joke-small-img'], 1, {
        opacity: 1,
    })
    .to(['.joke-small-img'], 1, {
        x: 72,
        ease: Power0.easeNone,  
    })
    .to(['.joke-small-img'], 1, {
        x: 297,
        y: 149,
    })
    .to(['.joke-small-img'], 1, {
        y: 68,
        scale: 3.4,
        opacity:0,
    });

    // plane
    mask1.onclick = function() {
        console.log(mask1, mask2, mask3);
        let tag1 = document.createElement('div');
        tag1.innerHTML = `<div id="ther" style="animation-play-state:running">
                            <img src="/dest/image/Epidemic-prevention-SOP/ther.png" alt="">
                        </div>`;
        equipment.appendChild(tag1);
        mask1.remove();

        
    };
    mask2.onclick = function() {
        let tag1 = document.createElement('div');
        tag1.innerHTML = `<div id="alcohol" style="animation-play-state:running">
        <img src="/dest/image/Epidemic-prevention-SOP/alcohol-gel.png" alt="">
        </div>`;
        equipment.appendChild(tag1);
        mask2.remove();
    };
    mask3.onclick = function() {
        let tag1 = document.createElement('div');
        tag1.innerHTML = `<div id="soap" style="animation-play-state:running">
        <img src="/dest/image/Epidemic-prevention-SOP/soap.png" alt="">
        </div>`;
        equipment.appendChild(tag1);
        mask3.remove();
    };
    
    //remove map
    setTimeout(function(){
        document.getElementsByClassName('plane')[0].remove();
    }, 6000);

    window.addEventListener('keydown', function(e){

        if ( e.code == 'ArrowRight' && c ==1) {


            


            c = 0;
            setTimeout(function(){
                v+=200;
                joke.style.backgroundPosition = `-${v}px 0px`;
                c=1;
            }, 200);

            if (inter ==1) {
                slideContainerMove = setInterval( function(){
                    s-=5;
                    slideContainer.style.left = `${s}px`;
                    //
                    if (s == -1010){
                        
                            dranimate.style.animationPlayState = 'running';
                            mask1.style.animationPlayState = 'running';
                            mask2.style.animationPlayState = 'running';
                            mask3.style.animationPlayState = 'running';
                
                            let pha = document.getElementsByClassName('pha')[0];
                            let type = document.createElement("p");
                            type.setAttribute('id', 'text');
                            pha.appendChild(type);
                            new TypeIt("#text", {
                                strings:[
                                "您好~現在是非常時期,請記得以下幾點重要事項:",
                                "1.記得早晚量測體溫",
                                "2.勤用肥皂洗手" ,
                                "3.定時用酒精消毒 ",
                                "4.減少出入公共場所 ",
                                "5.與人保持一公尺以上的社交距離",
                                ],
                                speed: 50,
                                startDelay: 2000,
                            }).go();
                        
                    }
                    //
                }, 5);
                inter = 0;
            }

        }
        
        window.addEventListener('keyup', function(e){
            clearInterval(slideContainerMove);
            if (e.code == 'ArrowRight') {
                inter =1;
            }
        });
       
        if ( e.code == 'ArrowLeft'  && c ==1) {
            c = 0;
            setTimeout(function(){
                v+=200;
                c=1;
                joke.style.backgroundPosition = `-${v}px 400px`;
            }, 200);

            if (inter ==1) {
                slideContainerMove = setInterval( function(){
                    s+=5;
                     if (s==1) {
                        s--;
                    }
                    slideContainer.style.left = `${s}px`;
                }, 5);
                inter = 0;
            }
        }
        window.addEventListener('keyup', function(e){
            clearInterval(slideContainerMove);
            if (e.code == 'ArrowLeft') {
                inter =1;
            }
        });
    });
    

     //
     
    //
    

    mark.addEventListener('click', function(){
        mark.style.display = 'none';
        hint.classList.add('show-hint');
        mask.classList.add('show-mask');
        

        new TypeIt("#sec1-hint", {
            strings: "兒子你終於回來了，從國外回來要記得注意事項，採取居家檢疫，並隨時注意身體狀況，若有任何不適，儘速就醫，並告知醫師旅遊史及接觸史，疫情嚴重，記得配戴口罩，保謢別人也保護自己。",
            speed: 50,
            startDelay: 2000,
        }).go();
    });

    maskImg.addEventListener('click', function(){
        mask.classList.add('sec1-mask-move');
        let tag = document.createElement('div');
        tag.innerHTML=`<div class="equipment-mask-pic">
        <img class="equipment-mask-img" src="/dest/image/Epidemic-prevention-SOP/mask.png" alt="">
        </div>`;
        equipment.appendChild(tag);
        equipment.classList.add('equip-show');
        setTimeout(function(){
            mask.remove();
        }, 4000);
        
        
    });
});
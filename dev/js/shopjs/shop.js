
window.addEventListener('load', ()=>{
    
    // let b = $('.myowl-1-1').attr('tar');
    // // $(`.owl-all[tar=clothe]`).owlCarousel('destroy'); 
    // // $(`.owl-all[tar=hand]`).owlCarousel('destroy'); 
    // // $(`.owl-all[tar=goggle]`).owlCarousel('destroy'); 
    // // $(`.owl-all[tar=mask]`).owlCarousel('destroy'); 


    // $('.type-ico img').click(function(){

    //     let tem = $(this).attr("src");
    //     let w = $(this).attr("src").charAt(($(this).attr("src").length)-5);
    //     let index = $(this).attr("src").length-5;
    //     let end = $(this).attr('src').substring(index);
    //     let start = $(this).attr('src').substring(0, index);
    //     if (w=='b') {
    //         $(this).attr('src', start + end.replace('b','w'));
    //     } 

    //     for ( let i =0 ; i<$('.type-ico img').not(this).length; i++ ) {
    //         $('.type-ico img').not(this)[i].setAttribute('src', $('.type-ico img').not(this)[i].getAttribute('src').replace('w.png','b.png'));
    //     }







    //     $(`.owl-all[tar=${b}]`).owlCarousel('destroy'); 
    //     b = $(this).parent().attr('tar');

    //     $(`.owl-all[tar=${b}]`).owlCarousel({
    //         // stagePadding: 50,
    //         // margin: 40,
    //         nav:true,
            
    //         navText: ["<i class='icofont icofont-rounded-left prenext'></i>","<i class='icofont icofont-rounded-right prenext'></i>"],
    //         responsive:{
    //             0:{
    //                 items:1,
    //                 margin: 10,
    //             },
    //             577: {
    //                 items:2,
    //                 margin: 0,
    //             },
    //             768: {
    //                 items:1,
    //                 margin: 50,
    //             },
    //             980: {
    //                 items:1,
    //                 margin: 0,
    //             },
    //             992:{
    //                 items:2,
    //                 margin: 50,
    //             },
                
    //             1200:{
    //                 items:2,
    //                 margin: 0,
    //             },
    //             1400:{
    //                 items:2,
    //                 margin: 0,
    //             }
    //         }
    //     });



    //     //rerwd
        
    // });



    // var count = 1;
    // countEl = document.getElementById("count");
    // let cplus = document.getElementById('plus');
    // let cminus = document.getElementById('minus');

    // cplus.addEventListener('click', plus);
    // cminus.addEventListener('click', minus);
    // function plus() {
    //     count++;
    //     countEl.value = count;


    // }
    // function minus() {
    //     if (count > 1) {
    //         count--;
    //         countEl.value = count;
    //     }
    // }


    // let joker = document.getElementById('haha');


   

    // let price;


    // function getPrice() {
    //     let conn = new XMLHttpRequest();
    //     conn.open('get', './PHP_program/shop_cart/shopgpri.php', true);
    //     conn.send(null);
    //     conn.onreadystatechange = function(){
    //         if (conn.readyState==4) {
    //             if (conn.status ==200) {
    //                 price = JSON.parse(conn.responseText);
    //                 price.zero=0;
    //             } else {
    //                 alert(conn.status);
    //             }
    //         }
    //     }
    // }

    // getPrice();




    // let sum;
    // let buyList = new Array();
    // $('.sli').click(move);
    // function move(e) {
    //     cl = this.cloneNode(true);
    //     let fo = document.createElement('div');
    //     count = 1;
    //     sum =0;

        

    //     if (e.currentTarget.children[0].getAttribute('kind')=='clothe') {
    //         $('#haha').find('.clothe').remove();
    //     }
    //     if (e.currentTarget.children[0].getAttribute('kind')=='goggle') {
    //         $('#haha').find('.goggle').remove();
    //     }
    //     if (e.currentTarget.children[0].getAttribute('kind')=='mask') {
    //         $('#haha').find('.mask').remove();
    //     }


        
        
        
    //     cl.children[1].remove(); //remove price
    //     cl.classList.remove('sli');
    //     cl.classList.add('ac');

    //     cl.classList.add(cl.children[0].getAttribute('kind'));
            
        
    //     // 
    //     joker.appendChild(cl);

    //     for ( let i = 0; i < joker.children.length; i++) {
    //         if (joker.children[i].classList.contains('ac')) {
    //             sum += price[joker.children[i].children[0].getAttribute('da')];
    //         }
    //         $('.shop-two-item-pirce').text(sum);
    //     }


    //     document.getElementById('count').value = '1';

        
        
    //     let oo = cl.children[0].getAttribute('kind');
    //     $(`.shop-item-detail`).addClass('hid');
    //     $(`.shop-item-detail[kind=${oo}]`).removeClass('hid');
        



    //     function additem() {
    //         buyList = [];
    //         for (let i = 0; i<joker.getElementsByClassName('ac').length; i++ ) {
                
    //             buyList.push(joker.getElementsByClassName('ac')[i].children[0].getAttribute('kind') +'-'+ joker.getElementsByClassName('ac')[i].firstElementChild.getAttribute('da'));


    //         }
    //     }
    //     additem();

    // }
    

    // document.getElementById('minus').addEventListener('click', function(){
        
    //     $('.shop-two-item-pirce').text( sum *  parseInt( document.getElementById('count').value ) );
    //     if (  isNaN($('.shop-two-item-pirce').text()) ) {
    //         $('.shop-two-item-pirce').text('$'+0);
    //     }
    // });

    // document.getElementById('plus').addEventListener('click', function(){
        
    //     $('.shop-two-item-pirce').text( sum *  parseInt( document.getElementById('count').value ) );
    //     if (  isNaN($('.shop-two-item-pirce').text()) ) {
    //         $('.shop-two-item-pirce').text('$'+0);
    //     }
    // });

    // //input
    // document.getElementById('count').addEventListener('input',function(){
    //     $('.shop-two-item-pirce').text( sum *  parseInt( document.getElementById('count').value ) );
    //     if (  $('#count').val()=='') {
    //         $('.shop-two-item-pirce').text(0);
    //     }
    // });





    // document.getElementById('re').addEventListener('click', function(){
    //     $('#haha').find('.ac').remove();
    //     $('.shop-two-item-pirce').text(0);
    //     document.getElementById('count').value = '1';
    //     sum = 0;

    //     buyList = [];
    // });

    // document.getElementById('shop-two-mobile-choice').addEventListener('click', function(){
    //     const shopOne = document.getElementById('shop-one');
    //     shopOne.classList.add('mobile-shop');
        
    // });

    // document.getElementById('mobile-arrow').addEventListener('click', function(){
    //     const shopOne = document.getElementById('shop-one');
    //     shopOne.classList.remove('mobile-shop');
        
    // });



    // //add cart
    // //

    // const addCartbtn = document.getElementById('addbtn');
    // let N = 1;
    
    // var storage = sessionStorage;
    
    // addCartbtn.addEventListener('click', function(){
    //     let cartall=0;
    //     if (buyList.length==0) {
    //         alert('請先選');
    //         N = null;
    //     } else {
    //         N=1;
    //         while ($.inArray(N.toString() , Object.keys(storage) ) !=-1 ) {
    //             N++;
    //         }
    //         storage[`${N}`]='';
    //         for (let i = 0 ; i < buyList.length; i++) {
    //             if (i == 0) {
    //                 storage[`${N}`] +=  `${buyList[i]}`;
    //             } else {
    //                 storage[`${N}`] +=  `, ${buyList[i]}`;
    //             }
    //         }
    //         storage[`${N}`] +=  `, ${sum*count}, ${count}`;
    //     }

        
    //     if (N!=null) {
    //         let newitemD;

           
    //         newitemD = document.createElement('div');

    //         newitemD.className="cart-product-item";

            
    //         newitemD.innerHTML = `<div class="ord-img"></div>
    //             <div class="ord_pst ord-n">
    //                 ${storage.getItem(N).split(', ')[storage.getItem(N).split(', ').length-1]}
    //             </div>
    //             <div class="ord_pst ord-price">
    //                 ${storage.getItem(N).split(', ')[storage.getItem(N).split(', ').length-2]}
    //             </div>

    //             <div class="ord_pst ord-remove">
    //             <button class="btnremove" id="${N}">刪除</button>
    //             </div>
    //         `;

            
    //         itemL = storage.getItem(N).split(', ')
    //         for ( let j = 0 ; j<itemL.length-2; j++) {

    //             let symposition = itemL[j].indexOf('-');
    //             if (itemL[j].substring(0, symposition) == 'clothe') {
    //                 let divordpic = document.createElement('div');
    //                 let divimg = document.createElement('img');
    //                 divordpic.className = "ord-pic";

    //                 let da = itemL[j].substring(symposition+1);
    //                 let src = document.querySelector(`[da='${da}']`).getAttribute('src');
    //                 divimg.src = src;

    //                 divimg.setAttribute('da',`${itemL[j]}`);
    //                 divordpic.appendChild(divimg);
    //                 newitemD.firstChild.appendChild(divordpic);

    //             } else if (itemL[j].substring(0, symposition) == 'goggle'){
    //                 let divordpic = document.createElement('div');
    //                 let divimg = document.createElement('img');
    //                 divordpic.className = "ord-pic";

    //                 let da = itemL[j].substring(symposition+1);
    //                 let src = document.querySelector(`[da='${da}']`).getAttribute('src');
    //                 divimg.src = src;

    //                 divimg.setAttribute('da',`${itemL[j]}`);
    //                 divordpic.appendChild(divimg);
    //                 newitemD.firstChild.appendChild(divordpic);
    //             } else {
    //                 let divordpic = document.createElement('div');
    //                 let divimg = document.createElement('img');
    //                 divordpic.className = "ord-pic";

    //                 let da = itemL[j].substring(symposition+1);
    //                 let src = document.querySelector(`[da='${da}']`).getAttribute('src');
    //                 divimg.src = src;

    //                 divimg.setAttribute('da',`${itemL[j]}`);
    //                 divordpic.appendChild(divimg);
    //                 newitemD.firstChild.appendChild(divordpic);
    //             }


    //             cartListInner.appendChild(newitemD);
                
    //         }
    //         $('.btnremove').click(deleteItem);
    //     } 
        

    //     //cartaddsumall
        
    //     for (let i of Object.keys(storage)) { 
    //         if (!(isNaN(parseInt(i)))) {
    //             cartall+=parseInt(storage[i].split(', ')[storage[i].split(', ').length-2]);
    //         }
    //     }
           
            
        
    //     $('#cart-total').text(cartall);


    //     if ( $('.cart-product-all').children().length==0) {
    //         $('#send').prop('disabled', true);
    //     } else {
    //         $('#send').prop('disabled', false);
    //     }
        
    // });

    // //remove cart
    // function deleteItem(e) {
    //     let cartall=0;
    //     this.parentNode.parentNode.remove();

    //     storage.removeItem(this.id);

        
    //     //cart sum pri
    //     for (let i of Object.keys(storage)) { 
    //         if (!(isNaN(parseInt(i)))) {
    //             cartall+=parseInt(storage[i].split(', ')[storage[i].split(', ').length-2]);
    //         }
    //     }
    //     $('#cart-total').text(cartall);


    //     if ( $('.cart-product-all').children().length==0) {
    //         $('#send').prop('disabled', true);
    //     } else {
    //         $('#send').prop('disabled', false);
    //     }
        
    // }




    // //cart
    // const cartshow = document.getElementById('cart');
    // const cartListInner = document.getElementById('cart-product-all');
    // cartshow.addEventListener('click', function  (){   
    //     let cartall=0;
    //     if (document.getElementsByClassName('cart-product-item')) {
    //         $('.cart-product-item').remove();
    //     }
    //     $('.cart-list').removeClass('hid');
    //     if (storage.length) {
            
    //         let newitemD;

    //         for( let i of Object.keys(storage)) {
    //             newitemD = document.createElement('div');

    //             newitemD.className="cart-product-item";

                
    //             newitemD.innerHTML = `<div class="ord-img"></div>
    //                 <div class="ord_pst ord-n">
    //                     ${storage.getItem(i).split(', ')[storage.getItem(i).split(', ').length-1]}
    //                 </div>
    //                 <div class="ord_pst ord-price">
    //                     ${storage.getItem(i).split(', ')[storage.getItem(i).split(', ').length-2]}
    //                 </div>

    //                 <div class="ord_pst ord-remove">
    //                 <button class="btnremove" id="${i}">刪除</button>
    //                 </div>
    //             `;

    //             itemL = storage.getItem(i).split(', ')
    //             for ( let j = 0 ; j<itemL.length-2; j++) {
    //                 let symposition = itemL[j].indexOf('-');
    //                 if (itemL[j].substring(0, symposition) == 'clothe') {
                        
    //                     let divordpic = document.createElement('div');
    //                     let divimg = document.createElement('img');
    //                     divordpic.className = "ord-pic";
                        
    //                     let da = itemL[j].substring(symposition+1);
    //                     let src = document.querySelector(`[da='${da}']`).getAttribute('src');
    //                     divimg.src = src;
                        
    //                     divimg.setAttribute('da',`${itemL[j]}`);
    //                     divordpic.appendChild(divimg);
    //                     newitemD.firstChild.appendChild(divordpic);

    //                 } else if (itemL[j].substring(0, symposition) == 'goggle'){
    //                     let divordpic = document.createElement('div');
    //                     let divimg = document.createElement('img');
    //                     divordpic.className = "ord-pic";

    //                     let da = itemL[j].substring(symposition+1);
    //                     let src = document.querySelector(`[da='${da}']`).getAttribute('src');
    //                     divimg.src = src;

    //                     divimg.setAttribute('da',`${itemL[j]}`);
    //                     divordpic.appendChild(divimg);
    //                     newitemD.firstChild.appendChild(divordpic);
    //                 } else {
    //                     let divordpic = document.createElement('div');
    //                     let divimg = document.createElement('img');
    //                     divordpic.className = "ord-pic";


    //                     let da = itemL[j].substring(symposition+1);
    //                     let src = document.querySelector(`[da='${da}']`).getAttribute('src');
    //                     divimg.src = src;


    //                     divimg.setAttribute('da',`${itemL[j]}`);
    //                     divordpic.appendChild(divimg);
    //                     newitemD.firstChild.appendChild(divordpic);
    //                 }


    //                 cartListInner.appendChild(newitemD);
                    
    //             }
                
    //         }
    //         $('.btnremove').click(deleteItem);
            
            
    //     }

    //     if ( $('.cart-product-all').children().length==0) {
    //         $('#send').prop('disabled', true);
    //     } else {
    //         $('#send').prop('disabled', false);
    //     }
        



    //     //cart sum pri
    //     for (let i of Object.keys(storage)) { 
    //         if (!(isNaN(parseInt(i)))) {
    //             cartall+=parseInt(storage[i].split(', ')[storage[i].split(', ').length-2]);
    //         }
    //     }
    //     $('#cart-total').text(cartall);
    // });



    // //send ord
    // const cartListC = document.getElementById('cart-list-close');
    // cartListC.addEventListener('click', function(){
    //     $('.cart-list').addClass('hid');
    // });

    // document.getElementById('send').addEventListener('click', send);
    // function send() {

        

    //     let conn = new XMLHttpRequest();
        
    //     conn.open('post', './PHP_program/shop_cart/shopord.php', true);

    //     conn.send(JSON.stringify(storage));
    //     conn.onreadystatechange = function() {
    //         if (conn.readyState==4) {
    //             if (conn.status == 200) {

                   
                    
    //                 if (conn.responseText==1) {
    //                     for (let i of  Object.keys(storage)) {
    //                         if ( !(isNaN(parseInt(i)))){
    //                             storage.removeItem(`${i}`);
    //                         }
    //                     }

                        
    //                     $('.cart-product-all').children().remove();
    //                     $('#cart-total').text(0);

    //                     if ( $('.cart-product-all').children().length==0) {
    //                         $('#send').prop('disabled', true);
    //                     } else {
    //                         $('#send').prop('disabled', false);
    //                     }
    //                     alert('訂單送出');

    //                 }  else {
    //                     alert('請先登入');
    //                 }
                    
    //             } else {
    //                 alert(conn.status);
    //             }
    //         }
    //     }
        
    // }



    // //scro

    // $(".scroll").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $(".shop-detail").offset().top -130
    //     }, 2000);
    // });
});




function haha(x, y) {
    let a = Math.ceil(x.length/y);
    let n = new Array();
    let periodF = 0;
    let periodL = y;
    for ( let i = 0; i< a;i++) {
        n.push(x.slice(periodF, periodL));
        periodF +=3;
        periodL +=3;
    }

    return n;
}



getproduct();

function getproduct() {
    let conn = new XMLHttpRequest();
    conn.open('get', './PHP_program/shop_cart/shop.php', true);
    conn.send(null);
    conn.onreadystatechange = function() {
        if (conn.readyState==4) {
            if (conn.status == 200) {
                let prodataArray; 
                let shopTypeContentInner = document.getElementById('shop-type-content-inner');
                let kind = ['group', 'clothe','goggle', 'mask'];
                for ( let k = 0; k< kind.length; k++) {
                    let myowl1 = document.createElement('div');
                    myowl1.className= 'owl-carousel owl-theme myowl-1-1 owl-all';
                    myowl1.setAttribute('tar', kind[k]);
                    shopTypeContentInner.appendChild(myowl1);


                    let prodataArray = new Array();
                    if (kind[k]=='group') {
                        prodataArray = haha(JSON.parse(conn.responseText), 3);
                    } else {
                        let origin = JSON.parse(conn.responseText);
                        
                        for ( let u = 0;u<JSON.parse(conn.responseText).length;u++) {
                            
                            
                            if (kind[k]==origin[u]['PRO_KIND']) {
                                prodataArray.push(origin[u]);
                            }
                        }
                        
                        prodataArray = haha(prodataArray,3);
                    }
                    for (let i = 0; i< prodataArray.length; i++) {
                        let item = document.createElement('div');
                        item.className = 'item myowl-item';
                        myowl1.appendChild(item);
                        prodata = prodataArray[i];
                        
                        for ( let j = 0; j<prodata.length; j++ ) {
                            prosingle = prodata[j];
                            let sli = document.createElement('div');
                            sli.className= 'sli';
                            item.appendChild(sli);
                            
                            let img = document.createElement('img');
                            img.src = `${prosingle.PRO_SRC}`;
                            img.setAttribute('da', `${prosingle.PRO_NO}`);
                            img.setAttribute('kind', `${prosingle.PRO_KIND}`);
                            sli.appendChild(img);
    
                            let price = document.createElement('div');
                            price.className='shop-type-price';
                            price.textContent = '$' + `${prosingle.PRO_PRICE}`;
                            sli.appendChild(price);
                        }
                    }
                }
                
                // =====================
                // $(`.owl-all[tar=clothe]`).owlCarousel('destroy'); 
                // $(`.owl-all[tar=hand]`).owlCarousel('destroy'); 
                // $(`.owl-all[tar=goggle]`).owlCarousel('destroy'); 
                // $(`.owl-all[tar=mask]`).owlCarousel('destroy'); 
                // console.log(5555);
                $('.myowl-1-1').owlCarousel({
                    
                    nav:true,
                    
                    navText: ["<i class='icofont-rounded-left prenext'></i>","<i class='icofont-rounded-right prenext'></i>"],
                    responsive:{
                        0:{
                            items:1,
                            margin: 10,
                        },
                        577: {
                            items:2,
                            margin: 0,
                        },
                        768: {
                            items:1,
                            margin: 50,
                        },
                        980: {
                            items:1,
                            margin: 0,
                        },
                        992:{
                            items:2,
                            margin: 50,
                        },
                        
                        1200:{
                            items:2,
                            margin: 0,
                        },
                        1400:{
                            items:2,
                            margin: 0,
                        }
                    }
                });
                //========================


                
                let b = $('.myowl-1-1').attr('tar');
                $(`.owl-all[tar=clothe]`).owlCarousel('destroy'); 
                $(`.owl-all[tar=hand]`).owlCarousel('destroy'); 
                $(`.owl-all[tar=goggle]`).owlCarousel('destroy'); 
                $(`.owl-all[tar=mask]`).owlCarousel('destroy'); 
            
            
                $('.type-ico img').click(function(){
            
                    let tem = $(this).attr("src");
                    let w = $(this).attr("src").charAt(($(this).attr("src").length)-5);
                    let index = $(this).attr("src").length-5;
                    let end = $(this).attr('src').substring(index);
                    let start = $(this).attr('src').substring(0, index);
                    if (w=='b') {
                        $(this).attr('src', start + end.replace('b','w'));
                    } 
            
                    for ( let i =0 ; i<$('.type-ico img').not(this).length; i++ ) {
                        $('.type-ico img').not(this)[i].setAttribute('src', $('.type-ico img').not(this)[i].getAttribute('src').replace('w.png','b.png'));
                    }
            
            
            
            
            
            
            
                    $(`.owl-all[tar=${b}]`).owlCarousel('destroy'); 
                    b = $(this).parent().attr('tar');
            
                    $(`.owl-all[tar=${b}]`).owlCarousel({
                        // stagePadding: 50,
                        // margin: 40,
                        nav:true,
                        
                        navText: ["<i class='icofont icofont-rounded-left prenext'></i>","<i class='icofont icofont-rounded-right prenext'></i>"],
                        responsive:{
                            0:{
                                items:1,
                                margin: 10,
                            },
                            577: {
                                items:2,
                                margin: 0,
                            },
                            768: {
                                items:1,
                                margin: 50,
                            },
                            980: {
                                items:1,
                                margin: 0,
                            },
                            992:{
                                items:2,
                                margin: 50,
                            },
                            
                            1200:{
                                items:2,
                                margin: 0,
                            },
                            1400:{
                                items:2,
                                margin: 0,
                            }
                        }
                    });
            
            
            
                    //rerwd
                    
                });
                //========











                
    var count = 1;
    countEl = document.getElementById("count");
    let cplus = document.getElementById('plus');
    let cminus = document.getElementById('minus');

    cplus.addEventListener('click', plus);
    cminus.addEventListener('click', minus);
    function plus() {
        count++;
        countEl.value = count;


    }
    function minus() {
        if (count > 1) {
            count--;
            countEl.value = count;
        }
    }


    let joker = document.getElementById('haha');


   

    let price;


    function getPrice() {
        let conn = new XMLHttpRequest();
        conn.open('get', './PHP_program/shop_cart/shopgpri.php', true);
        conn.send(null);
        conn.onreadystatechange = function(){
            if (conn.readyState==4) {
                if (conn.status ==200) {
                    price = JSON.parse(conn.responseText);
                    price.zero=0;
                } else {
                    alert(conn.status);
                }
            }
        }
    }

    getPrice();




    let sum;
    let buyList = new Array();
    $('.sli').click(move);
    function move(e) {
        cl = this.cloneNode(true);
        let fo = document.createElement('div');
        count = 1;
        sum =0;

        

        if (e.currentTarget.children[0].getAttribute('kind')=='clothe') {
            $('#haha').find('.clothe').remove();
        }
        if (e.currentTarget.children[0].getAttribute('kind')=='goggle') {
            $('#haha').find('.goggle').remove();
        }
        if (e.currentTarget.children[0].getAttribute('kind')=='mask') {
            $('#haha').find('.mask').remove();
        }


        
        
        
        cl.children[1].remove(); //remove price
        cl.classList.remove('sli');
        cl.classList.add('ac');

        cl.classList.add(cl.children[0].getAttribute('kind'));
            
        
        // 
        joker.appendChild(cl);

        for ( let i = 0; i < joker.children.length; i++) {
            if (joker.children[i].classList.contains('ac')) {
                sum += price[joker.children[i].children[0].getAttribute('da')];
            }
            $('.shop-two-item-pirce').text(sum);
        }


        document.getElementById('count').value = '1';

        
        
        let oo = cl.children[0].getAttribute('kind');
        $(`.shop-item-detail`).addClass('hid');
        $(`.shop-item-detail[kind=${oo}]`).removeClass('hid');
        



        function additem() {
            buyList = [];
            for (let i = 0; i<joker.getElementsByClassName('ac').length; i++ ) {
                
                buyList.push(joker.getElementsByClassName('ac')[i].children[0].getAttribute('kind') +'-'+ joker.getElementsByClassName('ac')[i].firstElementChild.getAttribute('da'));


            }
        }
        additem();

    }
    

    document.getElementById('minus').addEventListener('click', function(){
        
        $('.shop-two-item-pirce').text( sum *  parseInt( document.getElementById('count').value ) );
        if (  isNaN($('.shop-two-item-pirce').text()) ) {
            $('.shop-two-item-pirce').text('$'+0);
        }
    });

    document.getElementById('plus').addEventListener('click', function(){
        
        $('.shop-two-item-pirce').text( sum *  parseInt( document.getElementById('count').value ) );
        if (  isNaN($('.shop-two-item-pirce').text()) ) {
            $('.shop-two-item-pirce').text('$'+0);
        }
    });

    //input
    document.getElementById('count').addEventListener('input',function(){
        $('.shop-two-item-pirce').text( sum *  parseInt( document.getElementById('count').value ) );
        if (  $('#count').val()=='') {
            $('.shop-two-item-pirce').text(0);
        }
    });





    document.getElementById('re').addEventListener('click', function(){
        $('#haha').find('.ac').remove();
        $('.shop-two-item-pirce').text(0);
        document.getElementById('count').value = '1';
        sum = 0;

        buyList = [];
    });

    document.getElementById('shop-two-mobile-choice').addEventListener('click', function(){
        const shopOne = document.getElementById('shop-one');
        shopOne.classList.add('mobile-shop');
        
    });

    document.getElementById('mobile-arrow').addEventListener('click', function(){
        const shopOne = document.getElementById('shop-one');
        shopOne.classList.remove('mobile-shop');
        
    });



    //add cart
    //

    const addCartbtn = document.getElementById('addbtn');
    let N = 1;
    
    var storage = sessionStorage;
    
    addCartbtn.addEventListener('click', function(){
        let cartall=0;
        if (buyList.length==0) {
            alert('請先選');
            N = null;
        } else {
            N=1;
            while ($.inArray(N.toString() , Object.keys(storage) ) !=-1 ) {
                N++;
            }
            storage[`${N}`]='';
            for (let i = 0 ; i < buyList.length; i++) {
                if (i == 0) {
                    storage[`${N}`] +=  `${buyList[i]}`;
                } else {
                    storage[`${N}`] +=  `, ${buyList[i]}`;
                }
            }
            storage[`${N}`] +=  `, ${sum*count}, ${count}`;
        }

        
        if (N!=null) {
            let newitemD;

           
            newitemD = document.createElement('div');

            newitemD.className="cart-product-item";

            
            newitemD.innerHTML = `<div class="ord-img"></div>
                <div class="ord_pst ord-n">
                    ${storage.getItem(N).split(', ')[storage.getItem(N).split(', ').length-1]}
                </div>
                <div class="ord_pst ord-price">
                    ${storage.getItem(N).split(', ')[storage.getItem(N).split(', ').length-2]}
                </div>

                <div class="ord_pst ord-remove">
                <button class="btnremove" id="${N}">刪除</button>
                </div>
            `;

            
            itemL = storage.getItem(N).split(', ')
            for ( let j = 0 ; j<itemL.length-2; j++) {

                let symposition = itemL[j].indexOf('-');
                if (itemL[j].substring(0, symposition) == 'clothe') {
                    let divordpic = document.createElement('div');
                    let divimg = document.createElement('img');
                    divordpic.className = "ord-pic";

                    let da = itemL[j].substring(symposition+1);
                    let src = document.querySelector(`[da='${da}']`).getAttribute('src');
                    divimg.src = src;

                    divimg.setAttribute('da',`${itemL[j]}`);
                    divordpic.appendChild(divimg);
                    newitemD.firstChild.appendChild(divordpic);

                } else if (itemL[j].substring(0, symposition) == 'goggle'){
                    let divordpic = document.createElement('div');
                    let divimg = document.createElement('img');
                    divordpic.className = "ord-pic";

                    let da = itemL[j].substring(symposition+1);
                    let src = document.querySelector(`[da='${da}']`).getAttribute('src');
                    divimg.src = src;

                    divimg.setAttribute('da',`${itemL[j]}`);
                    divordpic.appendChild(divimg);
                    newitemD.firstChild.appendChild(divordpic);
                } else {
                    let divordpic = document.createElement('div');
                    let divimg = document.createElement('img');
                    divordpic.className = "ord-pic";

                    let da = itemL[j].substring(symposition+1);
                    let src = document.querySelector(`[da='${da}']`).getAttribute('src');
                    divimg.src = src;

                    divimg.setAttribute('da',`${itemL[j]}`);
                    divordpic.appendChild(divimg);
                    newitemD.firstChild.appendChild(divordpic);
                }


                cartListInner.appendChild(newitemD);
                
            }
            $('.btnremove').click(deleteItem);
        } 
        

        //cartaddsumall
        
        for (let i of Object.keys(storage)) { 
            if (!(isNaN(parseInt(i)))) {
                cartall+=parseInt(storage[i].split(', ')[storage[i].split(', ').length-2]);
            }
        }
           
            
        
        $('#cart-total').text(cartall);


        if ( $('.cart-product-all').children().length==0) {
            $('#send').prop('disabled', true);
        } else {
            $('#send').prop('disabled', false);
        }
        
    });

    //remove cart
    function deleteItem(e) {
        let cartall=0;
        this.parentNode.parentNode.remove();

        storage.removeItem(this.id);

        
        //cart sum pri
        for (let i of Object.keys(storage)) { 
            if (!(isNaN(parseInt(i)))) {
                cartall+=parseInt(storage[i].split(', ')[storage[i].split(', ').length-2]);
            }
        }
        $('#cart-total').text(cartall);


        if ( $('.cart-product-all').children().length==0) {
            $('#send').prop('disabled', true);
        } else {
            $('#send').prop('disabled', false);
        }
        
    }




    //cart
    const cartshow = document.getElementById('cart');
    const cartListInner = document.getElementById('cart-product-all');
    cartshow.addEventListener('click', function  (){   
        let cartall=0;
        if (document.getElementsByClassName('cart-product-item')) {
            $('.cart-product-item').remove();
        }
        $('.cart-list').removeClass('hid');
        if (storage.length) {
            
            let newitemD;

            for( let i of Object.keys(storage)) {
                newitemD = document.createElement('div');

                newitemD.className="cart-product-item";

                
                newitemD.innerHTML = `<div class="ord-img"></div>
                    <div class="ord_pst ord-n">
                        ${storage.getItem(i).split(', ')[storage.getItem(i).split(', ').length-1]}
                    </div>
                    <div class="ord_pst ord-price">
                        ${storage.getItem(i).split(', ')[storage.getItem(i).split(', ').length-2]}
                    </div>

                    <div class="ord_pst ord-remove">
                    <button class="btnremove" id="${i}">刪除</button>
                    </div>
                `;

                itemL = storage.getItem(i).split(', ')
                for ( let j = 0 ; j<itemL.length-2; j++) {
                    let symposition = itemL[j].indexOf('-');
                    if (itemL[j].substring(0, symposition) == 'clothe') {
                        
                        let divordpic = document.createElement('div');
                        let divimg = document.createElement('img');
                        divordpic.className = "ord-pic";
                        
                        let da = itemL[j].substring(symposition+1);
                        let src = document.querySelector(`[da='${da}']`).getAttribute('src');
                        divimg.src = src;
                        
                        divimg.setAttribute('da',`${itemL[j]}`);
                        divordpic.appendChild(divimg);
                        newitemD.firstChild.appendChild(divordpic);

                    } else if (itemL[j].substring(0, symposition) == 'goggle'){
                        let divordpic = document.createElement('div');
                        let divimg = document.createElement('img');
                        divordpic.className = "ord-pic";

                        let da = itemL[j].substring(symposition+1);
                        let src = document.querySelector(`[da='${da}']`).getAttribute('src');
                        divimg.src = src;

                        divimg.setAttribute('da',`${itemL[j]}`);
                        divordpic.appendChild(divimg);
                        newitemD.firstChild.appendChild(divordpic);
                    } else {
                        let divordpic = document.createElement('div');
                        let divimg = document.createElement('img');
                        divordpic.className = "ord-pic";


                        let da = itemL[j].substring(symposition+1);
                        let src = document.querySelector(`[da='${da}']`).getAttribute('src');
                        divimg.src = src;


                        divimg.setAttribute('da',`${itemL[j]}`);
                        divordpic.appendChild(divimg);
                        newitemD.firstChild.appendChild(divordpic);
                    }


                    cartListInner.appendChild(newitemD);
                    
                }
                
            }
            $('.btnremove').click(deleteItem);
            
            
        }

        if ( $('.cart-product-all').children().length==0) {
            $('#send').prop('disabled', true);
        } else {
            $('#send').prop('disabled', false);
        }
        



        //cart sum pri
        for (let i of Object.keys(storage)) { 
            if (!(isNaN(parseInt(i)))) {
                cartall+=parseInt(storage[i].split(', ')[storage[i].split(', ').length-2]);
            }
        }
        $('#cart-total').text(cartall);
    });



    //send ord
    const cartListC = document.getElementById('cart-list-close');
    cartListC.addEventListener('click', function(){
        $('.cart-list').addClass('hid');
    });

    document.getElementById('send').addEventListener('click', send);
    function send() {

        

        let conn = new XMLHttpRequest();
        
        conn.open('post', './PHP_program/shop_cart/shopord.php', true);

        conn.send(JSON.stringify(storage));
        conn.onreadystatechange = function() {
            if (conn.readyState==4) {
                if (conn.status == 200) {

                   
                    
                    if (conn.responseText==1) {
                        for (let i of  Object.keys(storage)) {
                            if ( !(isNaN(parseInt(i)))){
                                storage.removeItem(`${i}`);
                            }
                        }

                        
                        $('.cart-product-all').children().remove();
                        $('#cart-total').text(0);

                        if ( $('.cart-product-all').children().length==0) {
                            $('#send').prop('disabled', true);
                        } else {
                            $('#send').prop('disabled', false);
                        }
                        alert('訂單送出');

                    }  else {
                        alert('請先登入');
                    }
                    
                } else {
                    alert(conn.status);
                }
            }
        }
        
    }



    //scro

    $(".scroll").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".shop-detail").offset().top -130
        }, 2000);
    });




















































                //
            } else {
                alert(conn.status);
            }
        }
    }
}


// $('.myowl-1-1').owlCarousel({
//     // stagePadding: 50,
    
//     nav:true,
    
//     navText: ["<i class='icofont-rounded-left prenext'></i>","<i class='icofont-rounded-right prenext'></i>"],
//     responsive:{
//         0:{
//             items:1,
//             margin: 10,
//         },
//         577: {
//             items:2,
//             margin: 0,
//         },
//         768: {
//             items:1,
//             margin: 50,
//         },
//         980: {
//             items:1,
//             margin: 0,
//         },
//         992:{
//             items:2,
//             margin: 50,
//         },
        
//         1200:{
//             items:2,
//             margin: 0,
//         },
//         1400:{
//             items:2,
//             margin: 0,
//         }

//     }
// });




$('.myowl-2').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    // navContainer: '#customNav',
    navText: ["<i class='icofont icofont-rounded-left prenext pre'></i>","<i class='icofont icofont-rounded-right prenext next'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992: {
            items:2
        },

        1055:{
            items:3
        }
    }
});





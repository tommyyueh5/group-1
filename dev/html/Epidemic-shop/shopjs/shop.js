document.write("<script type='text/javascript' src='/dev/js/var.js'></script>");
window.addEventListener('load', ()=>{
    

    let b = $('.myowl-1-1').attr('tar');
    $(`.owl-all[tar=dress]`).owlCarousel('destroy'); 
    $(`.owl-all[tar=hand]`).owlCarousel('destroy'); 
    $(`.owl-all[tar=goggles]`).owlCarousel('destroy'); 
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
            
            navText: ["<i class='icofont-rounded-left prenext'></i>","<i class='icofont-rounded-right prenext'></i>"],
            responsive:{
                0:{
                    items:2,
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


    let price = {   'jacket-1': 420, 'jacket-2': 450, 'jacket-3': 410,
                    'jacket-4': 400, 'jacket-5': 430, 'jacket-6': 440,
                    'goggles-1': 250, 'goggles-2': 220, 'goggles-3': 240,
                    'goggles-4': 230, 'goggles-5': 200, 'goggles-6': 220,
                    'mask-1': 5, 'mask-2': 6, 'mask-3': 7,
                    'mask-4': 8, 'mask-5': 9, 'mask-6': 10,
                    'hand-1': 150, 'hand-2': 160, 'hand-3': 170,
                    'hand-4': 180, 'hand-5': 190, 'hand-6': 140,
                    'zero': 0,
    
    };

    let sum;

    $('.sli').click(move);
    function move(e) {
        let cl = this.cloneNode(true);
        let fo = document.createElement('div');
        count = 1;
        sum =0;

        

        if (e.currentTarget.children[0].getAttribute('da').substr(0, cl.children[0].getAttribute('da').length-2)=='jacket') {
            $('#haha').find('.jacket').remove();
        }
        if (e.currentTarget.children[0].getAttribute('da').substr(0, cl.children[0].getAttribute('da').length-2)=='goggles') {
            $('#haha').find('.goggles').remove();
        }
        if (e.currentTarget.children[0].getAttribute('da').substr(0, cl.children[0].getAttribute('da').length-2)=='mask') {
            $('#haha').find('.mask').remove();
        }


        
        
        
        
        cl.children[1].remove(); //remove price
        cl.classList.remove('sli');
        cl.classList.add('ac');

        cl.classList.add(cl.children[0].getAttribute('da').substr(0, cl.children[0].getAttribute('da').length-2));
            
        
        // 
        joker.appendChild(cl);

        for ( let i = 0; i < joker.children.length; i++) {
            if (joker.children[i].classList.contains('ac')) {

                sum += price[joker.children[i].children[0].getAttribute('da')];
            }
            $('.shop-two-item-pirce').text(sum);
        }


        // price init
        document.getElementById('count').value = '1';

        
        
        let oo = cl.children[0].getAttribute('da').substr(0, cl.children[0].getAttribute('da').length-2);
        $(`.shop-item-detail`).addClass('hid');
        $(`.shop-item-detail[da=${oo}]`).removeClass('hid');
        
        // 
    }
    

    document.getElementById('minus').addEventListener('click', function(){
        
        $('.shop-two-item-pirce').text(  sum *  parseInt( document.getElementById('count').value ) );
        if (  isNaN($('.shop-two-item-pirce').text()) ) {
            $('.shop-two-item-pirce').text('$'+0);
        }
    });

    document.getElementById('plus').addEventListener('click', function(){
        
        $('.shop-two-item-pirce').text(  sum *  parseInt( document.getElementById('count').value ) );
        console.log($(typeof '.shop-two-item-pirce').text());
        if (  isNaN($('.shop-two-item-pirce').text()) ) {
            $('.shop-two-item-pirce').text('$'+0);
        }
    });

    //input
    document.getElementById('count').addEventListener('input',function(){

        
        $('.shop-two-item-pirce').text(  sum *  parseInt( document.getElementById('count').value ) );


        if (  $('#count').val()=='') {
            $('.shop-two-item-pirce').text(0);
        }
        
    });





    document.getElementById('re').addEventListener('click', function(){
        $('#haha').find('.ac').remove();
        $('.shop-two-item-pirce').text(0);
        document.getElementById('count').value = '1';
        sum = 0;
    });






});



$('.myowl-1-1').owlCarousel({
    // stagePadding: 50,
    
    nav:true,
    
    navText: ["<i class='icofont-rounded-left prenext'></i>","<i class='icofont-rounded-right prenext'></i>"],
    responsive:{
        0:{
            items:2,
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

$('.myowl-2').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    // navContainer: '#customNav',
    navText: ["<i class='icofont-rounded-left prenext pre'></i>","<i class='icofont-rounded-right prenext next'></i>"],
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


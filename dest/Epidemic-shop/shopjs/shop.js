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
            stagePadding: 50,
            margin: 40,
            nav:true,
            
            navText: ["<i class='icofont-rounded-left prenext'></i>","<i class='icofont-rounded-right prenext'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });
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
    });

    document.getElementById('plus').addEventListener('click', function(){
        console.log(sum);
        $('.shop-two-item-pirce').text(  sum *  parseInt( document.getElementById('count').value ) );
    });

    //input
    document.getElementById('count').addEventListener('input',function(){
        if ($('.shop-two-item-pirce').text()==NaN) {
            $('.shop-two-item-pirce').text(0);
        }
        $('.shop-two-item-pirce').text(        price[$('#haha').children().children('img').attr('da')] * parseInt($('#count').val())  )
    });

    // function makeResizableDiv(div) {
    //     const element = document.querySelector(div);
    //     const resizers = document.querySelectorAll(div + ' .resizer')
    //     const minimum_size = 20;
    //     let original_width = 0;
    //     let original_height = 0;
    //     let original_x = 0;
    //     let original_y = 0;
    //     let original_mouse_x = 0;
    //     let original_mouse_y = 0;
    //     for (let i = 0;i < resizers.length; i++) {
    //         const currentResizer = resizers[i];

    //         currentResizer.addEventListener('mousedown', function(e) {
    //             e.preventDefault()
    //             original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
    //             original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
    //             original_x = element.getBoundingClientRect().left;
    //             original_y = element.getBoundingClientRect().top;
    //             original_mouse_x = e.pageX;
    //             original_mouse_y = e.pageY;
    //             window.addEventListener('mousemove', resize)
    //             window.addEventListener('mouseup', stopResize)
    //         })
          
    //         function resize(e) {
    //             if (currentResizer.classList.contains('bottom-right')) {
    //                 const width = original_width + (e.pageX - original_mouse_x);
    //                 const height = original_height + (e.pageY - original_mouse_y)
    //                 if (width > minimum_size) {
    //                     element.style.width = width + 'px'
    //                 }
    //                 if (height > minimum_size) {
    //                     element.style.height = height + 'px'
    //                 }
    //             }
    //             else if (currentResizer.classList.contains('bottom-left')) {
    //                 const height = original_height + (e.pageY - original_mouse_y)
    //                 const width = original_width - (e.pageX - original_mouse_x)
    //                 if (height > minimum_size) {
    //                     element.style.height = height + 'px'
    //                 }
    //                 if (width > minimum_size) {
    //                     element.style.width = width + 'px'
    //                     element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
    //                 }
    //             }
    //             else if (currentResizer.classList.contains('top-right')) {
    //                 const width = original_width + (e.pageX - original_mouse_x)
    //                 const height = original_height - (e.pageY - original_mouse_y)
    //                 if (width > minimum_size) {
    //                     element.style.width = width + 'px'
    //                 }
    //                 if (height > minimum_size) {
    //                     element.style.height = height + 'px'
    //                     element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
    //                 }
    //             }
    //             else {
    //                 const width = original_width - (e.pageX - original_mouse_x)
    //                 const height = original_height - (e.pageY - original_mouse_y)
    //                 if (width > minimum_size) {
    //                     element.style.width = width + 'px'
    //                     element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
    //                 }
    //                 if (height > minimum_size) {
    //                     element.style.height = height + 'px'
    //                     element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
    //                 }
    //             }
    //         }
          
    //         function stopResize() {
    //             window.removeEventListener('mousemove', resize)
    //         }
    //     }
    // }
      
      

    


    // for (let i = 0 ; i<document.getElementsByClassName('sli').length ; i++) {
    //     document.getElementsByClassName('sli')[i].addEventListener('click', function(e){
    //         joker.appendChild(e.currentTarget);
    //     } );
    // }






});



$('.myowl-1-1').owlCarousel({
    stagePadding: 50,
    margin: 40,
    nav:true,
    
    navText: ["<i class='icofont-rounded-left prenext'></i>","<i class='icofont-rounded-right prenext'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
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
            items:3
        },
        1000:{
            items:3
        }
    }
});


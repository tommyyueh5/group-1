window.addEventListener('load', ()=>{
    
    $('.type-ico img').click(function(){


        let tem = $(this).attr("src");
        let w = $(this).attr("src").charAt(($(this).attr("src").length)-5);
        let index = $(this).attr("src").length-5;
        let end = $(this).attr('src').substring(index);
        let start = $(this).attr('src').substring(0, index);
        if (w=='b') {
            $(this).attr('src', start + end.replace('b','w'));
        } 

        // console.log($('.type-ico img').not(this)[0]);
        //把其他的設定回黑色，jquery 做不到，用js
        for ( let i =0 ; i<$('.type-ico img').not(this).length; i++ ) {
            $('.type-ico img').not(this)[i].setAttribute('src', $('.type-ico img').not(this)[i].getAttribute('src').replace('w.png','b.png'));
        }

        let a = $(this).parent().attr('tar');
        console.log(a);
        // $('.myowl-1 .myowl-item[tar]').addClass('hid');
        // $(`'.myowl-1 .myowl-item[tar=${a}]`).removeClass('hid');



    });
});
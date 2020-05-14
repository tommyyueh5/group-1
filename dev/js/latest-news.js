// --------------------------影片----------------------------
window.addEventListener('load', function(){
    var current = 0,
    $preview = $('#preview'),
    $carouselEl = $('#carousel'),
    $carouselItems = $carouselEl.children(),
    carousel = $carouselEl.elastislide({
        current: current,
        minItems: 3,
        onClick: function (el, pos, evt) {

            changeImage(el, pos);
            evt.preventDefault();

        },
        onReady: function () {

            changeImage($carouselItems.eq(current), current);

        }
    });

    function changeImage(el, pos) {
        $preview.attr('src', el.data('preview'));
        $carouselItems.removeClass('current-img');
        el.addClass('current-img');
    }
});

// --------------------------台灣地圖----------------------------

    $(function () {
        $.ajax({
            type: 'get',
            url: '/dest/js/map/taiwanmap/index.json',
            success: function (data) {
                pushDom(data.data);
            },

        });

        function pushDom(data1) {
            var vm = new Vue({
                el: '#app',
                data: {
                    filter: "",
                    peps: data1
                
                },
            
                computed: {
                    now_area: function () {
                        var vobj = this;

                        var result = this.peps.filter(function (obj) {
                        
                            return obj.number == vobj.filter;

                        });
                        console.log(result)
                    
                        if (result.length == 0) {
                            return null;

                        }

                        return result[0];

                    }

                }

            });

                $("path").mouseenter(function (e) {
                    console.log($(this).attr("data-name"));
                    var tagname = $(this).attr("data-name");
                    vm.filter = tagname;
                
            });
        }
    });

// --------------------------新聞頁籤----------------------------

$(function(){
    $("a.tab").on("click", function(e){
      e.preventDefault();
      

      $(this).closest("ul").find("a.tab").removeClass("-on");
      $(this).addClass("-on");
      

      $("div.tab").removeClass("-on");
      $("div.tab." + $(this).attr("data-target")).addClass("-on");
    });
});



// ----------------------------------------------------------------
window.addEventListener('load', ()=>{
    

    // let b = $('.myowl-1-1').attr('tar');
    // $(`.owl-all[tar=dress]`).owlCarousel('destroy'); 
    // $(`.owl-all[tar=hand]`).owlCarousel('destroy'); 
    // $(`.owl-all[tar=goggles]`).owlCarousel('destroy'); 
    // $(`.owl-all[tar=mask]`).owlCarousel('destroy'); 


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
        //rerwd
    });

    $('.myowl-1-1').owlCarousel({
        // stagePadding: 50,

        nav:true,

        navText: ["<i class='icofont-rounded-left prenext'></i>","<i class='icofont-rounded-right prenext'></i>"],
        responsive:{
            0:{
                items:1,
                margin: 50,
                // stagePadding: 95,
            },
            576: {
                items:1,
                margin: 10,
                // stagePadding: 95,
            },
            645: {
                items:2,
                margin: 50,
                // stagePadding: 75,
            },
            767: {
                items:3,
                margin: 0,
                // stagePadding: 60,
            },
            991:{
                items:2,
                margin: 50,
                // stagePadding: 100,
            },
            1000:{
                items:2,
                margin: 40,
                // stagePadding: 65,
            },
            1200:{
                items:2,
                margin: 40,
                // stagePadding: 65,
            },
            1400:{
                items:2,
                margin: 0,
                // stagePadding: 85,
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
});
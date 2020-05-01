document.write("<script type='text/javascript' src='/dest/js/var.js'></script>");

$(function () {
    $.ajax({
        type: 'get',
        // url: '/dest/latest-news/map/taiwanmap/index.json',
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


// $(document).ready(function() {

  
  
// });



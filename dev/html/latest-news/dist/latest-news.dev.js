"use strict";

document.write("<script type='text/javascript' src='../../dev/js/var.js'></script>");
$(function () {
  $.ajax({
    type: 'get',
    url: './dev/html/latest-news/map/taiwanmap/index.json',
    success: function success(data) {
      pushDom(data.data);
    }
  });

  function pushDom(data1) {
    var vm = new Vue({
      el: '#app',
      data: {
        filter: "",
        peps: data1
      },
      computed: {
        now_area: function now_area() {
          var vobj = this;
          var result = this.peps.filter(function (obj) {
            return obj.number == vobj.filter;
          });
          console.log(result);

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
}); // d3------------------
function getOrder() {
    var memno = sessionStorage.getItem('no');
    $.ajax({
        url: './PHP_program/MEM_Order.php',
        type: "POST",
        dataType: 'json',
        data: {
            memno: memno,
        },
        success(data) {
            for (let i = 0; i < data.length; i++) {
                ordNo = data[i].ORD_NO;
                ordPrice = data[i].ORD_PRI;
                ordDate = data[i].EST_DAT;

                $('.tab4').append(`
                    <div class="order">
                        <div>
                            <h3>訂單編號${ordNo}</h3>
                        </div>
                        <div>
                            <h3>總金額：${ordPrice}元</h3>
                        </div>
                        <div>
                            <h3>${ordDate}</h3>
                        </div>
                    </div>
                    
                `)
            }
        },
        error: function(xhr) {
            alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
        }
    })
};
$(document).ready(function() {
    getOrder();
});
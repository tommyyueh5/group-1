function $id(id) {
    return document.getElementById(id);
}

function $cs(cs) {
    return document.querySelector('.' + cs);
}

function $csa(csa) {
    return document.querySelectorAll('.' + csa);
}

function $tag(tag) {
    return document.getElementsByTagName(tag);
}

//刪除文章
window.addEventListener('load', () => {
    let edit = $id('edit');
    let flag = false;
    // let arr_pf = [];

    edit.addEventListener('click', () => {
        let forum_data = JSON.parse(sessionStorage.getItem('forum_data'))
        if (forum_data == '') {
            return
        }
        Array.from($csa('p_forum')).forEach((item, index) => {
            // console.log(item);
            if (item.children[0].length == '') {
                return
            }
            item.children[0].addEventListener('click', function (e) {
                e.stopPropagation();
                item.remove();
                let NODiscNum = forum_data[index].DIS_NO;
                fetch('./PHP_program/Back_End/removeDicBack_end.php', {
                    method: 'POST',
                    body: JSON.stringify({
                        "NONum": NODiscNum
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                    }
                }).then(resp => {
                    if (resp.ok) {
                        return resp.text();
                    }
                }).then(text => {
                    console.log(text);
                }).catch(err => {
                    console.log('有問題');
                })
                
            }, true)
            flag = true
        });
            if($id('edit').innerText == '取消'){
                $id('edit').addEventListener('click',()=>{
                    window.location.reload()
                })
            }
        
    })

})

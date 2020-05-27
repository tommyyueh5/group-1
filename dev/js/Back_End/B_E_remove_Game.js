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
    // let arr_pf = [];

    edit.addEventListener('click', () => {
        let game_data = JSON.parse(sessionStorage.getItem('game_data'))
        console.log(game_data);
        
        if (game_data == '') {
            return
        }
        Array.from($csa('p_game')).forEach((item, index) => {
            console.log(item);
            if (item.children[0].length == '') {
                return
            }
            item.children[0].addEventListener('click', function (e) {
                e.stopPropagation();
                item.remove();
                let NOGameNum = game_data[index].GAME_NO;
                fetch('./PHP_program/Back_End/removeGameBack_end.php', {
                    method: 'POST',
                    body: JSON.stringify({
                        "NONum": NOGameNum
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
        })
    })

})

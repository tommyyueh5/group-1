function doFirst() {
    document.getElementById('editimage').onchange = fileChange;
    
    document.getElementById('save').onclick = function() {
        let image = document.getElementsByClassName('thumbnail')[0];
        image.src = '/dest/image/member/member_pic2.jpeg';

    }

    document.getElementById('cancel').onclick = function() {
        let image = document.getElementsByClassName('thumbnail')[0];
        // image.src = '/dest/image/member/member_pic2.jpeg';
    }
};

function fileChange() {
    let file = document.getElementById('editimage').files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load', function() {
        let image = document.getElementsByClassName('thumbnail')[0];
        image.src = this.result;
        
        console.log(this.result);
        
    });
};

window.addEventListener('load', doFirst);

window.onload = function() {
    document.querySelector('#btn-forward').onclick = picForward;
    document.querySelector('#btn-back').onclick = picBack;
}

function picForward() {
    let pictures = document.querySelectorAll('.picture-img');
    let picNum = pictures.length;
    let picHeight = parseInt(window.getComputedStyle(pictures[0]).height);
    let offset = pictures[0].style.transform ? pictures[0].style.transform.match(/-{0,1}\d+/g)[5] : 0;
    if (offset > -(picNum - 1) * picHeight) {
        pictures.forEach((pic) => {
            pic.style.transform = 'matrix(1,0,0,1,0,' + (offset - picHeight) + ')';
        })

        let selected = document.querySelector('.position-selected');
        let index = parseInt(selected.className.match(/\d/));
        selected.classList.remove('position-selected');
        let nextIndex = '.position-' + (index + 1);
        document.querySelector(nextIndex).classList.add('position-selected');
    } else {
        pictures.forEach((pic) => {
            pic.style.transform = 'matrix(1,0,0,1,0,0)';
        })
        document.querySelector('.position-selected').classList.remove('position-selected');
        document.querySelector('#position>div:first-child').classList.add('position-selected');
    }
}

function picBack() {
    let pictures = document.querySelectorAll('.picture-img');
    let picNum = pictures.length;
    let picHeight = parseInt(window.getComputedStyle(pictures[0]).height);
    let offset = pictures[0].style.transform ? pictures[0].style.transform.match(/-{0,1}\d+/g)[5] : 0;
    if (offset < 0) {
        pictures.forEach((pic) => {
            pic.style.transform = 'matrix(1,0,0,1,0,' + (parseInt(offset) + parseInt(picHeight)) + ')';
        })

        let selected = document.querySelector('.position-selected');
        let index = parseInt(selected.className.match(/\d/));
        selected.classList.remove('position-selected');
        let nextIndex = '.position-' + (index - 1);
        console.log(nextIndex, document.querySelector(nextIndex))
        document.querySelector(nextIndex).classList.add('position-selected');
    } else {
        pictures.forEach((pic) => {
            pic.style.transform = 'matrix(1,0,0,1,0,' + -picHeight * (picNum - 1) + ')';
        })
        document.querySelector('.position-selected').classList.remove('position-selected');
        document.querySelector('#position>div:last-child').classList.add('position-selected');
    }
}
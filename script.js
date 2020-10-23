const getElem = (selector, isArray) => {
    if (isArray) {
        return document.querySelectorAll(selector);
    }

    return document.querySelector(selector);
} 

const e = (elem, action, cb) => {
    return elem.addEventListener(action, cb);
}

const customCursor = (e) => {
    cursor.style.top = e.pageY + 'px'; 
    cursor.style.left = e.pageX + 'px'; 

    cursorShadow.style.top = e.pageY + 'px'; 
    cursorShadow.style.left = e.pageX + 'px'; 
}

const growCursor = () => {
    switch(currentStyle) {
        case 'style-6':
            cursor.style.height = '35px'
            cursor.style.width = '35px'
            cursorShadow.classList.add('cursor-shadow-style6')
            break;
        default:
            cursor.style.height = '35px'
            cursor.style.width = '35px'
            return;
    }
}

const shrinkCursor = () => {
    cursor.style.height = '20px'
    cursor.style.width = '20px'
    switch(currentStyle) {
        case 'style-6':
            cursorShadow.classList.remove('cursor-shadow-style6')
            break;
        default:
            cursor.style.height = '20px'
            cursor.style.width = '20px'
            return;
    }
}

const removeStyle = () => {
    const styles = [
        'style-one',
        'style-two',
        'style-three',
        'style-four',
        'style-five',
        'style-six',
        'style-seven',
        'style-eight',
    ];

    cursorShadow.style.display = 'none';
    cursorShadow.classList.remove('cursor-shadow-style6')

    styles.forEach(style => {
        cursor.classList.remove(style);
    });
}

const chooseStyle = (id) => {
    removeStyle();
    switch(id) {
        case 'style-1':
            currentStyle = id; 
            cursor.classList.add('style-one');
            styleName.textContent = 'The Orbit';
            styleName.textContent = 'The Orbit';
            break;
        case 'style-2':
            currentStyle = id;            
            cursor.classList.add('style-two');
            styleName.textContent = 'Crazy Moon';
            break;
        case 'style-3':
            currentStyle = id;
            cursor.classList.add('style-three');
            styleName.textContent = 'Shuriken';
            break;
        case 'style-4':
            currentStyle = id;
            cursor.classList.add('style-four');
            styleName.textContent = 'The Difference';
            break;
        case 'style-5':
            currentStyle = id;
            cursor.classList.add('style-five');
            styleName.textContent = 'The Scanner';
            break;
        case 'style-6':
            currentStyle = id;
            cursor.classList.add('style-six');
            cursorShadow.style.display = 'block';
            styleName.textContent = 'With Follower';
            break;
        default:
            return;
    }
}


var currentStyle = '';
const cursor = getElem('.cursor', false);
const cursorShadow = getElem('.cursor-shadow', false);
const styleBtn = getElem('.style', true);
const styleName = getElem('.title p');

e(window, 'mousemove', customCursor);

styleBtn.forEach(btn => {
    e(btn, 'mouseover', growCursor);
    e(btn, 'mouseleave', shrinkCursor);
    e(btn, 'click', () => chooseStyle(btn.id));
});


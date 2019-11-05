class Key {

    constructor(config) {
        this.eng = config.eng;
        this.rus = config.rus;
        this.type = config.type;
        this.size = config.size;
        this.row = config.row;
        this.id = config.ID;
        this.code = config.code;
    }

}

const ROW = {FIRST: 'FIRST', SECOND: 'SECOND', THIRD: 'THIRD', FOUTH: 'FOUTH', FIFTH: 'FIFTH'};
const LANGUAGE = {ENG: 'eng', RUS: 'rus', SELECTED: 'eng'};

const ALPHABET = [
    new Key({eng: '`', rus: 'ё', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id1', code: 'Backquote'}),
    new Key({eng: '1', rus: '1', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id2', code: 'Digit1'}),
    new Key({eng: '2', rus: '2', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id3', code: 'Digit2'}),
    new Key({eng: '3', rus: '3', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id4', code: 'Digit3'}),
    new Key({eng: '4', rus: '4', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id5', code: 'Digit4'}),
    new Key({eng: '5', rus: '5', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id6', code: 'Digit5'}),
    new Key({eng: '6', rus: '6', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id7', code: 'Digit6'}),
    new Key({eng: '7', rus: '7', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id8', code: 'Digit7'}),
    new Key({eng: '8', rus: '8', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id9', code: 'Digit8'}),
    new Key({eng: '9', rus: '9', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id10', code: 'Digit9'}),
    new Key({eng: '0', rus: '0', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id11', code: 'Digit0'}),
    new Key({eng: '-', rus: '-', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id-', code: 'Minus'}),
    new Key({eng: '=', rus: '=', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id=', code: 'Equal'}),
    new Key({eng: '<--', rus: '<--', type: 'BACKSPACE', size: 6, row: ROW.FIRST, ID: 'idBACKSPACE', code: 'Backspace'}),
    new Key({eng: 'Tab', rus: 'Tab', type: 'TAB', size: 6, row: ROW.SECOND, ID: 'idTAB', code: 'Tab'}),
    new Key({eng: 'q', rus: 'й', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idq', code: 'KeyQ'}),
    new Key({eng: 'w', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idw', code: 'KeyWe'}),
    new Key({eng: 'e', rus: 'у', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'ide', code: 'KeyE'}),
    new Key({eng: 'r', rus: 'к', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idr', code: 'KeyR'}),
    new Key({eng: 't', rus: 'е', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idt', code: 'KeyT'}),
    new Key({eng: 'y', rus: 'н', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idy', code: 'KeyY'}),
    new Key({eng: 'u', rus: 'г', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idu', code: 'KeyU'}),
    new Key({eng: 'i', rus: 'ш', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idi', code: 'KeyI'}),
    new Key({eng: 'o', rus: 'щ', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'ido', code: 'KeyO'}),
    new Key({eng: 'p', rus: 'з', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'ido', code: 'KeyP'}),
    new Key({eng: '[', rus: 'х', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'id[', code: 'BracketLeft'}),
    new Key({eng: ']', rus: 'ъ', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'id]', code: 'BracketRight'}),
    new Key({eng: '\\', rus: '\\', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'id1', code: 'Backslash'}),
    new Key({
        eng: 'Caps Lock',
        rus: 'Caps Lock',
        type: 'CAPS_LOCK',
        size: 7,
        row: ROW.THIRD,
        ID: 'idCAPS_LOCK',
        code: 'CapsLock'
    }),
    new Key({eng: 'a', rus: 'ф', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'ida', code: 'KeyA'}),
    new Key({eng: 's', rus: 'ы', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'ids', code: 'KeyS'}),
    new Key({eng: 'd', rus: 'в', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idd', code: 'KeyD'}),
    new Key({eng: 'f', rus: 'а', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idf', code: 'KeyF'}),
    new Key({eng: 'g', rus: 'п', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idg', code: 'KeyG'}),
    new Key({eng: 'h', rus: 'р', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idh', code: 'KeyH'}),
    new Key({eng: 'j', rus: 'о', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idj', code: 'KeyJ'}),
    new Key({eng: 'k', rus: 'л', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idk', code: 'KeyK'}),
    new Key({eng: 'l', rus: 'д', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idl', code: 'KeyL'}),
    new Key({eng: ';', rus: 'ж', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'id1', code: 'Semicolon'}),
    new Key({eng: '\'', rus: 'э', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'id1', code: 'Quote'}),
    new Key({eng: 'Enter', rus: 'Enter', type: 'ENTER', size: 7, row: ROW.THIRD, ID: 'idEnter', code: 'Enter'}),
    new Key({eng: 'Shift', rus: 'Shift', type: 'SHIFT', size: 9, row: ROW.FOUTH, ID: 'idShift', code: 'ShiftLeft'}),
    new Key({eng: 'z', rus: 'я', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idz', code: 'KeyZ'}),
    new Key({eng: 'x', rus: 'ч', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idx', code: 'KeyX'}),
    new Key({eng: 'c', rus: 'с', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idc', code: 'KeyC'}),
    new Key({eng: 'v', rus: 'м', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idv', code: 'KeyV'}),
    new Key({eng: 'b', rus: 'и', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idb', code: 'KeyB'}),
    new Key({eng: 'n', rus: 'т', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idn', code: 'KeyN'}),
    new Key({eng: 'm', rus: 'ь', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idm', code: 'KeyM'}),
    new Key({eng: ',', rus: 'б', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'id.', code: 'Comma'}),
    new Key({eng: '.', rus: 'ю', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'id1', code: 'Period'}),
    new Key({eng: '/', rus: '.', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'id1', code: 'Slash'}),
    new Key({eng: 'Shift', rus: 'Shift', type: 'SHIFT', size: 9, row: ROW.FOUTH, ID: 'id1', code: 'ShiftRight'}),
    new Key({eng: 'Ctrl', rus: 'Ctrl', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1', code: 'ControlLeft'}),
    new Key({eng: 'Win', rus: 'Win', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1', code: 'MetaLeft'}),
    new Key({eng: 'Alt', rus: 'Alt', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1', code: 'AltLeft'}),
    new Key({eng: 'Space', rus: 'Space', type: 'KEY', size: 20, row: ROW.FIFTH, ID: 'idSpace', code: 'Space'}),
    new Key({eng: 'ENG', rus: 'RUS', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1', code: 'AltRight'}),
    new Key({eng: 'Win', rus: 'Win', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1', code: 'MetaRight'}),
    new Key({eng: 'Menu', rus: 'Menu', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1', code: 'ContextMenu'}),
    new Key({eng: '\\', rus: '\\', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1', code: 'IntlBackslash'}),

];


let leftShiftKeyPressed = false;
let leftAltKeyPressed = false;
let CapsLockKeyPressed = false;


function init(lang) {
    let el = document.getElementById("idKeyboard");

    el.querySelectorAll('*').forEach(n => n.remove());

    ALPHABET.forEach(x => {
        let g = document.createElement('div');
        g.setAttribute("id", "id" + x.code);
        g.addEventListener('click', e => {
            let el = document.getElementById('idKeyboardInput');
            let text = el.innerText;
            text = text + x[lang];
            el.innerHTML = text;
        })
        let gSpan = document.createElement('span');
        let textNode = document.createTextNode(x[lang]);

        gSpan.append(textNode);
        g.append(gSpan);
        g.classList.add('g-' + x.size, 'key');
        el.append(g);
    })


}


document.addEventListener('keypress', (e) => {
    let el = document.getElementById('idKeyboardInput');
    let text = el.innerText;
    console.log('e.code keypress', e);
    let keyBox = document.getElementById('id' + e.code);
    keyBox.classList.add('bcgColor');

    if (e.code === 'Space') {
        text = text + '&nbsp';
    } else if (e.code === 'Enter') {
        text = text + "<br>";
    } else {
        
        text = text +  e.key;
    }

    
   
    el.innerHTML = text;

});

document.addEventListener('keyup', (e) => {
    console.log('e.code keyup', e);
    let keyBox = document.getElementById('id' + e.code);
    if (keyBox !== null) {
        keyBox.classList.remove("bcgColor");
    }
    if (e.code === 'ShiftLeft') {
        leftShiftKeyPressed = false;
    }
    if (e.code === 'AltLeft') {
        leftAltKeyPressed = false;
    }
});

function changeLanguage() {

    if (LANGUAGE.SELECTED === LANGUAGE.ENG) {
        LANGUAGE.SELECTED = LANGUAGE.RUS;
        init(LANGUAGE.RUS)
    } else {
        LANGUAGE.SELECTED = LANGUAGE.ENG;
        init(LANGUAGE.ENG)
    }
}

document.addEventListener('keydown', (e) => {
    console.log('e.code keydown', e);
    if (e.code === 'ShiftLeft') {
        leftShiftKeyPressed = true;
    }
    if (e.code === 'AltLeft') {
        leftAltKeyPressed = true;
    }

    if (leftAltKeyPressed && leftShiftKeyPressed) {
        changeLanguage();
    }

    if(e.code === 'CapsLockKey' && !CapsLockKeyPressed) {
        CapsLockKeyPressed = true;
    }
    if(e.code === 'CapsLockKey' && CapsLockKeyPressed) {
        CapsLockKeyPressed = false;
    }

    let el = document.getElementById('idKeyboardInput');
    let text = el.innerText;

    let keyBox = document.getElementById('id' + e.code);

    keyBox.classList.add('bcgColor');

    if (e.code === 'Backspace') {
        text = text.substring(0, text.length - 1);
    }
    el.innerHTML = text;
});







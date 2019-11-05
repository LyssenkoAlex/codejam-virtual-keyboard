class Key {

    constructor(config) {
        this.eng = config.eng;
        this.rus = config.rus;
        this.type = config.type;
        this.size = config.size;
        this.row = config.row;
        this.id = config.ID;
    }

}

const ROW = {FIRST: 'FIRST', SECOND: 'SECOND', THIRD: 'THIRD', FOUTH: 'FOUTH', FIFTH: 'FIFTH'};

const ALPHABET = [
    new Key({eng: '`', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id1'}),
    new Key({eng: '1', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id2'}),
    new Key({eng: '2', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id3'}),
    new Key({eng: '3', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id4'}),
    new Key({eng: '4', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id5'}),
    new Key({eng: '5', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id6'}),
    new Key({eng: '6', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id7'}),
    new Key({eng: '7', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id8'}),
    new Key({eng: '8', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id9'}),
    new Key({eng: '9', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id10'}),
    new Key({eng: '0', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id11'}),
    new Key({eng: '-', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id-'}),
    new Key({eng: '=', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIRST, ID: 'id='}),
    new Key({eng: '<--', rus: 'ц', type: 'BACKSPACE', size: 6, row: ROW.FIRST, ID: 'idBACKSPACE'}),
    new Key({eng: 'Tab', rus: 'ц', type: 'TAB', size: 6, row: ROW.SECOND, ID: 'idTAB'}),
    new Key({eng: 'q', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idq'}),
    new Key({eng: 'w', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idw'}),
    new Key({eng: 'e', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'ide'}),
    new Key({eng: 'r', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idr'}),
    new Key({eng: 't', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idt'}),
    new Key({eng: 'y', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idy'}),
    new Key({eng: 'u', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idu'}),
    new Key({eng: 'i', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'idi'}),
    new Key({eng: 'o', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'ido'}),
    new Key({eng: 'p', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'ido'}),
    new Key({eng: '[', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'id['}),
    new Key({eng: ']', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'id]'}),
    new Key({eng: '\\', rus: 'ц', type: 'KEY', size: 4, row: ROW.SECOND, ID: 'id1'}),
    new Key({eng: 'Caps Lock', rus: 'ц', type: 'CAPS_LOCK', size: 7, row: ROW.THIRD, ID: 'idCAPS_LOCK'}),
    new Key({eng: 'a', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'ida'}),
    new Key({eng: 's', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'ids'}),
    new Key({eng: 'd', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idd'}),
    new Key({eng: 'f', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idf'}),
    new Key({eng: 'g', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idg'}),
    new Key({eng: 'h', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idh'}),
    new Key({eng: 'j', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idj'}),
    new Key({eng: 'k', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idk'}),
    new Key({eng: 'l', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'idl'}),
    new Key({eng: ';', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'id1'}),
    new Key({eng: '\'', rus: 'ц', type: 'KEY', size: 4, row: ROW.THIRD, ID: 'id1'}),
    new Key({eng: 'Enter', rus: 'ц', type: 'ENTER', size: 7, row: ROW.THIRD, ID: 'idEnter'}),
    new Key({eng: 'Shift', rus: 'ц', type: 'SHIFT', size: 9, row: ROW.FOUTH, ID: 'idShift'}),
    new Key({eng: 'z', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idz'}),
    new Key({eng: 'x', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idx'}),
    new Key({eng: 'c', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idc'}),
    new Key({eng: 'v', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idv'}),
    new Key({eng: 'b', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idb'}),
    new Key({eng: 'n', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idn'}),
    new Key({eng: 'm', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'idm'}),
    new Key({eng: ',', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'id.'}),
    new Key({eng: '.', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'id1'}),
    new Key({eng: '/', rus: 'ц', type: 'KEY', size: 4, row: ROW.FOUTH, ID: 'id1'}),
    new Key({eng: 'Shift', rus: 'ц', type: 'SHIFT', size: 9, row: ROW.FOUTH, ID: 'id1'}),
    new Key({eng: 'Ctrl', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1'}),
    new Key({eng: 'Win', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1'}),
    new Key({eng: 'Alt', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1'}),
    new Key({eng: 'Space', rus: 'ц', type: 'KEY', size: 20, row: ROW.FIFTH, ID: 'id1'}),
    new Key({eng: 'Alt', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1'}),
    new Key({eng: 'Win', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1'}),
    new Key({eng: 'Win2', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1'}),
    new Key({eng: '\\', rus: 'ц', type: 'KEY', size: 4, row: ROW.FIFTH, ID: 'id1'}),

];


function init() {
    let el = document.getElementById("idKeyboard");

    ALPHABET.forEach(x => {
        let g = document.createElement('div');
        g.setAttribute("id", x.id)
        let gSpan = document.createElement('span');
        let textNode = document.createTextNode(x.eng);

        gSpan.append(textNode);
        g.append(gSpan);
        g.classList.add('g-' + x.size, 'key');
        el.append(g);
    })
}


document.addEventListener('keypress', (e) => {
    let el = document.getElementById('idKeyboardInput');
    let text = el.innerText;
    let keyBox = document.getElementById('id' + e.key);
    console.log(keyBox)
    keyBox.classList.add('bcgColor');

    if (e.code === 'Space') {
        text = text + '&nbsp';
    } else if (e.code === 'Enter') {
        text = text + "<br>";
    } else {
        text = text + e.key;
    }
    el.innerHTML = text;
    // keyBox.classList.remove("bcgColor");

});

document.addEventListener('keyup', (e) => {
    let keyBox = document.getElementById('id' + e.key);
    if (keyBox !== null) {
        keyBox.classList.remove("bcgColor");
    }
});

document.addEventListener('keydown', (e) => {
    console.log(e);
    let el = document.getElementById('idKeyboardInput');
    let text = el.innerText;

    if (e.code === 'Backspace') {
        text = text.substring(0, text.length - 1);
    }
    el.innerHTML = text;
});







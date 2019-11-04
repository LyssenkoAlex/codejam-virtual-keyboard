

class Key{

    constructor(config) {
        this.eng = config.eng;
        this.rus = config.rus;
        this.type = config.type;
        this.size = config.size;
        this.row = conf.row;
    }
 
}

const ROW = {FIRST:'FIRST', SECOND:'SECOND', THIRD, 'THIRD', FOUTH:FOUTH, FIFTH:'FIFTH'};

const ALPHABET = [
            new Key ({eng:'`', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'1', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'2', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'3', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'4', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'5', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'6', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'7', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'8', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'9', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'0', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'-', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'=', rus:'ц',type:'KEY',size:4, row:ROW.FIRST}),
            new Key ({eng:'<--', rus:'ц',type:'BACKSPACE',size:12, row:ROW.FIRST}),
            new Key ({eng:'Tab', rus:'ц',type:'TAB',size:8, row:ROW.SECOND}),
            new Key ({eng:'q', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'w', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'e', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'r', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'t', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'y', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'u', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'i', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'o', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'p', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'[', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:']', rus:'ц',type:'KEY',size:4, row:ROW.SECOND}),
            new Key ({eng:'\\', rus:'ц',type:'KEY',size:8, row:ROW.SECOND}),
            new Key ({eng:'Caps Lock', rus:'ц',type:'CAPS_LOCK',size:6, row:ROW.THIRD}),
            new Key ({eng:'a', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'s', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'d', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'f', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'g', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'h', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'j', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'k', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'l', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:';', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'\'', rus:'ц',type:'KEY',size:4, row:ROW.THIRD}),
            new Key ({eng:'Enter', rus:'ц',type:'ENTER',size:12, row:ROW.THIRD}),
            new Key ({eng:'Shift', rus:'ц',type:'SHIFT',size:12, row:ROW.FOUTH}),
            new Key ({eng:'z', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'x', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'c', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'v', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'b', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'n', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'m', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:',', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'.', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'/', rus:'ц',type:'KEY',size:4, row:ROW.FOUTH}),
            new Key ({eng:'Shift', rus:'ц',type:'SHIFT',size:4, row:ROW.FOUTH})
]


function init() {
    let el = document.getElementById("idKeyboard");

    
}
// ES6!!!!!

var hello = () => 'Hello, ES6 world!';

class 山 {
    constructor (name, height) {
        this.名前 = name;
        this.高さ = height;
    }

    登山可能 () {
        return true;
    }

    種類 () {
        return '山';
    }
}

class 火山 extends 山 {
    constructor (name, height, restrict) {
        super(name, height);
        this.入山規制 = restrict || false;
    }

    登山可能 () {
        if (this.入山規制) return false;
        return true;
    }

    種類 () {
        return '火山';
    }
}

var daisen = new 山('大山', 1729);
var hogeyama = new 火山('ほげ山', 2222, true);

console.log(
    hello(),
    daisen.名前,
    daisen.登山可能(),
    hogeyama.名前,
    hogeyama.種類(),
    hogeyama.登山可能()
);

// これを
// $ babel hello_es6.js > hello_es5.js
// トランスパイルすると、hello_es5.jsにES5が生成されて最高

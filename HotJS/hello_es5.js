// ES6!!!!!

'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var hello = function hello() {
    return 'Hello, ES6 world!';
};

var 山 = (function () {
    function 山(name, height) {
        _classCallCheck(this, 山);

        this.名前 = name;
        this.高さ = height;
    }

    _createClass(山, [{
        key: '登山可能',
        value: function _() {
            return true;
        }
    }, {
        key: '種類',
        value: function _() {
            return '山';
        }
    }]);

    return 山;
})();

var 火山 = (function (_2) {
    _inherits(火山, _2);

    function 火山(name, height, restrict) {
        _classCallCheck(this, 火山);

        _get(Object.getPrototypeOf(火山.prototype), 'constructor', this).call(this, name, height);
        this.入山規制 = restrict || false;
    }

    _createClass(火山, [{
        key: '登山可能',
        value: function _() {
            if (this.入山規制) return false;
            return true;
        }
    }, {
        key: '種類',
        value: function _() {
            return '火山';
        }
    }]);

    return 火山;
})(山);

var daisen = new 山('大山', 1729);
var hogeyama = new 火山('ほげ山', 2222, true);

console.log(hello(), daisen.名前, daisen.登山可能(), hogeyama.名前, hogeyama.種類(), hogeyama.登山可能());

// これを
// $ babel hello_es6.js > hello_es5.js
// トランスパイルすると、hello_es5.jsにES5が生成されて最高


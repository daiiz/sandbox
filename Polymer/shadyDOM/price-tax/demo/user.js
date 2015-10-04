// Polymer & ES6 !!!!
// $ babel user-custom.js > user.js

// よろしくないけど仕方ない
'use strict';

var React = {};
React.createElement = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var name = args[0];
    var props = args[1];
    if (name === null) return;
    var parent = document.createElement(name);
    args.forEach(function (arg, i) {
        if (i >= 2) {
            var child = arg;
            if (typeof child == 'string') {
                Polymer.dom(parent).appendChild(document.createTextNode(child));
            } else {
                Polymer.dom(parent).appendChild(child);
            }
        }
    });
    if (props !== null) {
        var keys = Object.keys(props);
        keys.forEach(function (key) {
            parent.setAttribute(key, props[key]);
        });
    }
    return parent;
};

window.addEventListener('WebComponentsReady', function (e) {

    // カルビ盛合せ
    var calvi = document.querySelectorAll('price-tax')[0];

    // 「見たままDOM」の操作
    var priceTaxElement = calvi;
    console.info('Light DOM:');
    console.log(priceTaxElement.innerHTML);
    console.dirxml(priceTaxElement.children);

    var salad = React.createElement(
        'price-tax',
        { price: '400', rate: '8', switchable: true },
        '山盛りサラダ'
    );
    document.querySelector('body').appendChild(salad);
    console.log(Polymer.dom(salad).innerHTML);

    // 「Shady DOM」の世界を覗く
    var shadyWorld = Polymer.dom(document.body).children.push();

    // 「Shady DOM」の操作
    priceTaxElement = Polymer.dom(calvi);
    console.info('Shady DOM:');
    console.log(priceTaxElement.innerHTML);
    console.dirxml(priceTaxElement.children);
});


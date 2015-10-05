// Polymer & ES6 (& JSX) !!!!
// $ babel user-custom.js > user.js

// よろしくなった
'use strict';

var polyjsx = function polyjsx(name, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    if (name === null) return;
    var parent = document.createElement(name);
    if (props !== null) {
        var keys = Object.keys(props);
        keys.forEach(function (key) {
            if (key === 'className') key = 'class';
            parent.setAttribute(key, props[key]);
        });
    }
    children.forEach(function (c) {
        var child = c; // polyjsx() を再帰呼び出し
        if (typeof child == 'string') {
            Polymer.dom(parent).appendChild(document.createTextNode(child));
        } else {
            Polymer.dom(parent).appendChild(child);
        }
    });
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

    // 「Shady DOM」の操作
    priceTaxElement = Polymer.dom(calvi);
    console.info('Shady DOM:');
    console.log(priceTaxElement.innerHTML);
    console.dirxml(priceTaxElement.children);

    // ミニサラダを追加（Polymer公式の方法）
    var miniSalad = document.createElement('price-tax');
    Polymer.dom(miniSalad).innerHTML = 'ミニサラダ';
    Polymer.dom(miniSalad).setAttribute('price', 300);
    Polymer.dom(miniSalad).setAttribute('rate', 8);
    Polymer.dom(miniSalad).setAttribute('switchable', true);
    document.querySelector('body').appendChild(miniSalad);

    // 山盛りサラダを追加（JSX な Syntax Sugar）
    /** @jsx polyjsx */
    var message = 'お得!';
    var salad = polyjsx(
        'price-tax',
        { price: '400', rate: '8', switchable: true },
        '山盛りサラダ ',
        polyjsx(
            'span',
            { style: 'color: red' },
            message
        )
    );

    document.querySelector('body').appendChild(salad);
    // 追加の結果を覗く
    console.log(Polymer.dom(salad).children);
});


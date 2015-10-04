// Polymer & ES6 (& JSX) !!!!
// $ babel user-custom.js > user.js

// よろしくないけど仕方ない
var React = {};
React.createElement = (...args) => {
    var name = args[0];
    var props = args[1];
    if (name === null) return;
    var parent = document.createElement(name);
    args.forEach((arg, i) => {
        if (i >= 2) {
            var child = arg;    // 再帰呼び出し
            if (typeof(child) == 'string') {
                Polymer.dom(parent).appendChild(document.createTextNode(child));
            } else {
                Polymer.dom(parent).appendChild(child);
            }
        }
    });
    if (props !== null) {
        var keys = Object.keys(props);
        keys.forEach((key) => {
            if (key === 'className') key = 'class';
            parent.setAttribute(key, props[key]);
        });
    }
    return parent;
};

window.addEventListener('WebComponentsReady', (e) => {

    // カルビ盛合せ
    let calvi = document.querySelectorAll('price-tax')[0];

    // 「見たままDOM」の操作
    let priceTaxElement = calvi;
    console.info('Light DOM:');
    console.log(priceTaxElement.innerHTML);
    console.dirxml(priceTaxElement.children);

    // 「Shady DOM」の世界を覗く
    let shadyWorld = Polymer.dom(document.body).children.push();

    // 「Shady DOM」の操作
    priceTaxElement = Polymer.dom(calvi);
    console.info('Shady DOM:');
    console.log(priceTaxElement.innerHTML);
    console.dirxml(priceTaxElement.children);

    // ミニサラダを追加（Polymer公式の方法）
    let miniSalad = document.createElement('price-tax');
    Polymer.dom(miniSalad).innerHTML = 'ミニサラダ';
    Polymer.dom(miniSalad).setAttribute('price', 300);
    Polymer.dom(miniSalad).setAttribute('rate', 8);
    Polymer.dom(miniSalad).setAttribute('switchable', true);
    document.querySelector('body').appendChild(miniSalad);

    // 山盛りサラダを追加（JSX な Syntax Sugar）
    let salad = <price-tax price="400" rate="8" switchable>山盛りサラダ <span style="color: red">お得!</span></price-tax>;

    // 追加の結果を覗く
    document.querySelector('body').appendChild(salad);
    console.log(Polymer.dom(salad).innerHTML);
});
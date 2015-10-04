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


    // 山盛りサラダを追加（Syntax Sugar）
    let salad = <price-tax price="400" rate="8" switchable>山盛りサラダ</price-tax>;
    document.querySelector('body').appendChild(salad);
    console.log(Polymer.dom(salad).innerHTML);
});

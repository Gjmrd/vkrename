// ==UserScript==
// @name         Vk menu label rename
// @version      0.2
// @description  Заменяем заголовки разделов вк
// @author       Gjmrd,  https://gjmrd.github.io
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const labels = {
        "l_gr": "Группы",
        "l_msg": "Сообщения"
    };
    Object.keys(labels).forEach(key => {
    var menuItem = document.getElementById(key);
    if (menuItem != undefined) {
        var menuItemLabel = menuItem.querySelector(".left_label");
        if (menuItemLabel != undefined) {
            menuItemLabel.textContent = labels[key];
        }
    }
})
})();

// ==UserScript==
// @name         Vk group label name
// @version      0.1
// @description  тупо меняем заголовок у пункта "сообщества" на "группы"
// @author       Gjmrd
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var groupListItem = document.getElementById("l_gr");
    if (groupListItem != undefined) {
        var groupLabel = groupListItem.querySelector(".left_label");
        if (groupLabel != undefined) {
            groupLabel.textContent = "Группы";
        }
    }
})();
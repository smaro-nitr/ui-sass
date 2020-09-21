/* google material design */

import {MDCTextField} from '@material/textfield';
const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    return new MDCTextField(el);
});

import {MDCRipple} from '@material/ripple';
const fabRipple = [].map.call(document.querySelectorAll('.mdc-fab'), function(el) {
    return new MDCRipple(el);
});

import {MDCSelect} from '@material/select';
const select = [].map.call(document.querySelectorAll('.mdc-select'), function(el) {
  new MDCSelect(el);
});

import {MDCList} from "@material/list";
if (document.querySelector('.mdc-list')) { 
  const list = MDCList.attachTo(document.querySelector('.mdc-list')); 
  list.wrapFocus = true;
}

import {MDCCheckbox} from '@material/checkbox';
const checkbox = [].map.call(document.querySelectorAll('.mdc-checkbox'), function(el) {
    new MDCSelect(el);new MDCCheckbox(el);
});

/* custom sub-menu toggle */
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
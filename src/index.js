// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let t = 0;

setInterval(runFunction, 1000);

function runFunction() {
    $('#main').html('You have been on this page for ' + t + ' seconds.');
    t = t + 1;
}
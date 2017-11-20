import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome';
import MakeHtml from './MakeHtml';
import MakeHtmlDropDowns from "./MakeHtmlDropDowns";

let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtmlDropDowns/>, homeDiv);
}

function reactHome() {
  $('#pageLoad').empty();
  home();
}

function home() {
    ReactDOM.render(<ReactHome/>, homeDiv);
}


$(document).ready(function () {
    homeDiv = document.getElementById('home');
    home();
    $.subscribe('reactMakeHtml', reactMakeHtml);
    $.subscribe('home', reactHome);
});

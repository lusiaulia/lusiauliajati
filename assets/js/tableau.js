// JavaScript for Tableau visualization
var divElement = document.getElementById('viz1708628735197');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth > 800) {
    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
} else if (divElement.offsetWidth > 500) {
    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
} else {
    vizElement.style.width = '100%';
    vizElement.style.height = '727px';
}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);


var divElement = document.getElementById('viz1708783051490');
var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
        vizElement.style.minWidth = '800px';
        vizElement.style.maxWidth = '100%';
        vizElement.style.minHeight = '550px';
        vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px';
    } else if (divElement.offsetWidth > 500) {
        vizElement.style.minWidth = '800px';
        vizElement.style.maxWidth = '100%';
        vizElement.style.minHeight = '550px';
        vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '850px';
        vizElement.style.maxHeight = (divElement.offsetWidth * 1.77) + 'px';
    }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);


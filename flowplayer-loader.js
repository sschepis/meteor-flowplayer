//Functions to run after the script tag has loaded
var flowplayerLoadCallback = function(){

};

//If the script doesn't load
var flowplayerErrorCallback = function(error){
    if(typeof console !== undefined) {
        console.log(error);
    }
};

var head = document.getElementsByTagName('head')[0];

//Generate a style tag
var style = document.createElement('link');
style.type = 'text/css';
style.rel = "stylesheet";
style.href = '//releases.flowplayer.org/5.4.3/skin/functional.css';

head.appendChild(style);

//Generate a script tag
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//releases.flowplayer.org/5.4.3/flowplayer.min.js';
script.onload = flowplayerLoadCallback;
script.onerror = flowplayerErrorCallback;

head.appendChild(script);
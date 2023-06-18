var cur = 0;
var arr = ['#developer', '#planning', '#design'];

function shownext(){
    cur = (cur + 1) % 3;
    document.querySelector('#developer').style.opacity=0;
    document.querySelector('#planning').style.opacity=0;
    document.querySelector('#design').style.opacity=0;
    document.querySelector(arr[cur]).style.opacity=1;
}

function showprev(){
    cur = (cur - 1);
    if (cur < 0) cur = 2;
    document.querySelector('#developer').style.opacity=0;
    document.querySelector('#planning').style.opacity=0;
    document.querySelector('#design').style.opacity=0;
    document.querySelector(arr[cur]).style.opacity=1;
}
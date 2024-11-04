var inputEle=document.getElementById("input");
var btn=document.getElementById("btn");
var txt=document.getElementById("txt");


btn.onclick=function (){
    var text=inputEle.value;
    console.log(text);
    txt.innerHTML=text;
    inputEle.value="";
}
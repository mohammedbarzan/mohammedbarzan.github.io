var myimage=document.querySelector('img');
var myheading=document.querySelector('h1')
myimage.onclick=function () {
var mysrc=myimage.getAttribute('src');
if(mysrc==='images/christian-bale-300.jpg'){
myimage.setAttribute('src','images/b372ef810025c3f8fea0f081158e29ac.jpg');
myheading.textContent='dark night';
}else{
myimage.setAttribute('src','images/christian-bale-300.jpg');
myheading.textContent='christian bale';
}
}

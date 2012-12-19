var Div=[];
var Colors=["red", "green", "black", "yellow", "brown", "silver", "gray", "pink", "blue"];//
var Class = function(h,w,x,y,i){  
    this.h = h;
  this.w = w;
	this.x = x;
	this.y = y;
	var div = document.createElement('div');
	div.setAttribute('id', 'Div'+(i+1)); 
	div.style.width = w+"px";
    div.style.height = h+"px";
	div.style.position = "absolute";
	div.style.left = x+"px"; 
	div.style.top = y+"px"; 
	div.style.border = "3px solid silver";
	div.align = "center";
	div.style.background = Colors[Math.floor(Math.random()*8.9999)]; 
   	var text = "DIV #"+(i+1);
    var textNode = document.createTextNode(text); 
    div.appendChild(textNode);
document.body.appendChild(div); 
	
}

function CreateDiv() { 
 for (var i=0;i<25; i++){ 
	 if (Div[i]==null) {Div[i] = new Class(document.forms[0].pole1.value, document.forms[0].pole2.value,document.forms[0].pole3.value, document.forms[0].pole4.value,i); // 
	 break;}   
 }
}

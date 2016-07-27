/**
 * Created by Anly.Z on 16/7/26.
 */
function positionMessage(){
	if(!document.getElementById) return false;
	var elem = document.getElementById('message');
	if(!elem) return false;
	elem.style.position = 'absolute';
	elem.style.left = '50px';
	elem.style.top = '100px';
	//这里的movement没有定义，非严格模式下，这个是会成为全局变量的，严格模式下是非法的，会报错
	//movement = setTimeout('moveMessage()',5000);
	moveElement('message',250,300,10);
}

//function moveMessage(){
//	if(!document.getElementById) return false;
//	var elem = document.getElementById('message');
//	if(!elem) return false;
//	var xpos = parseInt(elem.style.left);
//	var ypos = parseInt(elem.style.top);
//	if(xpos == 200 && ypos == 100) return true;
//	if(xpos < 200) xpos++;
//	if(xpos > 200) xpos--;
//	if(ypos < 100) ypos++;
//	if(ypos > 100) ypos--;
//	elem.style.left = xpos + 'px';
//	elem.style.top = ypos + 'px';
//	var movement = setTimeout('moveMessage()',10);
//}


addLoadEvent(positionMessage);
//addLoadEvent(moveMessage);
/**
 * Created by Anly.Z on 16/7/26.
 */

function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName('tr');
	for(var i = 0,len = rows.length;i < len;i++){
		var row = rows[i];
		row.onmouseover = function(){
			//这里如果用row，当页面加载完后，row指向的引用一直是最后一个tr，不管鼠标移到哪一个tr上，字体变粗的都会是最后一个tr
			//所以这里要用this，特别是如果css里已经设置了tr:hover的样式，糟糕的记性啊。。。
			//row.style.fontWeight = 'bold';
			this.style.fontWeight = 'bold';
		}
		row.onmouseout = function(){
			this.style.fontWeight = 'normal';
		}
	}
}
addLoadEvent(highlightRows);
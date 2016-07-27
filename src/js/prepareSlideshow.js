/**
 * Created by Anly.Z on 16/7/27.
 */
function prepareSlideshow() {
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName || !document.createElement) return false;
	var slideshow = document.createElement('div');
	slideshow.setAttribute('id','slideshow');
	var preview = document.createElement('img');
	preview.setAttribute('src','../images/list.png');
	preview.setAttribute('alt','building blocs of web design');
	preview.setAttribute('id','preview');
	slideshow.appendChild(preview);
	//修改图片样式
	preview.style.position = 'absolute';
	//获取列表中所有链接
	var list = document.getElementById('linklist');
	insertAfter(slideshow,list);
	var links = list.getElementsByTagName('a');
//为链接增加onmouseover事件，动画效果
//	for(var i = 0,len = links.length;i < len;i++){
//		links[i].onmouseover = function(){
//			moveElement('preview',-140 * (i + 1),0,10);
//		}
	//}

	links[0].onmouseover = function(){
		moveElement('preview',-140,0,10);
	};
	links[1].onmouseover = function(){
		moveElement('preview',-140*2,0,10);
	}
	links[2].onmouseover = function(){
		moveElement('preview',-140*3,0,10);
	}

}
addLoadEvent(prepareSlideshow);
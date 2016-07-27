/**
 * Created by Anly.Z on 16/7/25.
 */

function showPic(whichpic) {
	if (!document.getElementById('img')) return false;
	var src = whichpic.getAttribute('href');
	var placeholderImg = document.getElementById('img');
	placeholderImg.setAttribute('src', src);
	if (document.getElementById('description')) {
		var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : '';
		var description = document.getElementById('description');
		description.firstChild.nodeValue = text;
	}
	return true;
}

//function showBodyElement() {
//	var body_element = document.getElementsByTagName('body')[0].childNodes;
//	alert(body_element.length);
//}
//
//window.onload = links();

function popUp(url) {
	window.open(url, 'baidu', 'width=300,height=300');
}

//function links(){
//	var link = document.getElementsByTagName('a');
//	for(var i = 0,len = link.length;i < len;i++){
//		if(link[i].getAttribute('class') == 'popup'){
//			link[i].onclick = popUp(this.getAttribute('href'));
//			return false;
//		}
//	}
//}

//window.onload = prepareGallery;

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

function prepareGallery() {
	if (!document.getElementsByTagName || !document.getElementById || !document.getElementById('image-gallery')) {
		return false;
	}
	var gallery = document.getElementById('image-gallery');
	var links = gallery.getElementsByTagName('a');
	for (var i = 0, len = links.length; i < len; i++) {
		links[i].onclick = function () {
		  return	!showPic(this);
		}
	}
}

function preparePlaceholder(){
	var div = document.createElement('div');
	div.setAttribute('class','placeholderImg');
	var img = document.createElement('img');
	img.setAttribute('id','img');
	img.setAttribute('alt','placeholder');
	div.appendChild(img);
	var p = document.createElement('p');
	p.setAttribute('id','description');
	var pTxt = document.createTextNode('Choose in image');
	p.appendChild(pTxt);
	var gallery = document.getElementById('image-gallery');
	insertAfter(div,gallery);
	insertAfter(p,div);
}






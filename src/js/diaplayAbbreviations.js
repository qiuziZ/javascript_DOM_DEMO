/**
 * Created by Anly.Z on 16/7/26.
 */
//function diaplayAbbreviations(){
//	var abbrs = document.getElementsByTagName('abbr');
//	var titles = [];
//	var abbrText = [];
//	for(var i = 0,len = abbrs.length;i < len;i++){
//		var title = abbrs[i].getAttribute('title');
//		var text = abbrs[i].lastChild.nodeValue;
//		if(title){
//			titles[i] = title
//		}
//		if(text){
//			abbrText[i] = text;
//		}
//
//	}
//	var dl = document.createElement('dl');
//	var dt = document.createElement('dt');
//	var dd = document.createElement('dd');
//	for(var j = 0,abbrLen = abbrText.length;j < abbrLen;j++){
//		var textNode = document.createTextNode(abbrText[j]);
//		console.log(textNode);
//		dt.appendChild(textNode);
//		dl.appendChild(dt);
//	}
//	for(var k = 0,titleLen = titles.length;k < titleLen;k++){
//		var titleNode = document.createTextNode(titles[k]);
//		dd.appendChild(titleNode);
//		dt.appendChild(dd);
//	}
//	var div = document.createElement('div');
//	div.appendChild(dl);
//	document.body.appendChild(div);
//}

//书上的
function diaplayAbbreviations() {
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
		return false;
	}
	//取得所有缩略词元素
	var abbrs = document.getElementsByTagName('abbr');
	if (abbrs.length < 1) return false;
	var defs = [];
	//遍历所有缩略词元素
	for (var i = 0, len = abbrs.length; i < len; i++) {
		var abbr = abbrs[i];
		//防止早期的IE浏览器不支持abbr标签做出的判断，平稳退化
		if(abbr.childNodes.length < 1) continue;
		var definition = abbr.getAttribute('title');
		var key = abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
//创建定义列表
	var dlist = document.createElement('dl');
	//遍历defs数组
	for (key in defs) {
		var definition = defs[key];
		var dtitle = document.createElement('dt');
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement('dd');
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	//同样还是为了早期的IE版本，IE是有多蛋疼。。。·1
	if(dlist.childNodes.length < 1) return false;
	var header = document.createElement('h2');
	var header_text = document.createTextNode('Abbreviations');
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);

}

addLoadEvent(diaplayAbbreviations);
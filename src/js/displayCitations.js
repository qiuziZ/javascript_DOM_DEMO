/**
 * Created by Anly.Z on 16/7/26.
 */
function displayCitations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode){
		return false;
	}
	var quotes = document.getElementsByTagName('blockquote');
	for(var i = 0,len = quotes.length;i < len;i++){
		var quote = quotes[i];
		if(!quote) continue;
		var url = quote.getAttribute('cite');
		var quoteChildren = quote.getElementsByTagName('*');
		if(quoteChildren.length < 1) continue;
		var ele = quoteChildren[quoteChildren.length - 1];
		var a = document.createElement('a');
		var a_text = document.createTextNode('source');
		a.appendChild(a_text);
		a.setAttribute('href',url);
		var sup = document.createElement('sup');
		sup.appendChild(a);
		ele.appendChild(sup);
	}
}

addLoadEvent(displayCitations);
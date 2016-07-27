/**
 * Created by Anly.Z on 16/7/25.
 */

function insertParagraph(text){
	var str = '<p>';
	str += text;
	str += '</p>';
	document.write(str);
}

window.onload = function(){
	var testdiv = document.getElementById('testdiv');
	//testdiv.innerHTML = '<p>This is <em>this</em> content.</p>';
	var para = document.createElement('p');
	testdiv.appendChild(para);
	var text = document.createTextNode('This is');
	para.appendChild(text);
	var em = document.createElement('em');
	var text1 = document.createTextNode('this');
	em.appendChild(text1);
	para.appendChild(em);
	var text2 = document.createTextNode('content.');
	para.appendChild(text2);
}
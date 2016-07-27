/**
 * Created by Anly.Z on 16/7/26.
 */
function stripeTables(){
	if(!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName('table');
	var odd,rows;
	for(var i = 0,len = tables.length;i < len;i++){
		odd = false;
		rows = tables[i].getElementsByTagName('tr');
		for(var j = 0,rowsLen = rows.length;j < rowsLen;j++){
			if(odd == true){
				addClass(rows[j],'odd');
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}

addLoadEvent(stripeTables);
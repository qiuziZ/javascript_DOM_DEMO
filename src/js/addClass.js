/**
 * Created by Anly.Z on 16/7/26.
 */

/* utils
 * addClass
 */
function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		element.className += value;

	}
}
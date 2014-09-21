function chbg(color) {
	var elements = document.getElementsByClassName('b');

	for(var i = 0; i < elements.length; i++){
		elements[i].style['color'] = color;
	}
} 
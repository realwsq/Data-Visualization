var displayNode = function (node) {
    var oDiv = document.createElement('div');
    oDiv.style.position = 'absolute';
    oDiv.style.height = node.height ? node.height+'px' : "5px";
    oDiv.style.width = node.width ? node.width='px' : "5px";
    oDiv.style.backgroundColor = node.color ? node.color : 'red';
    oDiv.style.left = node.x + 'px';
    oDiv.style.top = node.y + 'px';
    document.body.appendChild(oDiv);
    return oDiv;
}
var displayText = function (text, x, y, font) {
    var div = document.createElement('div');
    div.innerHTML = text;
    div.style.top = y + 'px';
    div.style.left = x + 'px';
    div.style.position = "absolute";
    div.style.font = font ? font : "10px sans-serif";
    document.body.appendChild(div);
}
var drawLine = function (startX, startY, endX, endY, color) {  
    if (startX == endX) {  
        if (startY > endY) {  
            var tempY = startY;  
            startY = endY;  
            endY = tempY;  
        }  
        for (var k = startY; k < endY; k++) {  
            createPoint(startX, k, color);  
        }  
    }  
    // y = ax + b  
    var a = (startY - endY) / (startX - endX);  
    var b = startY - ((startY - endY) / (startX - endX)) * startX;  
    if (Math.abs(startX - endX) > Math.abs(startY - endY)) {  
        if (startX > endX) {  
            var tempX = endX;  
            endX = startX;  
            startX = tempX;  
        }  
        var left = document.body.style.left;  
        var top = document.body.style.top;  
        for (var i = startX; i <= endX; i++) {  
            createPoint(i, a * i + b, color);  
        }  
    } else {  
        if (startY > endY) {  
            var tempY = startY;  
            startY = endY;  
            endY = tempY;  
        }  
        for (var j = startY; j <= endY; j++) {  
            createPoint((j - b) / a, j, color);  
        }  
    }    
}  
var drawCurve = function (sx, sy, tx, ty, color) {
	var dx = (tx - sx) / 2,
		dy = (ty - sy) / 2,
		cx = (tx + sx) / 2,
		cy = (ty + sy) / 2;
	var yi, yi_last, yi_makeup;
	for (var i = sx; i <= tx; i++) {
		yi = cy + dy * Math.sin(Math.PI * (i - cx) / 2 / dx);
		yi = Math.ceil(yi);
		if (i == sx) yi_last = yi;
		yi_makeup = yi_last;
		createPoint(i, yi, color);
		if (yi > yi_last)
			while (++yi_makeup < yi)
				createPoint(i, yi_makeup, color);
		else 
			while (--yi_makeup > yi)
				createPoint(i, yi_makeup, color);
		yi_last = yi;
	}
}
function createPoint(x, y, color) {  
    var node = document.createElement('div');  
    node.style.height = "2px";
    node.style.width = "2px";
    node.style.top = y + 'px';  
    node.style.left = x + 'px';  
    node.style.backgroundColor = color ? color : "#ccc";
    node.style.position = 'absolute';
    document.body.appendChild(node);  
} 
  
//============================================================
var displayText_canvas = function (ctx, text, x, y, color, r = 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color ? color : "black";
    // ROTATE R (2PI) CLOCKWISE
    ctx.rotate(r);
    ctx.fillText(text, 0, 0);
    ctx.restore();
};
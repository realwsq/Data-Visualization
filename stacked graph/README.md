### README
###### Demo
[demo](https://realwsq.github.io/stackedGraph/stacked_graph.html)
###### About this program
If you run this program, you will be able to see a stacked graph which read data directly from "data.js". And if you put mouse on some rectangle, relative rectangles (from the same time series) will be highlighted.

This program can deal with any m*n matrix.
		
		m: time series
		n: times

###### Required of "data.js"
1. data (m*n matrix)
2. xLabels (1*n matrix)
3. different name of timeSeries (1*m matrix)	


###### Details
1. carefully choose the suitable height and width and color for each rectangle
2. time interval can't be too big, or the animation will be really really slow for it has too much to deal with

		self.setInterval("listenMouse(dataRects)",500);


###### Further Exploration
1. how to make discrete points to a curve
		
		bezierCurveTo()
		quadraticCurveTo()
2. how to fill color to the spaces between two curves
3. symmetric -> reduce the wiggle -> reduce the weighted_wiggle 
4. layer labeling
5. layer ordering

###### [wonderful references](http://leebyron.com/streamgraph/stackedgraphs_byron_wattenberg.pdf)




### README
###### Demo
[demo](https://realwsq.github.io/wordle/wordle.html)
###### About the program
This program can display the word reading from "data.js", more frequent the word is, more big (size) and more deep (color) the word is represented.  

###### Details
1. randomly set the position of the word

		for(i = 0; i < RANDOMITERATION; i++) {
    		sumX += Math.random() * CANVASWIDTH;
    	}
    	pos[0] = Math.floor(sumX / RANDOMITERATION);
    	for(i = 0; i < RANDOMITERATION; i++) {
    		sumY += Math.random() * CANVASHEIGHT;
    	}
    	pos[1] = Math.floor(sumY / RANDOMITERATION);
    	
    	In this way, the random position can be almost normal distribution.
    	However, the RANDOMITERATION can't be too big, or it will cause great pressure to "collisionTest", slow down the program.
    	
2. test collision: pay attention to that the x,y of fillText() is the left&down and the x,y of the getImageData() (used in the test collision) is left&up
		
		collisionTest(pos[0] - wordW / 2, pos[1] - wordH, 
            	wordW, wordH);
3. boundary test

		if(pos[0] - wordW / 2 < THREHOLD || pos[0] + wordW / 2 > CANVASWIDTH - THREHOLD || 
            	pos[1] - wordH < THREHOLD || pos[1] > CANVASHEIGHT - THREHOLD) {
            	collision = 1;	
4. to avoid all the word being prone to the right area
		
		fillText(text, pos[0] - wordW / 2, pos[1]);



###### Further Exploration
1. [Porter Stemmer](http://qinxuye.me/article/porter-stemmer/)
2. Word can be vertical or even arbitrary angle
3. The biggest font can be automatically adjusted (calculated) according to the num and frequency of data and the size of canvas
4. Don't know how to achieve the height of the word
5. Maybe the layout of the words can be something more meaninful, like a person
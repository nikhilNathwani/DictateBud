function getNumberOfChunks(numWords, wordsPerChunk) {
	return Math.ceil(numWords / wordsPerChunk);
}

function wrapWordsInDivs(wordsPerChunk) {
	var loremDiv = document.getElementById("lorem");
	var wordDivs = document.querySelectorAll("div.word");
	var totalWords = wordDivs.length;
	var currentWordDivIndex = 0;
	var chunkCount = getNumberOfChunks(totalWords, wordsPerChunk);
	var chunkDivs = [];

	for (var i = 0; i < chunkCount; i++) {
		var chunk = document.createElement("span");
		chunk.classList.add("chunk");
		for (var wordIndex = 0; wordIndex < wordsPerChunk; wordIndex++) {
			if (currentWordDivIndex < totalWords) {
				chunk.appendChild(wordDivs[currentWordDivIndex]);
				currentWordDivIndex++;
			} else {
				chunk.classList.add("shortened-chunk");
			}
		}
		loremDiv.append(chunk);
	}
}

// Call the function with wordsPerChunk = 3
wrapWordsInDivs(3);

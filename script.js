document
	.getElementById("chunk-size-form")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent form submission

		const chunkSize = parseInt(document.getElementById("chunk-size").value);
		const text = document.getElementById("text").textContent;
		const words = text.trim().split(/\s+/);

		let formattedText = "";
		for (let i = 0; i < words.length; i += chunkSize) {
			const chunk = words.slice(i, i + chunkSize);
			console.log(i, i + chunkSize, chunk);
			const colorClass = (i / chunkSize) % 2 === 0 ? "blue" : "red";
			const borderStyle = colorClass === "blue" ? "solid" : "dashed";

			formattedText +=
				'<span class="' +
				colorClass +
				'" style="border: 1px ' +
				borderStyle +
				';">' +
				chunk.join(" ") +
				"</span> ";
		}

		document.getElementById("text").innerHTML = formattedText.trim();
	});
0;

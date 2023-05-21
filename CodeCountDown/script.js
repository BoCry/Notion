var container = document.getElementById(& quot; array & quot;);

// Function to generate the array of blocks
function generatearray() {
	for (var i = 0; i & lt; 20; i++) {

		// Return a value from 1 to 100 (both inclusive)
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var array_ele = document.createElement(& quot; div & quot;);

		// Adding class 'block' to div
		array_ele.classList.add(& quot; block & quot;);

		// Adding style to div
		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;

		// Creating label element for displaying
		// size of particular block
		var array_ele_label = document.createElement(& quot; label & quot;);
		array_ele_label.classList.add(& quot; block_id & quot;);
		array_ele_label.innerText = value;

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}

// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) =& gt; {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function () {

			// For waiting for .25 sec
			setTimeout(() =& gt; {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
	});
});
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
	var blocks = document.querySelectorAll(& quot;.block & quot;);

	// BubbleSort Algorithm
	for (var i = 0; i & lt; blocks.length; i += 1) {
		for (var j = 0; j & lt; blocks.length - i - 1; j += 1) {

			// To change background-color of the
			// blocks to be compared
			blocks[j].style.backgroundColor = & quot; #FF4949 & quot;;
			blocks[j + 1].style.backgroundColor = & quot; #FF4949 & quot;;

			// To wait for .1 sec
			await new Promise((resolve) =& gt;
			setTimeout(() =& gt; {
				resolve();
			}, delay)
			);

			console.log(& quot; run & quot;);
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
				.childNodes[0].innerHTML);

			// To compare value of two blocks
			if (value1 & gt; value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(& quot;.block & quot;);
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = & quot;#6b5b95 & quot;;
			blocks[j + 1].style.backgroundColor = & quot;#6b5b95 & quot;;
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[blocks.length - i - 1]
			.style.backgroundColor = & quot;#13CE66 & quot;;
	}
}

// Calling generatearray function
generatearray();

// Calling BubbleSort function
BubbleSort();

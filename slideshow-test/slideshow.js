class SlideshowComponent extends HTMLElement {

	constructor() {

		// Invokes the constructor of the parent class; this is mandatory
		super();

		// Display the next image in the array, or go back to the beginning
		function nextImage() {
			if (currentImage < imageArray.length) {
				currentImage++;
			} else {
				currentImage = 1;
			}
			displayImage(currentImage);
		}

		// Pick a random image from the array to display
		function randomImage() {
			var imageNumber = randomInt(1, imageArray.length);
			displayImage(imageNumber);
		}		
		
		// Display the image at the specified position in the array
		function displayImage(imageNumber) {
			currentImage = imageNumber;
			shadowRoot.getElementById("slideshow-image").src = imageArray[imageNumber - 1];				
		}
		
		// This utility function calculates a random integer between min and max.
		function randomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// When we click the component, move to the next image
		this.addEventListener('click', e => {
			nextImage();
		});					
		
		// Read the src attribute of the element to obtain a list of images
		var imageArray = JSON.parse(this.getAttribute("src"));
		var currentImage = 1;
		
		// Import the slideshow template from our component file
		var importedDocument = document.querySelector('link[rel="import"]').import;
		var template = importedDocument.querySelector("#slideshow-template");

		// Create a copy of the slideshow template ready to use
		var copy = document.importNode(template.content, true);
		
		// Create a Shadow DOM root with this component as the host
		var shadowRoot = this.attachShadow({mode: "open"});
				
		// Add the copied template to the shadow DOM
		shadowRoot.appendChild(copy);

		// Display a random image when the component is first loaded
		randomImage();
		
	}
}

// Define the custom <slideshow-component> element using the class above
customElements.define("slideshow-component", SlideshowComponent);
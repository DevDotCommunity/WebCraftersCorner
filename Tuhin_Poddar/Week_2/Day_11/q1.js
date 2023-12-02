var paragraph = document.getElementById("myParagraph");
if (paragraph !== null) {
  paragraph.textContent = "New text for the paragraph.";
} else {
  console.error("Paragraph element not found.");
}

var image = document.getElementById("myImage");
if (image !== null) {
  image.src = "img2.jfif";
  image.alt = "New Image Alt Text";
} else {
  console.error("Image element not found.");
}

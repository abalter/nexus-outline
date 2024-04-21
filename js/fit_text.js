function adjustFontSizeToVw(selector, vw) {
  const element = document.querySelector(selector);
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  let desiredWidth = (viewportWidth * vw) / 100; // Convert vw to pixels
  let currentFontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));

  element.style.fontSize = currentFontSize; // Set initial font size

  // Function to measure text width
  function measureTextWidth(text, font) {
    let canvas = measureTextWidth.canvas || (measureTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
  }

  let textWidth = measureTextWidth(element.innerText, getComputedStyle(element).font);

  // Adjust font size until text width is close to desired width
  while (textWidth < desiredWidth && currentFontSize < 100) { // 100px is a sanity check to prevent infinitely large text
    currentFontSize++;
    element.style.fontSize = `${currentFontSize}px`;
    textWidth = measureTextWidth(element.innerText, getComputedStyle(element).font);
  }
  while (textWidth > desiredWidth) {
    currentFontSize--;
    element.style.fontSize = `${currentFontSize}px`;
    textWidth = measureTextWidth(element.innerText, getComputedStyle(element).font);
  }
}

// Usage: adjust the font size of the tagline to take up 40% of the viewport width
adjustFontSizeToVw('#tagline', 40);

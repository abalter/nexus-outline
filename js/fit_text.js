// function adjustFontSizeToVw(selector, vw) {
//   console.log(`adjustFontSizeToVw(${selector}, ${vw})`);

//   const element = document.querySelector(selector);
//   const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

//   let desiredWidth = (viewportWidth * vw) / 100; // Convert vw to pixels
//   let currentFontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));

//   console.log({ viewportWidth, desiredWidth, currentFontSize });

//   element.style.fontSize = currentFontSize; // Set initial font size

//   // Function to measure text width
//   function measureTextWidth(text, font) {
//     console.log(`measureTextWidth(${text}, ${font})`);

//     let canvas = measureTextWidth.canvas || (measureTextWidth.canvas = document.createElement("canvas"));
//     let context = canvas.getContext("2d");
//     context.font = font;
//     return context.measureText(text).width;
//   }

//   let textWidth = measureTextWidth(element.innerText, getComputedStyle(element).font);

//   // Adjust font size until text width is close to desired width
//   while (textWidth < desiredWidth && currentFontSize < 100) { // 100px is a sanity check to prevent infinitely large text
//     currentFontSize++;
//     element.style.fontSize = `${currentFontSize}px`;
//     textWidth = measureTextWidth(element.innerText, getComputedStyle(element).font);
//   }

//   while (textWidth > desiredWidth) {
//     currentFontSize--;
//     element.style.fontSize = `${currentFontSize}px`;
//     textWidth = measureTextWidth(element.innerText, getComputedStyle(element).font);
//   }
// }

// Usage: adjust the font size of the tagline to take up 40% of the viewport width
// adjustFontSizeToVw('#tagline', 40);

function adjustFontSizeToVw(selector, vw) {
  const element = document.querySelector(selector);
  const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth);
  let desired_text_element_width = viewport_width * (vw / 100);

  console.log({ viewport_width, desired_text_element_width });
  
  // Function to measure element's text width
  function getElementTextWidth(el) {
    return el.getBoundingClientRect().width;
  }

  // get the element text width
  let current_text_element_width = getElementTextWidth(element);

  // get the current element font size
  let current_font_size = parseFloat(
    window
    .getComputedStyle(element, null)
    .getPropertyValue('font-size')
  );

  let font_size_to_text_width_ratio = current_font_size / current_text_element_width; 
  

  console.log({current_text_element_width, current_font_size, font_size_to_text_width_ratio});


  let new_font_size = font_size_to_text_width_ratio * desired_text_element_width;

  console.log({ current_font_size, new_font_size });

  // set the new font size
  element.style.fontSize = new_font_size + 'px';

}

// Adjust the font size of the tagline to take up a calculated percentage of the viewport width
// You would call this function with the vw value that matches the 2fr grid column width
// adjustFontSizeToVw('#tagline', 40); // This 40 is an example value that matches 2fr in a 2fr 3fr grid



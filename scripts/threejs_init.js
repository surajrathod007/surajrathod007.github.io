function initThreeJs(divId) {
  // Example: Initialize a Three.js scene in the div with the given id
  const element = document.getElementById(divId);
  if (!element) {
    console.error('Element with id ' + divId + ' not found');
    return;
  }

  // Assuming particletextmix.js and vanta_rings.js attach to an element
  // Modify this based on how your scripts work
  // For example, if they use an element with id="magic":
  element.id = 'magic'; // Match the expected ID from your scripts
  // If your scripts automatically initialize on load, ensure they target this element
  // Otherwise, call their initialization functions here, e.g.:
  // particleTextMixInit(element); // Hypothetical function
  // vantaRingsInit(element);     // Hypothetical function
}

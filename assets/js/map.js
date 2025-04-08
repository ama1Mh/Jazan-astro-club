function initializeAladin() {
  aladin = A.aladin('#aladin-lite-div', {
    target: 'M 81',
    fov: 60,
    cooFrame: "equatorial",
    showPlanets: true,
    showConstellations: true,
    showConstellationLabels: true,
    showGotoControl: true
  });
  
  // Alternative to setLocation - simulate Jazan's view
  aladin.gotoRaDec(83.6, 22.0, 60); // Coordinates for Andromeda Galaxy
}

function resetView() {
  aladin.gotoRaDec(83.6, 22.0, 60);
}

// Initialize when Aladin is loaded
window.addEventListener('load', initializeAladin);

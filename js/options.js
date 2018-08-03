let saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', function(e) {
  e.preventDefault();
  let fontSize = document.getElementById('fontSize').value;
  let fontColor = document.getElementById('fontColor').value;
  let colorSat = document.getElementById('colorSat').value;
  if (chrome.storage === undefined || chrome.storage === null || chrome.storage === '') {
    null
  } else {
    chrome.storage.clear
  };

  chrome.storage.sync.set({
    'fontSize': fontSize;
    'fontColor': fontColor;
    'colorSat': colorSat;
  })
});

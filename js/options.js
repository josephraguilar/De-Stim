let saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', function(e) {
  e.preventDefault();
  let fontSize = document.getElementById('fontSize').value;
  let fontColor = document.getElementById('fontColor').value;
  let colorSat = document.getElementById('colorSat').value;
  if (chrome.storage === undefined) {
    null
  } else {
    chrome.storage.clear
  };

  chrome.storage.sync.set({
    'fontSize': fontSize
  }, function() {
    chrome.storage.sync.get('fontSize', function(obj) {
      console.log(obj['fontSize']);
    })
  });;

  chrome.storage.sync.set({
    'fontColor': fontColor
  }, function() {
    chrome.storage.sync.get('fontColor', function(obj) {
      console.log(obj['fontColor']);
    })
  });


  chrome.storage.sync.set({
    'colorSat': colorSat
  }, function() {
    chrome.storage.sync.get('colorSat', function(obj) {
      console.log(obj['colorSat']);
    })
  });

});

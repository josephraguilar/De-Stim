var settings = new Promise(function (resolve, reject) {
  chrome.storage.sync.get(['fontSize', 'fontColor', 'colorSat'], function(data) {
    let fontSize = (data['fontSize']);
    let fontColor = (data['fontColor']);
    let colorSat = (data['colorSat']);
    resolve([fontSize, fontColor, colorSat]);
    console.log(colorSat);
  })

})

window.onload = settings.then((e) =>  {
  document.body.style.fontSize = e[0] + "px";
  document.body.style.color = e[1];

  var imgs = document.getElementsByTagName('img');
  for (imageElt of imgs )
  {
  imageElt.style.filter = `"brightness(${e[2]}%)"`;
  }
console.log(e[0], e[1], e[2]);
})

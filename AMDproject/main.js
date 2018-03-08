/* Function to show popup */
var showPopup = function(event) {


  var titleText = event.srcElement.attributes['data-title'].value;
  var paragraphText = event.srcElement.attributes['data-paragraph'].value;

  var popup = document.getElementById('popupbox');

  var title = document.querySelector('#popupbox h2');
  title.innerHTML = titleText;

  var paragraph = document.querySelector('#popupbox p');
  paragraph.innerHTML = paragraphText;

  popup.setAttribute('class', 'visible');

  event.preventDefault();

}

/* Function hide popup */
var hidePopup = function(event) {

  var popup = document.getElementById('popupbox');
  popup.removeAttribute('class');

  event.preventDefault();

}

/* Get the elements. */
var hoverTriggers = document.querySelectorAll('.flags');

/* Add the listeners to each element. */
for (var i = 0; i < hoverTriggers.length; i++) {
  hoverTriggers[i].addEventListener('mouseover', showPopup, false);
  hoverTriggers[i].addEventListener('mouseout', hidePopup, false);
}

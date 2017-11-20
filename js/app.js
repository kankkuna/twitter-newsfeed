window.addEventListener('load', function() {
  var addText = document.getElementById('tweet');
  var button = document.getElementById('press');
  var text = document.getElementById('insert');


  button.addEventListener('click', function(event) {
    event.preventDefault();
    if (text.value) {
      var save = document.createElement('div');
      save.setAttribute('class', 'post');
      var paragraph = document.createElement('p');
      paragraph.setAttribute('class', 'new-paragraph');
      paragraph.textContent = text.value;
      save.appendChild(paragraph);
      addText.appendChild(save);

      text.value = '';

      addText.insertBefore(save, addText.childNodes[0]);
    }
  });
}) ;

function(){
}

window.addEventListener('load', function() {
  var addText = document.getElementById('add');
  var button = document.getElementById('saveText');
  var text = document.getElementById('writeInput');

  button.addEventListener('click', function(event) {
    event.preventDefault();
     // obteniendo el contenido del input
    var save = document.createElement('div');
    save.setAttribute('class','save-div')
    var paragraph = document.createElement('p');
    paragraph.setAttribute('class','new-paragraph');
    paragraph.textContent = text.value;
    save.appendChild(paragraph);
    addText.appendChild(save);

    text.value = '';

    addText.insertBefore(save , addText.childNodes[0]);
  });
}) ;

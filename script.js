function addGrid(){

        var boxSize = prompt("How big should the box be? ")

        for (var i = 0; i < boxSize; i++) {
            var row = document.createElement('div');
            row.className = "row";
            for (var j = 0; j < boxSize; j++) {
                var box = document.createElement('div');
                box.className = "box";
                row.appendChild(box);
            }
            document.getElementById('grid-container').appendChild(row)
            row.addEventListener('mouseover', function (e) {
              if (e.target.matches('.box')) {
                  e.target.classList.add('active');
                }
            })
        }
    }


function removeGrid() {
  var elements = document.getElementsByClassName("row");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
      }
}

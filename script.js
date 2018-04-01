// $(window).on('load',function(){
// 	$('.ingredient').addClass("draggable")




// })
var on_cake = [];
function cake_add(id){
	if (on_cake.indexOf(id) != -1){}
	else{
		on_cake.push(id)
	}

}

function cake_remove(id){
	if (on_cake.indexOf(id) != -1){
		on_cake.splice(on_cake.indexOf(id),1)
	}

}

$('document').ready(function(){

 	$('.ingredient').addClass("draggable")
 	$('div').not('.draggable,.cake').addClass("outside")

});

// const interact = require('interact')

// target elements with the "draggable" class


interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    // restrict: {
    //   restriction: "body",
    //   endOnly: true,
    //   elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    // },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      // var textEl = event.target.querySelector('p');

      // textEl && (textEl.textContent =
      //   'moved a distance of '
      //   + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
      //                Math.pow(event.pageY - event.y0, 2) | 0))
      //       .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }
  interact('.cake').dropzone({
  	overlap: 0.5,

  	ondragenter: function(event){
  		cake_add(event.relatedTarget.id)
  	},
  	ondragleave: function(event){
  		cake_remove(event.relatedTarget.id)
  	}

  });


  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;



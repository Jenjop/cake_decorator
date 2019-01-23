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

function resize_big(target){
  $(target).width(target.getAttribute('orig-x'))
  $(target).height(target.getAttribute('orig-y'))
  // console.log(`${target}, ${target.getAttribute('orig-x')}`)
}

function resize_small(target){
  $(target).width(target.getAttribute('orig-x')*.2)
  $(target).height(target.getAttribute('orig-y')*.2)
  // console.log(`${target}, ${target.getAttribute('orig-x')}`)
}


// var test = []
// var test2
// var i = 0
$('document').ready(function(){

  $( "#chocolate_opt" ).click(function() {
    $(".base").attr("src","chocolate_base.png");
  });

  $( "#vanilla_opt" ).click(function() {
    $(".base").attr("src","vanilla_base.png");
  });

  $( "#velvet_opt" ).click(function() {
    $(".base").attr("src","velvet_base.png");
  });

  var cw = $('.base_opt').width();
  $('.base_opt').css({
    'height': cw + 'px'
  });




 	$('.ingredient').addClass("draggable");
 	$('div').not('.draggable,.cake').addClass("outside");

  $('.ingredient').each(function(){
      // test[i] = this
      this.setAttribute('orig-x',this.clientWidth);
      this.setAttribute('orig-y', this.clientHeight);
      $(this).width(this.getAttribute('orig-x')*.2)
      $(this).height(this.getAttribute('orig-y')*.2)
      // resize_small(this)
      // i++
  });
  var dif = 100/($('.ingredient').length +1)
  var space = dif
  $('.ingredient').each(function(){
    $(this).css({'left':space + '%'
    });
    space += dif
    // console.log(space)

  });


});

// const interact = require('interact')

// target elements with the "draggable" class


interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "body",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
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

  interact('.ingredients_bar').dropzone({

    ondragleave: function(event){
      resize_big(event.relatedTarget)
    },
    ondragenter: function(event){
      resize_small(event.relatedTarget)
    }
  });


  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;



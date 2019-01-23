// $(window).on('load',function(){
// 	$('.ingredient').addClass("draggable")




// })
var script_var = (function all_script(){
var on_cake = [];
var cake_type = 'chocolate_opt';
$('document').ready(function(){
  orig_body = $('body').html()
});
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

function finish_rewrite(){
  // console.log('test');
  jQuery("body").html("      <div class='content'>        <div class='text-container'>        <h1>...and the judges' scores!</h1>        <p>(hover for commentary)</p>      </div>      <div class='judge-container'>        <div class='judge' id='dog'>          <div class='image'>              <img class='body' src='dogebod.png' style='left:10%;'>            <img class='head' src='dogehead.png' style='left:10%;'>                       </div>            <div class='box' id='1'>                <img src='cakebox.png'>                <div class='centered hide' id='j1'></div>                <div class='whitebox' id='w1'></div>              </div>          </div>          <div class='judge' id='bun'>              <div class='image'>              <img class='body' src='bunbod.png' style='left:20%;'>              <img class='head' src='bunhead.png' style='left:20%;'>          </div>            <div class='box' id='2'>                <img src='cakebox.png'>                <div class='centered hide' id='j2'></div>                <div class='whitebox' id='w2'></div>             </div>          </div>          <div class='judge' id='cat'>             <div class='image'>              <img class='body' src='catbod.png' style='left:15%;'>              <img class='head' src='cathead.png' style='left:15%;'>          </div>             <div class='box' id='3'>                <img src='cakebox.png'>                <div class='centered hide' id='j3'></div>                <div class='whitebox' id='w3'></div>             </div>          </div>      </div><!--      <div class='judge-container>        <div class='box'><img src='cakebox.png'></div>        <div class='box'><img src='cakebox.png'></div>        <div class='box'><img src='cakebox.png'></div>      </div> -->      <div class='text-container restart'>        <h2>decorate another</h2>      </div>      </div>");
}

function restart_rewrite(){


  jQuery("body").html(orig_body);

}

function apply_restart_rewrite(){
  $(".restart").click(function(){
      restart_rewrite()
      script_var()
  });
}

var comment1 = "";
var comment2 = ""; 
var comment3 = ""; 
var test,test2

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}


function calcScore1(size) { //at least n items
    // var x = Math.floor((Math.random() * 10) + 1);
    // comment1 = "\"very full... lots of stuff... yes\"";
    // return x;
    size++

    if (size <= 3){
        comment1 = "\"too little stuff... i hungry... no\"";
        return size;
    }

    else if (size <= 6)
    {
      comment1 = "\"very full... lots of stuff... yes\"";
      return 10;
    }
    else
    {
      comment1 = "\"too much stuff... no good...\"";
      return 5;
    }
}

var white = ['vanilla_trim', 'vanilla_frosting']
var brown = ['chocolate_frosting', 'chocolate_trim', 'chocolate_layer']
var red = ['velvet_layer']
function calcScore2(ar) { //how much frosting? idk
    // var x = Math.floor((Math.random() * 10) + 1);
    // comment2 = "\"great sense of aesthetic. a+\"";  
    // return x;
    var whitept = 0,brownpt = 0,redpt = 0;
    var ct = 0;
    if (cake_type == 'chocolate_opt'){
      brownpt ++
    }
    else if(cake_type == 'vanilla_opt'){
      whitept ++
    }
    else 
      redpt ++

    for (var i in ar){
      // console.log(ar[i])
      if (white.indexOf(ar[i]) != -1){
        // console.log('white')
        whitept ++
      }
      else if(brown.indexOf(ar[i]) != -1){
        // console.log('brown')
        brownpt ++
      }
      else if(red.indexOf(ar[i]) != -1){
        // console.log('red')
        redpt++
      }
    }
    // console.log(ct)
    if (whitept > 0)
      ct ++
    // console.log(ct)
    if (brownpt > 0)
      ct++
    // console.log(ct)
    if (redpt > 0)
      ct++
    // console.log(ct)

    if(ct > 1)
      comment2 = "\"good variety of flavors. a+\"";
    else
      comment2 = "\"you have no variety in your life. saddening\"";
    return 3*ct + 1

}

var allposs = ['cherry', 'strawberry', 'candle', 'vanilla_frosting', 'chocolate_frosting', 'vanilla_trim', 'chocolate_trim', 'chocolate_layer', 'velvet_layer']
function calcScore3(ar) { //very specific items
    //param: item1, item2, item3, item4, item5
    // var x = Math.floor((Math.random() * 5) + 1); //1-5 inclusive
    // comment3 = "\"i have very specific tastes that you haven't satisfied\""; 
    // return x;

    var ranlist = getRandomSubarray(allposs, 5)
    test = ranlist
    var ct = 0
    for (var i in ranlist){
      if (ar.indexOf(ranlist[i]) != -1){
        ct ++
      }
    }
    if(ct < 4)
      comment3 = "\"i have very specific tastes that you haven't satisfied\"";
    else if (ct < 5)
      comment3 = "\"almost there, but you are still missing my favorite ingredient\"";
    else
      comment3 = "\"you have satisfied my very specific taste buds. good for you\"";
    return ct * 2

}

function showScores(i){
    setTimeout(function(){ 
        $(`#j${i}`).removeClass('hide'); 
        $(`#j${i}`).addClass('show'); 
        // $(`#w${i}`).css("transform","translate(0%, 0%)")
        $(`#w${i}`).css("height", "0");

    }, 4000);
}

function includes(item, array){
    for (i in array) {
        if (item == array[i])
            return true;
    }
    return false;
}

function showComments(n){
    // console.log(n);
    var target = $('.text-container h1');
    switch (n) {
            case 1:
                target.text(`${comment1}`);
                target.css("color","#9193df");
                break;
            case 2:
                target.text(`${comment2}`);
                target.css("color","#D271BC");
                break;
            case 3:
                target.text(`${comment3}`);
                target.css("color","#ed92d8");
                break;
        }
}

function doHover(i){

        $(`#${i}`).hover(function(){
            if ($(`#j${i}`).hasClass('show')){
            $('.text-container p').css("opacity", "0");
            $('.text-container h1').css("font-size", "2em");
            $(this).css("opacity", ".6");
            // console.log($(`#${i}`).attr('id'));
            showComments(i);
        }
        }, function(){
            $(this).css("opacity", "1");
        });

}

function rotate(target,val){
    
}


function bobble(target,val){
    var num = 0;
    setInterval(function(){
    if (num % 2 == 0){
        target.css("transform",`rotate(${val}deg)`)
    }
    else{
        target.css("transform",`rotate(${-val}deg)`)
    }
    num ++
    }, 1000);
}

function bobUp(target){
    var num = 0;
    setInterval(function(){
    if (num % 2 == 0){
        target.css("transform",`translate(0,-5px)`)
    }
    else{
        target.css("transform",`translate(0,5px)`)
    }
    num ++
    }, 1000);
}


// var test = []
// var test2
// var i = 0
$('document').ready(function(){

  $( "#chocolate_opt" ).click(function() {
    $(".base").attr("src","chocolate_base.png");
    cake_type = 'chocolate_opt';
  });

  $( "#vanilla_opt" ).click(function() {
    $(".base").attr("src","vanilla_base.png");
    cake_type = 'vanilla_opt';
  });

  $( "#velvet_opt" ).click(function() {
    $(".base").attr("src","velvet_base.png");
    cake_type = 'velvet_opt';
  });

  var cw = $('.base_opt').width();
  $('.base_opt').css({
    'height': cw + 'px'
  });

/*
  $(".restart").click(function(){
    restart_rewrite()
  });
*/

  $( ".finish" ).click(function() {
    finish_rewrite()
    $('document').ready(function() { 

    for (var i = 1; i <= 3; i++)
    {
        // console.log(i)
        var score;
        switch (i) {
            case 1:
                score = calcScore1(on_cake.length);
                break;
            case 2:
                score = calcScore2(on_cake);
                break;
            case 3:
                score = calcScore3(on_cake);
                break;
        }
        $(`#j${i}`).text(`${score}`);
        showScores(i); //the array will be a parameter
        doHover(i);
    }

    var audio = new Audio("drum.mp3");
    audio.play();

    bobble($('#dog .head'), 7)
    bobble($('#cat .head'), -7)
    bobUp($('#bun .head'))
    apply_restart_rewrite()
    
});
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
  //Try to move html version of body into variable
  // function log(x){
  //   console.log(x)
  // }



return all_script
})();

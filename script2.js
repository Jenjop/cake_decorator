var comment1 = "";
var comment2 = ""; 
var comment3 = ""; 

function calcScore1() { //at least n items
    var x = Math.floor((Math.random() * 10) + 1);
    comment1 = "very full... lots of stuff... yes";
    return x;

    // if (size <= 3)
    //     return size;
    // else if (size <= 6)
    //     return 10;
    // else
    //     return 5;
}

function calcScore2() { //how much frosting? idk
    var x = Math.floor((Math.random() * 10) + 1);
    comment2 = "great sense of aesthetic. a+";  
    return x;
}

function calcScore3() { //very specific items
    //param: item1, item2, item3, item4, item5
    var x = Math.floor((Math.random() * 5) + 1); //1-5 inclusive
    comment3 = "i have very specific tastes that you haven't satisfied"; 
    return x;
}

function showScores(i){
    setTimeout(function(){ 
        $(`#j${i}`).removeClass('hide'); 
        $(`#j${i}`).addClass('show'); 
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
    console.log(n);
    switch (n) {
            case 1:
                $('.text-container h1').text(`${comment1}`);
                console.log("called1")
                break;
            case 2:
                $('.text-container h1').text(`${comment2}`);
                console.log("called2")
                break;
            case 3:
                $('.text-container h1').text(`${comment3}`);
                console.log("called")
                break;
        }
}

function doHover(i){
    if ($(`#j${i}`).hasClass('show')){
        $(`#${i}`).hover(function(){
            $('.text-container p').css("opacity", "0");
            $('.text-container h1').css("font-size", "2em");
            $(this).css("opacity", ".6");
            // console.log($(`#${i}`).attr('id'));
            showComments(i);
        }, function(){
            $(this).css("opacity", "1");
        });
    }
}

$('document').ready(function() { 

    for (var i = 1; i <= 3; i++)
    {
        console.log(i)
        var score;
        switch (i) {
            case 1:
                score = calcScore1();
                break;
            case 2:
                score = calcScore2();
                break;
            case 3:
                score = calcScore3();
                break;
        }
        $(`#j${i}`).text(`${score}`);
        showScores(i); //the array will be a parameter

        doHover(i);
    }

    var audio = new Audio("drum.mp3");
    audio.play();

    // for (var i =1; i<=3; i++)
    // {

    // }
    
});
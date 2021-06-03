$(document).ready(function() {

    /*
    EXAMPLE: Turns the background color of h1 things, when clicked, to red
    $('h1').click(function(){
        $(this).css('background-color', '#ff0000');
    })
    */

    /*
    HOW WAYPOINTS SHOULD BE USED IN JQUERY
    var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window')
    }, {
      offset: '25%'
    })
    */

    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });



});
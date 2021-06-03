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

    /******* STICKY NAVIGATION *******/
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

    /******* SCROLL ON BUTTONS *******/

    /* Clicking "I'm hungry" */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    /* Clicking "Show me more" */
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /******* NAVIGATION SCROLL *******/
        $(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });

});
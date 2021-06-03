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

    /******* ANIMATIONS ON SCROLL *******/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction){
            $('.js--wp-2').addClass('animated fadeInUp');
    },{
            offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction){
            $('.js--wp-3').addClass('animated fadeIn');
    },{
            offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction){
            $('.js--wp-4').addClass('animated pulse');
    },{
            offset: '50%'
    });

    /******* MOBILE NAVIGATION *******/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

});
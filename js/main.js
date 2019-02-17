/*global $, jQuery, alert*/

$(document).ready(function(){
    
    "use strict";
    
    // Nice Scroll Triger
    
    $('html').niceScroll();
      
    // Trigger The Carousel
    
    $('.carousel').carousel({
        
        interval:6000
    });
    
    //Show Color Option When Click The Gear
    
    $('.gear-check').click(function(){
        
        $('.color-option').fadeToggle();
    });
    
    // Change Theme Color On Clicke
    
    var colorLi = $('.color-option ul li');
    
    colorLi
        .eq(0).css("backgroundColor","#E41B17").end()
        .eq(1).css("backgroundColor","#E426D5").end()
        .eq(2).css("backgroundColor","#009AFF").end()
        .eq(3).css("backgroundColor","#22f70b");
    
    colorLi.click(function(){
        
        $('link[href*="theme"]').attr("href",$(this).attr('data-value'));
    });
    
    // Scroll To Top
    
    var scrollButton = $('#scroll-top');
    
    $(window).scroll(function(){
        
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
    
    //Click On Buttton To Scroll Top
        
    scrollButton.click(function() {
        
        $('html,body').animate({ scrollTop : 0 }, 600);
    }); 
});

// Loading Screen

$(window).on("load", function() { 
    
        // Loading Elments
    
        $(".loading-overlay .spinner").fadeOut(1000, function() {
        
        // Show The Scroll

        $('body').css('overflow', 'auto');        
        
        $(this).parent().fadeOut(2000, function() {           
            
        $(this).remove();
            
        });
    });
});
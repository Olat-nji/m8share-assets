/*
Author       : Code-Theme
Template Name: Find Houses - HTML5 Template
Version      : 1.0
*/

"use strict";

jQuery(document).on(
    "ready",
    (function($) {
        // /*---------------------------------
        //  //------ PRELOADER ------//
        //  ----------------------------------*/
        // $("#status").fadeOut();
        // $("#preloader").delay(200).fadeOut("slow");

        /*---------------------------------
         //------ ANIMATE HEADER ------//
         ----------------------------------*/

        var alterClass = function() {
            var ww = document.body.clientWidth;
            if (ww < 1024) {
                $("#spate").removeClass("sticke");
                $("#search-map-wrapper").addClass("sticke");
                $("#cover-map").addClass("cover-map-fixed");


            } else {
                $("#cover-map").removeClass("cover-map-fixed");
                $("#search-map-wrapper").removeClass("sticke");
                $("#spate").addClass("sticke");



            }


        };
        $(window).resize(function() {
            alterClass();
        });
        //Fire it when the page first loads:
        alterClass();


        // var headerOffset = document.getElementById('header').offsetHeight;
        // $(window).on("scroll", function() {
        //     var sticky = $(".sticke");
        //     var scroll = $(window).scrollTop();
        //     if (scroll <= headerOffset) {
        //         sticky.removeClass("sticky");
        //     } else {
        //         sticky.addClass("sticky");
        //     }
        // });

        /*----------------------------------------------------*/
        /*  Sticky Header
        /*----------------------------------------------------*/
        // $("#header").not("#header-container.header-style-2 #header").clone(true).addClass('cloned unsticky').insertAfter("#header");
        // $("#navigation.style-2")
        //     .clone(true)
        //     .addClass("cloned unsticky")
        //     .insertAfter("#navigation.style-2");

        // // Logo for header style 2
        // $("#logo .sticky-logo")
        //     .clone(true)
        //     .prependTo("#navigation.style-2.cloned ul#responsive");

        // // sticky header script
        // var headerOffset = $("#header-container").height() * 2; // height on which the sticky header will shows

        // $(window).scroll(function() {
        //     if ($(window).scrollTop() >= headerOffset) {
        //         // $("#header.cloned").addClass('sticky').removeClass("unsticky");
        //         $("#navigation.style-2.cloned")
        //             .addClass("sticky")
        //             .removeClass("unsticky");
        //     } else {
        //         // $("#header.cloned").addClass('unsticky').removeClass("sticky");
        //         $("#navigation.style-2.cloned")
        //             .addClass("unsticky")
        //             .removeClass("sticky");
        //     }
        // });

     
        // /*----------------------------------
        // //------ SMOOTHSCROLL ------//
        // -----------------------------------*/
        // smoothScroll.init({
        //     speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        //     offset: 200, // Integer. How far to offset the scrolling anchor location in pixels
        // });


        // bind filter button click
        var filters = $(".filters-group ul li");
        filters.on("click", function() {
            filters.removeClass("active");
            $(this).addClass("active");
            var filterValue = $(this).attr("data-filter");
            // use filterFn if matches value
            $(".portfolio-items").isotope({
                filter: filterValue,
            });
        });

       

        /*----------------------------------
        //------ JQUERY SCROOLTOP ------//
        -----------------------------------*/
        var go = $(".go-up");
        $(window).on("scroll", function() {
            var scrolltop = $(this).scrollTop();
            if (scrolltop >= 50) {
                go.fadeIn();
            } else {
                go.fadeOut();
            }
        });

 

        /*----------------------------------
        //------ MODAL ------//
        -----------------------------------*/
        var modal = {};
        modal.hide = function() {
            $(".modal").fadeOut();
            $("html, body").removeClass("hid-body");
            localStorage.removeItem('redirect_to');
        };

        $(".modal-open").on("click", function(e) {
            e.preventDefault();
            $(".modal").fadeIn();
            $("html, body").addClass("hid-body");
            
            
            var current_url=window.location.href 
            if(!current_url.includes("login")||!current_url.includes("register")){
                localStorage.setItem('redirect_to',current_url);
                
            }
            
        
        });
        $(".close-reg").on("click", function() {
            modal.hide();
            
        });

        /*----------------------------------
        //------ TABS ------//
        -----------------------------------*/
        $(".tabs-menu a").on("click", function(a) {
            a.preventDefault();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            var b = $(this).attr("href");
            $(".tab-contents").not(b).css("display", "none");
            $(b).fadeIn();
        });
    })(jQuery)
);
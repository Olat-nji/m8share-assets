/* ----------------- Start Document ----------------- */
(function($) {
    "use strict";

    $(document).ready(function() {

        /*--------------------------------------------------*/
        /*  Mobile Menu - mmenu.js
        /*--------------------------------------------------*/
        $(function() {
            function mmenInit() {


                $("#menuu").mmenu({

                }, {
                    // configuration
                    offCanvas: {
                        pageNodetype: "#wrapper",
                        "position": "right"
                    }
                });





                var mmenuAPI = $("#menuu").data("mmenu");
                var $icon = $(".hammy");

                $("#mmenu-trigger2").click(function() {
                    mmenuAPI.open();
                });

                $("#mmenu-trigger22").click(function() {
                    mmenuAPI.open();
                });


                mmenuAPI.bind("open:finish", function() {
                    setTimeout(function() {
                        $icon.addClass("is-active");
                    });
                });
                mmenuAPI.bind("close:finish", function() {
                    setTimeout(function() {
                        $icon.removeClass("is-active");
                    });
                });



                $(".mm-next").addClass("mm-fullsubopen");

            }
            mmenInit();


        });

        /*  User Menu */
        // $('.user-menu').on('click', function() {
        //     $(this).toggleClass('active');
        // });











        // ------------------ End Document ------------------ //
    });

})(this.jQuery);
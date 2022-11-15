$(document).ready(function(){                   // Use ready() method to make function available after document loads

    $("#menu").click(function(){                // click() method triggers click event or attaches function to run when click event occurs
        $(this).toggleClass("fa-times");        // toggleClass() method toggles between adding and removing one or more class 
        $(".navbar").toggleClass("nav-toggle");
    });

    $(window).on("scroll load", function(){      // Attach one or more event handlers for selected elements and child elements
        $("#menu").removeClass("fa-times");     // removeClass() method removes one or more class names from selected elements
        $(".navbar").removeClass("nav-toggle");

        if($(window).scrollTop() > 60){
            $("header").addClass("header-active");
        }else{
            $("header").removeClass("header-active");
        }

        $("section").each(function(){
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr("id");

            if(top >= offset && top < offset+height){
                $(".navbar ul li a").removeClass("active");
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        })
    });
})
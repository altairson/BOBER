$(document).ready(function (){

    $("#main").on("click", ".ticket", function(e) {
        // database call here to get ticket details
        getTicketDetails(this);
        e.stopPropagation();
    });

    function getTicketDetails(ticket) {



        $(".focused").removeClass("hidden");
    }

    $("#main").click(function() {
        if(!$(".focused").hasClass("hidden")) {
            $(".focused").addClass("hidden");
        }
    });


    $(".focused").click(function(e) {
        e.stopPropagation();
    })

});


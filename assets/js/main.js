$(document).ready(function(){
    // Taps
    $( "#tabs" ).tabs();

    // Close Modal
    $(".close").on('click', function(){
        $(".delete-modal, .overlay").show(500);
    });
    $(".deleteCancel").on('click', function(){
        $(".delete-modal, .overlay").hide();
    });
    $(".delete-btn").on('click', function(){
        $(".delete").hide(100);
        $(".deleted").show(200);
    });
    $(".back-btn").on('click', function(){
        $(".deleted").hide(100);        
        $(".delete").show();
        $(".delete-modal, .overlay").hide();
    });


    // off canvas menu
    $(".active-bar").on('click', function(){
        $(".sidebar").show(500);
        $(".active-bar").hide();
        $(".close-bar").show();
    });
    $(".close-bar").on('click', function(){
        $(".sidebar").hide(500);
        $(".active-bar").show();
        $(".close-bar").hide();
    });

    // Menu inbox toggle
    $(".mobile-inbox-show").on('click', function(){
        $(".show-inbox").toggle(500);
    });
    $(".notifications").on('click', function(){
        $(".show-all-notifications").toggle(500);
    });

    // Application modal
    $(".view-modal-btn").on('click', function(){
        $(".application-modal, .overlay").show(500);
    });
    $(".a-modal-close-btn, .overlay").on('click', function(){
        $(".application-modal, .overlay").hide();
    });

    // chat Page
    $(".chat-open").on('click', function(){
        $(".full-chart-list").show(500);
        $(".chat-open").hide();
        $(".chat-close").show();
    });
    $(".chat-close").on('click', function(){
        $(".full-chart-list").hide(500);
        $(".chat-open").show();
        $(".chat-close").hide();
    });

});
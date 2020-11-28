jQuery(document).ready(function() {
    "use strict";    
    
    /*===================== TABLE OF CONTENT =======================
    1. Search Icon
    2. Responsive Menu
    3. Responsive Menu Dropdown
    =============================================================*/
    
    /* Search Icon */
    $(".search-icon i").on("click",function(){
        $(this).toggleClass("active");
        $(".search-box").toggleClass("searchon");
        return false;
    });
    
    /* Responsive Menu */
    $(".menu-button, .stop").on("click",function(){
        $(this).toggleClass("active");
        $(".responsive-menu").toggleClass("open");
        $(".theme-layout").toggleClass("stop");
        return false;
    });
    
    /* Responsive Menu Dropdown */
    $(".mobile-menu ul").parent().addClass("menu-item-has-children");
    $(".mobile-menu li.menu-item-has-children > a").on("click",function(){
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });
    
}); /*=== Document.Ready Ends Here ===*/

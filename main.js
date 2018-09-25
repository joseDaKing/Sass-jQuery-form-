$(document).ready(function() {

    const moduleInfo = $(".module-info");
    const formContent = $(".form__content");

    const btnNext = $(".btn--next");
    const btnPrev = $(".btn--prev");  
    const form = $(".form");
    const paginationElems = $(".pagination").children();

    let state = 1;

    //start 
    $.each( formContent, function() {
        $(this).hide();
    });

    $.each( moduleInfo, function() {
        $(this).hide();
    });

    $.each(formContent, function(index) {
        const item = $(this);
        if( (index + 1) == state) {
            item.show();
        }
    })
    
    $.each(moduleInfo, function(index) {
        const item = $(this);
        if( (index + 1) == state) {
            item.show();
        }
    })

    btnPrev.hide();

    //next
    btnNext.click(function() {
        if(state < 4) {
            $.each(formContent, function(index) {
                const item = $(this);

                if( (index + 1) == state ) {
                    item.css("left", "0px").animate({left: "120%"}, 600, function() {
                        item.removeAttr("style").hide();
                    });
                }        
            });

            state++;
            
            $.each(formContent, function(index) {
                const item = $(this);

                if( (index + 1) == state ) {
                    item.show().css("left", "-120%");

                    setTimeout(function() {
                        item.animate({left: "0px"}, 600, function() {
                            item.removeAttr("style");
                        });
                    }, 800);
                }
            });

            $.each(moduleInfo, function(index) {
                const item = $(this);
                if((index + 1) == state) {
                    item.show();
                    item.siblings().hide();
                } 
            });

            $.each(paginationElems, function(index) {
                const item = $(this);
                if( (index + 1) == state) {
                    item.addClass("pagination__active");
                    item.siblings().removeClass("pagination__active");
                }
            });

            switch(state) {
                case 1:
                    setTimeout(function() {
                        form.animate({height: "62.5rem"}, 500);
                    }, 500);
                    break;
    
                case 2:
                    setTimeout(function() {
                        form.animate({height: "75rem"}, 500); 
                    }, 500);  
                    break;
    
                case 3:
                    setTimeout(function() {
                        form.animate({height: "75rem"}, 500);
                    }, 500);
                    break;
    
                case 4:
                    setTimeout(function() {
                        form.animate({height: "62.5rem"}, 500);
                    }, 500);
                    break;
            }

            btnPrev.show();
        }  

        if(state == 4) {
            btnNext.removeClass("btn--next").html("finalize");
        }
    });

    //previous
    btnPrev.click(function() {
        if(state > 1) {
            $.each(formContent, function(index) {
                const item = $(this);

                if( (index + 1) == state ) {
                    item.animate({left: "-120%"}, 600, function() {
                        item.removeAttr("style").hide();
                    });
                }
                
            });
            
            state--;
            
            $.each(formContent, function(index) {
                const item = $(this);

                if( (index + 1) == state ) {
                    setTimeout(function() {
                        item.show().css("left", "120%"); 
                        
                        setTimeout(function() {
                            item.animate({left: "0px"}, 600, function() {
                                item.removeAttr("style");
                            });
                        }, 500);

                    }, 600);
                }
            });
            
            $.each(moduleInfo, function(index) {
                const item = $(this);
                if((index + 1) == state) {
                    item.show();
                    item.siblings().hide();
                } 
            });

            $.each(paginationElems, function(index) {
                const item = $(this);
                if( (index + 1) == state) {
                    item.addClass("pagination__active");
                    item.siblings().removeClass("pagination__active");
                }
            });
    
            switch(state) {
                case 1:
                    setTimeout(function() {
                        form.animate({height: "62.5rem"}, 500);
                    }, 500);
                    break;
    
                case 2:
                    setTimeout(function() {
                        form.animate({height: "75rem"}, 500); 
                    }, 500);  
                    break;
    
                case 3:
                    setTimeout(function() {
                        form.animate({height: "75rem"}, 500);
                    }, 500);
                    break;
    
                case 4:
                    setTimeout(function() {
                        form.animate({height: "62.5rem"}, 500);
                    }, 500);
                    break;
            }
        }

        if( state == 1) {
            btnPrev.hide();
        }

        if( state == 3 ) { 
            btnNext.addClass("btn--next").html("next step");
        }
    });

});
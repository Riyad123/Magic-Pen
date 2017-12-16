
//function for parallex scroll


$(window).scroll(function(){
    parra()
})

function parra(){
    var wscroll=$(window).scrollTop();
    
    if(wscroll>=10){
         $(".m").css("visibility","visible");
    }
    if(wscroll>=60){
         $(".a").css("visibility","visible");
    }
    if(wscroll>=110){
         $(".g").css("visibility","visible");
    }
    if(wscroll>=160){
         $(".i").css("visibility","visible");
    }
    if(wscroll>=210){
         $(".c").css("visibility","visible");
    }
    
     if(wscroll>=260){
         $(".p").css("visibility","visible");
    }

 if(wscroll>=310){
         $(".e").css("visibility","visible");
    }
 if(wscroll>=360){
         $(".n").css("visibility","visible");
    }
    
    
     if(wscroll<=10){
         $(".m").css("visibility","hidden");
    }
    if(wscroll<=59){
         $(".a").css("visibility","hidden");
    }
    if(wscroll<=109){
         $(".g").css("visibility","hidden");
    }if(wscroll<=159){
         $(".i").css("visibility","hidden");
    }if(wscroll<=209){
         $(".c").css("visibility","hidden");
    }
    
    
    if(wscroll<=249){
         $(".p").css("visibility","hidden");
    }if(wscroll<=309){
         $(".e").css("visibility","hidden");
    }if(wscroll<=359){
         $(".n").css("visibility","hidden");
    }
    
    
    if(wscroll>=0 && wscroll<=270){
         $(".penOne img").css("top",(270)-(wscroll)+"px");
    }
    
    if(wscroll>=270 && wscroll<=473){
         $(".penthree").css("top",(-203)+(wscroll-270)+"px");
    }
}

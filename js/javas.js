



 var user  ; 

$(document).ready(function(){
    
    
   
    
    /******************************click on shopping cart *************************/
    $(".fa-shopping-cart").click(function(){
        
        $(".newCart").animate({
            
            bottom:"0" 
            
        }, 1000);
		
		$("body").css("overflow","hidden");
        
    });
    
    /***********************************close shopping list ***********************/ 
    
     $(".close-shopping-list").click(function(){
        
        $(".newCart").animate({
            
            bottom:"100%" 
            
        }, 1000);
        $("body").css("overflow","auto");
    }); 
    /***********************************************shopping list delete item  ************************/
	
    /**************************************open menu*****************************************************/
     $(".ham").click(function(){
        
        $(".menu").animate({
            
            right:"30%" 
            
        }, 1000);
        
    });
    
  
    /***********************************close menu ***********************/ 
    
     $(".close-menu").click(function(){
        
        $(".menu").animate({
            
            right:"100%" 
            
        }, 1000);
        
    });
    
    /****************************************************navbar bg-color****************************/
   /* $(this).scroll(function(){
        
        $(".my-nav").animate({
            
            backgroundColor:"#fff"
            
        });
    }) ; */ 
    
    
    
    /**************************************************************************************/
    
    /*********************************tooltip**************************************/
    $('[data-toggle="tooltip"]').tooltip(); 
    /*****************************************************************/
    
    /********************************************login form*******************************/
    $(".log").click(function(){
        
        $("body").css("overflow","hidden");
        $(".log-model").css("transform","scale(1)");
        
    });
    /*******************************************************************************/
    /**********************************close login model*******************************/
    $(".clo").click(function(){
        
        $(".log-model").css("transform","scale(0)");
		$(".log-model form").trigger("reset");
        $("body").css("overflow","auto");
        
    });
    
    $("#sub").click(function(){
        
        $(".log-model").css("transform","scale(0)");
        $("body").css("overflow","auto");
         user = "one" ; 
        
    });
   
    
    /*******************************************************************************************/
    
    /**********************************stop reload ************************************/ 
    $("#prospects_form").submit(function(e) {
    e.preventDefault();
        });
	
    /********************************************************************/
    /**************************************show message *******************/
    
    $(".car ").click(function(){
        
        if(user == undefined)
            {
                $(".mess").addClass("show");
                setTimeout(function(){$(".mess").removeClass("show")},3000) ; 
               
            }
        else
            {
                document.getElementById("snackbar").innerHTML="one item has been added ";
                $(".mess").addClass("show");
                setTimeout(function(){$(".mess").removeClass("show")},3000) ;
               
                
            }
        
        
    });
	
	
	
	  
    $(".love ").click(function(){
        
        if(user == undefined)
            {
                $(".mess").addClass("show");
                setTimeout(function(){$(".mess").removeClass("show")},3000) ; 
               
            }
        else
            {
                document.getElementById("snackbar").innerHTML="one item has been added  ";
                $(".mess").addClass("show");
                setTimeout(function(){$(".mess").removeClass("show")},3000) ;
				
				
                
                
            }
        
        
    });
	
	
	$("#valBtn").click(function(){
		
		         document.getElementById("snackbar").innerHTML="Your Order Has Been Sent";
                $(".mess").addClass("show");
                setTimeout(function(){$(".mess").removeClass("show")},3000) ;
	});
    /***************************************************************************/
    
    /**************************************img model *******************************/ 
    $(".sho").click(function(){
        $("body").css("overflow","hidden");
        $(".imgModel").css("transform","scale(1)");
        /**************************set image***************************/
    var s = $(".sho").parentsUntil("div .row");
    var ss = s[2].children ;  
    var sss = ss[0] ;  
    console.log(sss.src);
        
    $(".imgModel .con-img").children("img").attr("src",sss.src);    
        
        
    });
    /***********************close model *************************/
     $(".cloModel").click(function(){
        
        $(".imgModel").css("transform","scale(0)");
        $("body").css("overflow","auto");
        
    });
    
    $(".imgModel").click(function(){
        
        $(".imgModel").css("transform","scale(0)");
        $("body").css("overflow","auto");
        
    });
    
    /*******************************************************************************************/
    
    /*********************************product gallery default*************************/
        $('[data-toggle="table"]').hide(); 
        $('[data-toggle="sofa"]').hide();
        $('[data-toggle="lamp"]').hide();
        $(".chair").addClass("sty");
    /********************************************************************************/
    /************************products gallery***************************************************/
    $(".chair").click(function(){
        
        $('[data-toggle="chair"]').show().animate({
            
            opacity: " 1"
        }) ;
        $('[data-toggle="table"]').hide(); 
        $('[data-toggle="sofa"]').hide();
        $('[data-toggle="lamp"]').hide();
        $(this).addClass("sty");
        $(this).siblings().removeClass("sty");
    });
    
    
    
      $(".sofa").click(function(){
        
        $('[data-toggle="sofa"]').show();
        $('[data-toggle="table"]').hide(); 
        $('[data-toggle="chair"]').hide();
        $('[data-toggle="lamp"]').hide();
        $(this).addClass("sty");
        $(this).siblings().removeClass("sty");
    });
    
    
    $(".tabl").click(function(){
        
        $('[data-toggle="table"]').show();
        $('[data-toggle="sofa"]').hide(); 
        $('[data-toggle="chair"]').hide();
        $('[data-toggle="lamp"]').hide();
        $(this).addClass("sty");
        $(this).siblings().removeClass("sty");
    });
    
    
      $(".lamp").click(function(){
        
        $('[data-toggle="lamp"]').show();
        $('[data-toggle="sofa"]').hide(); 
        $('[data-toggle="chair"]').hide();
        $('[data-toggle="table"]').hide();
        $(this).addClass("sty");
        $(this).siblings().removeClass("sty");
    });
    
    /***************************************************************************************************/
    
    /*******************************************proModel********************************************************/
    
    /************************openproModel***********************************************/
    $(".sea").click(function(){
        $("body").css("overflow","hidden");
        $(".proModel").css("transform","scale(1)");
    });
 
    /********************************************closePro***************************/
    $(".cloPro").click(function(){
        
        $(".proModel").css("transform","scale(0)");
        $("body").css("overflow","auto");
    });
    
      $(".cloPro , .cloModePro").click(function(e) {
    e.preventDefault();
});
	
	
	/******************************************proModel button ***********************/
	$(".cloModePro").click(function(){
		
		if(user == undefined)
			{
				$(".proModel").css("transform","scale(0)");
                $("body").css("overflow","auto");
				$(".mess").addClass("show");
                setTimeout(function(){$(".mess").removeClass("show")},3000) ; 
			}
		else
		{
			     document.getElementById("snackbar").innerHTML="one item has been added ";
                 $(".mess").addClass("show");
                 setTimeout(function(){$(".mess").removeClass("show")},3000) ;
			     $(".proModel").css("transform","scale(0)");
                 $("body").css("overflow","auto");
			    
		}
		
		
	}) ;
   
   
    /*************************************************************************************/
	
	
	/**************************ensure remove item  model ********************************************/
	/***********************************close model **************************/
	$(".ensure .btn").click(function(){
		
		$(".ensure .con-msg").css("transform","scale(0)",800) ; 
		$(".ensure").slideUp(1000);
	})
	/********************************************************************************/
	/************************open model********************************/
	$(".cart .con-all").click(function(){
		
		$(".ensure").slideDown(1000);
	});
	/******************************************************************/
	
	
	/**********************************open subscribe model *************************************************/
       $(".news").css("transform","scale(1)");
		
	/*****************************close subscribe model **************************************/
	$(".news .close-news").click(function(){
		$(".news").css("transform","scale(0)");
		$("body").css("overflow","auto");
	});
	$(".news button").submit(function(e) {
    e.preventDefault();
		
        });
	$(".news button").click(function(){
		$(".news").css("transform","scale(0)");
		$("body").css("overflow","auto");
	});
	/*************************************************************************/
	
  
	
	/***************************************wish list*************************************/
	$(".lovingBtn").click(function(){
		$(".wishList").css("top","0");
		$("body").css("overflow","hidden");
		
		
	});
	$(".wishList h6 ").click(function(){
		$(".wishList").css("top","100%");
		$("body").css("overflow","auto");
		
	});
	
	/*************************************************************************************/
	/*************************************payment method************************************************/
	$(".newCart .info ul li ").click(function(){
		$(this).siblings().css("opacity","1");
		$(this).siblings().css("opacity","0.5");
		$(this).css("opacity","1");
		
	});
	/*************************************************************************************/
	/**********************************add required **********************************************/
	$("#city1").change(function(){
		var ciy1 = $(this).val(); 
		if(ciy1 === "Other")
		{
			$(".cityOther").prop('required',true).val(" ") ;
			$(".streetOther").prop('required',true).val(" ") ;
			$("#city2").prop('required',false) ;
		}
		else
		{
			$(".cityOther").prop('required',false) .val("Other") ;
			$(".streetOther").prop('required',false) .val("Other") ;
			$("#city2").prop('required',true) ;
			
		}
		
	}) ;
	
		$("#city2").change(function(){
		var ciy2 = $(this).val(); 
		if(ciy2 === "Other")
		{
			
			$(".streetOther").prop('required',true).val(" ") ;
		}
		else
		{
			
			$(".streetOther").prop('required',false).val("Other") ;
		}
		
	}) ; 
	
	
	/*************************************************************************************/
    
	
	
	/***********************************************************************************************/
});









/*********************************mySlide**************/
function change()
{
   $(".slide1").removeClass("dis").addClass("act").siblings().removeClass("act").addClass("dis");
    
   setTimeout(function(){
    $(".slide2").removeClass("dis").addClass("act").siblings().removeClass("act").addClass("dis");
  },3000); 
    
    setTimeout(function(){
    $(".slide3").removeClass("dis").addClass("act").siblings().removeClass("act").addClass("dis");
  },6000);
    
}
change();
setInterval(change,9000);    
/******************************************************************************/

function gets()
	{
		        document.getElementById("snackbar").innerHTML="one item has been added ";
                $(".mess").addClass("show");
                setTimeout(function(){$(".mess").removeClass("show")},3000) ;
	}
function sets()
	{
		        document.getElementById("snackbar").innerHTML="one item has been deleted  ";
                $(".mess").addClass("show");
                setTimeout(function(){$(".mess").removeClass("show")},3000) ;
	}

/************************************************deal of week timer******************************************/
function time()
{
    var dayS = document.getElementById("days").innerHTML ; 
    var hourS = document.getElementById("hours").innerHTML ; 
    var minS = document.getElementById("mins").innerHTML ; 
    var secS= document.getElementById("secs").innerHTML ; 
    var day = parseInt(days);
    var hour = parseInt(hourS);
    var min = parseInt(minS);
    var sec = parseInt(secS);
    if(sec == 0)
        {
            document.getElementById("secs").innerHTML = 59 ;
            if(min == 0)
                {
                    document.getElementById("mins").innerHTML = 59 ; 
                    
                        if(hour == 0)
                        {
                            document.getElementById("hours").innerHTML = 23 ; 
                            day = day - 1 ; 
                            document.getElementById("days").innerHTML = day ;
                        }
                         else{
                            hour = hour - 1 ; 
                            document.getElementById("hours").innerHTML = hour ;

                        }
      
                    
                    
                }
                 else{
                        min = min - 1 ; 
                        document.getElementById("mins").innerHTML = min ;

                    }
            
            
            
        }
    
    else{
        sec = sec - 1 ; 
        document.getElementById("secs").innerHTML = sec ;
        
    }
    
   
    
     
     
    
}
time() ; 
setInterval(time , 1000);
/*******************************************************************************************************/



/******************************************testmonial****************************************/
var slideItem = 1 ; 
slideShow(slideItem); 

function plusSlide(num)
{
	slideShow(slideItem += num);
}

function slideShow(n)
{
	var i ; 
	var slide = document.getElementsByClassName("mySlidee"); 
	if(n < 1){slideItem = slide.length }
	if(n > slide.length){slideItem = 1}
	for(i = 0 ; i<slide.length ; i++)
		{
			
			
			slide[i].style.display="none"; 
			/*slide[i].toggleClass("") */ 
			
			
		}
	 slide[slideItem - 1].style.display="block" ; 
	slide[slideItem - 1].classList.add("animated") ;  
	slide[slideItem - 1].classList.add("slideInUp") ;  
	
	
}
/*********************************************************************************************/

/*************************disabled shopping button********************/






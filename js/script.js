(function($, undefined){
    $(function(){

	// maskedinput
 		 $(".maskedinput").mask("+38(999) 999-9999");

 		 //mail
	    $("#form1, #form2").submit(function() {
	    $.ajax({
	      type: "POST",
	      url: "mail.php",
	      data: $(this).serialize()
	    }).done(function() {
	      $(this).find("input").val("");

	      $("#myModal").modal('hide');
	      $("#thanks").modal('show');
	      $("#form1, #form2").trigger("reset");

	    });
	    return false;
	    });

	    // slick-slider
	    $('.slick-slider').slick({
	      dots: false,
	      arrows: true,
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  nextArrow: '<button class="da-next" aria-hidden="true"><img src="images/brands-left.png"></button>',
          prevArrow: '<button class="da-prev" aria-hidden="true"><img src="images/brands-right.png"></button>',
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		     {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },

		  ]

		});


    });
})(jQuery);

function openNav() {
    document.getElementById("sideNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

$(document).ready(function(){
  $(".top-bar a, #hero a, #services a, #price a, #team a, footer a[href='#hero']").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    $('#nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('#nav a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1000, "swing", function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(document).ready(function() {
	$(".gallery img").click(function() {
		$("#myModal").css("display", "block");
			$(".modal-content").attr("src", this.src);
	});
});

$(document).ready(function() {
	$(".modalClose").click(function() {
		$("#myModal").css("display", "none");
	});
});

var slideIndex = 0;
var slides = document.getElementsByClassName("images");

function plusSlides(n) {
  	slideIndex += n;
            if (slideIndex >= slides.length) {
            	slideIndex = 0;
            }
            if (slideIndex <= -1) {
            	slideIndex = slides.length - 1;
            }
    showSlides(slideIndex);
}

function showSlides(n) {
  	$('.modal-content').attr('src', slides[n].src);
};

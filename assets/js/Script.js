    // JavaScript code for tiltle attribute
    document.addEventListener("DOMContentLoaded", function() {
      const cardTitles = document.querySelectorAll(".card-title");
    
      cardTitles.forEach(title => {
        const fullTitle = title.textContent.trim();
        title.setAttribute("title", fullTitle);
      });
    });
    
//product slider.
    
    const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

//Review Form 



$(".rating-component .star").on("mouseover", function () {
  var onStar = parseInt($(this).data("value"), 10); //
  $(this).parent().children("i.star").each(function (e) {
      if (e < onStar) {
          $(this).addClass("hover");
      } else {
          $(this).removeClass("hover");
      }
  });
}).on("mouseout", function () {
  $(this).parent().children("i.star").each(function (e) {
      $(this).removeClass("hover");
  });
});

$(".rating-component .stars-box .star").on("click", function () {
  var onStar = parseInt($(this).data("value"), 10);
  var stars = $(this).parent().children("i.star");
  var ratingMessage = $(this).data("message");

  var msg = "";
  if (onStar > 1) {
      msg = onStar;
  } else {
      msg = onStar;
  }
  $('.rating-component .starrate .ratevalue').val(msg);



  $(".fa-smile-wink").show();

  $(".button-box .done").show();

  if (onStar === 5) {
      $(".button-box .done").removeAttr("disabled");
  } else {
      $(".button-box .done").attr("disabled", "true");
  }

  for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
  }

  for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
  }

  $(".status-msg .rating_msg").val(ratingMessage);
  $(".status-msg").html(ratingMessage);
  $("[data-tag-set]").hide();
  $("[data-tag-set=" + onStar + "]").show();
});

$(".feedback-tags  ").on("click", function () {
  var choosedTagsLength = $(this).parent("div.tags-box").find("input").length;
  choosedTagsLength = choosedTagsLength + 1;

  if ($(this).hasClass("choosed")) {
      $(this).removeClass("choosed");
      choosedTagsLength = choosedTagsLength - 2;
  } else {
      $(this).addClass("choosed");
      $(".button-box .done").removeAttr("disabled");
  }

  console.log(choosedTagsLength);

  if (choosedTagsLength <= 0) {
      $(".button-box .done").attr("enabled", "false");
  }
});



$(".compliment-container .fa-smile-wink").on("click", function () {
  $(this).fadeOut("slow", function () {
      $(".list-of-compliment").fadeIn();
  });
});



$(".done").on("click", function () {
  $(".rating-component").hide();
  $(".feedback-tags").hide();
  $(".button-box").hide();
  $(".submited-box").show();
  $(".submited-box .loader").show();

  setTimeout(function () {
      $(".submited-box .loader").hide();
      $(".submited-box .success-message").show();
  }, 1500);
});

    
    // Script for footer 

$(document).ready(function () {
  // Set up the click event for the "Information" heading
  $("#informationToggle").click(function () {
    // Toggle the visibility of the content with ID "menu-about"
    $("#menu-about").collapse("toggle");
  });

  // Set up the click event for the "My Account" heading
  $("#myAccountToggle").click(function () {
    // Toggle the visibility of the content with ID "menu-my-account"
    $("#menu-my-account").collapse("toggle");
  });

  // Set up the click event for the "Contact info." heading
  $("#contactInfoToggle").click(function () {
    // Toggle the visibility of the content with ID "angro_contact_information-1"
    $("#angro_contact_information-1").collapse("toggle");
  });
});


//script for owl log0 image 

$(document).ready(function(){
  // Initialize Owl Carousel
  var owl = $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 12,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3
      },
      576: {
        items: 3
      },
      768: {
        items: 3
      },
      992: {
        items: 6
      },
      1200: {
        items: 6
      }
    }
  });

  // Custom click event for scrolling one item at a time
  $('.scroll-next').click(function() {
    owl.trigger('next.owl.carousel');
  });

  $('.scroll-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  // Click event for images to change border color
  $('.item img').click(function() {
    // Remove 'clicked' class from all images
    $('.item img').removeClass('clicked');
    // Add 'clicked' class to the clicked image
    $(this).addClass('clicked');
  });
});






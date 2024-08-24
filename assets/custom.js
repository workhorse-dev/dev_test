//scrolling to top
$(document).ready(function () {
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  
  $(".searchbar").click(function () {
    document.getElementById("searchBlockSmall").style.width = "100%";
  });
  
  connectHover (".site-util--language", "#language-menu");
  
  if($('.offerbar-carousel').length > 0 ){
    $(".offerbar-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    dots: true,
    navText: [
      "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/white-left-arrow.png?v=1687250229' alt=''>",
      "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/white-right-arrow.png?v=1687250229' alt=''>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  }  

  //trending products carousel
  if($(".trending-carousel").length > 0){
    let owl = $(".trending-carousel");
    owl.owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      navText: [
        "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/owl-left.png?v=1686656951' alt=''>",
        "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/owl-right.png?v=1686656962' alt=''>",
      ],
      items: 4,
      responsive: {
         0: {
          items: 1,
        },
        481: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1199: {
          items: 4,
        },
      },
    });
  
    owl.on("changed.owl.carousel", function (event) {
      if (event.namespace && event.property.name === "position") {
        var current = event.relatedTarget.current();
        $(".owl-dot")
          .eq(current)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    });
  
    // Hide left arrow on mobile devices when first item is visible
    if ($(window).width() < 400) {
      var current = owl.owlCarousel("current");
      var isFirstItem = current == 0;
      $(".owl-prev").toggleClass("disabled", isFirstItem);
    }
  
    $(".owl-dot").click(function () {
      var index = $(this).index();
      owl.trigger("to.owl.carousel", index);
    });
  }
  //testimonials carousel
  if($(".testimonial-carousel").length > 0){
    $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    dots: true,
    navText: [
      "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/owl-left.png?v=1686656951' alt=''>",
      "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/owl-right.png?v=1686656962' alt=''>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  }

  //product categories carousel
   if($(".product-categories-carousel").length > 0){
     let owl = $(".product-categories-carousel");
      owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        navText: [
          "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/owl-left.png?v=1686656951' alt=''>",
          "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/owl-right.png?v=1686656962' alt=''>",
        ],
        items: 2,
        responsive: {
          0: {
            items: 2,
          },
        },
      });
    
      owl.on("changed.owl.carousel", function (event) {
        if (event.namespace && event.property.name === "position") {
          var current = event.relatedTarget.current();
          $(".owl-dot")
            .eq(current)
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      });
    
      // Hide left arrow on mobile devices when first item is visible
      if ($(window).width() < 400) {
        var current = owl.owlCarousel("current");
        var isFirstItem = current == 0;
        $(".owl-prev").toggleClass("disabled", isFirstItem);
      }
    
      $(".owl-dot").click(function () {
      var index = $(this).index();
      owl.trigger("to.owl.carousel", index);
    });
   }
    if($(".show-us-carousel").length > 0){
      let owl = $(".show-us-carousel");
      owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        navText: [
          "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/owl-left.png?v=1686656951' alt=''>",
          "<img src='https://cdn.shopify.com/s/files/1/0872/6416/files/owl-right.png?v=1686656962' alt=''>",
        ],
        items: 1,
      });
    }

    //play video js
    const playButton = document.getElementById("play-button");
    const video = document.getElementById("my-video");
    const playIcon = document.getElementById("play-button");
    
    if($('#play-button').length > 0 ){
      playButton.addEventListener("click", function () {
        video.play();
        playIcon.style.display = "none";
      });
    }
    if($('#my-video').length > 0 ){
      video.addEventListener("ended", function () {
        playIcon.style.display = "block";
      });
    }
    if ( $(".landing-close-button").length ) {
      $(".landing-close-button .button").click(function() {
        $('body,html').animate({
          scrollTop: $("#form-contact").offset().top - 70
        }, 500);
      });
    }

  $('.cart__qty-input').on('input', function() {
    $( ".cart__update" ).trigger( "click" );
    // var qty = $(this).val();
    // console.log("qty-->",qty);
    // var currentVariant = $(this).attr('variant-id');
    // console.log("currentVariant-->",currentVariant);
    // // $( ".cart__update" ).trigger( "click" );
    // setTimeout(() => {
    //  $.ajax({
    //     type: 'POST',
    //     url: '/cart/change.js',
    //     dataType: 'json',
    //     data: {
    //         quantity: qty,
    //         id: currentVariant
    //     },
    //     success: function(cart) {
    //       console.log("cart--->",cart);
    //     }
    //  }); 
    // },"1000");  
  });
  //------ footer newsletter function===== 
  initPrefooterForm();
});


//======= Footer Newsletter -----------
function initPrefooterForm() {
  if ( $( "#email_signup" ).length ) {

    $("#email_signup button").on('click', function(e) {
      e.preventDefault();

      if ( $( "#k_id_email" ).val() == "" ) {
        return;
      }

      $("#email_signup .klaviyo_messages").hide();
      $("#email_signup .success_message").hide();
      $("#email_signup .success_message_already_added").hide();
      $('#email_signup .error_message').hide();

      $("#email_signup").removeClass("success");


      var listId = $('#email_signup input[name="g"]').val();
      var fieldsVals = $('#email_signup input[name="$fields"]').val();
      var emailCustomer = $('#email_signup input[name="email"]').val();

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
        "method": "POST",
        "headers": {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache"
        },
        "data": {
          "g": listId,
          "$fields": fieldsVals,
          "email": emailCustomer
        }
      }
      $.ajax(settings).done(function (response) {
        prefooterSubscribeResult(response);
      });
    });

  }

}
function prefooterSubscribeResult(response) {
  $("#email_signup .klaviyo_messages").show();
  if ( response.success ) {
    $("#email_signup").addClass("success");
    $("#email_signup .klaviyo_field_group").hide();

    if ( response.data.is_subscribed ) {
      $("#email_signup .success_message_already_added").show();
    }
    else {
      $("#email_signup .success_message").show();
    }
  }
  else {
    $('#email_signup .error_message').html("<p>" + response.errors.join("</p><p>") + "</p>");
    $("#email_signup .error_message").show();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  if($('.detail-carousel').length > 0){
    // Get the carousel element and the swatch elements
    var carousel = document.getElementById('carouselExampleIndicators');
    var swatches = document.getElementsByClassName('circle');
    var thumbnailButtons = document.getElementsByClassName('carousel-indicators')[0].getElementsByTagName('button');
    
    // Function to show/hide the thumbnail items based on the selected swatch color
    function updateThumbnailVisibility(selectedColor) {
      var visibleCount = 0;
      Array.from(thumbnailButtons).forEach((button) => {
        const buttonColor = button.getAttribute('data-color');
        if (buttonColor === selectedColor) {
          button.style.display = '';
          visibleCount++;
          if (visibleCount > 6) {
            button.style.display = 'none';
          }
        } else {
          button.style.display = 'none';
        }
      });
    }
    
    // Function to update the variant based on the selected swatch color
    function updateVariant(selectedColor) {
      var colorValue = selectedColor.replace('swatch-', ''); // Remove "swatch-" prefix
      
      var matchingVariant = productVariants.find(function(variant) {
        return variant.option1.toLowerCase().replace(' ', '-') === colorValue.toLowerCase();
      });
      
      if (matchingVariant) {
        var match_sku = matchingVariant.sku;
        $('.color-name').text(matchingVariant.title);
        $('.variant-sku').html("- SKU: "+ match_sku);
        var variantUrl = '?variant=' + matchingVariant.id;
        var newUrl = window.location.pathname + variantUrl;
        window.history.replaceState(null, null, newUrl);
        
        var variantId = matchingVariant.id;
        $('.product-form__variants').val(variantId);
        
        if(matchingVariant.available){
          $('.cart-btn').text('Add to Cart');
        }else{
           $('.cart-btn').text('Sold Out');
        }
          
        var selectedSwatch = Array.from(swatches).find(swatch => swatch.getAttribute('attr-color') === selectedColor);
        if (selectedSwatch) {
          selectedSwatch.dataset.variantId = matchingVariant.id;
        }
        // Update thumbnail visibility based on the selected color
        updateThumbnailVisibility(selectedColor);
      }

      
      
    }
  
    // Function to handle swatch click event
    function handleSwatchClick() {
      var color = this.getAttribute('attr-color');
      var carouselItems = carousel.getElementsByClassName('carousel-item');
      var matchedCarouselItem = Array.from(carouselItems).find(item => item.getAttribute('data-color') === color);
      var thumbnailButton = Array.from(thumbnailButtons).find(button => button.getAttribute('data-color') === color);
      
      if (matchedCarouselItem && thumbnailButton) {
        for (var j = 0; j < carouselItems.length; j++) {
          carouselItems[j].classList.remove('active');
        }
        for (var k = 0; k < thumbnailButtons.length; k++) {
          thumbnailButtons[k].classList.remove('active');
        }
  
        matchedCarouselItem.classList.add('active');
        thumbnailButton.classList.add('active');
  
        updateThumbnailVisibility(color);
        
      }
       // Custom swatch code
      $('.swatches .swatch').removeClass('selected');
      $(this).addClass('selected');
      $('select.shopify-color-selector').trigger('change');
      
      updateVariant(color);
      $('.product-form__variants').trigger('change');
    }
  
    // Loop through each swatch element and attach a click event listener
    for (var i = 0; i < swatches.length; i++) {
      swatches[i].addEventListener('click', handleSwatchClick);
    }
    
    // Function to initialize the selected swatch on page load
    function initializeSelectedSwatch() {
      const selectedSwatch = document.querySelector('.swatch.selected');
      if (selectedSwatch) {
        const selectedColor = selectedSwatch.getAttribute('attr-color');
        updateVariant(selectedColor);
        
        const carouselItems = carousel.getElementsByClassName('carousel-item');
        const matchedCarouselItem = Array.from(carouselItems).find(item => item.getAttribute('data-color') === selectedColor);
        if (matchedCarouselItem) {
          for (var i = 0; i < carouselItems.length; i++) {
            carouselItems[i].classList.remove('active');
          }
          matchedCarouselItem.classList.add('active');
        }
        
        const matchedThumbnailButton = Array.from(thumbnailButtons).find(button => button.getAttribute('data-color') === selectedColor);
        if (matchedThumbnailButton) {
          for (var j = 0; j < thumbnailButtons.length; j++) {
            thumbnailButtons[j].classList.remove('active');
          }
          matchedThumbnailButton.classList.add('active');
        }
        
        updateThumbnailVisibility(selectedColor); // Add this line to update the thumbnail visibility
      }
    }
      initializeSelectedSwatch();
      if($('.detail-carousel').length > 0){
        var totalIndicators = $('.carousel-indicators button').length;
          // Handle the carousel-control-next button click
          $('.carousel-control-next').click(function() {
            var visibleButtons = $('.carousel-indicators button:visible');
            var firstHiddenIndex = visibleButtons.eq(0).index() + 6;
          
            // Hide the top-most carousel-indicators button
            visibleButtons.eq(0).hide();
            
            // Show the next carousel-indicators button if available
            if (firstHiddenIndex < totalIndicators) {
              $('.carousel-indicators button').eq(firstHiddenIndex).show();
            } else {
              // If no more hidden buttons, loop back to the first button
              $('.carousel-indicators button').hide(); // Hide all buttons
              $('.carousel-indicators button').slice(0, 6).show(); // Show the first 6 buttons
            }
        
            // Enable the carousel-control-prev button
            $('.carousel-control-prev').prop('disabled', false);
          });
      
          //Handle the carousel-control-prev button click
          $('.carousel-control-prev').click(function() {
          var visibleButtons = $('.carousel-indicators button:visible');
          var lastVisibleIndex = visibleButtons.eq(-1).index() - 6;
          
          // Hide the last carousel-indicators button
          visibleButtons.eq(-1).hide();
          
          // Show the previous carousel-indicators button if available
          if (lastVisibleIndex >= 0) {
            $('.carousel-indicators button').eq(lastVisibleIndex).show();
          } else {
            // If no more hidden buttons, loop back to the last button
            $('.carousel-indicators button').hide(); // Hide all buttons
            $('.carousel-indicators button').slice(-6).show(); // Show the last 6 buttons
          }
          
          // Enable the carousel-control-next button
          $('.carousel-control-next').prop('disabled', false);
        });
      
          // Show only the initial 6 indicator buttons on page load
          // $(window).on('load', function() {
             $(".product-details-section .carousel-indicators").css("opacity","1");
             $('.carousel-indicators button').hide();
    
              var selectedSwatch = $('.swatches .swatch.selected');
              if (selectedSwatch.length > 0) {
                var selectedColor = selectedSwatch.attr('attr-color');
                var selectedButton = $('.carousel-indicators button[data-color="' + selectedColor + '"]');
                selectedButton.show();
                
                updateThumbnailVisibility(selectedColor);
                
              } else {
                // Show the first 6 buttons
                $('.carousel-indicators button').slice(0, 6).show();
              }
          // });
      }
    }

  
  //====== Minicart code=== 
  updateCartDrawer();
  $(".my-cart").click(function () {
    updateCartDrawer();
    $(".cart-box").addClass("cart-display");
  });
  $(".cart-box .fa-times").click(function () {
    $(".cart-box").removeClass("cart-display");
  });
  $(document).mouseup(function(e) {
    var container = $(".cart-box,.my-cart");
    
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".cart-box").removeClass("cart-display");
    }
  });
  
});

//------ minicart js code----
function updateCartDrawer()
{
      var html ='';
      var cart = CartJS.cart;      
      $('.cartelements').html('');

      jQuery.getJSON('/cart.js', function(cart) {
        var cnt = cart.items.length;
        var cart_list = [];

        if(cnt > 0 ){
          for (i = 0; i < cnt; i++) { 
            var cartitems = cart.items[i];
            var item_id = cart['items'][i]['id'];
            var total_price = cart['total_price']/100;
            var line_price = cart['items'][i]['price']/100;
            $('.total_price').html('Subtotal:<span>$'+ total_price.toFixed(2) +'</span>');
            
            var quantity = cart['items'][i]['quantity'];
            html = '<div class="product-price p-2 cart-dropdown-product-wrap"><div class="cart-dropdown-remove" ><a class="remove" data-cart-remove-id="' + item_id + '" href="/cart/change?line=' + cart.item_count + '&amp;quantity=0" data-product="'+cartitems.id+'" aria-label="Remove Item From Cart">x</a></div><div class="cart-dropdown-image product-img"><img src="'+cartitems.featured_image.url+'" alt="'+cartitems.featured_image.alt+'" class="img-fluid"></div><div class="product-content cart-dropdown-title-price"><a href="'+cartitems.url+'"><h6>'+cartitems.title+'</h6></a><div class="price_qty_wrap cart-dropdown-giftwrap-qty"><p class="cart-dropdown-title-price">Price: <span>$'+line_price.toFixed(2)+'</span></p><p class="cart-dropdown-giftwrap-qty qty d-none">Qty: <span>'+cartitems.quantity+'</span></p></div><div id="extend-dropdown-cart-offer" data-extend-variant="'+ cartitems.variant_id +'" data-extend-quantity="'+cartitems.quantity+'"></div></div><div class="cart-dropdown-quantity" data-line="' + cart.item_count + '"><button role="button" type="button" class="cart-dropdown-arrow-up ajax-cart-item__add-quantity" aria-label="Increase Cart Quantity by 1" data-variant="' + item_id + '"></button><div class="cart-dropdown-qty-value"><input class="quantity-input ajax-cart-item__input-quantity  cart__qty-input" name="updates[]" id="updates_' + item_id + '" value="' + quantity + '" min="1" /></div><button type="button" role="button" class="cart-dropdown-arrow-down ajax-cart-item__minus-quantity" data-variant="' + item_id + '" aria-label="Decrease Cart Quantity by 1"></button></div></div>';
            cart_list.push(html);
          }
          $('.cartelements').html(cart_list.join(''));
          var item_count = cart.item_count;
          $('#CartCount').find('span').html(item_count);
          $('#mobile-CartCount').find('span').html(item_count);

          $('#cart-count-view').show();
          $('#mobile-count-view').show();
          
          $('.total-checkout').show();
          
          // initializeCartOffer();
        }
        else{
          $('.cartelements').html('<div class="text-center"><br /><h3 class="my-5">No item found in your cart.</h3></div>');
          $('.total-checkout').hide();
          $('#cart-count-view').hide();
          $('#mobile-count-view').hide();
        }
       
      });      
    }

function openCartDrawer()
{
  window.scrollTo(0, 0);
  $(".my-cart").trigger("click");
}

//quantity counter code
$(document).on("click", ".ajax-cart-item__minus-quantity", function (e) {
  decrementValue(e);
   updateCartCount();
});
$(document).on("click", ".ajax-cart-item__add-quantity", function (e) {
  incrementValue(e);
   updateCartCount();
});
$(document).on("click", ".cart-dropdown-remove .remove", function (e) {
  setTimeout(function() {
    updateCartDrawer();
     updateCartCount();
  }, 1000);
});

function incrementValue(e) {
  e.preventDefault();
  var parent = $(e.target).closest("div");
  var currentVal = parseInt(parent.find(".ajax-cart-item__input-quantity").val(), 10);
  var currentVariant = $(e.target).attr("data-variant");

  $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      dataType: 'json',
      data: {
          quantity: currentVal + 1,
          id: currentVariant
      },
      success: function(cart) {
        setTimeout(function() {
          updateCartDrawer();
           updateCartCount();
        }, 1000);
      }
  });
  
  if (!isNaN(currentVal)) {
    parent.find(".ajax-cart-item__input-quantity").val(currentVal + 1);
  } else {
    parent.find(".ajax-cart-item__input-quantity").val(0);
  }
}
function decrementValue(e) {
  e.preventDefault();
  
  var parent = $(e.target).closest("div");
  var currentVal = parseInt(parent.find(".ajax-cart-item__input-quantity").val(), 10);
  var currentVariant = $(e.target).attr("data-variant");

  $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      dataType: 'json',
      data: {
          quantity: currentVal - 1,
          id: currentVariant
      },
      success: function(cart) {
        setTimeout(function() {
          updateCartDrawer();
           updateCartCount();
        }, 1000);
      }
  });
  
  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find(".ajax-cart-item__input-quantity").val(currentVal - 1);
  } else {
    parent.find(".ajax-cart-item__input-quantity").val(0);
  }
}


    document.addEventListener("DOMContentLoaded", function() {
      function handleNavOpen(id) {
       // console.log("handleNavOpen called with id:", id); // Debugging line

        $(".dropdown-content").css("display", "none");

        var element = document.getElementById(id);
        if (element) {
          element.style.display = "block";
        } else {
         // console.error("No element found with id:", id); // Error handling line
        }
      }

      // Attach the function to the window object to make it globally accessible
      window.handleNavOpen = handleNavOpen;
    });
function handleHeaderMouseLeave(val) {
  $(".dropdown-content").css("display", "none");
}
 function updateCartCount() {
    $.getJSON('/cart.js', function(cart) {
      var itemCount = cart.item_count;
      $('#CartCount span[aria-hidden="true"]').text(itemCount);
      $('#CartCount span.visually-hidden').text(itemCount);
    });
  }

  $(document).ready(function() {
    // Initial cart count update
    updateCartCount();

    // Example event: update cart count after adding an item to the cart
    $(document).on('click', '.btn_style.add_button.product-form__cart-submit', function() {
      // Simulate a delay for the AJAX request to complete (e.g., adding an item to the cart)
      setTimeout(updateCartCount, 500);
    });
  });
function connectHover (hoveredButton, panel) {
  if ( $(hoveredButton).length && $(panel).length ) {
    $(hoveredButton).hover(function() {
      $(panel).addClass("d-block");
    });
    $(hoveredButton).on('mouseleave', function(e){
      if (!$(e.toElement).is(panel)){
        // $(panel).removeClass("d-block");
      }
    });
    $(panel).on('mouseleave', function(e){
      $(panel).removeClass("d-block");
    });
  }
}

// //new hyper carousel
// $(document).ready(function () {
//   function detect_active() {
//     // get active
//     var get_active = $("#dp-slider .dp_item:first-child").data("class");
//     $("#dp-dots li").removeClass("active");
//     $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
//   }
//   $("#dp-next").click(function () {
//     var total = $(".dp_item").length;
//     $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
//     $.each($(".dp_item"), function (index, dp_item) {
//       $(dp_item).attr("data-position", index + 1);
//     });
//     detect_active();
//   });

//   $("#dp-prev").click(function () {
//     var total = $(".dp_item").length;
//     $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
//     $.each($(".dp_item"), function (index, dp_item) {
//       $(dp_item).attr("data-position", index + 1);
//     });

//     detect_active();
//   });

//   $("#dp-dots li").click(function () {
//     $("#dp-dots li").removeClass("active");
//     $(this).addClass("active");
//     var get_slide = $(this).attr("data-class");
//     console.log(get_slide);
//     $("#dp-slider .dp_item[data-class=" + get_slide + "]")
//       .hide()
//       .prependTo("#dp-slider")
//       .fadeIn();
//     $.each($(".dp_item"), function (index, dp_item) {
//       $(dp_item).attr("data-position", index + 1);
//     });
//   });

  
// });

function openSearch() {
  document.getElementById("mySidenav").style.width = "100%";
  $("body").addClass("add-overflow");
}

function closeSearch() {
  document.getElementById("mySidenav").style.width = "0";
  $("body").removeClass("add-overflow");
}


//remove border when accordion is opened
function featureTabClicked(ele) {
  // Remove the "modified" class from all accordion items
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => item.classList.remove("selected-accordion"));

  // Add the "modified" class to the clicked accordion item
  ele.classList.add("selected-accordion");
}


//handle slider when click on nav buttons in what's new in hyper
function prev() {
  var radios = document.querySelectorAll('input[name="slider"]');
  var currentChecked = document.querySelector('input[name="slider"]:checked');

  if (currentChecked) {
    var currentIndex = Array.from(radios).indexOf(currentChecked);
    var previousIndex = currentIndex - 1;

    if (previousIndex >= 0) {
      radios[previousIndex].checked = true; // Check the previous radio button
    } else {
      radios[radios.length - 1].checked = true; // Check the last radio button
    }
  } else {
    radios[radios.length - 1].checked = true; // Check the last radio button
  }
}
function next() {
  var currentChecked = document.querySelector('input[name="slider"]:checked');
  var radios = document.querySelectorAll('input[name="slider"]');

  if (currentChecked) {
    var currentIndex = Array.from(radios).indexOf(currentChecked);
    var nextIndex = currentIndex + 1;

    if (nextIndex < radios.length) {
      radios[nextIndex].checked = true; // Check the next radio button
    } else {
      radios[0].checked = true; // Check the first radio button
    }
  } else {
    radios[0].checked = true; // Check the first radio button
  }
}

// filter mobile sidebar
function openFilter() {
  document.getElementById("myFilterNav").style.width = "80%";
  document.body.classList.add("filter-body-hidden");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document
    .querySelector(".right-overlay")
    .classList.add("right-opened-overlay");
 
}
function closeFilter() {
  document.getElementById("myFilterNav").style.width = "0";
  document.body.classList.remove("filter-body-hidden");
  document
    .querySelector(".right-overlay")
    .classList.remove("right-opened-overlay");
}
function handleRightOverlay() {
  closeFilter();
}

$('.filter-btn').on('click',function(){
   openFilter();
});
$('.filter-close').on('click',function(){
  closeFilter();
  window.addEventListener('resize', function () {
    if (window.innerWidth > 992){
      document.getElementById("myFilterNav").style.width = "100%";
    }else{
      document.getElementById("myFilterNav").style.width = "0";
    }
  }); 
}); 



//to display items when show more button is clicked
// function handleShowMore(link) {
//   const showMoreItems = document.querySelector(".show-more-items");
//   const showMoreItemsMobile = document.querySelector(".show-more-items-mobile");
//   const accordionBody = document.querySelector(
//     ".product-list-section .filter-option-mobile .accordion-body"
//   );
//   const accordionBody2 = document.querySelector(
//     ".product-list-section .accordion-body"
//   );

//   if (window.innerWidth >991) {
//     if (showMoreItems.style.display === "none") {
//       showMoreItems.style.display = "block";
//       link.textContent = "show less -";
//       accordionBody2.classList.add("show-more-open-style");
//     } else {
//       showMoreItems.style.display = "none";
//       link.textContent = "show more +";
//       accordionBody2.classList.remove("show-more-open-style");
//     }
//   } else {
//     if (showMoreItemsMobile.style.display === "none") {
//       showMoreItemsMobile.style.display = "block";
//       link.textContent = "show less -";
//       accordionBody.classList.add("show-more-open-style");
//     } else {
//       showMoreItemsMobile.style.display = "none";
//       link.textContent = "show more +";
//       accordionBody.classList.remove("show-more-open-style");
//     }
//   }
 
// }





















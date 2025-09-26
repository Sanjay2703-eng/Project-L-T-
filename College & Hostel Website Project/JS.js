$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link[href^="#"]').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - $('.navbar').outerHeight() // Adjust for fixed navbar height
            }, 800);
        }
    });

    // Add 'active' class to nav link on scroll
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav .nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));

            // Check if the current element exists and is within view
            if (refElement.length && refElement.position().top - $('.navbar').outerHeight() <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav .nav-link').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });

        // Show/hide scroll-to-top button
        if ($(this).scrollTop() > 300) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    // Contact Form Submission (example - usually handled by backend)
    $('#contact form').on('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Basic validation
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name === "" || email === "" || message === "") {
            alert("Even Project Mayhem requires complete forms. Please fill in all fields.");
            return;
        }

        // Simulate an AJAX request
        console.log("Contact form submitted:", {
            name: name,
            email: email,
            message: message
        });

        // Here you would typically send data to a server
        alert("Your transmission has been sent. We'll be in touch... maybe.");
        $('#contact form')[0].reset(); // Clear the form
    });

    // Dynamic 'You are not your...' message for hero section (just for fun)
    var messages = [
        "You are not your GPA.",
        "You are not your student loan debt.",
        "You are not your designer clothes.",
        "You are not your social media likes.",
        "You are not your pristine academic record.",
        "You are the one who creates a change in you and university."
    ];
    var currentMessage = 0;

    function changeHeroMessage() {
        $(".hero-section p.lead").fadeOut(500, function() {
            $(this).text(messages[currentMessage]).fadeIn(500);
            currentMessage = (currentMessage + 1) % messages.length;
        });
    }

    // Call it every 5 seconds
    setInterval(changeHeroMessage, 5000);

    // Initial call to set the first message immediately
    changeHeroMessage();


    // Add a scroll-to-top button dynamically
    $('body').append('<div id="scrollUp"><i class="fas fa-arrow-up"></i></div>');

    // Scroll-to-top functionality
    $('#scrollUp').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
// MAIN PAGE LANGUAGE SELECTOR
$("img.flagGer").click(function () {
    window.location.href = this.id + "index.html";
});
$("img.flagUS").click(function () {
    window.location.href = this.id + "index-en.html";
});
$("img.flagEsp").click(function () {
    window.location.href = this.id + "index-es.html";
});

// RÉSUMÉ PAGE LANGUAGE SELECTOR
$("img.flagGer-cv").click(function () {
    window.location.href = this.id + "resume.html";
});
$("img.flagUS-cv").click(function () {
    window.location.href = this.id + "resume-en.html";
});
$("img.flagEsp-cv").click(function () {
    window.location.href = this.id + "resume-es.html";
});

// CONTACTE PAGE LANGUAGE SELECTOR
$("img.flagGer").click(function () {
    window.location.href = this.id + "contact-me.html";
});
$("img.flagUS").click(function () {
    window.location.href = this.id + "contact-me-en.html";
});
$("img.flagEsp").click(function () {
    window.location.href = this.id + "contact-me-es.html";
});

// Animation - Fade in and out the Clouds
function animateClouds() {
    var cloudTop = $('.cloudTop');
    var cloudBottom = $('.cloudBottom');

    cloudTop.animate({ opacity: 1 }, 5000).animate({ opacity: 0 }, 15000).animate({ opacity: 0.5 }, 5000);
    cloudBottom.animate({ opacity: 0 }, 5000).animate({ opacity: 1}, 6000).animate({ opacity: 0}, 8000).animate({ opacity: 1 }, 5000);
}

// 1st Call Animations
animateClouds();

// Keep Calling automaticaly the animation every 30s.
setInterval(function() {
    animateClouds();
}, 30000);
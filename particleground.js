document.addEventListener('DOMContentLoaded', function() {
    particleground(document.getElementById('particles'), {
        dotColor: '#cfcfcf',
        lineColor: '#f0f0f0',
        particleRadius: 6,
        lineWidth: 0.1,
        proximity: 160,
        parallax: true,
        parallaxMultiplier: 8,
        density: 7500
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);
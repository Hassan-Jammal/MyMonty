
export const run = () => {
    $('.open-nav-btn').on('click', function() {
        $('.navbar').removeClass('d-none');
        $('.close-nav-btn').removeClass('d-none');
        $('.open-nav-btn').addClass('d-none');
    });
    
    $('.close-nav-btn').on('click', function() {
        $('.navbar').addClass('d-none');
        $('.close-nav-btn').addClass('d-none');
        $('.open-nav-btn').removeClass('d-none');
    });

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    ScrollTrigger.create({
        start: 'top -40',
        end: 99999,
        toggleClass: { className: 'header--scrolled', targets: '.header' }
    });
}
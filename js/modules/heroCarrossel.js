export function HeroCarrossel() {
    document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper('.hero-carousel .swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.hero-carousel .swiper-button-next',
                prevEl: '.hero-carousel .swiper-button-prev',
            },
        });
    });
}
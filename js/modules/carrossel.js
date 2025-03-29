export function Carrossel() {
    const carrosseisDesktop = document.querySelectorAll('.carrosselDesktop.swiper');
    const carrosseisMobile = document.querySelectorAll('.carrosselMobile.swiper');
    
    carrosseisDesktop.forEach((carrossel) => {
        new Swiper(carrossel, {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: carrossel.querySelector('.carrosselPagination'),
                clickable: true
            },
            navigation: {
                nextEl: carrossel.querySelector('.carrosselButton.next'),
                prevEl: carrossel.querySelector('.carrosselButton.prev')
            },
            autoplay: false,
            freeMode: false
        });
    });

    carrosseisMobile.forEach((carrossel) => {
        new Swiper(carrossel, {
            slidesPerView: 1,
            spaceBetween: 12,
            pagination: {
                el: carrossel.querySelector('.carrosselPagination'),
                clickable: true
            },
            freeMode: true,
            autoplay: false
        });
    });
}
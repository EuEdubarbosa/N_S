window.onload = function() {
    var slides = document.getElementsByClassName('slide');
    var currentIndex = 0;

    function showSlide() {
        // Esconder todos os slides
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }

        // Exibir o slide atual
        slides[currentIndex].classList.add('active');

        // Avançar para o próximo slide
        currentIndex = (currentIndex + 1) % slides.length;
    }

    // Iniciar o slideshow automaticamente
    setInterval(showSlide, 7000);
};
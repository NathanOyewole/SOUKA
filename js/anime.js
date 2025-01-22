let currentSlide = 0;
const slides = document.querySelectorAll('.anime-slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});

// Fetch anime quotes/facts (using a public API like animechan)
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('anime-quote').textContent = `"${data.quote}" - ${data.character}`;
    })
    .catch(error => console.error('Error fetching anime quote:', error));

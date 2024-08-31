const articlesContainer = document.querySelector('.articles-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function scrollArticles(forward = true) {
    const totalArticles = document.querySelectorAll('.article').length;
    const visibleArticles = Math.floor(articlesContainer.clientWidth / document.querySelector('.article').clientWidth);

    if (forward) {
        if (currentIndex + visibleArticles >= totalArticles) {
            currentIndex = 0;  // Volta ao início se chegar ao final
        } else {
            currentIndex++;
        }
    } else {
        if (currentIndex <= 0) {
            currentIndex = totalArticles - visibleArticles;  // Volta ao final se chegar ao início
        } else {
            currentIndex--;
        }
    }

    articlesContainer.style.transform = `translateX(-${currentIndex * (100 / visibleArticles)}%)`;
}

let autoScroll = setInterval(scrollArticles, 3000);

prevButton.addEventListener('click', () => {
    clearInterval(autoScroll);
    scrollArticles(false);
});

nextButton.addEventListener('click', () => {
    clearInterval(autoScroll);
    scrollArticles(true);
});

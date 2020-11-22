const projects = [{
    name: "COVID-19 Statistics",
    url: "https://dvalo.github.io/covid-statistics/",
    thumbnail: "https://codepen.io/Irradiated58/pen/QWEEYyY/image/large.png",
},
{
    name: "JavaScript Calculator",
    url: "https://dvalo.github.io/javascript-calculator/",
    thumbnail: "https://codepen.io/Irradiated58/pen/oNLwWxQ/image/large.png",
},
{
    name: "Rock Paper Scissors Game",
    url: "https://dvalo.github.io/rock-paper-scissors/",
    thumbnail: "https://codepen.io/Irradiated58/pen/yLJvbVZ/image/large.png",
},
{
    name: "Markdown Previewer",
    url: "https://dvalo.github.io/markdown-previewer/",
    thumbnail: "https://codepen.io/Irradiated58/pen/BazWoOM/image/large.png",
},
{
    name: "25 + 5 Clock",
    url: "https://dvalo.github.io/pomodoro-clock/",
    thumbnail: "https://codepen.io/Irradiated58/pen/gOMgVVr/image/large.png",
},
{
    name: "Drum Machine",
    url: "https://dvalo.github.io/drum-machine/",
    thumbnail: "https://codepen.io/Irradiated58/pen/XWKpooB/image/large.png",
},
{
    name: "Currency Converter",
    url: "https://dvalo.github.io/currency-converter/",
    thumbnail: "https://codepen.io/Irradiated58/pen/mdEJexp/image/large.png",
},
{
    name: "Find The Country",
    url: "https://dvalo.github.io/find-the-country/",
    thumbnail: "https://codepen.io/Irradiated58/pen/ZEOdZJb/image/large.png",
},
{
    name: "Guess The Flag",
    url: "https://dvalo.github.io/guess-the-flag/",
    thumbnail: "https://codepen.io/Irradiated58/pen/RwRzOpM/image/large.png",
},
{
    name: "Tip Calculator",
    url: "https://dvalo.github.io/tip-calculator/",
    thumbnail: "https://codepen.io/Irradiated58/pen/JjKjvBw/image/large.png",
},
{
    name: "Quote Generator",
    url: "https://dvalo.github.io/quote-generator/",
    thumbnail: "https://codepen.io/Irradiated58/pen/zYBojKa/image/large.png",
},
{
    name: "Personal Portfolio",
    url: "https://dvalo.github.io/personal-portfolio/",
    thumbnail: "https://codepen.io/Irradiated58/pen/LYZZZBv/image/large.png",
},
{
    name: "Hangman Game",
    url: "https://dvalo.github.io/hangman-game/",
    thumbnail: "https://codepen.io/Irradiated58/pen/zYBYLGv/image/large.png",
},
{
    name: "Hex Color Generator",
    url: "https://dvalo.github.io/random-hex-generator/",
    thumbnail: "https://codepen.io/Irradiated58/pen/KKMPGrY/image/large.png",
},
{
    name: "Math Game",
    url: "https://dvalo.github.io/math-game/",
    thumbnail: "https://codepen.io/Irradiated58/pen/mdEbwXv/image/large.png",
},
{
    name: "Guessing Game",
    url: "https://dvalo.github.io/number-guessing-game/",
    thumbnail: "https://codepen.io/Irradiated58/pen/RwRbppw/image/large.png",
},
{
    name: "Survey Form",
    url: "https://dvalo.github.io/survey-form/",
    thumbnail: "https://codepen.io/Irradiated58/pen/poyZRjN/image/large.png",
},
{
    name: "Technical Documentation",
    url: "https://dvalo.github.io/technical-documentation-page/",
    thumbnail: "https://codepen.io/Irradiated58/pen/BazyVPd/image/large.png",
},
{
    name: "Tribute Page",
    url: "https://dvalo.github.io/tribute-page/",
    thumbnail: "https://codepen.io/Irradiated58/pen/qBNOYwx/image/large.png",
},
{
    name: "Product Landing Page",
    url: "https://dvalo.github.io/product-landing-page/",
    thumbnail: "https://codepen.io/Irradiated58/pen/rNeqZzv/image/large.png",
},

]

$(document).ready(function() {
    populateProjects();
    createTooltips();
    clickToCopy();
    smoothScroll();
});

function populateProjects() {
    for (let i = 0; i < projects.length; i++) {
        $('.projects-wrap').append(`
        <a href="${projects[i].url}" target="_blank" class="project project-tile">
            <img class="project-image" src="${projects[i].thumbnail}">
            <div class="project-description">
                <div class="project-title">
                    <span class="code">&lt;</span>${projects[i].name}
                    <span class="code">/&gt;</span>
                </div>
            </div>
        </a>
        `);
    }
}

function createTooltips() {
    tippy('.codepen', {
        content: 'CodePen',
        animation: 'scale',
        theme: 'light',
    });
    tippy('.github', {
        content: 'GitHub',
        animation: 'scale',
        theme: 'light',
    });
    tippy('.codecamp', {
        content: 'freeCodeCamp',
        animation: 'scale',
        theme: 'light',
    });
    tippy('.email', {
        content: 'Email - Click to Copy!',
        animation: 'scale',
        theme: 'light',
    });
    tippy('.email', {
        content: 'Email copied to clipboard!',
        placement: 'right',
        trigger: 'click',
        animation: 'scale',
        theme: 'light',
        hideOnClick: false,
        onShow(instance) {
            setTimeout(() => {
                instance.hide();
            }, 2000);
        }
    });
}

function clickToCopy() {
    let clipboard = new ClipboardJS('.email a');
    clipboard.on('success', function(e) {
        event.preventDefault();
        e.clearSelection();
    });
}

function smoothScroll() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
}
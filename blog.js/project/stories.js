const listArticles = [
    {
        date: "August 1, 2026",
        title: "My first post, just a test",
        teaser: "Just to make sure my code is working properly",
        lien: "../../articles.html/project/stories/art.html",
    },

]

//setting the pagination

const articlesPerPage = 8;
let currentPage = 1;

// we bring the html div in here

const containerArticles = document.getElementById('articles-container');
const containerPagination = document.getElementById('pagination-container');

//function for the articles visibility

function articleProjection() {
    containerArticles.innerHTML = "";
    const indexBegin = (currentPage - 1) * articlesPerPage;
    const indexEnd = indexBegin + articlesPerPage;
    const articlesOfThePage = listArticles.slice(indexBegin, indexEnd);
    articlesOfThePage.forEach(articles => {
        containerArticles.innerHTML += `
        <small class="gold">${articles.date}</small>
        <h2>${articles.title}</h2>
        <p>${articles.teaser}</p>
        <a class="gold" href="${articles.lien}">Read the entire article</a>
        <p> </p>
        `;
    });
    genererPagination();
}

function genererPagination() {
    containerPagination.innerHTML = "";
    const totalPages = Math.ceil(listArticles.length / articlesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.style.margin = "0 5px";

        if (i === currentPage) {
            button.classList.add('active');
        }
    

    button.addEventListener('click', () => {
        currentPage = i;
        articleProjection();
    });

    containerPagination.appendChild(button);
    }
}

articleProjection();

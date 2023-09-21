const url = 'https://newsapi.org/v2/everything';

// Define the query parameters
const params = new URLSearchParams({
    domains: 'timesofindia.indiatimes.com,indianexpress.com,thehindu.com,livemint.com,hindustantimes.com,indiatoday.in',
    apiKey: '15fd54db4f964d91b422907410e4d610',
    q: 'Legal OR Law Affairs India OR Court ' ,  // Use OR to search for any of these terms
    language:'en'
});

// Combine the URL and parameters
const fullUrl = `${url}?${params.toString()}`;

// Fetch data from the News API
fetch(fullUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Handle the JSON response data and display it on the webpage
        const newsContainer = document.getElementById('news-container');
        data.articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            const title = document.createElement('h2');
            title.textContent = article.title;

            const description = document.createElement('p');
            description.textContent = article.description;

            const publishedAt = document.createElement('p');
            publishedAt.textContent = `Published At: ${new Date(article.publishedAt).toLocaleString()}`;

            const urlLink = document.createElement('a');
            urlLink.href = article.url;
            urlLink.textContent = 'Read More';

            const image = document.createElement('img');
            image.src = article.urlToImage;

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(publishedAt);
            articleDiv.appendChild(urlLink);
            articleDiv.appendChild(image);

            newsContainer.appendChild(articleDiv);
        });
    })
    .catch(error => {
        // Handle errors here
        console.error('Fetch Error:', error);
    });

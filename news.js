console.log('This is our news website');
// API KEY : 0c03bd8808cf4edd95ceb51beb3e5f3a
// API Parameters
let source = 'bbc-news';
let apiKey = '0c03bd8808cf4edd95ceb51beb3e5f3a';

newsAccording = document.getElementById('newsAccording');
const xhr = new XMLHttpRequest();

// Create a AJAX get request
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        // JSON.parse takes the string and make the object
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(json);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `
                         <p class="newsPara">
                         <button class="newsButton btn btn-warning border border-danger border-5 rounded-pill text-dark fs-5 fw-bolder" type="button" data-bs-toggle="collapse" href="#multiCollapse${index + 1}" role="button" aria-expanded="false" aria-controls="multiCollapse${index + 1}"> <span class="badge bg-dark">Breaking News📰</span>
                          ${element["title"]}
                          </button>
                        </p>
                        <div style="min-height: 120px;">
                        <div class="collapse multi-collapse" id="multiCollapse${index + 1}">
                        <div class="card card-body fw-bolder" style="width: 800px;">
                        ${element["content"]}. <a href="${element['url']}" target="_blank"> Read More Here</a>
                        </div>
                        </div>
                        </div> <br>`;
            newsHtml += news;
        });
        newsAccording.innerHTML = newsHtml;
    }

    else {
        console.log('Error Occured');
    }
}


xhr.send();

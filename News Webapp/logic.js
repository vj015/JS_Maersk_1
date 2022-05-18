console.log('Welcome to News WebApp');
//5e7246f59ce943a9a5d3644b37ab30bd
newsaccordion = document.getElementById('newsaccordion');
const xhr = new XMLHttpRequest();
xhr.open('Get', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5e7246f59ce943a9a5d3644b37ab30bd', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);
        let newsHTML = "";
      articles.forEach(function(element, index){
        let news = `<div class="card">
        <div class="card-header" id="heading${index}">
            <h5 class="mb-0">
               <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="true" aria-controls="#collapse${index}">
                    <B>Headlines ${index}</B> ${element["title"]}
                </button>
            </h5>
        </div>
        
        <div id="collapse${index}" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
            ${element["description"]}.<a href="${element["url"]}" target="_blank">Read more here </a>
            </div>
        </div>
        
        
        </div>`;
        newsHTML += news;
      });
      newsaccordion.innerHTML = newsHTML;
    }
    else {
        console.log("Some error occured");
    }
}
xhr.send();
//console.log(newsaccordion);



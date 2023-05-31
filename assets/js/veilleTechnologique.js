/* Merci IT-Swarm pour cette function */
const httpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

const client = new httpClient();

/// Veille Javascript
// https://api.codetabs.com/v1/proxy?quest=https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fmedium.com%2Ffeed%2Ftag%2Fjavascript
client.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Ftag%2Fdata-science&api_key=cdqisvwwa6ehq5ora6xm0axkuwpodvdjug9fxi83&order_by=pubDate&count=6', function(response) {
    let feed = JSON.parse(response);
    let detailSimple; 
    let limite = 0;
    let data = document.getElementById('dataTechnologique');
    feed.items.forEach(function(entry) {
        let link = entry.link;
        let titre = entry.title;
        let dataPub = entry.pubDate;
        let author = entry.author;
        let img = entry.thumbnail;
        if(limite <= 2) {
            detailSimple = "<div class='item vague1'><div class='cont-img-port'><img src='" + img + "' alt='img portfolio'> </div><h3>" + titre + "</h3><p> Autheur :  " + author + " - " + dataPub + "</p><a target='_blank' href=" + link + " class='btn-projets'>Découvrez l'article</a></div>";
         } else {
            detailSimple = "<div class='item vague2'><div class='cont-img-port'><img src='" + img + "' alt='img portfolio'> </div><h3>" + titre + "</h3><p>" + author + "Publié le : " + dataPub + "</p><a target='_blank' href=" + link + " class='btn-projets'>Découvrez l'article</a></div>";
        }
        limite += 1;
        data.insertAdjacentHTML("beforeend", detailSimple)
    })
});

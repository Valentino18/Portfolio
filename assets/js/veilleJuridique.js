/* Function */

fetch('https://api.codetabs.com/v1/proxy?quest=https://www.village-justice.com/articles/Nouvelle-rubrique,431')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Error status Code : ' + response.status);
                return;
            }
            response.text().then(function (data) {
                const myRegex = /<div class="container-div container-div-6art bord-bleu-1 bg-blc" id="">\n.*\n.*\n.*\n.*src="(.*)".*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*href="(.*)">(.*)/gm;
                const matches = data.matchAll(myRegex);
                let linkUniversale = "https://www.village-justice.com/articles/";
                let detailSimple;
                let data2 = document.getElementById('dataJuridique');
                for (const match of matches) {
                    let link = linkUniversale + match[2];
                    let img = linkUniversale + match[1];
                    let titre = match[3];
                    console.log("salut")
                    detailSimple = "<div class='item vague1'><div class='cont-img-port'><img src='" + img + "' alt='img portfolio'> </div><h3>" + titre + "</h3><p></p><a target='_blank' href=" + link + " class='btn-projets'>Découvrez l'article</a></div>";
                    data2.insertAdjacentHTML("beforeend", detailSimple)
                }

            });
        })
    .catch(function (err) {
        console.log('Fetch Error : ', err);
    });
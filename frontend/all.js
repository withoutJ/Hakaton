var div = document.getElementById('listaTimova');

var requestURL = "http://142.93.173.116:5000/teams/";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType="json";
request.send();

request.onload = function() {
    var timovi = request.response;
    ispis(timovi);
}

function ispis(jsonObj) {
    for(var i=0;i<jsonObj.length;i++) {
        var el = jsonObj[i];
        var myDiv = document.createElement('div');
        var myH1 = document.createElement('h1');
        myH1.textContent = el['name'];
        myDiv.appendChild(myH1);
        var myP = document.createElement('p');
        myP.textContent = el['description'];
        myDiv.appendChild(myP);
        var clanovi = el['team_members'];
        ispisClanova(clanovi, myDiv);
    }
}

function ispisClanova(clanovi, myDiv) {
    for(var j=0;j<clanovi.length;j++) {
        var myArticle = document.createElement('article');
        var ime = document.createElement('h2');
        var prezime = document.createElement('h2');
        var email = document.createElement('p');
        var telefon = document.createElement('p');
        var skola = document.createElement('p');
        var mesto = document.createElement('p');
        ime.textContent = "Ime: " + clanovi[j].first_name;
        prezime.textContent = "Prezime: " + clanovi[j].last_name;
        email.textContent = "Email: " + clanovi[j].email;
        telefon.textContent = "Telefon: " + clanovi[j].phone_number;
        skola.textContent = "Skola: " + clanovi[j].school;
        mesto.textContent = "Mesto: " + clanovi[j].city;
        myArticle.appendChild(ime);
        myArticle.appendChild(prezime);
        myArticle.appendChild(email);
        myArticle.appendChild(telefon);
        myArticle.appendChild(skola);
        myArticle.appendChild(mesto);
        myDiv.appendChild(myArticle);
    }
    div.appendChild(myDiv);
}
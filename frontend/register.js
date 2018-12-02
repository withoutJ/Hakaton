function ValidateEmail(uemail)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(uemail.value.match(mailformat))
        {
            return true;
        }
        else
        {
            alert("Uneli ste nepostojeću email adresu!");
            uemail.focus();
            return false;
        }
    }

(function() {
    function toJSON(form){
        var zaNapomene = document.getElementById("napomene");
        var objectTim = {};
        var ok = true;
        var clan1 = {};
        var clan2 = {};
        var clan3 = {};
        var clan4 = {};
        var nclan = [];
        var infTim = $(".osnovno, :input");
        var clanovi = $(".clanovi, :input");
        for(var i=0;i<infTim.length;i++) {
            var el = infTim[i];
            var keyTim = el.name;
            var valueTim = el.value;
            if(keyTim=='name'){
                if(valueTim=="") {
                    ime.classList.add("is-invalid");
                    var myP = document.createElement("p");
                    myP.textContent="Polje ime tima ne sme biti prazno!";
                    zaNapomene.appendChild(myP);
                    ok=false;   
                } else {
                    objectTim[keyTim]=valueTim;
                }
            } 
            if(keyTim=='password'){
                if(valueTim=="") {
                    password.classList.add("is-invalid");
                    var myP = document.createElement("p");
                    myP.textContent="Polje lozinka ne sme biti prazno!";
                    zaNapomene.appendChild(myP);
                    ok=false;   
                } else {
                    objectTim[keyTim]=valueTim + "nikadnecesprovalitihahaha";
                }
            } 
            if(keyTim=='description' || keyTim=='photo_url') {
                objectTim[keyTim]=valueTim;
            }
        }
        for(var j=0;j<clanovi.length;j++) {
            var clan = clanovi[j];
            var keyClan = clan.name;
            var valueClan = clan.value;
            var idClan = clan.id;
            if(keyClan=='first_name') {
                if(idClan=='ime1') {
                    if(valueClan=="") {
                        ime1.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje ime člana 1 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else {
                        clan1[keyClan]=valueClan;
                    }
                } else if(idClan=='ime2') {
                    if(valueClan=="") {
                        ime2.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje ime člana 2 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else {
                        clan2[keyClan]=valueClan;
                    }
                } else if(idClan=='ime3') {
                    if(valueClan=="") {
                        ime3.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje ime člana 3 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else {
                        clan3[keyClan]=valueClan;
                    }
                } else {
                    if(idClan=='ime4') {
                        clan4[keyClan]=valueClan;
                    }
                }
            } else if(keyClan=='last_name') {
                if(idClan=='prezime1') {
                    if(valueClan=="") {
                        prezime1.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje prezime člana 1 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else {
                        clan1[keyClan]=valueClan;
                    }
                } else if(idClan=='prezime2') {
                    if(valueClan=="") {
                        prezime2.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje prezime člana 2 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else {
                        clan2[keyClan]=valueClan;
                    }
                } else if(idClan=='prezime3') {
                    if(valueClan=="") {
                        prezime3.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje prezime člana 3 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else {
                        clan3[keyClan]=valueClan;
                    }
                } else {
                    if(idClan=='ime4') {
                        clan4[keyClan]=valueClan;
                    }
                }
            } else if(keyClan=='email') {
                if(idClan=='email1') {
                    if(valueClan=="") {
                        email1.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje email člana 1 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else if(ValidateEmail(valueClan)){
                        clan1[keyClan]=valueClan;
                    }
                } else if(idClan=='email2') {
                    if(valueClan=="") {
                        email2.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje email člana 2 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else if(ValidateEmail(valueClan)){
                        clan2[keyClan]=valueClan;
                    }
                } else if(idClan=='email3') {
                    if(valueClan=="") {
                        email3.classList.add("is-invalid");
                        var myP = document.createElement("p");
                        myP.textContent="Polje email člana 3 ne sme biti prazno!";
                        zaNapomene.appendChild(myP);
                        ok=false;
                    } else if(ValidateEmail(valueClan)){
                        clan3[keyClan]=valueClan;
                    }
                } else {
                    if(idClan=='ime4') {
                        if(Validate(valueClan))
                        {
                            clan4[keyClan]=valueClan;
                        }
                    }
                }
            } else {
                if(keyClan=='phone_number' || keyClan=='school' || keyClan=='city') {
                    if(idClan=='telefon1' || idClan=='skola1' || idClan=='mesto1') {
                        clan1[keyClan]=valueClan;
                    } else if(idClan=='telefon2' || idClan=='skola2' || idClan=='mesto2') {
                        clan2[keyClan]=valueClan;
                    } else if(idClan=='telefon3' || idClan=='skola3' || idClan=='mesto3') {
                        clan3[keyClan]=valueClan;
                    } else {
                        if(idClan=='telefon4' || idClan=='skola4' || idClan=='mesto4') {
                        clan4[keyClan]=valueClan;
                        }
                    }
                }
            }
            nclan[0]=clan1;
            nclan[1]=clan2;
            nclan[2]=clan3;
            if(clan4['first_name']!="") {
                nclan[3]=clan4;
            }
            objectTim['team_members']=nclan;
        }
        if(ok) {
            return JSON.stringify(objectTim);
        } else {
            return false;
        }
    }
    var form = document.getElementById('deo1');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var json = toJSON(this);
        if(json!=false) {
            posalji(json);
        }
    }, false);
})();

function posalji(json) {
    var requestURL = "http://142.93.173.116:5000/teams/";
    var request = new XMLHttpRequest();
    request.open("POST", requestURL, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(e) {
        if(request.readyState==4) {
            var dobiosam = request.response;
            if(dobiosam["msg"]!="OK") {
                var autput = document.getElementById("izlaz");
                autput.InnerHTML = "Uneto ime tima već postoji!";
            } else {
                autput.InnerHTML = "Uspešno ste registrovani!";
            }
        }
    }
    request.send(JSON.stringify(json));
}
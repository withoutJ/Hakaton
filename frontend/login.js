var form = document.getElementById("login");
var form2 = document.getElementById("change");

form.addEventListener("submit", function(e) {
	e.preventDefault();
	var user = $("#user").val();
	console.log("User:" + user);
	var requestURL = "http://142.93.173.116:5000/teams/";
	var request = new XMLHttpRequest();
	request.open("GET", requestURL + user);
	request.responseType = "json";
	request.send();
	request.onload = function() {
		var tim = request.response;
		var pass = $("#pass").val();
		var password = tim["password"] - "nikadnecesprovalitihahaha";
		console.log(pass);
		console.log(password);
		if(request.status==404) {
			console.log("Pogresan user");
			var myLabel = document.createElement('label');
			var div = document.getElementById("forma");
			myLabel.textContent = "Pogrešno korisničko ime ili šifra!";
			div.appendChild(myLabel);
			user.classList.add("is-invalid");
		} else if(pass==password){
			console.log("Ulogovao se");
			var div = document.getElementById("podaci");
			var ime = document.createElement('input');
			ime.classList.add("form-control");
	        var label = document.createElement('p');
	        label.textContent = "Ime tima";
	        ime.value = tim['name'];
	        ima.id="imeTima";
	        div.appendChild(label);
	        div.appendChild(ime);
	        var opis = document.createElement('input');
	        opis.id="opisTima";
	        opis.classList.add("form-control");
	        var label = document.createElement('p');
	        label.textContent = "Opis tima";
	        opis.value = tim['description'];
	        div.appendChild(label);
	        div.appendChild(opis);
	        var url = document.createElement('input');
	        url.id="urlTima";
	        url.classList.add("form-control");
	        var label = document.createElement('p');
	        label.textContent = "Link ka slici tima";
	        url.value = tim['photo_url'];
	        div.appendChild(label);
	        div.appendChild(url);
	        var pass = document.createElement('input');
	        pass.id="sifraTima";
	        pass.classList.add("form-control");
	        var label = document.createElement('p');
	        label.textContent = "Šifra";
	        pass.value = tim['password'];
	        div.appendChild(label);
	        div.appendChild(pass);
	        var clanovi = tim['team_members'];
	        var novidiv = document.getElementById("clanoviclanoviclanovi");
	        //Prvi clan
	        var prvi = clanovi[0];
	        var prvidiv = document.createElement('div');
	        prvidiv.classList.add("col");
	        var prvoime = document.createElement('input');
	        var prvoprezime = document.createElement('input');
	        var prviemail = document.createElement('input');
	        var prvitelefon = document.createElement('input');
	        var prvaskola = document.createElement('input');
	        var prvigrad = document.createElement('input');
	        prvoime.id="prvoime";
	        prvoprezime.id="prvoprezime";
	        prviemail.id="prviemail";
	        prvoime.classList.add("form-control");
	        prvoprezime.classList.add("form-control");
	        prviemail.classList.add("form-control");
	        prvitelefon.classList.add("form-control");
	        prvaskola.classList.add("form-control");
	        prvigrad.classList.add("form-control");
	        prvoime.value = prvi['first_name'];
	        prvoprezime.value = prvi['last_name'];
	        prviemail.value = prvi['email'];
	        prvitelefon.value = prvi['phone_number'];
	        prvaskola.value = prvi['school'];
	        prvigrad.value = prvi['city'];
	        var label1 = document.createElement('p');
	        var label2 = document.createElement('p');
	        var label3 = document.createElement('p');
	        var label4 = document.createElement('p');
	        var label5 = document.createElement('p');
	        var label6 = document.createElement('p');
	        label1.textContent="Ime prvog člana";
	        label2.textContent="Prezime prvog člana";
	        label3.textContent="Email prvog člana";
	        label4.textContent="Broj telefona prvog člana";
	        label5.textContent="Škola prvog člana";
	        label6.textContent="Mesto prvog člana";
	        prvidiv.appendChild(label1);
	        prvidiv.appendChild(prvoime);
	        prvidiv.appendChild(label2);
	        prvidiv.appendChild(prvoprezime);
	        prvidiv.appendChild(label3);
	        prvidiv.appendChild(prviemail);
	        prvidiv.appendChild(label4);
	        prvidiv.appendChild(prvitelefon);
	        prvidiv.appendChild(label5);
	        prvidiv.appendChild(prvaskola);
	        prvidiv.appendChild(label6);
	        prvidiv.appendChild(prvigrad);
			//Drugi clan
			var drugi = clanovi[1];
	        var drugidiv = document.createElement('div');
	        drugidiv.classList.add("col");
	        var drugoime = document.createElement('input');
	        var drugoprezime = document.createElement('input');
	        var drugiemail = document.createElement('input');
	        var drugitelefon = document.createElement('input');
	        var drugaskola = document.createElement('input');
	        var drugigrad = document.createElement('input');
<<<<<<< HEAD
	        drugoime.id="drugoime";
	        drugoprezime.id="drugoprezime";
	        drugiemail.id="drugiemail";
=======
>>>>>>> 0b3595e4a25cda3304f69126b38dc49e8615d727
	        drugoime.classList.add("form-control");
	        drugoprezime.classList.add("form-control");
	        drugiemail.classList.add("form-control");
	        drugitelefon.classList.add("form-control");
	        drugaskola.classList.add("form-control");
	        drugigrad.classList.add("form-control");
	        drugoime.value = prvi['first_name'];
	        drugoprezime.value = prvi['last_name'];
	        drugiemail.value = prvi['email'];
	        drugitelefon.value = prvi['phone_number'];
	        drugaskola.value = prvi['school'];
	        drugigrad.value = prvi['city'];
	        var label7 = document.createElement('p');
	        var label8 = document.createElement('p');
	        var label9 = document.createElement('p');
	        var label10 = document.createElement('p');
	        var label11 = document.createElement('p');
	        var label12 = document.createElement('p');
	        label7.textContent="Ime drugog člana";
	        label8.textContent="Prezime drugog člana";
	        label9.textContent="Email drugog člana";
	        label10.textContent="Broj telefona drugog člana";
	        label11.textContent="Škola drugog člana";
	        label12.textContent="Mesto drugog člana";
	        drugidiv.appendChild(label7);
	        drugidiv.appendChild(drugoime);
	        drugidiv.appendChild(label8);
	        drugidiv.appendChild(drugoprezime);
	        drugidiv.appendChild(label9);
	        drugidiv.appendChild(drugiemail);
	        drugidiv.appendChild(label10);
	        drugidiv.appendChild(drugitelefon);
	        drugidiv.appendChild(label11);
	        drugidiv.appendChild(drugaskola);
	        drugidiv.appendChild(label12);
	        drugidiv.appendChild(drugigrad);
			//Treci clan
			var treci = clanovi[2];
	        var trecidiv = document.createElement('div');
	        trecidiv.classList.add("col");
	        var treceime = document.createElement('input');
	        var treceprezime = document.createElement('input');
	        var treciemail = document.createElement('input');
	        var trecitelefon = document.createElement('input');
	        var trecaskola = document.createElement('input');
	        var trecigrad = document.createElement('input');
<<<<<<< HEAD
	        treceime.id="treceime";
	        treceprezime.id="treceprezime";
	        treciemail.id="treciemail";
=======
>>>>>>> 0b3595e4a25cda3304f69126b38dc49e8615d727
	        treceime.classList.add("form-control");
	        treceprezime.classList.add("form-control");
	        treciemail.classList.add("form-control");
	        trecitelefon.classList.add("form-control");
	        trecaskola.classList.add("form-control");
	        trecigrad.classList.add("form-control");
	        treceime.value = prvi['first_name'];
	        treceprezime.value = prvi['last_name'];
	        treciemail.value = prvi['email'];
	        trecitelefon.value = prvi['phone_number'];
	        trecaskola.value = prvi['school'];
	        trecigrad.value = prvi['city'];
	        var label13 = document.createElement('p');
	        var label14 = document.createElement('p');
	        var label15 = document.createElement('p');
	        var label16 = document.createElement('p');
	        var label17 = document.createElement('p');
	        var label18 = document.createElement('p');
	        label13.textContent="Ime trećeg člana";
	        label14.textContent="Prezime trećeg člana";
	        label15.textContent="Email trećeg člana";
	        label16.textContent="Broj telefona trećeg člana";
	        label17.textContent="Škola trećeg člana";
	        label18.textContent="Mesto trećeg člana";
	        trecidiv.appendChild(label13);
	        trecidiv.appendChild(treceime);
	        trecidiv.appendChild(label14);
	        trecidiv.appendChild(treceprezime);
	        trecidiv.appendChild(label15);
	        trecidiv.appendChild(treciemail);
	        trecidiv.appendChild(label16);
	        trecidiv.appendChild(trecitelefon);
	        trecidiv.appendChild(label17);
	        trecidiv.appendChild(trecaskola);
	        trecidiv.appendChild(label18);
	        trecidiv.appendChild(trecigrad);
			//Cetvrti clan
			if(clanovi.length>3)
			{
				var cetvrti = clanovi[3];
	        	var cetvrtidiv = document.createElement('div');
	        	cetvrtidiv.classList.add("col");
	        	var cetvrtoime = document.createElement('input');
	        	var cetvrtoprezime = document.createElement('input');
	        	var cetvrtiemail = document.createElement('input');
	        	var cetvrtitelefon = document.createElement('input');
	        	var cetvrtaskola = document.createElement('input');
	        	var cetvrtigrad = document.createElement('input');
<<<<<<< HEAD
	        	cetvrtoime.id="cetvrtoime";
	      		cetvrtoprezime.id="cetvrtoprezime";
	      	    cetvrtiemail.id="cetvrtiemail";
=======
>>>>>>> 0b3595e4a25cda3304f69126b38dc49e8615d727
	        	cetvrtoime.classList.add("form-control");
	        	cetvrtoprezime.classList.add("form-control");
	       	 	cetvrtiemail.classList.add("form-control");
	        	cetvrtitelefon.classList.add("form-control");
	        	cetvrtaskola.classList.add("form-control");
	        	cetvrtigrad.classList.add("form-control");
	        	cetvrtoime.value = prvi['first_name'];
	       	 	cetvrtoprezime.value = prvi['last_name'];
	        	cetvrtiemail.value = prvi['email'];
	        	cetvrtitelefon.value = prvi['phone_number'];
	        	cetvrtaskola.value = prvi['school'];
	        	cetvrtagrad.value = prvi['city'];
	        	var label19 = document.createElement('p');
	        	var label20 = document.createElement('p');
	        	var label21 = document.createElement('p');
	        	var label22 = document.createElement('p');
	        	var label23 = document.createElement('p');
	        	var label24 = document.createElement('p');
	        	label19.textContent="Ime četvrtog člana";
	        	label20.textContent="Prezime četvrtog člana";
	        	label21.textContent="Email četvrtog člana";
	        	label22.textContent="Broj telefona četvrtog člana";
	        	label23.textContent="Škola četvrtog člana";
	        	label24.textContent="Mesto četvrtog člana";
	        	cetvrtidiv.appendChild(label19);
	        	cetvrtidiv.appendChild(cetvrtoime);
	        	cetvrtidiv.appendChild(label20);
	        	cetvrtidiv.appendChild(cetvrtoprezime);
	        	cetvrtidiv.appendChild(label21);
	        	cetvrtidiv.appendChild(cetvrtiemail);
	        	cetvrtidiv.appendChild(label22);
	        	cetvrtidiv.appendChild(cetvrtitelefon);
	        	cetvrtidiv.appendChild(label23);
	        	cetvrtidiv.appendChild(cetvrtaskola);
	        	cetvrtidiv.appendChild(label24);
				cetvrtidiv.appendChild(cetvrtigrad);
<<<<<<< HEAD
			}
			novidiv.appendChild(prvidiv);
			novidiv.appendChild(drugidiv);
			novidiv.appendChild(trecidiv);
			if(clanovi.length>3)novidiv.appendChild(cetvrtidiv);
=======

				novidiv.appendChild(cetvrtidiv);
			}



			novidiv.appendChild(prvidiv);
			novidiv.appendChild(drugidiv);
			novidiv.appendChild(trecidiv);
>>>>>>> 0b3595e4a25cda3304f69126b38dc49e8615d727

		} else {
			console.log("Pogresna sifra");
			var myLabel = document.createElement('label');
			var div = document.getElementById("forma");
			myLabel.textContent = "Pogrešno korisničko ime ili šifra!";
			div.appendChild(myLabel);
			user.classList.add("is-invalid");
		}
		var poslednjidiv = document.getElementById("dugmebre");
		var dugmeono = document.createElement("input");
		dugmeono.type="submit";
		dugmeono.value="Pošalji izmene";
		dugmeono.classList.add("btn");
		dugmeono.classList.add("btn-dark");
		poslednjidiv.appendChild(dugmeono);
		form2.addEventListener("submit", function(e){
			e.preventDefault();
			var imeTimavrednost = $("#imeTima").val();
			var sifraTimavrednost = $("#sifraTima").val();
			var prvoimevrednost = $("#prvoime").val();
			var prvoprezimevrednost = $("#prvoprezime").val();
			var prviemailvrednost = $("#prviemail").val();
			var drugoimevrednost = $("#drugoime").val();
			var drugoprezimevrednost = $("#drugoprezime").val();
			var drugiemailvrednost = $("#drugiemail").val();
			var treceimevrednost = $("#treceime").val();
			var treceprezimevrednost = $("#treceprezime").val();
			var treciemailvrednost = $("#treciemail").val();
			if(imeTimavrednost=="" || sifraTimavrednost=="" || prvoimevrednost=="" || prvoprezimevrednost=="" || prviemailvrednost=="" ||
				drugoimevrednost=="" || drugoprezimevrednost=="" || drugiemailvrednost=="" || 
				treceimevrednost=="" || treceprezimevrednost=="" || treciemailvrednost=="") {
				var requestURL = "http://142.93.173.116:5000/teams/";
    			var request = new XMLHttpRequest();
    			request.open("DELETE", requestURL+user, true);
    			request.send();
			} else {
				if(clanovi.length>3) {
				var cetvrtoimevrednost = $("#cetvrtoime").val();
				var cetvrtoprezimevrednost = $("#cetvrtoprezime").val();
				var cetvrtiemailvrednost = $("#cetvrtiemail").val();
				if(cetvrtoimevrednost=="" || cetvrtoprezimevrednost=="" || cetvrtiemailvrednost=="") {
					var requestURL = "http://142.93.173.116:5000/teams/";
    				var request = new XMLHttpRequest();
    				request.open("DELETE", requestURL+user, true);
    				request.send();
				} else {
					posalji(toJSON(form2));
				}
				} else {
					posalji(toJSON(form2));
				}
			}
		}, false);
	}
}, false);

function posalji(json) {
    var requestURL = "http://142.93.173.116:5000/teams/";
    var request = new XMLHttpRequest();
    request.open("PUT", requestURL, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(json));
}

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
                    objectTim[keyTim]=valueTim;
            } 
            if(keyTim=='password'){
                    objectTim[keyTim]=valueTim + "nikadnecesprovalitihahaha";
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
                        clan1[keyClan]=valueClan;
                } else if(idClan=='ime2') {
                        clan2[keyClan]=valueClan;
                } else if(idClan=='ime3') {
                        clan3[keyClan]=valueClan;
                } else {
                    if(idClan=='ime4') {
                        clan4[keyClan]=valueClan;
                    }
                }
            } else if(keyClan=='last_name') {
                if(idClan=='prezime1') {
                        clan1[keyClan]=valueClan;
                } else if(idClan=='prezime2') {
                        clan2[keyClan]=valueClan;
                } else if(idClan=='prezime3') {
                        clan3[keyClan]=valueClan;
                } else {
                    if(idClan=='ime4') {
                        clan4[keyClan]=valueClan;
                    }
                }
            } else if(keyClan=='email') {
                if(idClan=='email1') {
                        clan1[keyClan]=valueClan;
                } else if(idClan=='email2') {
                        clan2[keyClan]=valueClan;
                } else if(idClan=='email3') {
                        clan3[keyClan]=valueClan;
                } else {
                    if(idClan=='ime4') {
                            clan4[keyClan]=valueClan;
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
function search_team() {
  document.querySelector('#section').innerHTML = ''
  const team_name = document.querySelector('#teamName').value;

  fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${team_name}`).then(res => res.json()).then(data => {
    console.log(data)

    for (i of data.teams) {

      var logo = document.createElement('img')

      const date_team = {
        id: i.idTeam,
        name: i.strTeam,
        league: i.strLeague,
        sport: i.strSport,
        logo: i.strTeamBadge  
      }

      create_player(date_team)

    }
  })
}

function create_player(date_team) {
  const section = document.getElementById('section')

  section.innerHTML +=
    `<div id='${date_team.id}' onclick='team_info(this.id)'>
    <p id="teamID">${date_team.id}</p>
    <p>${date_team.league}</p>
    <p>${date_team.sport}</p>
    <img src=${date_team.logo}>
  </div>`
}



// Uma galeria com fotos presentes em 'strTeamBadge', 'strTeamJersey', 'strTeamLogo', 'strTeamFanart1', 'strTeamFanart2', 'strTeamFanart3', 'strTeamFanart4', 'strTeamBanner'. (Caso haja resposta 'null' esta deve ser tratada e eliminada da aplicação).
// Link para o canal do YouTube (caso resposta seja 'null' deve ser tratado e determinar a seguinte string de texto 'O time não contém links do YouTube') (strYoutube)
// Links para cada rede social (Facebook, Twitter, Instagram ⇒ caso resposta seja 'null' deve ser tratado e eliminado). (strFacebook, strInstagram, strTwitter) (É necessário adicionar https:// no começo da string por se tratar de servidor local na hora de montar o JavaScript).

function team_info(id_team) {
  console.log(id_team)
  section.innerHTML = ''
  // const teamID = document.querySelector('#teamID').innerText;
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id_team}`).then(res => res.json()).then(data => {
    console.log(data.teams[0])

    const date_especific_team = {
      name: data.teams[0].strTeam,
      logo: data.teams[0].strTeamLogo,
      league: data.teams[0].strLeague,
      sport: data.teams[0].strSport,
      stadium: data.teams[0].strStadium,
      stadium_description: data.teams[0].strStadiumDescription,
      stadium_photo: data.teams[0].strStadiumThumb,
      stadium_capacity: data.teams[0].intStadiumCapacity,
      team_city: data.teams[0].strStadiumLocation,
      team_description: data.teams[0].strDescriptionEN,
      country: data.teams[0].strCountry,


      galery_1: data.teams[0].strTeamBadge,
      galery_2: data.teams[0].strTeamJersey,
      galery_3: data.teams[0].strTeamLogo,
      galery_4: data.teams[0].strTeamFanart1,
      galery_5: data.teams[0].strTeamFanart2,
      galery_6: data.teams[0].strTeamFanart3,
      galery_7: data.teams[0].strTeamFanart4,
      galery_8: data.teams[0].strTeamBanner,


      youtube: data.teams[0].strYoutube,
      facebook: data.teams[0].strFacebook,
      instagram: data.teams[0].strInstagram,
      twitter: data.teams[0].strTwitter,

      
      // name: data.strTeam,
      // league: data.strLeague,
      // sport: data.strSport,
      // logo: data.strTeamBadge
    }

    // if (date_especific_team.stadium = null) {
    //   date_especific_team.stadium = data.teams[0].strStadium
    // }

    if (date_especific_team.stadium == null|| date_especific_team.stadium == '') {
      date_especific_team.stadium = 'Sem descrição';
    }


    if (date_especific_team.logo != null) {
      date_especific_team.logo = data.teams[0].strTeamLogo
    } else {
      date_especific_team.logo = 'images/imagem-padrao.jpg';
    };


    if (date_especific_team.stadium_description == null|| date_especific_team.stadium_description == '') {
      date_especific_team.stadium_description = 'Sem descrição';
    }


    if (date_especific_team.stadium_photo != null) {
      date_especific_team.stadium_photo = data.teams[0].strStadiumThumb
    } else {
      date_especific_team.stadium_photo = 'images/estadio-padrao.jpg';
    };


    if (date_especific_team.stadium_capacity == null|| date_especific_team.stadium_capacity == '') {
      date_especific_team.stadium_capacity = 'Sem descrição';
    }

    if (date_especific_team.team_city == null|| date_especific_team.team_city == '') {
      date_especific_team.team_city = 'Sem descrição';
    }

    if (date_especific_team.team_description == null|| date_especific_team.team_description == '') {
      date_especific_team.team_description = 'Sem descrição';
    }


    // galeria
    if (date_especific_team.galery_1 != null) {
      date_especific_team.galery_1 = data.teams[0].strTeamBadge
    } else {
      date_especific_team.galery_1 = 'images/no-image.jpg';
    };
    if (date_especific_team.galery_2 != null) {
      date_especific_team.galery_2 = data.teams[0].strTeamJersey
    } else {
      date_especific_team.galery_2 = 'images/no-image.jpg';
    };
    if (date_especific_team.galery_3 != null) {
      date_especific_team.galery_3 = data.teams[0].strTeamLogo
    } else {
      date_especific_team.galery_3 = 'images/no-image.jpg';
    };
    if (date_especific_team.galery_4 != null) {
      date_especific_team.galery_4 = data.teams[0].strTeamFanart1
    } else {
      date_especific_team.galery_4 = 'images/no-image.jpg';
    };
    if (date_especific_team.galery_5 != null) {
      date_especific_team.galery_5 = data.teams[0].strTeamFanart2
    } else {
      date_especific_team.galery_5 = 'images/no-image.jpg';
    };
    if (date_especific_team.galery_6 != null) {
      date_especific_team.galery_6 = data.teams[0].strTeamFanart3
    } else {
      date_especific_team.galery_6 = 'images/no-image.jpg';
    };
    if (date_especific_team.galery_7 != null) {
      date_especific_team.galery_7 = data.teams[0].strTeamFanart4
    } else {
      date_especific_team.galery_7 = 'images/no-image.jpg';
    };
    if (date_especific_team.galery_8 != null) {
      date_especific_team.galery_8 = data.teams[0].strTeamBanner
    } else {
      date_especific_team.galery_8 = 'images/no-image.jpg';
    };



    if (date_especific_team.youtube == null|| date_especific_team.youtube == '') {
      date_especific_team.youtube = 'O time não contém links do YouTube';
    }



    section.innerHTML =
    `<div id="especific_team">
      <div id="item_1">
        
        <img src=${date_especific_team.logo}>
        <img src=${date_especific_team.stadium_photo}>


        <p>Name: ${date_especific_team.name}</p>
        <p>League: ${date_especific_team.league}</p>
        <p>Sport: ${date_especific_team.sport}</p>
        <p>Stadium Name: ${date_especific_team.stadium}</p>
        <p>Stadium Description: ${date_especific_team.stadium_description}</p>  

        <p>Stadium Capacity: ${date_especific_team.stadium_capacity}</p>
        <p>Team City: ${date_especific_team.team_city}</p>
        <p>Country: ${date_especific_team.country}</p>
        
      </div>

        <div id="item_3">
        <div id="base_gallery">
          <div class="gallery">
            <a target="_blank" href="${date_especific_team.galery_1}">
              <img src="${date_especific_team.galery_1}" alt="Cinque Terre">
            </a>
            <div class="desc">TeamBadge</div>
          </div>

          <div class="gallery">
            <a target="_blank" href="${date_especific_team.galery_2}">
              <img src="${date_especific_team.galery_2}" alt="Forest">
            </a>
            <div class="desc">TeamJersey</div>
          </div>

          <div class="gallery">
            <a target="_blank" href="${date_especific_team.galery_3}">
              <img src="${date_especific_team.galery_3}" alt="Northern Lights">
            </a>
            <div class="desc">TeamLogo</div>
          </div>

          <div class="gallery">
            <a target="_blank" href="${date_especific_team.galery_4}">
              <img src="${date_especific_team.galery_4}" alt="Mountains">
            </a>
            <div class="desc">TeamFanart1</div>
          </div>

          <div class="gallery">
            <a target="_blank" href="${date_especific_team.galery_5}">
              <img src="${date_especific_team.galery_5}" alt="Mountains">
            </a>
            <div class="desc">TeamFanart2</div>
          </div>

          <div class="gallery">
            <a target="_blank" href="${date_especific_team.galery_6}">
              <img src="${date_especific_team.galery_6}" alt="Mountains">
            </a>
            <div class="desc">TeamFanart3</div>
          </div>

          <div class="gallery">
            <a target="_blank" href="${date_especific_team.galery_7}">
              <img src="${date_especific_team.galery_7}" alt="Mountains">
            </a>
            <div class="desc">TeamFanart4</div>
          </div>

          <div class="gallery">
            <a target="_blank" href="${date_especific_team.galery_8}">
              <img src="${date_especific_team.galery_8}" alt="Mountains">
            </a>
            <div class="desc">TeamBanner</div>
          </div>
        </div>


      </div>

      <div id="item_2">
        <p>Team Description: ${date_especific_team.team_description}</p>
      </div>



      <div id="item_4">
        <div id ="social">
          <a href="https://${date_especific_team.youtube}" target="_blank"><img src="images/youtube.png"></a>
          <a href="https://${date_especific_team.facebook}" target="_blank"><img src="images/facebook.png"></a>
          <a href="https://${date_especific_team.instagram}" target="_blank"><img src="images/instagram.png"></a>
          <a href="https://${date_especific_team.twitter}" target="_blank"><img src="images/twitter.png"></a>
        </div>
      </div>
    </div>`

    // no_galery =
  })
}

// function search_player {
//   const team_player_name = document.querySelector('#teamName').value;
// }
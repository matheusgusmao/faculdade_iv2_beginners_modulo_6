function search_player() {
  document.querySelector('#section').innerHTML = ''
  const player_name = document.querySelector('#teamName').value;

  fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${player_name}`).then(res => res.json()).then(data => {
    console.log(data)

    for (i of data.player) {

      var logo = document.createElement('img')

      const date_player = {
        id: i.idPlayer,
        player_photo: i.strCutout,
        name: i.strPlayer,
        team: i.strTeam,
      }

      if (date_player.player_photo != null) {
        date_player.player_photo = i.strCutout
      } else {
        date_player.player_photo = 'images/imagem-padrao.jpg';
      };

      create_player(date_player)
    }
  })
}

function create_player(date_player) {
  const section = document.getElementById('section')

  section.innerHTML +=
    `
    <div id="players">
      <div id='${date_player.id}' onclick='player_info(this.id)'>
      <p id="teamID">${date_player.id}</p>
      <p>${date_player.name}</p>
      <p>${date_player.team}</p>
      <img src=${date_player.player_photo}>
      </div>
    </div>`
}


function player_info(id_player) {
  console.log(id_player)
  section.innerHTML = ''
  // const teamID = document.querySelector('#teamID').innerText;
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id_player}`).then(res => res.json()).then(data => {
    console.log(data.players[0])

    const date_especific_player = {
      name: data.players[0].strPlayer,
      player_face_photo: i.strThumb,

      galery_1: data.players[0].strThumb,
      galery_2: data.players[0].strCutout,
      galery_3: data.players[0].strRender,
      galery_4: data.players[0].strBanner,
      galery_5: data.players[0].strFanart1,
      galery_6: data.players[0].strFanart2,
      galery_7: data.players[0].strFanart3,
      galery_8: data.players[0].strFanart4,


      youtube: data.players[0].strYoutube,
      facebook: data.players[0].strFacebook,
      instagram: data.players[0].strInstagram,
      twitter: data.players[0].strTwitter,

      height: data.players[0].strHeight,
      weight: data.players[0].strWeight,
      position: data.players[0].strPosition,
      player_description: data.players[0].strDescriptionEN,
      birth_location: data.players[0].strBirthLocation,

      football_boots: data.players[0].strKit,


      // fazer iframe


      date_born: data.players[0].dateBorn,
      nationality: data.players[0].strNationality,
      team: data.players[0].strTeam


    }

    if (date_especific_player.player_face_photo != null) {
      date_especific_player.player_face_photo = data.players[0].strThumb
    } else {
      date_especific_player.player_face_photo = 'images/imagem-padrao.jpg';
    };



    // if (date_especific_player.galery_1 != null) {
    //   date_especific_player.galery_1 = data.players[0].strThumb
    // } else {
    //   date_especific_player.galery_1 = 'images/no-image.jpg';
    // };
    // if (date_especific_player.galery_2 != null) {
    //   date_especific_player.galery_2 = data.players[0].strCutout
    // } else {
    //   date_especific_player.galery_2 = 'images/no-image.jpg';
    // };
    // if (date_especific_player.galery_3 != null) {
    //   date_especific_player.galery_3 = data.players[0].strRender
    // } else {
    //   date_especific_player.galery_3 = 'images/no-image.jpg';
    // };
    // if (date_especific_player.galery_4 != null) {
    //   date_especific_player.galery_4 = data.players[0].strBanner
    // } else {
    //   date_especific_player.galery_4 = 'images/no-image.jpg';
    // };
    // if (date_especific_player.galery_5 != null) {
    //   date_especific_player.galery_5 = data.players[0].strFanart1
    // } else {
    //   date_especific_player.galery_5 = 'images/no-image.jpg';
    // };
    // if (date_especific_player.galery_6 != null) {
    //   date_especific_player.galery_6 = data.players[0].strFanart2
    // } else {
    //   date_especific_player.galery_6 = 'images/no-image.jpg';
    // };
    // if (date_especific_player.galery_7 != null) {
    //   date_especific_player.galery_7 = data.players[0].strFanart3
    // } else {
    //   date_especific_player.galery_7 = 'images/no-image.jpg';
    // };
    // if (date_especific_player.galery_8 != null) {
    //   date_especific_player.galery_8 = data.players[0].strFanart4
    // } else {
    //   date_especific_player.galery_8 = 'images/no-image.jpg';
    // };


    if (date_especific_player.football_boots != null || date_especific_player.football_boots != ""){
      date_especific_player.football_boots = "chuteiras"
    }
  //   <div class="column">
  //   <img class="demo cursor" src="${date_especific_player.galery_1}" style="width:100%" onclick="currentSlide(1)" alt="galery_1">
  // </div>
  // <div class="column">
  //   <img class="demo cursor" src="${date_especific_player.galery_2}" style="width:100%" onclick="currentSlide(2)" alt="galery_2">
  // </div>
  // <div class="column">
  //   <img class="demo cursor" src="${date_especific_player.galery_3}" style="width:100%" onclick="currentSlide(3)" alt="galery_3">
  // </div>
  // <div class="column">
  //   <img class="demo cursor" src="${date_especific_player.galery_4}" style="width:100%" onclick="currentSlide(4)" alt="galery_4">
  // </div>
  // <div class="column">
  //   <img class="demo cursor" src="${date_especific_player.galery_5}" style="width:100%" onclick="currentSlide(5)" alt="galery_5">
  // </div>
  // <div class="column">
  //   <img class="demo cursor" src="${date_especific_player.galery_6}" style="width:100%" onclick="currentSlide(6)" alt="galery_6">
  // </div>
  // <div class="column">
  //   <img class="demo cursor" src="${date_especific_player.galery_7}" style="width:100%" onclick="currentSlide(7)" alt="galery_7">
  // </div>
  // <div class="column">
  //   <img class="demo cursor" src="${date_especific_player.galery_8}" style="width:100%" onclick="currentSlide(8)" alt="galery_8">
  // </div>

    section.innerHTML =
      ` 
      <div id="especific_player">
        <img src=${date_especific_player.player_face_photo}>
        <p>Altura: ${date_especific_player.height}</p>
        <p>Peso: ${date_especific_player.weight}</p>
        <p>Posição em que joga: ${date_especific_player.position}</p>
        <p>Descrição do jogador: ${date_especific_player.player_description}</p>
        <p>Local de nascimento: ${date_especific_player.birth_location}</p>
        <p>Data de nascimento : ${date_especific_player.date_born}</p>
        <p>Nacionalidade : ${date_especific_player.nationality}</p>
        <p>Time de atuação atualmente: ${date_especific_player.team}</p>

        <h2 style="text-align:center">Slideshow Gallery</h2>

        <div class="row">
        </div>

        <div class="container">
          
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <a class="next" onclick="plusSlides(1)">❯</a>

          <div class="caption-container">
              <p id="caption"></p>
          </div>

        </div>

        <iframe style="height:500px;width:800px;"
            src="https://www.zoom.com.br/search?q=chuteira%20${date_especific_player.football_boots}" name="iframe_a"
            title="Iframe Example"></iframe>

        <div id="social">

        </div>

      </div>
    `

    // galeria
    container = document.querySelector('.container')
    row = document.querySelector('.row')
    console.log(row)

    if (date_especific_player.galery_1 != null) {
      container.innerHTML += `
      <div class="mySlides">
        <div class="numbertext">1 / 8</div>
        <img src="${date_especific_player.galery_1}" style="width:100%">
      </div>
      `
      row.innerHTML += `
      <div class="column">
        <img class="demo cursor" src="${date_especific_player.galery_1}" style="width:100%" onclick="currentSlide(1)" alt="galery_1">
      </div>
      `
    }

    if (date_especific_player.galery_2 != null) {
      container.innerHTML += `
      <div class="mySlides">
        <div class="numbertext">2 / 8</div>
        <img src="${date_especific_player.galery_2}" style="width:100%">
      </div>
      `
      row.innerHTML += `
      <div class="column">
        <img class="demo cursor" src="${date_especific_player.galery_2}" style="width:100%" onclick="currentSlide(2)" alt="galery_2">
      </div>
      `
    }

    if (date_especific_player.galery_3 != null) {
      container.innerHTML += `
      <div class="mySlides">
        <div class="numbertext">3 / 8</div>
        <img src="${date_especific_player.galery_3}" style="width:100%">
      </div>
      `
      row.innerHTML += `
      <div class="column">
        <img class="demo cursor" src="${date_especific_player.galery_3}" style="width:100%" onclick="currentSlide(3)" alt="galery_3">
      </div>
      `
    }

    if (date_especific_player.galery_4 != null) {
      container.innerHTML += `
      <div class="mySlides">
        <div class="numbertext">4 / 8</div>
        <img src="${date_especific_player.galery_4}" style="width:100%">
      </div>
      ` 
      row.innerHTML += `
      <div class="column">
        <img class="demo cursor" src="${date_especific_player.galery_4}" style="width:100%" onclick="currentSlide(4)" alt="galery_4">
      </div>
      `
    }

    if (date_especific_player.galery_5 != null) {
      container.innerHTML += `
      <div class="mySlides">
        <div class="numbertext">5 / 8</div>
        <img src="${date_especific_player.galery_5}" style="width:100%">
      </div>
      `
      row.innerHTML += `
      <div class="column">
        <img class="demo cursor" src="${date_especific_player.galery_5}" style="width:100%" onclick="currentSlide(5)" alt="galery_5">
      </div>
      `
    }

    if (date_especific_player.galery_6 != null) {
      container.innerHTML += `
      <div class="mySlides">
        <div class="numbertext">6 / 8</div>
        <img src="${date_especific_player.galery_6}" style="width:100%">
      </div>
      `
      row.innerHTML += `
      <div class="column">
        <img class="demo cursor" src="${date_especific_player.galery_6}" style="width:100%" onclick="currentSlide(6)" alt="galery_6">
      </div>
      `
    }

    if (date_especific_player.galery_7 != null) {
      container.innerHTML += `
      <div class="mySlides">
        <div class="numbertext">7 / 8</div>
        <img src="${date_especific_player.galery_7}" style="width:100%">
      </div>
      `
      row.innerHTML += `
      <div class="column">
        <img class="demo cursor" src="${date_especific_player.galery_7}" style="width:100%" onclick="currentSlide(7)" alt="galery_7">
      </div>
      `

    }

    if (date_especific_player.galery_8 != null) {
      container.innerHTML += `
      <div class="mySlides">
        <div class="numbertext">8 / 8</div>
        <img src="${date_especific_player.galery_8}" style="width:100%">
      </div>
      `
      row.innerHTML += `
      <div class="column">
        <img class="demo cursor" src="${date_especific_player.galery_8}" style="width:100%" onclick="currentSlide(8)" alt="galery_8">
      </div>
      `
    }



    // social
    base_social = document.getElementById('social')

    if (date_especific_player.youtube != '') {
      base_social.innerHTML += `
      <a href="https://${date_especific_player.youtube}" target="_blank"><img src="images/youtube.png"></a>
      `
    } else {
      base_social.innerHTML += ``
    }

    if (date_especific_player.facebook != null) {
      base_social.innerHTML += `
      <a href="https://${date_especific_player.facebook}" target="_blank"><img src="images/facebook.png"></a>
      `
    } else {
      base_social.innerHTML += ``
    }

    if (date_especific_player.instagram != null) {
      base_social.innerHTML += `
      <a href="https://${date_especific_player.instagram}" target="_blank"><img src="images/instagram.png"></a>
      `
    } else {
      base_social.innerHTML += ``
    }

    if (date_especific_player.twitter != null) {
      base_social.innerHTML += `
      <a href="https://${date_especific_player.twitter}" target="_blank"><img src="images/twitter.png"></a>
      `
    } else {
      base_social.innerHTML += ``
    }
    showSlides(1)

  })
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
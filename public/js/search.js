require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const showTeam = () => {
  document.getElementById('teamSearch').classList.toggle('show');
};

const showPosition = () => {
  document.getElementById('positionSearch').classList.toggle('show');
};

const showPlayers = () => {
  document.getElementById('playerSearch').classList.toggle('show');
};

const playerSearch = () => {
  let input, filter, ul, li, a, i;
  input = document.getElementById('player');
  filter = input.value.toUpperCase();
  div = document.getElementById('playerSearch');
  a = div.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
};

const positionSearch = () => {
  let input, filter, ul, li, a, i;
  input = document.getElementById('position');
  filter = input.value.toUpperCase();
  div = document.getElementById('positionSearch');
  a = div.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
};

const teamSearch = () => {
  let input, filter, ul, li, a, i;
  input = document.getElementById('team');
  filter = input.value.toUpperCase();
  div = document.getElementById('teamSearch');
  a = div.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
};

const searchPlayers = async () => {
  // const team = document.querySelector('#team').value;
  // const player = document.querySelector('#player').value;
  const position = document.querySelector('#position').value;

  // if (team !== '') {
  //   body.team = team;
  // }

  // if (player !== '') {
  //   body.player = player;
  // }

  // if (position !== '') {
  //   body.position = position;
  // }

  const response = await fetch(`/api/players`, {
    method: 'GET',
    body: JSON.stringify({ position }),
    headers: { 'Content-Type': 'application/json' }
  });

  return response;
};

const buildAccordion = (results) => {
  let playerAccordion = '';
  results.foreach((player) => {
    playerAccordion +=
      `<div class="shadow-md">` +
      `<div class="tab w-full overflow-hidden border-t">` +
      `<input class="absolute opacity-0 " id=${player.PlayerID} type="checkbox" name="tabs">` +
      `<label class="block p-1 leading-normal cursor-pointer" for=data.id>${player.firstName}} ${player.lastName}}</label>` +
      `<div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">` +
      `<div class="flex">` +
      `<div class="flex-1 w-64">` +
      `<img class="w-full" src="${player.PhotoUrl}">` +
      `</div>` +
      `<div class="flex-1 w-64">` +
      `<p class="p-1">MLB Team: ${player.Team}</p>` +
      `<p class="p-1">Position: ${player.Category} IF</p>` +
      `<p class="p-1">Position: ${player.Position}</p>` +
      `<p class="p-1">Bats: ${player.BatHand}</p>` +
      `<p class="p-1">Throws: ${player.ThrowHand}</p>` +
      `<p class="p-1">Height(in): ${player.Height}</p>` +
      `<p class="p-1">Weight(lb): ${player.Weight}</p>` +
      `<p class="p-1">From: ${player.BirthCity} ${player.BirthState} ${player.BirthCountry}</p>` +
      `</div>` +
      `</div>` +
      `</div>` +
      `</div>` +
      `</div>`;
  });
  document.getElementById('accordion').innerHTML += playerAccordion;
};

const getResults = () => {
  searchPlayers()
    .then((response) => {
      if (response.ok) {
        // eslint-disable-next-line promise/no-nesting
        response
          .json()
          .then((data) => {
            buildAccordion(data.results);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

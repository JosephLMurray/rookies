// require('dotenv').config();

// const secretKey = process.env.SECRET_KEY;

// const showTeam = () => {
//   document.getElementById('teamSearch').classList.toggle('show');
// };

const showPosition = () => {
  document.getElementById('positionSearch').classList.toggle('show');
};

// const showPlayers = () => {
//   document.getElementById('playerSearch').classList.toggle('show');
// };

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

const searchPlayers = () => {
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

  fetch(`/api/players/${position}`);

  return response;
};

const buildAccordion = (results) => {
  let playerAccordion = '';
  results.forEach((player) => {
    playerAccordion += `<div class='grid grid-cols-auto flex flex-wrap justify-center justify-around' style="padding: 1.25rem">
      <div class='pb-5 pt-5 w-64'>
          <div
            class='max-w-sm rounded overflow-hidden shadow-lg flip-card-front'
          >
            <img class='w-full W-64' src='${player.PhotoUrl}'/>
            <div class='px-6 py-4 flip-card-front'>
              <div class='font-bold text-xl mb-2'>${player.FirstName}
                ${player.LastName}</div>
              <p>MLB Teams: ${player.Team}</p>
              <p>Bats: ${player.BatHand} Throws: ${player.ThrowHand}</p>
              <p>Position: ${player.Position}</p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span
                class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
              >#remove</span>
            </div>
          </div>
      </div>
    </div>`;
    // `<div class="shadow-md">` +
    // `<div class="tab w-full overflow-hidden border-t">` +
    // `<input class="absolute opacity-0 " id=${player.PlayerID} type="checkbox" name="tabs">` +
    // `<label class="block p-1 leading-normal cursor-pointer" for=data.id>${player.FirstName} ${player.LastName}</label>` +
    // `<div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">` +
    // `<div class="flex">` +
    // `<div class="flex-1 w-64">` +
    // `<img class="w-full" src="${player.PhotoUrl}">` +
    // `</div>` +
    // `<div class="flex-1 w-64">` +
    // `<p class="p-1">MLB Team: ${player.Team}</p>` +
    // `<p class="p-1">Position: ${player.Category} IF</p>` +
    // `<p class="p-1">Position: ${player.Position}</p>` +
    // `<p class="p-1">Bats: ${player.BatHand}</p>` +
    // `<p class="p-1">Throws: ${player.ThrowHand}</p>` +
    // `<p class="p-1">Height(in): ${player.Height}</p>` +
    // `<p class="p-1">Weight(lb): ${player.Weight}</p>` +
    // `<p class="p-1">From: ${player.BirthCity} ${player.BirthState} ${player.BirthCountry}</p>` +
    // `</div>` +
    // `</div>` +
    // `</div>` +
    // `</div>` +
    // `</div>`;
  });
  //   playerAccordion += `<script>
  //     var myRadios = document.getElementsByName('tabs2');
  //     var setCheck;
  //     var x = 0;
  //     for (x = 0; x < myRadios.length; x++) {
  //         myRadios[x].onclick = function () {
  //             if (setCheck != this) {
  //                 setCheck = this;
  //             } else {
  //                 this.checked = false;
  //                 setCheck = null;
  //             }
  //         };
  //     }
  // </script>`;

  document.getElementById('accordion').innerHTML += playerAccordion;

  //   const css = `.tab-content {
  //             max-height: 0;
  //             -webkit-transition: max-height .35s;
  //             -o-transition: max-height .35s;
  //             transition: max-height .35s;
  //         }

  //           .tab input:checked~.tab-content {
  //             max-height: 100vh;
  //         }

  //         .tab input:checked+label {

  //             font-size: 1.25rem;

  //             padding: 1.25rem;

  //             border-left-width: 2px;

  //             border-color: #6574cd;

  //             background-color: #f8fafc;

  //             color: #6574cd;

  //         }

  //         .tab label::after {
  //             float: right;
  //             right: 0;
  //             top: 0;
  //             display: block;
  //             width: 1.5em;
  //             height: 1.5em;
  //             line-height: 1.5;
  //             font-size: 1.25rem;
  //             text-align: center;
  //             -webkit-transition: all .35s;
  //             -o-transition: all .35s;
  //             transition: all .35s;
  //         }

  //         .tab input[type=checkbox]+label::after {
  //             content: "+";
  //             font-weight: bold;

  //             border-width: 1px;

  //             border-radius: 9999px;

  //             border-color: #b8c2cc;

  //         }

  //         .tab input[type=radio]+label::after {
  //             content: "V";
  //             font-weight: bold;

  //             border-width: 1px;

  //             border-radius: 9999px;

  //             border-color: #b8c2cc;

  //         }

  //         .tab input[type=checkbox]:checked+label::after {
  //             transform: rotate(315deg);
  //             background-color: #6574cd;

  //             color: #f8fafc;

  //         }

  //         .tab input[type=radio]:checked+label::after {
  //             transform: rotateX(180deg);
  //             background-color: #6574cd;

  //             color: #f8fafc;

  //         }`;
  //     const head = document.head || document.getElementsByTagName('head')[0];
  //     const style = document.createElement('style');

  //   head.appendChild(style);

  //   style.type = 'text/css';
  //   if (style.styleSheet) {
  //     // This is required for IE8 and below.
  //     style.styleSheet.cssText = css;
  //   } else {
  //     style.appendChild(document.createTextNode(css));
  //   }
};

const getResults = () => {
  const position = document.querySelector('#position').value;

  fetch(`/api/players/${position}`)
    .then((response) => {
      if (response.ok) {
        // eslint-disable-next-line promise/no-nesting
        response
          .json()
          .then((data) => {
            buildAccordion(data);
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

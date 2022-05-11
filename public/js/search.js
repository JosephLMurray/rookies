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

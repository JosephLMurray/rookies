const router = require('express').Router();
const res = require('express/lib/response');

const withAuth = require('../utils/auth');
const { User, Roster, Player } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

// GET homepage
router.get('/', (req, res) => {
  try {
    res.render('homepage', { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => {
  try {
    res.render('homepage', { logged_out: req.session.logged_out });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, (req, res) => {
  try {
    res.render('dashboard', {
      // players: req.session.players
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try {
    if (req.session.loggedIn) {
      return;
    }
    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/roster/:id', withAuth, async (req, res) => {
  try {
    // const rosterData = await Roster.findByPk(req.params.id, {
    //   include: [{ model: Player }]
    // });
    // console.log(rosterData);
    const rosterData = [
      {
        PlayerID: 10000001,
        TeamID: 17,
        Team: 'DET',
        PositionCategory: 'P',
        Position: 'SP',
        FirstName: 'Chase',
        LastName: 'Anderson',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 73,
        Weight: 200,
        BirthCity: 'Wichita Falls',
        BirthState: 'TX',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000001.png'
      },
      {
        PlayerID: 10000005,
        TeamID: 17,
        Team: 'DET',
        PositionCategory: 'P',
        Position: 'RP',
        FirstName: 'Andrew',
        LastName: 'Chafin',
        BatHand: 'R',
        ThrowHand: 'L',
        Height: 74,
        Weight: 235,
        BirthCity: 'Kettering',
        BirthState: 'OH',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000005.png'
      },
      {
        PlayerID: 10000007,
        TeamID: 35,
        Team: 'WSH',
        PositionCategory: 'P',
        Position: 'SP',
        FirstName: 'Patrick',
        LastName: 'Corbin',
        BatHand: 'L',
        ThrowHand: 'L',
        Height: 76,
        Weight: 220,
        BirthCity: 'Clay',
        BirthState: 'NY',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000007.png'
      },
      {
        PlayerID: 10000014,
        TeamID: 1,
        Team: 'LAD',
        PositionCategory: 'P',
        Position: 'RP',
        FirstName: 'Daniel',
        LastName: 'Hudson',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 75,
        Weight: 215,
        BirthCity: 'Lynchburg',
        BirthState: 'VA',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000014.png'
      },
      {
        PlayerID: 10000020,
        TeamID: 13,
        Team: 'SEA',
        PositionCategory: 'P',
        Position: 'SP',
        FirstName: 'Robbie',
        LastName: 'Ray',
        BatHand: 'L',
        ThrowHand: 'L',
        Height: 74,
        Weight: 215,
        BirthCity: 'Brentwood',
        BirthState: 'TN',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000020.png'
      },
      {
        PlayerID: 10000029,
        TeamID: 14,
        Team: 'ARI',
        PositionCategory: 'IF',
        Position: 'SS',
        FirstName: 'Nick',
        LastName: 'Ahmed',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 74,
        Weight: 201,
        BirthCity: 'Springfield',
        BirthState: 'MA',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000029.png'
      },
      {
        PlayerID: 10000030,
        TeamID: 2,
        Team: 'CIN',
        PositionCategory: 'IF',
        Position: '3B',
        FirstName: 'Brandon',
        LastName: 'Drury',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 74,
        Weight: 215,
        BirthCity: 'Grants Pass',
        BirthState: 'OR',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000030.png'
      },
      {
        PlayerID: 10000031,
        TeamID: 31,
        Team: 'STL',
        PositionCategory: 'IF',
        Position: '1B',
        FirstName: 'Paul',
        LastName: 'Goldschmidt',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 75,
        Weight: 220,
        BirthCity: 'Wilmington',
        BirthState: 'DE',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000031.png'
      },
      {
        PlayerID: 10000033,
        TeamID: 1,
        Team: 'LAD',
        PositionCategory: 'IF',
        Position: '3B',
        FirstName: 'Jake',
        LastName: 'Lamb',
        BatHand: 'L',
        ThrowHand: 'R',
        Height: 75,
        Weight: 215,
        BirthCity: 'Seattle',
        BirthState: 'WA',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000033.png'
      },
      {
        PlayerID: 10000034,
        TeamID: 19,
        Team: 'BAL',
        PositionCategory: 'IF',
        Position: '2B',
        FirstName: 'Chris',
        LastName: 'Owings',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 70,
        Weight: 185,
        BirthCity: 'Charleston',
        BirthState: 'SC',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000034.png'
      },
      {
        PlayerID: 10000037,
        TeamID: 29,
        Team: 'NYY',
        PositionCategory: 'OF',
        Position: 'RF',
        FirstName: 'Socrates',
        LastName: 'Brito',
        BatHand: 'L',
        ThrowHand: 'L',
        Height: 74,
        Weight: 205,
        BirthCity: 'Azua Province',
        BirthState: null,
        BirthCountry: 'Dominican Republic',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000037.png'
      },
      {
        PlayerID: 10000038,
        TeamID: 29,
        Team: 'NYY',
        PositionCategory: 'OF',
        Position: 'CF',
        FirstName: 'Ender',
        LastName: 'Inciarte',
        BatHand: 'L',
        ThrowHand: 'L',
        Height: 71,
        Weight: 190,
        BirthCity: 'Maracaibo',
        BirthState: null,
        BirthCountry: 'Venezuela',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000038.png'
      },
      {
        PlayerID: 10000040,
        TeamID: 14,
        Team: 'ARI',
        PositionCategory: 'OF',
        Position: 'LF',
        FirstName: 'David',
        LastName: 'Peralta',
        BatHand: 'L',
        ThrowHand: 'L',
        Height: 73,
        Weight: 210,
        BirthCity: 'Valencia',
        BirthState: null,
        BirthCountry: 'Venezuela',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000040.png'
      },
      {
        PlayerID: 10000041,
        TeamID: 16,
        Team: 'CHW',
        PositionCategory: 'OF',
        Position: 'RF',
        FirstName: 'AJ',
        LastName: 'Pollock',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 73,
        Weight: 210,
        BirthCity: 'Hebron',
        BirthState: 'CT',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000041.png'
      },
      {
        PlayerID: 10000046,
        TeamID: 35,
        Team: 'WSH',
        PositionCategory: 'P',
        Position: 'RP',
        FirstName: 'Luis',
        LastName: 'Avilán',
        BatHand: 'L',
        ThrowHand: 'L',
        Height: 74,
        Weight: 220,
        BirthCity: 'Caracas',
        BirthState: null,
        BirthCountry: 'Venezuela',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000046.png'
      },
      {
        PlayerID: 10000047,
        TeamID: 29,
        Team: 'NYY',
        PositionCategory: 'P',
        Position: 'RP',
        FirstName: 'Manny',
        LastName: 'Bañuelos',
        BatHand: 'R',
        ThrowHand: 'L',
        Height: 70,
        Weight: 215,
        BirthCity: 'Gomez Palacio',
        BirthState: 'Durango',
        BirthCountry: 'Mexico',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000047.png'
      },
      {
        PlayerID: 10000058,
        TeamID: 1,
        Team: 'LAD',
        PositionCategory: 'P',
        Position: 'RP',
        FirstName: 'Craig',
        LastName: 'Kimbrel',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 72,
        Weight: 215,
        BirthCity: 'Huntsville',
        BirthState: 'AL',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000058.png'
      },
      {
        PlayerID: 10000059,
        TeamID: 29,
        Team: 'NYY',
        PositionCategory: 'P',
        Position: 'SP',
        FirstName: 'Shelby',
        LastName: 'Miller',
        BatHand: 'R',
        ThrowHand: 'R',
        Height: 75,
        Weight: 225,
        BirthCity: 'Houston',
        BirthState: 'TX',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000059.png'
      },
      {
        PlayerID: 10000060,
        TeamID: 2,
        Team: 'CIN',
        PositionCategory: 'P',
        Position: 'SP',
        FirstName: 'Mike',
        LastName: 'Minor',
        BatHand: 'R',
        ThrowHand: 'L',
        Height: 76,
        Weight: 210,
        BirthCity: 'Chapel Hill',
        BirthState: 'TN',
        BirthCountry: 'USA',
        PhotoUrl:
          'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000060.png'
      }
    ];
    res.render('roster', {
      rosterData,
      layout: 'dashboard',
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

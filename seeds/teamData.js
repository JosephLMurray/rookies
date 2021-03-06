const { Team } = require('../models');

const teamData = [
  {
    TeamID: 1,
    Key: 'LAD',
    City: 'Los Angeles',
    Name: 'Dodgers',
    League: 'NL',
    Division: 'West',
    PrimaryColor: '005A9C',
    SecondaryColor: 'FFFFFF',
    TertiaryColor: 'EF3E42',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Los_Angeles_Dodgers_Logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/f/f6/LA_Dodgers.svg'
  },
  {
    TeamID: 2,
    Key: 'CIN',
    City: 'Cincinnati',
    Name: 'Reds',
    League: 'NL',
    Division: 'Central',
    PrimaryColor: 'C6011F',
    SecondaryColor: '000000',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/01/Cincinnati_Reds_Logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/71/Cincinnati_Reds_Cap_Insignia.svg'
  },
  {
    TeamID: 3,
    Key: 'TOR',
    City: 'Toronto',
    Name: 'Blue Jays',
    League: 'AL',
    Division: 'East',
    PrimaryColor: '134A8E',
    SecondaryColor: '1D2D5C',
    TertiaryColor: 'E8291C',
    QuaternaryColor: 'FFFFFF',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/ba/Toronto_Blue_Jays_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Toronto_Blue_Jays_cap.svg/119px-Toronto_Blue_Jays_cap.svg.png'
  },
  {
    TeamID: 4,
    Key: 'PIT',
    City: 'Pittsburgh',
    Name: 'Pirates',
    League: 'NL',
    Division: 'Central',
    PrimaryColor: '000000',
    SecondaryColor: 'FDB827',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/81/Pittsburgh_Pirates_logo_2014.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Pittsburgh_Pirates_Cap_Insignia.svg'
  },
  {
    TeamID: 5,
    Key: 'KC',
    City: 'Kansas City',
    Name: 'Royals',
    League: 'AL',
    Division: 'Central',
    PrimaryColor: '004687',
    SecondaryColor: 'C09A5B',
    TertiaryColor: '7AB2DD',
    QuaternaryColor: 'FFFFFF',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Kansas_City_Royals.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Kansas_City_Royals_Insignia.svg',
    GlobalTeamID: 10000005
  },
  {
    TeamID: 9,
    Key: 'CHC',
    City: 'Chicago',
    Name: 'Cubs',
    League: 'NL',
    Division: 'Central',
    PrimaryColor: '0E3386',
    SecondaryColor: 'CC3433',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/80/Chicago_Cubs_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Chicago_Cubs_Cap_Insignia.svg',
    GlobalTeamID: 10000009
  },
  {
    TeamID: 10,
    Key: 'CLE',
    City: 'Cleveland',
    Name: 'Guardians',
    League: 'AL',
    Division: 'Central',
    PrimaryColor: '002B5C',
    SecondaryColor: 'E31937',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/a9/Guardians_winged_%22G%22.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Cleveland_Guardians_cap_logo.svg',
    GlobalTeamID: 10000010
  },
  {
    TeamID: 11,
    Key: 'TB',
    City: 'Tampa Bay',
    Name: 'Rays',
    League: 'AL',
    Division: 'East',
    PrimaryColor: '092C5C',
    SecondaryColor: '8FBCE6',
    TertiaryColor: 'F5D130',
    QuaternaryColor: 'FFFFFF',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c6/Tampa_Bay_Rays.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e2/ALE-TB-Insignia.png',
    GlobalTeamID: 10000011
  },
  {
    TeamID: 12,
    Key: 'PHI',
    City: 'Philadelphia',
    Name: 'Phillies',
    League: 'NL',
    Division: 'East',
    PrimaryColor: 'E81828',
    SecondaryColor: '003278',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f0/Philadelphia_Phillies_%282019%29_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Philadelphia_Phillies_Insignia.svg',
    GlobalTeamID: 10000012
  },
  {
    TeamID: 13,
    Key: 'SEA',
    City: 'Seattle',
    Name: 'Mariners',
    League: 'AL',
    Division: 'West',
    PrimaryColor: '0C2C56',
    SecondaryColor: 'C4CED4',
    TertiaryColor: '005C5C',
    QuaternaryColor: '004B8D',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/6d/Seattle_Mariners_logo_%28low_res%29.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/8a/Seattle_Mariners_Insignia.svg',
    GlobalTeamID: 10000013
  },
  {
    TeamID: 14,
    Key: 'ARI',
    City: 'Arizona',
    Name: 'Diamondbacks',
    League: 'NL',
    Division: 'West',
    PrimaryColor: 'A71930',
    SecondaryColor: 'E3D4AD',
    TertiaryColor: '000000',
    QuaternaryColor: '3EC1CC',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/54/Arizona_Diamondbacks_logo_%28low_res%29.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Arizona_Diamondbacks_cap_logo.svg/114px-Arizona_Diamondbacks_cap_logo.svg.png',
    GlobalTeamID: 10000014
  },
  {
    TeamID: 15,
    Key: 'SF',
    City: 'San Francisco',
    Name: 'Giants',
    League: 'NL',
    Division: 'West',
    PrimaryColor: '000000',
    SecondaryColor: 'FD5A1E',
    TertiaryColor: '8B6F4E',
    QuaternaryColor: 'E6D8AF',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/58/San_Francisco_Giants_Logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/San_Francisco_Giants_Cap_Insignia.svg/97px-San_Francisco_Giants_Cap_Insignia.svg.png',
    GlobalTeamID: 10000015
  },
  {
    TeamID: 16,
    Key: 'CHW',
    City: 'Chicago',
    Name: 'White Sox',
    League: 'AL',
    Division: 'Central',
    PrimaryColor: '000000',
    SecondaryColor: 'C4CED4',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chicago_White_Sox.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/d6/Chicago_White_Sox_Insignia.svg',
    GlobalTeamID: 10000016
  },
  {
    TeamID: 17,
    Key: 'DET',
    City: 'Detroit',
    Name: 'Tigers',
    League: 'AL',
    Division: 'Central',
    PrimaryColor: '0C2C56',
    SecondaryColor: 'FF6600',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e3/Detroit_Tigers_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Detroit_Tigers_Insignia.svg',
    GlobalTeamID: 10000017
  },
  {
    TeamID: 18,
    Key: 'NYM',
    City: 'New York',
    Name: 'Mets',
    League: 'NL',
    Division: 'East',
    PrimaryColor: '002D72',
    SecondaryColor: 'FF5910',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7b/New_York_Mets.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7b/New_York_Mets.svg',
    GlobalTeamID: 10000018
  },
  {
    TeamID: 19,
    Key: 'BAL',
    City: 'Baltimore',
    Name: 'Orioles',
    League: 'AL',
    Division: 'East',
    PrimaryColor: '000000',
    SecondaryColor: 'DF4601',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: 'A2AAAD',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/75/Baltimore_Orioles_cap.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Baltimore_Orioles_cap.svg/105px-Baltimore_Orioles_cap.svg.png',
    GlobalTeamID: 10000019
  },
  {
    TeamID: 20,
    Key: 'MIN',
    City: 'Minnesota',
    Name: 'Twins',
    League: 'AL',
    Division: 'Central',
    PrimaryColor: '002B5C',
    SecondaryColor: 'D31145',
    TertiaryColor: 'CFAB7A',
    QuaternaryColor: 'FFFFFF',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b4/Minnesota_Twins_logo_%28low_res%29.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Minnesota_Twins_Insignia.svg',
    GlobalTeamID: 10000020
  },
  {
    TeamID: 21,
    Key: 'LAA',
    City: 'Los Angeles',
    Name: 'Angels',
    League: 'AL',
    Division: 'West',
    PrimaryColor: 'BA0021',
    SecondaryColor: '003263',
    TertiaryColor: 'C4CED4',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/8b/Los_Angeles_Angels_of_Anaheim.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/79/Los_Angeles_Angels_of_Anaheim_Insignia.svg',
    GlobalTeamID: 10000021
  },
  {
    TeamID: 22,
    Key: 'MIA',
    City: 'Miami',
    Name: 'Marlins',
    League: 'NL',
    Division: 'East',
    PrimaryColor: '000000',
    SecondaryColor: '00A3E0',
    TertiaryColor: 'EF3340',
    QuaternaryColor: '41748D',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Marlins_team_logo.svg/800px-Marlins_team_logo.svg.png',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c3/Miami_Marlins_cap_insignia.svg',
    GlobalTeamID: 10000022
  },
  {
    TeamID: 23,
    Key: 'COL',
    City: 'Colorado',
    Name: 'Rockies',
    League: 'NL',
    Division: 'West',
    PrimaryColor: '33006F',
    SecondaryColor: '000000',
    TertiaryColor: 'C4CED4',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/31/Colorado_Rockies_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Colorado_Rockies_Cap_Insignia.svg/97px-Colorado_Rockies_Cap_Insignia.svg.png',
    GlobalTeamID: 10000023
  },
  {
    TeamID: 24,
    Key: 'OAK',
    City: 'Oakland',
    Name: 'Athletics',
    League: 'AL',
    Division: 'West',
    PrimaryColor: '003831',
    SecondaryColor: 'EFB21E',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a4/Oakland_A%27s_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/3a/Oakland_Athletics_cap_logo.png',
    GlobalTeamID: 10000024
  },
  {
    TeamID: 25,
    Key: 'BOS',
    City: 'Boston',
    Name: 'Red Sox',
    League: 'AL',
    Division: 'East',
    PrimaryColor: 'BD3039',
    SecondaryColor: '0D2B56',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/6d/RedSoxPrimary_HangingSocks.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Bosb.png',
    GlobalTeamID: 10000025
  },
  {
    TeamID: 26,
    Key: 'ATL',
    City: 'Atlanta',
    Name: 'Braves',
    League: 'NL',
    Division: 'East',
    PrimaryColor: '0C2340',
    SecondaryColor: 'BA0C2F',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f2/Atlanta_Braves.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/7a/Atlanta_Braves_Insignia.svg',
    GlobalTeamID: 10000026
  },
  {
    TeamID: 28,
    Key: 'TEX',
    City: 'Texas',
    Name: 'Rangers',
    League: 'AL',
    Division: 'West',
    PrimaryColor: '003278',
    SecondaryColor: 'C0111F',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/41/Texas_Rangers.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e2/Texas_Rangers_Insignia.svg',
    GlobalTeamID: 10000028
  },
  {
    TeamID: 29,
    Key: 'NYY',
    City: 'New York',
    Name: 'Yankees',
    League: 'AL',
    Division: 'East',
    PrimaryColor: '132448',
    SecondaryColor: 'C4CED4',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/25/NewYorkYankees_PrimaryLogo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/NewYorkYankees_caplogo.svg',
    GlobalTeamID: 10000029
  },
  {
    TeamID: 30,
    Key: 'HOU',
    City: 'Houston',
    Name: 'Astros',
    League: 'AL',
    Division: 'West',
    PrimaryColor: '002D62',
    SecondaryColor: 'EB6E1F',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: '',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Houston-Astros-Logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/f/f6/Houston_Astros_cap_logo.svg',
    GlobalTeamID: 10000030
  },
  {
    TeamID: 31,
    Key: 'STL',
    City: 'St. Louis',
    Name: 'Cardinals',
    League: 'NL',
    Division: 'Central',
    PrimaryColor: 'C41E3A',
    SecondaryColor: '000066',
    TertiaryColor: 'FEDB00',
    QuaternaryColor: 'FFFFFF',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/9d/St._Louis_Cardinals_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/ee/St_Louis_Cardinals_Cap_Insignia.svg',
    GlobalTeamID: 10000031
  },
  {
    TeamID: 32,
    Key: 'MIL',
    City: 'Milwaukee',
    Name: 'Brewers',
    League: 'NL',
    Division: 'Central',
    PrimaryColor: '12284B',
    SecondaryColor: 'FFC52F',
    TertiaryColor: '003DA5',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b8/Milwaukee_Brewers_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b8/Milwaukee_Brewers_logo.svg',
    GlobalTeamID: 10000032
  },
  {
    TeamID: 33,
    Key: 'SD',
    City: 'San Diego',
    Name: 'Padres',
    League: 'NL',
    Division: 'West',
    PrimaryColor: '2F241D',
    SecondaryColor: 'FFC245',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e2/SD_Logo_Brown.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/San_Diego_Padres_logotype.svg/100px-San_Diego_Padres_logotype.svg.png',
    GlobalTeamID: 10000033
  },
  {
    TeamID: 35,
    Key: 'WSH',
    City: 'Washington',
    Name: 'Nationals',
    League: 'NL',
    Division: 'East',
    PrimaryColor: 'AB0003',
    SecondaryColor: '11225B',
    TertiaryColor: 'FFFFFF',
    QuaternaryColor: null,
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Washington_Nationals_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e5/Washington_Nationals_Cap_Insig.svg',
    GlobalTeamID: 10000035
  }
];

const seedTeams = () => Team.bulkCreate(teamData);

module.exports = seedTeams;

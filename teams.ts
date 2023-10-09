export class Team{
  location: string;
  cupWins: number;
  goalieGoals: number;
  mainColors: []; //at most 4
  hallOfFamers: number;
  goals: number;
  logoType: string; //Letter, Animal, Other
  points: number; //22-23 season
  constructor(loc:string,con,div,cup:number,gg:number,  
    mc,hof:number,g:number,logo:string,p:number){
      this.location=loc;
      this.cupWins=cup;
      this.goalieGoals=gg;
      this.mainColors=mc;
      this.hallOfFamers=hof;
      this.goals=g;
      this.logoType=logo;
      this.points=p;
      con.push(this)
      div.push(this)
     
     
   }
  
}

export let eastTeams = []
export let westTeams = []
export let atlTeams = []
export let pacTeams = []
export let cenTeams = []
export let metTeams = []

let Ducks = new Team('Anaheim',westTeams,pacTeams,1,0,['black','gold','orange','silver'],7,6056,'letter',58)

let Coyotes = new Team('Arizona',westTeams,cenTeams,0,1,['black','red','green','cream','orange','purple'],7,10092,'animal',70)

let Blackhawks = new Team('Chicago',westTeams,cenTeams,6,0,['red','black','white'],41,19877,'other',59)

let Avalanche = new Team('Colorado',westTeams,cenTeams,3,0,['red','blue','silver', 'black'],11,10987,'letter',109)

let Stars = new Team('Dallas',westTeams,cenTeams,6,0,['green','black','white','silver'],7,13153,'other',108)

let Wild = new Team('Minnesota',westTeams,cenTeams,0,0,['green','red','gold','cream'],0,4639,'animal',103)

let Jets = new Team('Winnipeg',westTeams,cenTeams,0,0,['blue','red','silver','white'],3,5097,'other',95)

let Predators = new Team('Nashville',westTeams,cenTeams,0,1,['gold','blue','silver'],2,5138,'animal',92)

let Blues = new Team('St Louis',westTeams,cenTeams,1,0,['blue','gold','white'],24,13322,'other',81)

let GoldenKnights = new Team('Vegas',westTeams,pacTeams,1,0,['gray','gold','orange','silver'],7,1457,'other',111)

let Bruins = new Team('Boston',eastTeams,atlTeams,6,1,['black','gold'],51,21598,'letter',135)

let Sabers = new Team('Buffalo',eastTeams,atlTeams,0,1,['white','blue','gold'],9,12907,'animal',91)

let Oilers = new Team('Edmonton',westTeams,pacTeams,5,0,['blue','white','orange'],11,11311,'other',109)

let Kings = new Team('Los Angeles',westTeams,pacTeams,2,0,['black','silver','white'],18,13493,'other',104)

let Kraken = new Team('Seattle',westTeams,pacTeams,0,0,['black','turquoise','blue','red'],0,502,'letter',100)

let Flames = new Team('Calgary',westTeams,pacTeams,1,0,['red','yellow','white'],11,12811,'letter',93)

let Canucks = new Team('Vancouver',westTeams,pacTeams,0,0,['blue','green','white'],8,12582,'animal',83)

let Sharks = new Team('San Jose',westTeams,pacTeams,0,1,['blue','black','orange'],6,6858,'animal',60)

let Penguins = new Team('Pittsburgh',eastTeams,metTeams,5,0,['black','gold','white'],14,14321,'animal',91)

let Capitals = new Team('Washington',eastTeams,metTeams,1,0,['red','blue','white'],8,11971,'other',80)

let Flyers = new Team('Philadelphia',eastTeams,metTeams,2,2,['black','orange','white'],13,14067,'other',75)

let BlueJackets = new Team('Columbus',eastTeams,metTeams,0,0,['blue','red','white','silver'],1,4490,'other',59)

let Islanders = new Team('New York',eastTeams,metTeams,4,0,['blue','orange','white'],8,12430,'other',93)

let RedWings = new Team('Detroit',eastTeams,atlTeams,11,1,['red','white'],58,20493,'other',80)

let Panthers = new Team('Florida',eastTeams,atlTeams,0,0,['red','blue','gold','white'],3,6219,'animal',92)

let Canadiens = new Team('Montreal',eastTeams,atlTeams,24,1,['red','white','blue'],50,22166,'letter',68)

let Senators = new Team('Ottawa',eastTeams,atlTeams,0,0,['red','white','black','gold'],4,6675,'other',86)

let Lightning = new Team('Tampa Bay',eastTeams,atlTeams,3,0,['blue','white','black'],5,6713,'other',98)

let MapleLeafs = new Team('Toronto',eastTeams,atlTeams,13,0,['blue','white'],60,21407,'other',111)

let Hurricanes = new Team('Carolina',eastTeams,metTeams,1,0,['red','white','black','silver'],3,10107,'other',113)

let Devils = new Team('New Jersey',eastTeams,metTeams,3,1,['red','white','black'],11,11048,'letter',112)

let Rangers = new Team('New York',eastTeams,metTeams,4,0,['red','white','blue'],53,20485,'other',107)
console.log(atlTeams)
console.log(metTeams)
console.log(pacTeams)
console.log(cenTeams)
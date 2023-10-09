import './style.css'
import './teams.ts'
import { TextInterface } from './textInterface';
import { atlTeams } from './teams';
import { metTeams } from './teams';
import { cenTeams } from './teams';
import { pacTeams } from './teams';

const ti = new TextInterface();

async function startGame() {
  ti.clear()
  let teams = []
  ti.setTitle('Hockey Team Guesser');
  ti.output("I'll guess your hockey team!")
  ti.output('Type anything to begin');
  await ti.readText();
  //Introductory messages, waits for you to type anything, then continues the code when you press enter
  ti.clear();
  ti.output('Is your team part of the East region?');
  if (await ti.readYesOrNo()) {
    ti.clear();
    ti.output('Is it Atlantic Division?')
    if (await ti.readYesOrNo()) {
      teams = atlTeams
      ti.clear();
      ti.output('Does your team have red as a team color?')
      if (await ti.readYesOrNo()) {
        teams = teams.filter(
          function(team) {
            return team.mainColors.includes('red')
            //checks each team in the list and looks for red, if it has red it stays
          }
        );
        ti.clear()
        ti.output('Has your team won the Stanley Cup at all?')
        if (await ti.readYesOrNo()) {
          teams = teams.filter(
            function(team) {
              return team.cupWins > 0
            }
          )
          ti.clear()
          ti.output('Does your team have a letter as a logo?')
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Montreal Canadiens!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Detroit Red Wings!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()}
        }}
        else {
          teams = teams.filter(
            function(team) {
              return team.cupWins == 0
            }
          )
          ti.clear()
          ti.ouput('Is your team based in the United States?')
          if(await ti.readyYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Florida Panthers!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) {startGame()}
          }else{
              ti.clear();
            ti.output('Your team must be the Ottawa Senators!')
            ti.output('Want to play again?')
            if(await ti.readYesOrNo()) {startGame()}
          }}
      } else {
        teams = teams.filter(
          function(team) {
            return !team.mainColors.includes('red') //the ! means "not true"
            //checks each team in the list and looks for red, if it has red it is removed
          });
        console.log(teams)
        ti.clear()
        ti.output('Does your team have more than 50 players in the NHL Hall of Fame')
        if (await ti.readYesOrNo()) {
          teams = teams.filter(
            function(team) {
              return team.hallOfFamers > 50
            }
          )
          console.log(teams)
          ti.clear()
          ti.output('Does your team have any goalie goals (Not including                        own goals)')
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Boston Bruins!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Toronto Maple Leafs!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
        } else {
          teams = teams.filter(
            function(team) {
              return team.hallOfFamers < 50
              
            }
          )
          console.log(teams)
          ti.clear()
          ti.output("Does your team have an animal logo?")
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Buffalo Sabres!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Tampa Bay Lightning!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
        }
      }
    }}
   else {
    teams = metTeams
    ti.clear()
    ti.output('Does your team have black as a team color?')
    if (await ti.readYesOrNo()) {
      teams = teams.filter(
        function(team) {
          return team.mainColors.includes('black')
        }
      )
      ti.clear()
      ti.output('Does your team have any goalie goals (Not including own goals)?')
      console.log(teams)
      if (await ti.readYesOrNo()) {
        teams = teams.filter(
          function(team) {
            return team.goalieGoals > 0
          }
        )
        console.log(teams)
        ti.clear()
        ti.output("Did your team make the 2023 Stanley Cup Playoffs?")
         if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('New Jersey Devils!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Philidelphia Flyers!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
      } else {
        teams = teams.filter(
          function(team) {
            return team.goalieGoals == 0
          }
        )
        console.log(teams)
        ti.clear()
        ti.output("Does your team have an animal as its logo?")
         if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Pitsburgh Penguins!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Carolina Hurricanes')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
      }

    } else {
      teams = teams.filter(
        function(team) {
          return !team.mainColors.includes('black')
        }
      )
      ti.clear();
      ti.output('Is your team based in New York?')
      if (await ti.readYesOrNo()) {
        teams = teams.filter(
          function(team) {
            return team.location == 'New York'
          }
        )
        console.log(teams)
        ti.clear();
        ti.output("Does your team have more than 10 players in the NHL hall of fame?")
         if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the New York Rangers!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the New York Islanders!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
      } else {
        teams = teams.filter(
          function(team) {
            return team.location != 'New York'
          }
        )
      console.log(teams)
      ti.clear();
      ti.output('Does your team have more than 10,000 total goals?')
      if(await ti.readYesOrNo()){
        ti.clear();
        ti.output('Your team must be the Washington Capitals!')
        ti.output('Want to play again?')
        if(await readYesOrNo()){startGame()}
      }else{
        ti.clear();
        ti.output('Your team must be the Columbus Blue Jackets!')
        ti.output('Want to play again?')
        if(await readYesOrNo()) {startGame()}}}
    }
  }
  } else {
  ti.clear();
  ti.output('Is it Pacific Division?')
  if (await ti.readYesOrNo()) {
    teams = pacTeams
    ti.clear();
    ti.output('Does your team have orange as a team color?')
    if (await ti.readYesOrNo()) {
      teams = teams.filter(
        function(team) {
          return team.mainColors.includes('orange')
        }
      )
      console.log(teams)
      ti.clear();
      ti.output('Does your team have blue as a team color?')
      if (await ti.readYesOrNo()) {
        teams = teams.filter(
          function(team) {
            return team.mainColors.includes('blue')
          }
        )
        console.log(teams)
        ti.clear();
        ti.output("Is your team's logo an animal?")
        if (await ti.readYesOrNo()) {
          ti.clear();
          ti.output('Your team must be the San Jose Sharks!')
          ti.output('Want to play again?')
          if (await ti.readYesOrNo()) { startGame() }
        } else {
          ti.clear();
          ti.output('Your team must be the Edmonton Oilers!!')
          ti.output('Want to play again?')
          if (await ti.readYesOrNo()) { startGame() }
        }
      }else{
        teams = teams.filter(function(team){
          return !team.mainColors.includes('blue')
        })
        console.log(teams)
        ti.clear()
        ti.output('Did your team make the 2023 Stanley Cup playoffs?')
         if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Vegas Golden Kights')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Anaheim Ducks')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
      }} else {
        teams = teams.filter(
          function(team) {
            return !team.mainColors.includes('orange')
          }
        )
        console.log(teams)
        ti.clear()
        ti.output("Does your team have any Stanley Cup wins?")
        if(await ti.readYesOrNo()){
          teams = teams.filter(function(team){
            return team.cupWins > 0
          })
          console.log(teams)
          ti.clear()
          ti.output("Does your team have silver as a main color?")
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Los Angeles Kings!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Calgary Flames!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
        }else{
          teams = teams.filter(function(team){
            return team.cupWins == 0
          })
          console.log(teams)
          ti.clear()
          ti.output("Does your team have a letter logo?")
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Seattle Kraken!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Vancouver Canucks!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
        }
      }
    }
    else {
      teams = cenTeams
      ti.clear()
      ti.output('Does your team have blue as a team color?')
      if (await ti.readYesOrNo()) {
        teams = teams.filter(
          function(team) {
            return team.mainColors.includes('blue')
          }
        )
        console.log(teams)
        ti.clear()
        ti.output("Does your team have any Stanley Cup Wins?")
        if(await ti.readYesOrNo()){
          teams = teams.filter(
            function(team){
              return team.cupWins > 0
            }
          )
          console.log(teams)
          ti.clear()
          ti.output("Does your team have a letter based logo?")
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Colorado Avalanche!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the St. Louis Blues!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
        } else{
          teams = teams.filter(function(team){
            return team.cupWins == 0
          })
          ti.clear()
          ti.output("Does your team have an animal logo?")
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Nashville Predators!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Winnipeg Jets!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
        }
      } else {
        teams = teams.filter(
          function(team) {
            return !team.mainColors.includes('blue')
          }
        )
        console.log(teams)
        ti.clear()
        ti.output("Does your team have an animal logo?")
        if(await ti.readYesOrNo()){
          teams = teams.filter(function(team){
            return team.logoType == "animal"
          })
          ti.clear()
          ti.output("Does your team have any goalie goals (not including own goals)")
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Arizona Coyotes!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Minnesota Wild!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
        }else{
          teams = teams.filter(function(team){
            return !team.logoType == "animal"
          })
          ti.clear()
          ti.output('Does your team have red as a main color?')
          if (await ti.readYesOrNo()) {
            ti.clear();
            ti.output('Your team must be the Chicago Blackhawks!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame() }
          }else{
              ti.clear();
            ti.output('Your team must be the Dallas Stars!')
            ti.output('Want to play again?')
            if (await ti.readYesOrNo()) { startGame()
          }
          }
        }
      }
    }
  }}

startGame();

import React, {Component} from 'react';
import './App.css';
import {Doughnut} from 'react-chartjs';
import Chance from 'chance';

const chance = new Chance();

const teams = Array
  .from(Array(chance.integer({min: 3, max: 8})).keys())
  .map((team, index) => 
  ({
    name: `Team${index + 1}`,
    data: [
      {
        value: chance.integer({min: 1, max: 20}),
        color:'#ffa16b',
        label: 'Costi'
      },
      {
        value: chance.integer({min: 1, max: 5}),
        color: '#6bbcff',
        label: 'Ricavi'
      }
    ],
    members: Array.from(Array(chance.integer({min: 1, max: 8})))
      .map(() => chance.name())
  }));
console.log(teams.map(team => team.members));
class App extends Component {
  render() {
    return (
      <div className='container'>
        {teams.map(team => (
          <div>
            <div className='team-name'>
              {team.name}
            </div>
            <div className='team-info'>
              <div className='team-members'>
                {team.members.map(member => <p>{member}</p>)}
              </div>
              <Doughnut className='team-chart' data={team.data} width='300' height='300'/>
            </div>
          </div>          
        ))}
      </div>
    );
  }
}

export default App;

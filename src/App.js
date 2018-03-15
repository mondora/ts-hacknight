import React, {Component} from 'react';
import './App.css';
import {Doughnut} from 'react-chartjs';

const teams = Array
  .from(Array(Math.floor(Math.random() * 10) + 1)
  .keys()).map((team, index) => 
  ({
    name: `Team${index + 1}`,
    data: [
      {
        value: Math.random() * 10,
        color:'#ffa16b',
        label: 'Costi'
      },
      {
        value: Math.random() * 5,
        color: '#6bbcff',
        label: 'Ricavi'
      }
    ]
  }));

class App extends Component {
  render() {
    return (
      <div className='container'>
        {teams.map(team => (
          <div>
            <div className='team-name'>
              {team.name}
            </div>
            <Doughnut className='team-chart' data={team.data} width='300' height='300'/>
          </div>          
        ))}
      </div>
    );
  }
}

export default App;

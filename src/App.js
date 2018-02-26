import './App.css'

import React, { Component } from 'react'

import ItemGenerator from './helpers/ItemGenerator'
import ListView from './components/ListView'

const items = ItemGenerator.generateItems(200)

const ListItemView = ({ avatar, href, key, label  }) =>
<div key={key}>
  <img src={avatar} alt={label} />
  <a href={href}>{label}</a>
</div>

class App extends Component {

  render() {
    return (
      <div className="App">
        <ListView items={items} itemView={ListItemView} />
      </div>
    );
  }
}

export default App;

import React, { useState } from 'react';
import Data from './data';
import List from './List';

const App = () => {
  const [people, setpeople] = useState(Data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List peoples={people} />
        <button onClick={() => setpeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default App;

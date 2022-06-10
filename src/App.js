import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
//import Button from './Button'

const App = () => {
  return (
    <div className="App">
      <Header title='SPA project' />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

//todo
//footeriin button click juttua
//napeista vaihtuu kuva jotenkin
//joku liukuva kuva juttu
// <Button id="heart" onClick={ () => handleClick()} icon={'heart}/>
// <Button id="heartbroken" onClick={ () => handleClick()} icon={'heart-broken}/>

//return <p onClick={() => asetaMaara(maara + 1)}>{ maara }</p>
// const increment = () => asetaMaara(maara + 1);

// return <p onClick={increment}>{ maara }</p>;

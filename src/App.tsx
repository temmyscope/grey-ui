import React from 'react';
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Base } from './components/layouts/Base';
import CharacterRoute from './routes/Character';
import FavoriteRoute from './routes/Favorites';
import HomeRoute from './routes/Home';
// import Mobilenav from './components/mobilenav';

function App() {
  // const [nav, setNav] = useState<boolean>(false)
  return (
    <>
      <Routes>
        <Route path='/' element={<Base />}>
          <Route path='/' element={<HomeRoute />} />
          <Route path='/character/:id' element={<CharacterRoute />} />
          <Route path='/user-favorites' element={<FavoriteRoute />} />
          <Route
            path="*" element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
        {/* { nav && <Mobilenav handleClose={()=> setNav(false)} nav={nav} />} */}
    </>
  );
}

export default App;

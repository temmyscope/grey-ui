import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Base } from './components/layouts/Base';
import CharacterRoute from './routes/Character';
import FavoriteRoute from './routes/Favorites';
import HomeRoute from './routes/Home';

function App() {
  return (
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
  );
}

export default App;

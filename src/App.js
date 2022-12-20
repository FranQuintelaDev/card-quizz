import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import './custom.css';
import FootballPlayers from './pages/UsersList';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route
            path="*"
            element={
              <Navigate to="/football-players" />
            }
          />

          <Route path="/football-players" element={<FootballPlayers />}>
          </Route>
        </Routes>
      </Layout>
    );
  }
}

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BestPractice from './pages/BestPractice';
import Branches from './pages/Branches';
import Home from './pages/Home';
import Issues from './pages/Issues';
import Origin from './pages/Origin';
import Repository from './pages/Repository';
import Whatisgit from './pages/Whatisgit';
import React from 'react';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Nopage />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="bestpractise"
						element={
							<BestPractice />
						}
					/>
					<Route
						path="branches"
						element={
							<Branches />
						}
					/>
					<Route
						path="issues"
						element={<Issues />}
					/>
					<Route
						path="origin"
						element={<Origin />}
					/>
					<Route
						path="repository"
						element={
							<Repository />
						}
					/>
					<Route
						path="whatisgit"
						element={
							<Whatisgit />
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

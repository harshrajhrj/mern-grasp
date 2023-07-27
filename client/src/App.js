import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			let data = "";
			await fetch(url, {
				method: 'GET',
				credentials: 'include'
			}).then((response) => response.json())
				.then((res) => data = res);
				
			setUser(data.user);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
			</Routes>
		</div>
	);
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import DashBoard from './pages/dashboard/DashBoard';
import Home from './pages/Home/Home';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard' element={<DashBoard />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	);
};

export default App;

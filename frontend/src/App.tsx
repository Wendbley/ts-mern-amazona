import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<header>
				<Navbar />
			</header>
			<main>
				<div className='container'>
					<Outlet/>
				</div>
			</main>
			<footer>All rights Reseved</footer>
		</div>
	)
}

export default App

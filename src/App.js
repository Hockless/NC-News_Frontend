import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Topics from './components/topics';
import Cooking from './components/cooking';
import Coding from './components/coding';
import Football from './components/football';
import Article from './components/article';
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/topics" element={<Topics />} />
					<Route path="/topics/topics/cooking" element={<Cooking />} />
					<Route path="/topics/topics/coding" element={<Coding />} />
					<Route path="/topics/topics/football" element={<Football />} />
					<Route path="/articles/:article_id" element={<Article />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
export default App;

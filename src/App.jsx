import NewProject from './components/NewProject.jsx'
import ProjectsSidebar from './components/ProjectsSidebar.jsx'
import NoProjectSelected from './components/noProjectSelected.jsx'

function App() {
	return (
		<main className='h-screen py-8 flex gap-8  '>
			<ProjectsSidebar />
			<NoProjectSelected />
		</main>
	)
}

export default App

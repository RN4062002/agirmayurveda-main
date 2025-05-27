
import './App.css'
import SocialBar from './components/SocialBar/SocialBar.jsx'
import Home from './components/Home/Home.jsx'
import logo from './assets/logo1.PNG'

function App() {

  return (
    <div className="app-background">
      <Home logo = {logo}/>
      <SocialBar />
</div>
  )
}

export default App

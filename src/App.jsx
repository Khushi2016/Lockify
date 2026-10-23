import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import { Route, Routes } from 'react-router-dom'
import Trainers from './pages/Trainers'
import Events from './pages/Events'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import AllDocument from './pages/AllDocument'
import AllWebsite from './pages/AllWebsite'
import AddWebsite from './pages/AddWebsite'
import AddDocument from './pages/AddDocument'
import Subscription from './pages/Subscription'
import Feedback from './pages/Feedback'
import Register from './pages/Register'
import Login from './pages/Login'
import UpdateWebsite from './pages/UpdateWebsite'
import UpdateDocument from './pages/UpdateDocument'
import Profile from './pages/Profile'
import ViewPassword from './pages/ViewPassword'

function App() {
  const [count, setCount] = useState(0)
  const [loggedin,setLoggedin] = useState(false)

  useEffect(()=>{
    setLoggedin(localStorage.getItem("token"))
  },[localStorage.getItem("token")])

  return (
    <>
      {/* <h1>This is test</h1> */}
      <div className='index-page'>
          <Header loggedin={loggedin} setLoggedin={setLoggedin}/>

          <main className='main'>

          <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/about'} element={<About />}/>
            <Route path={'/courses'} element={<Courses />}/>
            <Route path={'/trainers'} element={<Trainers />}/>
            <Route path={'/events'} element={<Events />}/>
            <Route path={'/pricing'} element={<Pricing />}/>
            <Route path={'/contact'} element={<Contact />}/>
            <Route path={'/all-document'} element={<AllDocument />}/>
            <Route path={'/all-website'} element={<AllWebsite />}/>
            <Route path={'/add-website'} element={<AddWebsite />}/>
            <Route path={'/update-website'} element={<UpdateWebsite />}/>
            <Route path={'/add-document'} element={<AddDocument />}/>
            <Route path={'/update-document'} element={<UpdateDocument />}/>
            <Route path={'/subscription'} element={<Subscription />}/>
            <Route path={'/feedback'} element={<Feedback />}/>
            <Route path={'/login'} element={<Login  loggedin={loggedin} setLoggedin={setLoggedin}/>}/>
            <Route path={'/register'} element={<Register />}/>
            <Route path={'/profile'} element={< Profile/>}/>
            <Route path={'/view-password'} element={< ViewPassword/>}/>

          </Routes>

          </main>

          <Footer />
      </div>
    </>
  )
}

export default App

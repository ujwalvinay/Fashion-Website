
import './App.css'
import Preheader from './components/preheader'
import Header from './components/header'
import Hero from './components/hero'
import NewCollection from './components/newcollection'
import Category from './components/category'
import VideoBg from './components/video-bg'
import WinterIntro from './components/winter-intro'

function App() {
  return (
    <>
      <Preheader />
      <Header />
      <Hero />
      <Category/>
      <NewCollection/>
      <VideoBg />
      <WinterIntro />
    </>
  )
}

export default App
 
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  const headLinks=[
    {
    id:1,
    href:"#",
    title:"characters",
    active:false
    },
    {
    id:2,
    href:"#",
    title:"comics",
    active:true
    },
    {
    id:3,
    href:"#",
    title:"movies",
    active:false
    },
    {
    id:4,
    href:"#",
    title:"tv",
    active:false
    },
    {
    id:5,
    href:"#",
    title:"games",
    active:false
    },
    {
    id:6,
    href:"#",
    title:"collectables",
    active:false
    },
    {
    id:7,
    href:"#",
    title:"videos",
    active:false
    },
    {
    id:8,
    href:"#",
    title:"fans",
    active:false
    },
    {
    id:9,
    href:"#",
    title:"news",
    active:false
    },
    {
    id:10,
    href:"#",
    title:"shop",
    active:false
    }
  ]

  return (
    <>
      <Header links={headLinks}/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App

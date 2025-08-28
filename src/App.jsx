import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  const linksList=[
    {
      section : "header",
      links: [
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
    },
    {
      section:"top-footer",
      links:[
        {
          id:1,
          image:"./img/buy-comics-digital-comics.png",
          title:"digital comics",
          href:"#"
        },
        {
          id:2,
          image:"./img/buy-comics-merchandise.png",
          title:"merchandise",
          href:"#"
        },
        {
          id:3,
          image:"./img/buy-comics-subscriptions.png",
          title:"subscription",
          href:"#"
        },
        {
          id:4,
          image:"./img/buy-comics-shop-locator.png",
          title:"shop locator",
          href:"#"
        },
        {
          id:5,
          image:"./img/buy-dc-power-visa.svg",
          title:"dc power visa",
          href:"#"
        },
      ]
    },
    {
      section : "mid-footer",
      links:[
        { 
          id:1,
          category: "DC COMICS",
          links:[
          {
            id:1,
            title: "characters",
            href:"#"
          },
          {
            id:2,
            title: "Comics",
            href:"#"
          },
          {
            id:3,
            title: "Movies",
            href:"#"
          },
          {
            id:4,
            title: "TV",
            href:"#"
          },
          {
            id:5,
            title: "Games",
            href:"#"
          },
          {
            id:6,
            title: "Videos",
            href:"#"
          },
          {
            id:7,
            title: "News",
            href:"#"
          }
      ]
    },
    { 
      id:2,
      category: "DC",
      links:[
        {
          id:1,
          title:"Terms Of Use",
          href:"#"
        },
        {
          id:2,
          title:"Privacy Policy (new)",
          href:"#"
        },
        {
          id:3,
          title:"Ad Choices",
          href:"#"
        },
        {
          id:4,
          title:"Advertising",
          href:"#"
        },
        {
          id:5,
          title:"Jobs",
          href:"#"
        },
        {
          id:6,
          title:"Subscriptions",
          href:"#"
        },
        {
          id:7,
          title:"Talent Workshops",
          href:"#"
        },
        {
          id:8,
          title:"CPSC Certificates",
          href:"#"
        },
        {
          id:9,
          title:"Ratings",
          href:"#"
        },
        {
          id:10,
          title:"Shop Help",
          href:"#"
        },
        {
          id:10,
          title:"Contact Us",
          href:"#"
        }
      ]
    },
    { 
      id:3,
      category:"SITES",
      links:[
        {
          id:1,
          title:"DC",
          href:"#"
        },
        {
          id:2,
          title:"MAD Magazine",
          href:"#"
        },
        {
          id:3,
          title:"DC Kids",
          href:"#"
        },
        {
          id:4,
          title:"DC Universe",
          href:"#"
        },
        {
          id:5,
          title:"DC Power Visa",
          href:"#"
        }, 
        
      ]
    },
    { 
      id:4,
      category: "Shop",
      links:[
        {
          id:1,
          title:"Shop DC",
          href:"#"
        },
        {
          id:2,
          title:"Collectibles",
          href:"#"
        }
      ]
    }
        
      ]

    },
    
  ]

  return (
    <>
    {/* {console.log(linksList)} */}
      <Header data={linksList[0]}/>
      <Main/>
      <Footer data={linksList}/>
    </>
  )
}

export default App

import './App.css'
import Cover from './components/Cover'
import Navigationbar from './components/Navigationbar'
import Row from './components/Row'
import instance from './instance'
import requests from './request'

function App() {
  

  return (
    <>
     <Navigationbar/>
     <Cover fetchUrl={requests.fetchNetflixOriginals}/>
     <Row isposter='true' title='Trending' fetchUrl={ requests.fetchTrending}/>
     <Row title='netflixOriginals' fetchUrl={ requests.fetchNetflixOriginals} />
     <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
     <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
     <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
     <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
     <Row title='Romance' fetchUrl={requests. fetchRomanceMovies}/>
     <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </>
  )
}

export default App

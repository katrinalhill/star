import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ContextProvider, GlobalContext } from "../Context/GlobalContext";
import './style/App.css';
import Header from "./Header";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import DataBank from "./DataBank"

import Character from "./Character"
import CharacterDetail from './CharacterDetail';
import Community from "./Community"
import Disney from "./Disney"
import Films from "./Films"
import Interactive from "./Interactive"

import NavBar from "./Navbar"
import NewsBlogs from "./NewsBlogs"
import Planet from "./Planet"
import Series from "./Series"
import Video from "./Video"
import SearchResults from "./SearchResults";
import Grid from '@mui/material/Grid';
import Favorites from "./Favorites";
import PlanetDetails from "./PlanetDetails";



function App() {



  return (
    <>
<ContextProvider>
  {/* <Grid container> */}

      <Router>
        <MainPage/>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<DataBank/>}/>
          <Route path="/results" element={<SearchResults/>}/>
          <Route path= '/databank/results/:id' element={<CharacterDetail/>}/>
          <Route path="/news" element={<NewsBlogs/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/films" element={<Films />}/>  
          <Route path="/series" element={<Series />}/>  
          <Route path="/interactive" element={<Interactive/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/databank" element={<DataBank/>} />
          <Route path="/disney+" element={<Disney/>} />
          <Route path= "/detailspage" element={<CharacterDetail/>}/>
          <Route path= "/planet/results/:name" element={<PlanetDetails/>}/>
          <Route path= "/favorites" element={<Favorites/>}/>
        </Routes>
      </Router>
      {/* </Grid> */}
    </ContextProvider>
    </>
  );
}

export default App;


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

//create a list of SW characters and a list of SW planets/locations
// when a user clicks on a character or planet, a new view displays a "Details" page
//be able to add characters and planets to a favorites list
//FIRST - make fetch to SW api, to retrieve characters and planets
//SECOND - create 2 arrays that holds the info from the api, in state(useState hook)
//THIRD - create a card component to display characters and planets in html template
//FOURTH - create the details view
//FIFTH - use onClick method so that when a card is clicked on it will display the details of the character or location
//SIXTH - add a button to the card component to add/remove to a favorites array

{/* <Router>
  <Link component={RouterLink} to="/">
    With prop forwarding
  </Link>
  <br />
  <Link component={LinkBehavior}>Without prop forwarding</Link>
</Router> */}
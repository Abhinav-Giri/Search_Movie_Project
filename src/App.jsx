import Result from "./Components/Result";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");
  const [loading, setLoading] = useState(false);

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    setLoading(true) ;
    setErrorMessage("");
    axios.get('http://localhost:4200/getAll')
      .then(
        (response) => {
          console.log(response.data)
          setMovies(response.data);
          setLoading(false);
        }
      )
      .catch(
        
        (error) => {
          setLoading(false);
          setErrorMessage("Cant find this Movie");
          console.log(error)
        }
      )
  }
  /*If async await and fetch, used  in above..then code would be like: 
    const getAllMovies = async() => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1');
    const fresponse = await (response.json());
    console.log(fresponse.results);
    setMovies(fresponse.results); }
    */

  const getSearchedMovies = () => {
    setLoading(true) ;
    setErrorMessage("");

    axios.get(
      
      'http://localhost:4200/search?searchKey='+ search
    )
      .then(
        (response) => {
          console.log(response)
          setMovies(response.data);
          setLoading(false);
        }
      )
      .catch(
        (error) => {
          setLoading(false);
          setErrorMessage("Cant find this Movie");
          console.log(error);
        }
      )
  }
   /*If async await and fetch, used  in above..then code would be like: 
    const getSearchedMovies = async() => {
    const res = await fetch(SEARCHAPI + search);
    const fres = await (res.json());
    console.log(fres.results);
    setMovies(fres.results); } */
  
  
  useEffect(
    () => {
      setLoading(true) ;
      setErrorMessage("");
      setMovies([]);
      
      if (search === "") {
        getAllMovies();
      } else {
        getSearchedMovies();
      }
    },
    [search]
  )

  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <input type="search" value={search} onChange={changeTheSearch} className="w-full border border-black rounded text-slate-700 p-4" />
      
      { loading ? "loading.." : (movies.length > 0 ? <Result movies={movies} /> : "No Movie Found") }
      
      {errorMessage && errorMessage.length > 0 && errorMessage}
    </div>
  );
}

export default App;
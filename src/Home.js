import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import BookList from "./BookList";

const Home = () => {
  const url = 'http://81.200.149.55:1337/api/books?populate=*'
  const sUrl = 'http://81.200.149.55:1337'
  const {data: books, isLoading, error} = useFetch(url)


  

 

  return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}

      {/* async await for data to load */}
      {books && <BookList books ={books} sUrl={sUrl}  />}
    </div>
   );
}
 
export default Home;
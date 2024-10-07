import React, { useState } from "react";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import BlogList from "./BlogList/BlogList";
import { blogList } from "../../../config/data";
const Home = ()=>{
     const [blogs,setBlogs] = useState(blogList)
     const [searchKey , setSearchKey] = useState('')

    //  //search submit function 
    //  const   handleSearchSubmit = event=>{
    //   event.preventDefault();
    //   handleSearchResult()=> // it is used to filterering the category 

    //  }

    return(
      <div>
        {/* {Page Header} */}
        <Header/>
       {/* {Search Bar} */}
       {/* <SearchBar/> */}
       {/* {Blog List} */}
       <BlogList blogs = {blogs}/>
       {/* {Empty List} */}
      </div>
    )
  }
  export default Home;
 
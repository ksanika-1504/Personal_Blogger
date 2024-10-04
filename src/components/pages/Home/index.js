import React from "react";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import BlogList from "./BlogList/BlogList";
import { blogList } from "../../../config/data";
const Home = ()=>{

    return(
      <div>
        {/* {Page Header} */}
        <Header/>
       {/* {Search Bar} */}
       <SearchBar/>
       {/* {Blog List} */}
       <BlogList blogs = {blogList}/>
       {/* {Empty List} */}
      </div>
    )
  }
  export default Home;
 
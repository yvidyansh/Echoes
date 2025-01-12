import { Link } from "react-router-dom"
import Categories from "./Categories"
import FeaturedPosts from "../Components/FeaturedPosts"
const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">

      {/* breadcrumbs */}
      <div className="flex gap-4">
        <Link to='/'>Home</Link>
        <span></span>
        <span className="text-teal-600">Blogs and Articles</span>
      </div>

      {/* Introduction */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="mt-8 text-md md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vero quia, numquam et assumenda delectus distinctio.
          </p>
        </div>

        {/* animated button */}
        <Link to='/write' className="hidden md:block relative">
          <svg viewBox="0 0 200 200" width='170' height='170' className="text-lg tracking-widest animate-spin animatedButton">
            <path id='circlePath' d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0" fill="none"/>
            <text>
              <textPath href="#circlePath" startOffset="0%">Write Your Story</textPath>
              <textPath href="#circlePath" startOffset="50%">Share Your Idea</textPath>
            </text>
          </svg>
          <button className="bg-teal-700 absolute top-0 left-0 bottom-0 right-0 m-auto w-20 h-20 rounded-full flex items-center justify-center">
            <svg 
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="70"
             height="70"
             fill="none"
             stroke="white"
             strokeWidth="2" 
            >
              <line x1='6' y1='18' x2='18' y2='6'/>
              <polyline points="9 6 18 6 18 15"/>
            </svg>
          </button>
        </Link>
      </div>
      {/* categories */}
      <Categories/>
      {/* featured posts */}
      <FeaturedPosts/>
      {/* post list */}
    </div>
  )
}

export default Home

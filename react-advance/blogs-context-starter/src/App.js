import { useContext, useEffect } from "react"
import Blogs from "./components/Blogs"
import Header from "./components/Header"
import { AppContext } from "./context/AppContext"
import './App.css'
import Pagination from "./components/Pagination"
import Home from "./pages/Home"
import TagPage from "./pages/TagPage"
import CategoryPage from "./pages/CategoryPage"
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom"

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext)

  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    // Fetch the inital Blogsposts data
    // fetchBlogPosts();
    // eslint-disable-next-line react-hooks-deps

    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      // iska matlb tag wala page show krna
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);

    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category)
    }
    else {
      fetchBlogPosts(Number(page))
    }
  }, [location.pathname, location.search])

  return (
    // <div className="w-full   h-full flex flex-col gap-y-1 justify-center items-center">
    //   <>
    //     <Header />
    //     <Blogs />
    //     <Pagination />
    //   </>
    // </div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog/:blogId" element={<BlogsPage />}></Route>
      <Route path="/tags/:tag:" element={<TagPage />}></Route>
      <Route path="/categories/:category" element={<CategoryPage />}></Route>

    </Routes>

  )
}

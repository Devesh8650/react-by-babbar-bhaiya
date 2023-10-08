import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// STEP 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filling pending
    async function fetchBlogPosts(page = 1, tag = null, category) {
        setLoading(true);
        // let url = `${baseUrl}?page=${page}`;
        let url = `${baseUrl}?page=${page}`
        if (tag) {
            url += `&tag=${tag}`
        }
        if (category) {
            url += `&category=${category}`
        }
        try {
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            // data in show api by name
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.log("some error ocured");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false)
    }

    function handlePageChange(page) {
        setPage(page)
        fetchBlogPosts(page)
    }

    const data = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    // STEP 2
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs() {
    // consume
    const { posts, loading } = useContext(AppContext);
    return (
        <div className="w-11/12 max-w-[700px] h-full py-8 flex flex-col gap-y-7 mt-[65px] justify-center items-center">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div>
                    <p>No Post Found</p>
                </div>
            ) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <p className="font-bold text-lg">{post.title}</p>
                        <p className="text-sm">
                            By <span className="italic">{post.author}</span>on
                            <span className="underline font-bold">{post.category}</span>
                        </p>
                        <p className="text-sm mt-[4px]">Posted on {post.date}</p>
                        <p className="text-md mt-[15px]">{post.content}</p>
                        <div className="flex gap-x-3">
                            {post.tags.map((tag, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="text-blue-500 underline font-bold text-[10px]"
                                    >{`#${tag}`}</span>
                                );
                            })}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Blogs;

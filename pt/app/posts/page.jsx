"use client"

import { useState, useEffect} from "react";
import axios from "axios";
 
const Posts = () => {
    const [Posts, setPosts] = useState({});
    const [Loading,setLoading] = useState (true);
    const [Error, setError] = useState (null);

    useEffect(() => {fetchPosts()})

    const fetchPosts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(response.data);
            setTimeout(() => { setLoading(false)}, 5000);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

   return (
    <div className="min-h-screen bg-blue-200 py-10 px-6">
        <h1 className="text-bold text-3*1">
            Posts Page
        </h1>

        { Loading ? (
            <div className="min-h-screen flex items-center justify-center bg-blue-50 text-gray-500">
                <div className="flex flex-col items-center space-y-3">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-900"></div>
                    <p className="text-lg text-bold">Loading Posts Page...</p>
                </div>
                </div>
        ): (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Posts.map((P) => (
                    <div 
                    key={P.id} 
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl tranasition duration-300">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{P.title}</h2>
                        <p className="text-gray-600">{P.body}</p>
                        <p className="mt-4 text-sm text-gray-500">Post ID: {P.id}</p>
                        <p className="mt-1 text-sm text-gray-500">User ID: {P.userId}</p>
                    </div>

                ))
            }

            </div>
        )

        }

    </div>
        
    )
      
}

export default Posts;
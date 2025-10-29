

// "use client";

// import { useState, useEffect, use } from "react";


// const Userprofiles = () => {


//     const [user, setUser] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fecthUser = async () => {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             const data = await response.json();
//             console.log(`Data: ${user}`);
//             setUser(data)
//             setTimeout(() => { setLoading(false); }, 5000);
//         }catch(error) {
//             setError(error);
//             setLoading(false);  
//         }


//         useEffect(()=>{
//             fecthUser();
//         }, []);

//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gray-100">

//                 {
//                     loading ? (
//                     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//                 <div className="text-xl font-semibold text-gray-700">
//                     <div className="animate-spin rounded-full h-10 w-10 border-b2 border-gray-500">
//                         <p className="sr-only">Loading...</p>
//                     </div>
//                 </div>          
//                     </div>
//                     ) : error ? (
//                         <div className="text-red-500">Error: {error.message}</div>
//                     ): (
//                         <>
//                             <h1 className="text-3xl font-bold mb-6">
//                                Welcome back, {user[0].name}!

//                             </h1>
                            
//                         </>
//                     )
//                 }
//             </div>
//         );
//     }
     
       





//   return (
//     <div className="container mt-7">
//         User Profiles Page
//     </div>  
//     );




// }

// export default Userprofiles;
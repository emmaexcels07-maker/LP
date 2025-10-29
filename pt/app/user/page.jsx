// "use client";

// import { useState, useEffect } from "react";

// export default function UserProfiles() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let mounted = true;

//     const fetchUsers = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const data = await res.json();
//         if (!mounted) return;
//         setUsers(Array.isArray(data) ? data : []);
//       } catch (err) {
//         if (!mounted) return;
//         setError(err?.message || "Failed to fetch users");
//       } finally {
//         if (!mounted) return;
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//     return () => {
//       mounted = false;
//     } ;
//   }, []);
  

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-center text-gray-700">
//           <div className="animate-spin inline-block rounded-full h-10 w-10 border-4 border-t-transparent border-gray-500 mb-3" />
//           <div className="text-lg font-medium">Loading...</div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-red-600">Error: {error}</div>
//       </div>
//     );
//   }

//   if (users.length === 0) {
//     return (
//       <main className="container mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
//         <p className="text-gray-600">No users found.</p>
//       </main>
//     );
//   }

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
//       <ul className="space-y-4">
//         {users.map((u) => (
//           <div
//             key={u.id}
//             className="p-4 rounded border bg-white shadow-sm flex flex-col md:flex-row md:items-center md:justify-between"
//           >
//             <div>
//               <div className="text-lg font-medium">{u.name}</div>
//               <div className="text-sm text-gray-600">@{u.username}</div>
//               <div className="text-sm text-gray-600">{u.email}</div>
//               <div className="text-sm text-gray-600">{u.phone}</div>
//               <div className="text-sm text-gray-600">{u.website}</div>
//               <div className="text-sm text-gray-500">{u.company?.name}</div>
//               <div className="text-sm text-gray-500 italic">{u.company?.catchPhrase}</div>
//               <div className="text-sm text-gray-500">{u.company?.bs}</div>
//             </div>
//             <div className="mt-3 md:mt-0 text-sm text-gray-500">
//               {u.address?.city ?? "—"}, {u.address?.street ?? "—"}, {u.address?.suite ?? "—"},
//               {u.address?.zipcode ?? "—"}, Geo: ({u.address?.geo?.lat ?? "—"}, {u.address?.geo?.lng ?? "—"}), 
//             </div>
//           </div>
//         ))}
//       </ul>
//     </main>
//   );
// }


"use client"

import { useState, useEffect } from "react";
import axios from 'axios';

const Userprofiles = () => {

      const [user, setUser] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null)


      const fecthUser = async () => {
            try {
                  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                  setUser(response.data)
                  setTimeout(() => { setLoading(false) }, 3000)

            } catch (error) {
                  setError(error)
                  setLoading(false)
            }
      }



      useEffect(() => {
            fecthUser()
      }, [])



      return (

            <div className="min-h-screen bg-gray-100 py-10 px-6">

                  <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        User Directory
                  </h1>

                  {
                        loading ? (
                              <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">
                                    <div className="flex flex-col items-center space-y-3">
                                          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-900"></div>
                                          <p className="text-lg">Loading user data.....</p>
                                    </div>
                              </div>
                        ) : (

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {
                                          user.map((user) => (
                                                <div
                                                      key={user.id}
                                                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
                                                >

                                                      <h2 className="text-lg font-semibold text-gray-800">
                                                            {user.name}
                                                      </h2>
                                                      <p className="text-gray-600">@{user.username}</p>
                                                      <p className="mt-2 text-sm text-gray-700">{user.email}</p>
                                                      <p className="text-sm text-gray-700"> {user.phone}</p>
                                                      <p className="text-sm text-gray-700">
                                                <a href={`https://${user.website}`} target="_blank" className="text-blue-500 hover:underline">{user.website}</a>
                                                      </p>
                                                      <div className="mt-3">
                                                            <p className="text-sm text-gray-500">
                                                            {user.address.city}, {user.address.street}
                                                            </p>
                                                      </div>
                                                </div>

                                          ))
                                    }
                              </div>
                        )
                  }


            </div>

      )




}


export default Userprofiles;
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getUsername } from "../utils/api";

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     const { user } = useParams();
//     useEffect(() => {
//         getUsername(user).then((userFromAPI) => {
//             setUsers(userFromAPI);
//         })
//     }, [user]);


//     console.log(users)
//     return (
//         <main>
//             <h2>Users</h2>
//             <ul>
//                 {users.map((user) => {
//                     return (
//                         <li>
//                             <h3>
//                                 {user.username}
//                             </h3>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </main>
//     )
// }

// export default Users;
import React from "react";
// import { ListTourType } from "../../App";
import "./index.scss";
import { useState } from "react";

// type Props = {
//     listTour: ListTourType[];
//     handleList: (id: string) => void;
// };

// const ListTour: React.FC<Props> = ({ listTour, handleList }) => {
//     const [readMore, setReadMore] = useState<boolean>(false);

//     return (
//         <div>
//             <ul>
//                 {listTour.map((item) => (
//                     <li key={item.id} className="item">
//                         <p>id: {item.id}</p>
//                         <p>name: {item.name}</p>
//                         <p>
//                             {readMore ? item.info : `${item.info.substring(0, 200)}...`}
//                             <span
//                                 onClick={() => {
//                                     setReadMore(!readMore);
//                                 }}
//                                 style={{ color: "blue", cursor: "pointer" }}
//                             >
//                                 Read More
//                             </span>
//                         </p>
//                         <img
//                             style={{
//                                 width: "200px",
//                             }}
//                             src={item.image}
//                             alt={item.name}
//                         />
//                         <p>price: {item.price}</p>
//                         <button onClick={() => handleList(item.id)}>remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ListTour;

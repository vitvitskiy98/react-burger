// import React,{useState} from "react";
// const [state, setState] = useState({
//     isLoading: false,
//     hasError: false,
//     orders: [],
//   });
//   const ingredients = filteredData.map((elem) => elem?._id);
// export const fetchPostData = () => {
//     setState({ ...state, hasError: false, isLoading: true });
//     try {
//       fetch("https://norma.nomoreparties.space/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify({ ingredients }),
//       })
//         .then((res) => {
//           if (res.status === 200) {
//             return res.json();
//           } else {
//             return Promise.reject('response status is not 200!');
//           }
//         })
//         .then((json) =>
//           setState({
//             loading: false,
//             status: "success",
//             orders: json,
//           })
//         )
//         .catch((e) => {
//           setState({ ...state, hasError: true, isLoading: false });
//         });
//     } catch (error) {
//       console.log("Возникла проблема с вашим fetch запросом: ", error.message);
//     }
//   };
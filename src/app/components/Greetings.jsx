// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchGreeting } from '../redux/actions/types';

// const Greetings = () => {
//   const greeting = useSelector((state) => state.greeting.greeting);
//   const isLoading = useSelector((state) => state.isLoading);
//   const error = useSelector((state) => state.error);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchGreeting());
//   }, [dispatch]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div>
//         Error:
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Random Greeting</h2>
//       <p>{greeting}</p>
//     </div>
//   );
// };

// export default Greetings;

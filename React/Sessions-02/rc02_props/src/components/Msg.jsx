// //! paremetre içerisinde Destructing
const Msg = ({ name, age }) => {
  return (
    <div>
      <h3>
        Merhaba {name} {age}
      </h3>
    </div>
  );
};
export default Msg;
// //!Destructing metod

// const Msg = (props) => {
//   const { name, age } = props;
//   return (
//     <div>
//       <h3>
//         Merhaba {name} {age}
//       </h3>
//     </div>
//   );
// };
// export default Msg;
//! props method
// const Msg = (props) => {
//   return (
//     <div>
//       <h3>Merhaba {props.name}</h3>
//     </div>
//   );
// };
// export default Msg;

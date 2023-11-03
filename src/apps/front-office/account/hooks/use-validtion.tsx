// import React, { SetStateAction, useState } from 'react'

// const useValidtion = () => {
//     const [input, setinputValue] = useState({
//         inputValue: '',
//         isValidInput: true,
//     });
//     const {inputValue, isValidInput} = input;
//     const inputValueChangeHandler = (e: { target: { value: SetStateAction<string>; }; })=>{
//         setinputValue(e.target.value)
//         if(inputValue.length > 5){
//           setinputValue(prev=>{
//             return {...prev , isValidInput:true}
//           })
//         }else{
//           setinputValue(prev =>{
//             return {...prev, isValidInput:false}
//           })
//         }
//     }
//   return {inputValue,setinputValue,}
// }

// export default useValidtion

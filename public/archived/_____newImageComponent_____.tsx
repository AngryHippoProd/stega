// import React, {ChangeEvent} from 'react';
//
// interface NewImageInputProps{
//   addImage( image : string): void;
// }
// export const NewImageInput:React.FC<NewImageInputProps> = ({ addImage }) => {
//   const[image, setImage] = React.useState('');
//   const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
//     setImage(event.target.value)
//   }
//   const onImageButtonClick = () =>{
//     addImage(image)
//     setImage("")
//   }
//
//   return (
//     <div>
//       <input type = "file" name="image"
//              value = {image}
//              onChange = {updateImage}
//              placeholder = ""/>
//       <button onClick = {onImageButtonClick}> Add Image </button>
//     </div>
//   );
// };
export {}

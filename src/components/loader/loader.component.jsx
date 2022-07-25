import { Audio } from  'react-loader-spinner';
import { Puff } from  'react-loader-spinner';
import './loader.styles.css';

export const Loader = () =>{
return (
//     <Audio
//     height = "80"
//     width = "80"
//     radius = "9"
//     color = '#9400D3'
//     ariaLabel = 'three-dots-loading'     
//     wrapperStyle
//     wrapperClass
//   />
<div className='loader-container'>
<Puff color="#9400D3" height={80} width={80} />
</div>
)
}
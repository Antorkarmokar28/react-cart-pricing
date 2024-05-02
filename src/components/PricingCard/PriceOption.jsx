import PropTypes from 'prop-types';
import { TiTickOutline } from "react-icons/ti";
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='mt-10 flex flex-col bg-slate-50 p-10 rounded-lg border-2 border-green-600'>
            <h2 className='text-4xl text-center'>${price}/mm</h2>
            <h3 className='text-3xl text-center mt-6'>{name}</h3>
            <ul className='mt-6 w-2/3 mx-auto text-center flex-grow'>
                {
                    features.map((feature, index)=> 
                    <li className='flex items-center gap-3' key={index}><TiTickOutline className='text-green-600'/>
                    {feature}
                    </li>)
                }
            </ul>
            <button className='bg-green-600 mt-10 text-white w-full py-5 text-center rounded-lg'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object,
}
export default PriceOption;
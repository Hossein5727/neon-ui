import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterReduser';

function Counter() {

    const [isDisableBtn, setIsDisableBtn] = useState(false)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        if (counter.value === 0) {
            setIsDisableBtn(true)
        } else {
            setIsDisableBtn(false)
        }
    }, [counter.value, counter, isDisableBtn])

    return (
        <div className=' px-6 py-4 shadow-lg shadow-red-400 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-3xl  '>
            <h1 className='text-center '>Counter Value: {counter.value}</h1>
            <div className='w-full flex justify-center items-center gap-12 mt-6'>
                <button onClick={() => dispatch(increment())} className='w-[220px] shadow px-2 py-1 bg-gradient-to-b from-blue-500 to-purple-500 outline-none border-none rounded ring-offset-2 transition-all duration-150 focus:ring-2 ring-blue-500 '>Increment</button>
                <button onClick={() => {
                    counter.value > 0 && dispatch(decrement())
                }} className={`w-[220px] shadow px-2 py-1 bg-gradient-to-b from-black to-orange-500 outline-none border-none rounded ring-offset-2 transition-all duration-150 focus:ring-2 ring-red-500 ${isDisableBtn && 'opacity-40 cursor-not-allowed'} `}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter

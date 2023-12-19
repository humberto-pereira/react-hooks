import React, {useState, useEffect} from 'react'

function EffectOnlyOnce() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    },[count]);

    useEffect(() => {
        console.log('creating timer');
        const interval = setInterval(() => {
            setTime(time => time + 1);
        }, 1000)
        return () => {
            console.log('cleaning up timer');
            clearInterval(interval);
        }
    },[]); //!important! empty array means only run once
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
        
    )
}

export default EffectOnlyOnce
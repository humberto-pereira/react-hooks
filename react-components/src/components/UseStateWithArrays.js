import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3,4,5]);
    const removeNum = () => {
        setNums(
            nums.filter((item, idx)=> { //use filter to remove the last item
                return idx !== nums.length - 1;
            })
        )
    }
    const addNums = () => {
        setNums([...nums, nums.length + 1])//use spread operator to copy the array and add the new item
    }
    return (
        <div>
            <button onClick={addNums}>Add Item</button>
            <button onClick={removeNum}>Remove Item</button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

export default UseStateWithArrays
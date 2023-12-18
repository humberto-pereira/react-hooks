import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                        ...name, //use spread operator to copy the object and add the new item
                        firstName: e.target.value
                    })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                        ...name, //use spread operator to copy the object and add the new item
                        lastName: e.target.value
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateWithObjects
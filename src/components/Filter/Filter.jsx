import React from 'react'

const Filter = () => {
    return (
        <>
            {/* <label htmlFor="dropdown"></label> */}
            <select className="bg-gray-700 text-white rounded-md text-sm" id="dropdown">
                <option value="">Sort notes:</option>
                <option value="option1">by label</option>
                <option value="option2">by dates</option>
                <option value="option3">Option 3</option>
            </select>
        </>
    )
}

export default Filter
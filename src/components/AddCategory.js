import React, { useState } from 'react';
import PropsTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handlenOnchange = (e) => {
        setInputValue(e.target.value)
    }

    const handlenSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((cats) => [inputValue, ...cats]);
            setInputValue('')
        }



    }
    console.log(inputValue)
    return (
        <>
            <form onSubmit={handlenSubmit}>
                <input
                    name="search"
                    value={inputValue}
                    onChange={handlenOnchange}
                    type="text"
                />
            </form>
        </>
    );
}

AddCategory.propTypes = {
    setCategories: PropsTypes.func.isRequired
}
export default AddCategory;
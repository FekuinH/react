import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handledInputChange = e =>{
        setInputValue(e.target.value);
    }

    const handledSumit = e =>{
        e.preventDefault();
        validateAndClear(inputValue);

    }

    const validateAndClear = (inputValue) =>{
        if (inputValue.trim().length > 3){
            setCategories((cats) => [inputValue,...cats]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handledSumit}>
          <input
            type="text" 
            value={inputValue}
            onChange={handledInputChange} />
        </form>
    );
   
}

CategoryAdd.propTypes = {
    setCategories : PropTypes.func.isRequired
}

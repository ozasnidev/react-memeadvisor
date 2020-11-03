import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [newCategory, setNewCategory] = useState('');
    const handleNewInputValue = (event) => {
        setNewCategory(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(newCategory.trim().length > 2){
            setCategories(categories => [newCategory, ...categories]);
            setNewCategory('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="panel-block">
            <p className="control">
                <input className="input is-success" 
                    type="text" 
                    value={newCategory}
                    onChange={handleNewInputValue}
                    placeholder="Search" 
                />
            </p>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

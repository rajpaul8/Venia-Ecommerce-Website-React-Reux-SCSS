import React from 'react'
import { useState, useEffect } from 'react';
import categories from './CategoriesList';
import { useLocation } from 'react-router-dom'

function CategoriesFilter(props) {
    const [checked, setChecked] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/products/men') {
            setChecked(["men's clothing"])
        }
        if (location.pathname === '/products/women') {
            setChecked(["women's clothing"])
        }
        if (location.pathname === '/products/jewelery') {
            setChecked(["jewelery"])
        }
        if (location.pathname === '/products/electronics') {
            setChecked(["electronics"])
        }

    }, [location])


    const handleToggle = (category) => {
        const currentIndex = checked.indexOf(category)

        const newChecked = [...checked]
        if (currentIndex === -1) {
            newChecked.push(category)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked);
        props.handleFilters(newChecked)
    }
    return (
        <>
            <div className='w-72 pt-1 pb-1 border-top-1 border-bottom-1'>
                <div className="form-control flex items-start">
                    {categories.map((category, id) => {
                        return (
                            <>
                                <label className="label cursor-pointer filterBox">
                                    <input type="checkbox" onChange={() => handleToggle(category.cat)} checked={checked.indexOf(category.cat) === -1 ? false : true} className="checkbox rounded-md" />
                                    <span className="label-text pl-5">{category.cat}</span>
                                </label>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CategoriesFilter
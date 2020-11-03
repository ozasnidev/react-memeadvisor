import React, {useState} from 'react';
import NavbarMeme from '../Shared/navbar/Navbar';
import { AddCategory } from './AddCategory';
import { GifList } from './GifList';


const GifMemeApp = () => { 
    const [categories, setCategories] = useState([]);

    return (
        <>
            <NavbarMeme />
            <div className="container">
                <div className="add-category-container">
                    <article className="panel is-success">
                        <p className="nav-title panel-heading">Categories</p>
                        <AddCategory setCategories = {setCategories}/>
                        {categories.map(category => <GifList key={category} category={category} />)} 
                    </article>
                </div>
            </div>
        </>
    )   
}
export default GifMemeApp;
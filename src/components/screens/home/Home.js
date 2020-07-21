import React from 'react';
import SearchBar from '../../SearchBar'
import './home.css'
import clothingData from '../../../data.json'

const Home = () => {

    const [searchValue, setSearchValue] = React.useState('')
    const [data, setData] = React.useState('')

    const handleInput = (e) => {
        const searchBar = document.querySelector('.HomeScreenSearchBar')
        searchBar.classList.toggle('HomeScreenSearchBar_top', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue(e.target.searchBar.value);
        setData(clothingData)
    }

    return (
        <>
            <div className="homeScreen_MainContainer">
                <SearchBar onInput={handleInput} onSubmit={handleSubmit} />
            </div>
            <div className="homeScreen_dataContainer">
                {data.products?.map((element, index) => (
                    <div key={index} className="searchItem_container">
                        <img alt={element.name} src={`https://${element.imageUrl}`} />
                        <div>{element.name}</div>
                        <a className="searchItem_click" target="_blank" rel="noopener noreferrer" href={`https://asos.com/${element.url}`}>Visit Site</a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;
import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { SelectChangeEvent } from '@mui/material/Select';
import AsanasFilter from '../AsanasFilter/AsanasFilter.tsx';
import AsanasList from '../AsanasList/AsanasList.tsx';
import './AsanasPage.css';

function AsanasPage() {

    const [searchParams, setSearchParams] = useSearchParams({category: "All categories"});
    const selectedCategory = searchParams.get("category");
    const filters = {selectedCategory: selectedCategory};
    const handleChange = (event: SelectChangeEvent) => {
        setSearchParams({category: event.target.value});
    };


    return (
        <div className="AsanasPage">
            <h1 className="AsanasPage-title">Asanas library</h1>
            <AsanasFilter filters={filters} handleChange = {handleChange}/>
            <AsanasList filters={filters}/>
        </div>
    )
}

export default AsanasPage;
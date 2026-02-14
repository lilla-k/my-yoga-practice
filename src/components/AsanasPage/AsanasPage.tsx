import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { SelectChangeEvent } from '@mui/material/Select';
import AsanasFilter from '../AsanasFilter/AsanasFilter.tsx';
import AsanasList from '../AsanasList/AsanasList.tsx';
import './AsanasPage.css';

function AsanasPage() {

    const [searchParams, setSearchParams] = useSearchParams({});
    
    const onFilterChange = (category, level) => {
        setSearchParams({ category: category, level: level });
    };

    const selectedCategory = searchParams.get("category");
    const selectedLevel = searchParams.get("level");
    const filters = {selectedCategory, selectedLevel};

    return (
        <div className="AsanasPage">
            <div className="AsanasPage-content">
                <h1 className="AsanasPage-title">Asanas library</h1>
                <AsanasFilter filters={filters} onFilterChange={onFilterChange} />
                <AsanasList filters={filters} />
            </div>

        </div>
    )
}

export default AsanasPage;
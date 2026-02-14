import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import './AsanasFilter.css';


function AsanasFilter({filters, onFilterChange}) {

    console.log("filters", filters)
    const [category, setCategory] = useState(filters.selectedCategory || "All categories");
    console.log("selectedCategory", category);
    const [level, setLevel] = useState(filters.selectedLevel || "All levels");
    console.log("selectedLevel", level);
    const categories = ["All categories", "Sitting", "Standing", "Supine", "Inversion", "Prone"];
    const levels = ["All levels", "Beginner", "Intermediate", "Advanced"];

    return (
        <div className="AsanasFilter">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={"All categories"}
                    value={category}
                    label="Age"
                    onChange={event => setCategory(event.target.value)}
                >
                    {categories.map(c => <MenuItem value={c}>{c}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={"All categories"}
                    value={filters.selectedLevel}
                    label="Age"
                    onChange={event => setLevel(event.target.value)}
                >
                    {levels.map(l => <MenuItem value={l}>{l}</MenuItem>)}
                </Select>
            </FormControl>
            <Button variant="contained" onClick={() => onFilterChange(category, level)}>Filter</Button>
        </div>
    )
}

export default AsanasFilter;
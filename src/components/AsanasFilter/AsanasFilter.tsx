import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './AsanasFilter.css';


function AsanasFilter() {
    const categories = ["All categories", "Sitting", "Standing", "Supine", "Inversion", "Prone"];

    const [selectedCategory, setSelectedCategory] = useState("All categories",);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedCategory(event.target.value as string);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={"All categories"}
                    value={selectedCategory}
                    label="Age"
                    onChange={handleChange}
                >
                    {categories.map(c => <MenuItem value={c}>{c}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default AsanasFilter;
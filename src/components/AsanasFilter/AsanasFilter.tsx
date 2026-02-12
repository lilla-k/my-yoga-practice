
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './AsanasFilter.css';


function AsanasFilter({filters, handleChange}) {

    console.log("filters", filters)
    const categories = ["All categories", "Sitting", "Standing", "Supine", "Inversion", "Prone"];

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={"All categories"}
                    value={filters.selectedCategory}
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
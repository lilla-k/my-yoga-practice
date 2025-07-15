import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import categories from '../../categories.ts';
import './CreatePose.css';

function CreatePose() {

    console.log(categories)

    // const [poseName, setPoseName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    // const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setSelectedImage(file);
          setPreviewUrl(URL.createObjectURL(file)); // shows a preview
        }
      };

    return (
        <div className="CreatePose">
            <h1 className="CreatePose-title">Add pose</h1>
            <TextField label="Pose Name" variant="outlined" color="primary" size="small" />
            <FormControl size="small">
                <InputLabel>Category</InputLabel>
                <Select
                    value={selectedCategory}
                    label="Category"
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    sx={{ input: { bgcolor: "#ddeee7" } }}
                >
                    {categories.map((c) => <MenuItem value={c.name}>{c.name}</MenuItem>)}
                </Select>
            </FormControl>
            <TextField
                label="Description"
                multiline
                rows={4}
                sx={{ minWidth: "100%" }}
            />
            <div className="CreatePose-imageSelectorContainer">
                {!previewUrl && <Button variant="outlined" className="CreatePose-imageSelectorButton">+ Upload image</Button>}
                {!previewUrl && <input className="CreatePose-fileInput" type="file" onChange={handleImageChange} /> }
                {previewUrl && 
                <div className="CreatePose-imagePreviewContainer">
                    <div className="CreatePose-imageContent">
                        <img src={previewUrl} alt="preview" className="CreatePose-image" />
                        <button className="CreatePose-imageCloseBtn" type="button" onClick={()=>setPreviewUrl(null)}><CloseIcon/></button>
                    </div>
                </div>
                }
            </div>
            <Button id="CreatePose-uploadBtn" variant="contained">Add pose</Button>
        </div>
    )
}

export default CreatePose
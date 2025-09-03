import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import categories from '../../categories.ts';
import yogaAsanaServices from '../../services/yogaAsanaService.ts';
import './CreateAsana.css';

function CreateAsana() {

    const [asanaName, setAsanaName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file)); // shows a preview
        }
    };

    const yogaAsanaData = {
        asanaName: asanaName,
        category: selectedCategory,
        description: description
    }

    async function uploadData() {
        const yogaAsanaId = await yogaAsanaServices.postYogaAsana(yogaAsanaData, selectedImage);
        console.log("data uploaded with id:" + yogaAsanaId);
    }

    return (
        <div className="CreateAsana">
            <h1 className="CreateAsana-title">Add asana</h1>
            <TextField
                label="Asana name"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(event) => setAsanaName(event.target.value)}
                value={asanaName}
            />
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
                onChange={(event) => setDescription(event.target.value)}
                value={description}
            />
            <div className="CreateAsana-imageSelectorContainer">
                {!previewUrl && <Button variant="outlined" className="CreateAsana-imageSelectorButton">+ Upload image</Button>}
                {!previewUrl && <input className="CreateAsana-fileInput" type="file" onChange={handleImageChange} />}
                {previewUrl &&
                    <div className="CreateAsana-imagePreviewContainer">
                        <div className="CreateAsana-imageContent">
                            <img src={previewUrl} alt="preview" className="CreateAsana-image" />
                            <button className="CreateAsana-imageCloseBtn" type="button" onClick={() => setPreviewUrl(null)}><CloseIcon /></button>
                        </div>
                    </div>
                }
            </div>
            <Button id="CreateAsana-uploadBtn" variant="contained" onClick={() => uploadData()}>Add asana</Button>
        </div>
    )
}

export default CreateAsana;
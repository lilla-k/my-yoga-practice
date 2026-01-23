import { useState } from 'react';
import { useNavigate } from "react-router";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import yogaAsanaServices from '../../services/yogaAsanaService.ts';
import Loading from '../Loading/Loading.tsx';
import './CreateAsanaPage.css';

function CreateAsanaPage() {

    const [asanaName, setAsanaName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [offline, setOffline] = useState(false);
    const [error, setError] = useState(false);


    const navigate = useNavigate();

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

    async function getPromiseState(p: Promise<void>) : Promise<string>{    
        const t = {};
        try {
          const v = await Promise.race([p, t]);
          return (v === t) ? "pending" : "fulfilled";
        } catch {
          return "rejected";
        }
      }
      

    async function handleTimeout(func: () => Promise<void>, time: number){
        const p = func();
        console.log("promise", p);
        setTimeout(async()=> {
            console.log("timer start");
            const promiseState = await getPromiseState(p);
            console.log("after 2000 promise state",promiseState);
            if(promiseState === "pending"){
                console.log("pending");
                setOffline(true);
            }
        }, time);
        return () => {
            clearTimeout(time);
          };
    }


    async function uploadData() {
        try {
            setLoading(true);
            const yogaAsanaId = await yogaAsanaServices.postYogaAsana(yogaAsanaData, selectedImage);
            console.log("data uploaded with id:" + yogaAsanaId); 
            setLoading(false);
            navigate(`/yoga-asanas/${selectedCategory}`);
        }
        catch {
            console.log("catch")
            setError(true);
            setLoading(false);
        }
    }

    return (
        <div className="CreateAsanaPage">
            <h1 className="CreateAsanaPage-title">Add asana</h1>
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
            <div className="CreateAsanaPage-imageSelectorContainer">
                {!previewUrl && <Button variant="outlined" className="CreateAsanaPage-imageSelectorButton">+ Upload image</Button>}
                {!previewUrl && <input className="CreateAsanaPage-fileInput" type="file" onChange={handleImageChange} />}
                {previewUrl &&
                    <div className="CreateAsanaPage-imagePreviewContainer">
                        <div className="CreateAsanaPage-imageContent">
                            <img src={previewUrl} alt="preview" className="CreateAsanaPage-image" />
                            <button className="CreateAsanaPage-imageCloseBtn" type="button" onClick={() => setPreviewUrl(null)}><CloseIcon /></button>
                        </div>
                    </div>
                }
            </div>
            <Button id="CreateAsanaPage-uploadBtn" variant="contained" onClick={() => handleTimeout(uploadData, 2000)}>{loading? <Loading/> : "Add asana"}</Button>
            {error &&
             <div className="CreateAsanaPage-errorMessage">
            Try again later. 
            </div>}
            {offline && 
            <div className="CreateAsanaPage-offlineMessage">
            You are offline. Data saved locally. We'll upload it once you are back online.
            </div>
            }
        </div>
    )
}

export default CreateAsanaPage;
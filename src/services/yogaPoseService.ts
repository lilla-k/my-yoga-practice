import firebaseApp from './firebase.ts';
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, updateMetadata, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import type yogaPose from "../types/yogaPose.ts"

const db = getFirestore(firebaseApp);
const storage = getStorage();

const yogaPoseServices = {
    postYogaPose: async function postYogaPose(yogaPoseData: yogaPose, selectedImage: File | null) {
        console.log("run postYogaPose function")
        console.log(yogaPoseData);
        console.log(selectedImage);
        try {
            if (selectedImage) {
                const imageId = crypto.randomUUID();
                console.log(imageId);
                const imageRef = ref(storage, `images/${imageId}`);
                console.log("imageRef", imageRef);
                await uploadBytes(imageRef, selectedImage);
                await updateMetadata(imageRef, { cacheControl: 'private,max-age=86400' });
                const url = await getDownloadURL(imageRef);
                console.log("url", url)
                yogaPoseData.imageData = { imageId: imageId, url: url }
            }
            const docRef = await addDoc(collection(db, "yogapractice"), yogaPoseData);
            return docRef.id;
        }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

export default yogaPoseServices;

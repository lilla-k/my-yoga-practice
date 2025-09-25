import firebaseApp from './firebase.ts';
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, updateMetadata, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import type yogaAsana from "../types/yogaAsana.ts"

const db = getFirestore(firebaseApp);
const storage = getStorage();

const yogaAsanaServices = {
    postYogaAsana: async function postYogaAsana(postYogaAsana: yogaAsana, selectedImage: File | null) {
            if (selectedImage) {
                const imageId = crypto.randomUUID();
                console.log(imageId);
                const imageRef = ref(storage, `images/${imageId}`);
                console.log("imageRef", imageRef);
                await uploadBytes(imageRef, selectedImage);
                await updateMetadata(imageRef, { cacheControl: 'private,max-age=86400' });
                const url = await getDownloadURL(imageRef);
                console.log("url", url)
                postYogaAsana.imageData = { imageId: imageId, url: url }
            }
            const docRef = await addDoc(collection(db, "yogapractice"), postYogaAsana);
            return docRef.id;
    }
}

export default yogaAsanaServices;

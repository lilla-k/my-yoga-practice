import firebaseApp from './firebase.ts';
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, updateMetadata, getDownloadURL } from "firebase/storage";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
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
            const result = await uploadBytes(imageRef, selectedImage);
            console.log("result");

            console.log(result);

            await updateMetadata(imageRef, { cacheControl: 'private,max-age=86400' });
            const url = await getDownloadURL(imageRef);
            console.log("url", url)
            postYogaAsana.imageData = { imageId: imageId, url: url }
        }
        const docRef = await addDoc(collection(db, "yogapractice"), postYogaAsana);
        return docRef.id;
    },
    getYogaAsana: async function getYogaAsana(selectedCategory: string) {
        console.log("selectedCategory", selectedCategory);
        const q = query(collection(db, "yogapractice"), where("category", "==", selectedCategory));   
        const asanaSnapshot = await getDocs(q);
        const asanaList = asanaSnapshot.docs.map( doc=> ({id: doc.id, ...doc.data()}));  
        console.log(asanaList);
        return asanaList;  
    }
}

export default yogaAsanaServices;

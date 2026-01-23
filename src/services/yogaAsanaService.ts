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
            const imageRef = ref(storage, `images/${imageId}`);
            const result = await uploadBytes(imageRef, selectedImage);
            console.log(result);

            await updateMetadata(imageRef, { cacheControl: 'private,max-age=86400' });
            const url = await getDownloadURL(imageRef);
            postYogaAsana.imageData = { imageId: imageId, url: url }
        }
        const docRef = await addDoc(collection(db, "yogapractice"), postYogaAsana);
        return docRef.id;
    },
    getYogaAsana: async function getYogaAsana(selectedCategory: string) {
        console.log("selectedCategory", selectedCategory);
        let q;
        if (selectedCategory === "all"){
            q = query(collection(db, "asanas"));
        } else {
            q = query(collection(db, "asanas"), where("category", "==", selectedCategory)); 
        }
          
        const asanaSnapshot = await getDocs(q);
        const asanaList = asanaSnapshot.docs.map( doc=> ({id: doc.id, ...doc.data()})); 
        return asanaList;  
    }
}

export default yogaAsanaServices;

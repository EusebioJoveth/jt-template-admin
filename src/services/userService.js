import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db} from "./../firebase";
  
    export const createUser =async (data) => {
        let idDoc;
    await addDoc(collection(db, "users"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    }).then(res =>{
        idDoc = res
        
    }).catch(error=>{
        return error
    });

    console.log('idDocument', idDoc.id)
}




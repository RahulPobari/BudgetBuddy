import { firestore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";


export const updateUser = async (
    uid: string,
    updatedData: UserDataType
): Promise<ResponseType> =>{
    
    try {

        //image upload is pending

        const userRef = doc(firestore, "users", uid);
        await updateDoc(userRef, updatedData);

        return {success: true, msg: "updated successfully"};
        
    } catch (error: any) {
        console.log('error updating user');
        return{success: false, msg: error?.message}; 
    }
}
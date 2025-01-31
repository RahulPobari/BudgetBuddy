import { ResponseType, WalletType } from "@/types";
import { uploadFileToCloudinary } from "./imageService";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { firestore } from "@/config/firebase";

export const createOrUpdateWallet = async (
    walletData: Partial<WalletType>
): Promise<ResponseType> => {
    try {

        let walletToSave = { ...walletData };

        if (walletData.image) {
            const imageUploadRes = await uploadFileToCloudinary(walletData.image, "wallets");
            if (!imageUploadRes.success) {
                return { success: false, msg: "Failed to upload wallet Icon" };
            }
            walletToSave.image = imageUploadRes.data;
        }

        if (!walletData?.id) {
            //new Wallet
            walletToSave.amount = 0;
            walletToSave.totalIncome = 0;
            walletToSave.created = new Date();
        }

        const walletRef = walletData?.id
            ? doc(firestore, "wallets", walletData?.id)
            : doc(collection(firestore, "wallets"));

        await setDoc(walletRef, walletToSave, { merge: true }) // updated only the data provided

        return { success: true, data: { ...walletToSave, id: walletRef.id } };

    } catch (error: any) {
        console.log('error creating or updating wallet', error);
        return { success: false, msg: error.message };
    }
}


export const deleteWallet = async (walletId: string): Promise<ResponseType> => {
    try {
        const walletRef = doc(firestore, "wallets", walletId);
        await deleteDoc(walletRef);

        //will delete all the transaction releated to wallet

        return { success: true, msg: "Wallet deleted successfully" };

    } catch (err: any) {
        console.log('error deleting wallet', err);
        return { success: false, msg: err.message };
    }
}
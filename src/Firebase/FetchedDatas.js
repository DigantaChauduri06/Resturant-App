import { getDocs } from "firebase/firestore";
import { burgers } from "./FirebaseCollections";

const getObjects = async (burgers) => {
    const bg = await getDocs(burgers);
    const data = await bg.docs.map((doc) => doc.data());
    return data;
}

const burger = getObjects(burgers);

export {
    burger,
}
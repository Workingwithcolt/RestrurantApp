import { FETCHING_ITEMS_LIMIT } from "../Helpers/helpers";
import { db } from "./firebaseConfigForServer";

import {
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    collection,
    getCountFromServer,
    query,
    where,
    setDoc,
    limit,
    orderBy,
    startAfter,
} from "firebase/firestore";

class ApiInterface {
    constructor(collectionName) {
        this.collectionRef = collection(db, collectionName);
    }

    addDocument = async (newDoc, customId = undefined) => {
        if (!customId) {
            return await addDoc(this.collectionRef, newDoc);
        }
        await setDoc(doc(this.collectionRef, customId), newDoc);
        return customId;
    };

    updateDocument = async (id, updatedDoc) => {
        const document = doc(db, this.collectionRef.id, id);
        await updateDoc(document, updatedDoc);
        return id;
    };

    deleteDocument = async (id) => {
        const document = doc(db, this.collectionRef.id, id);
        return deleteDoc(document);
    };

    getAllDocument = async (constrainArray, options) => {
        //options could be limit and cursor at the end 
        try {
            let result = []
            if (constrainArray) {
                let whereArray = []
                constrainArray.forEach(element => {
                    whereArray.push(where(...element));
                })

                let paginationStarting = options.cursor - FETCHING_ITEMS_LIMIT;

                let startIndex = paginationStarting > 0 ? paginationStarting : 0;
                const lastDataQuery = query(this.collectionRef, ...whereArray, orderBy(options.orderBy));
                const lastDataSnapshot = await getDocs(lastDataQuery);
                const lastQueryIndex = lastDataSnapshot.docs[startIndex];

                const currentSnapshot = query(this.collectionRef, ...whereArray, orderBy(options.orderBy), startAfter(lastQueryIndex), limit(options.limit));
                const data = await getDocs(currentSnapshot);
                data.forEach((doc) => {
                    let data = doc.data();
                    if (!data.id) {
                        result.push({ ...data, id: doc.id });
                    } else {
                        result.push(data);
                    }
                });
            }
            return result
        } catch (error) {
            console.error("Error fetching documents:", error);
            throw error;
        }
    };

    getDocument = async (id) => {
        const document = await doc(db, this.collectionRef.id, id);
        try {
            const userDocSnapshot = await getDoc(document);
            if (userDocSnapshot.exists()) {
                return userDocSnapshot.data();
            }
            return {};
        } catch (error) {
            console.error("Error fetching document:", error);
            throw error
        }
    };

    getCount = async (key, operator, value) => {
        var collectionRef = this.collectionRef;
        if (key && operator && value) collectionRef = query(this.collectionRef, where(key, operator, value));
        try {
            const snapshot = await getCountFromServer(collectionRef);
            const totalCount = snapshot.data().count
            return totalCount;
        } catch (e) {
            throw e.message;
        }
    }
}

export const RESTAURENT = "restaurent";


export var endpoints = {
    restuarent: new ApiInterface(RESTAURENT)
};
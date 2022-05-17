import { firestoreDb } from "./index"
import {
    getDocs,
    query,
    collection,
    where
} from 'firebase/firestore'
import { createAdaptedProductFromFirestore } from "../../adapters/productAdapter"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef)
            .then(response => {
                const products = response.docs.map(doc => {
                    return createAdaptedProductFromFirestore(doc)
                })
                resolve(products)
            })
            .catch(error => {
                reject(error)
            })
    })
}
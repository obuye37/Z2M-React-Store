import { doc, collection, writeBatch } from 'firebase/firestore'

import { db } from './firebase.utils'

const addCollectionAndDocs =  async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
    })
    await batch.commit()
    console.log("done")
  }

  export default addCollectionAndDocs
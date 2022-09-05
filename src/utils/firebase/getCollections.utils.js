import { collection, query, getDocs } from 'firebase/firestore'

import { db } from './firebase.utils'

const getCollectionAndDocs =  async () => {
    const collectionRef = collection(db, 'category')
    const querydb = query(collectionRef)

    const querySnapshot = await getDocs(querydb)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
         const { title, items } = docSnapshot.data();
         acc[ title.toLowerCase()] = items
         return acc
    },{})
    return categoryMap
  }

  export default getCollectionAndDocs
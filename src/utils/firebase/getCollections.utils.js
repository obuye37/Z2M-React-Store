import { collection, query, getDocs } from 'firebase/firestore'

import { db } from './firebase.utils'

const getCollectionAndDocs =  async () => {
    const collectionRef = collection(db, 'category')
    const querydb = query(collectionRef)

    const querySnapshot = await getDocs(querydb)
     return querySnapshot.docs.map(docSnapshot => docSnapshot.data()) 
  }

  export default getCollectionAndDocs
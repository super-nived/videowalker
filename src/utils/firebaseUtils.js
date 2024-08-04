// firebaseUtils.js

import { firestore } from "../firebase/firebase";


export const fetchAdvertisers = async () => {
  try {
    const querySnapshot = await firestore.collection('advertisements')
      .where('active', '==', 'yes')
      .limit(1)
      .get();
    
    const now = new Date(); // Current time for comparison

    const advertiserData = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const targetTime = data.targetTime && data.targetTime.toDate
        ? data.targetTime.toDate()
        : data.targetTime;

      return {
        id: doc.id,
        ...data,
        targetTime: targetTime,
      };
    });

    return { success: true, data: advertiserData };
  } catch (error) {
    console.error("Error fetching advertisers:", error);
    return { success: false, error: 'Failed to load advertisers.' };
  }
};

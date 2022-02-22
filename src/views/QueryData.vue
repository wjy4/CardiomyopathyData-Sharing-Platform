<template>
	<div>
	</div>
</template>

<script>
import { firestore } from '../main'
export default {
  setup(){
	
    firestore.collection("patientData").where("isFemale", "==", true)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
  }
}
</script>
<template>
  <div>
    <input id="upload" type="file" @change="onFileUploaded" accept="text/json" />
    <template v-if="!isProcessing">
      <button @click="onSubmit"> Submit data </button>
    </template>
    <template v-else>
      Populating
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
import { firestore } from "../main";
export default {
  setup(){
    const data = ref([]);
    const isProcessing = ref(false);
    
    function onFileUploaded(event) {
      var reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
      var obj = JSON.parse(event.target.result);
      data.value = obj
    }

    function onSubmit(){
      isProcessing.value = true;

      data.value.forEach(item => {
        for (const [key, value] of Object.entries(item)) {
          if(!isNaN(parseFloat(value))){
            item[key] = parseFloat(value);
          }
        }
      });

      data.value.forEach(item => {
        firestore.collection("patientData").add(item)
        .then(() => {
          console.log(`%cSuccess`, 'color: lime; font-size: 30px');
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      });

      isProcessing.value = false;
    }

    return {onFileUploaded, onSubmit, isProcessing, }
  }
}
</script>
<style>

</style>
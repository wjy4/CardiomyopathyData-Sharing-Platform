<template>
  <div class="container">
    <h1>Submit data</h1>
    <p>To submit data to visualise and share with others, you have 2 options, you can either: 
      <ul>
        <li>upload a file with the nessecary data or</li>
        <li>manually enter the data for each case study one by one below</li>
      </ul> 
    </p>
    <h2>Upload a file</h2>
    <form>
      <div class="form-group my-5">
        <input id="upload" type="file" @change="onFileUploaded" class="form-control-file" accept="text/json" />
        <template v-if="!isProcessing">
          <button class="btn btn-warning" @click="onSubmit"> Submit data </button>
        </template>

        <template v-else>
          <p>Populating</p>
        </template>
      </div>
    </form>

    <h2>Manual data insert</h2>

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
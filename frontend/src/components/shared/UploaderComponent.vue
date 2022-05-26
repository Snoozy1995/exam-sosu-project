<script setup lang="ts">import axios from 'axios';
import FileUpload from 'primevue/fileupload';
import {ref} from 'vue';
import Router from '../../router';

const showUploadFilesDialog=ref(false);
  function myUploader(event:any){
    var formData = new FormData();
    for(let file of event.files){ formData.append('file',file); formData.append('citizen',Router.currentRoute.value.params.id as string); }
    axios.post('/upload',formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(()=>{
      showUploadFilesDialog.value=false;
    })
  }
  </script>
  <template>
  <Button v-tooltip.left="'Upload dokumenter'" class='w-full' icon="pi pi-upload" v-on:click="()=>{showUploadFilesDialog=true}" />
  <Dialog header="Upload filer" v-model:visible="showUploadFilesDialog"><FileUpload :customUpload="true" :maxFileSize="10000000" @uploader="myUploader" :multiple="true" /></Dialog>
</template>

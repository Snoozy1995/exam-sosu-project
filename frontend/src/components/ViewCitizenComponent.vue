<script setup lang="ts">
import {ref} from "vue";
import {onMounted} from "vue";
import {FS3TermService} from "../services/fs3Term.service";
import {FS3Term} from "../models/fs3Term";

const fs3TermsService: FS3TermService = new FS3TermService();
const displayResponsive = ref(false);
const inputQuery = ref("");
const openCreateRoomModal = () => {
  displayResponsive.value = true;
};
const closeCreateRoomModal = () => {
  displayResponsive.value = false;
};
let fs3Terms = ref<FS3Term[]>([

]);
const fs3Types = ref([
  {
    term: 'Generelle oplysninger',

  },
  {
    term: 'Helbredstilstande'
  },
  {
    term: 'Funktionsevne tilstande'
  },
])

const rooms = ref([
  {
    uuid: '1',
    name: 'room1',
  },
  {
    uuid: '2',
    name: 'room2',
  },
  {
    uuid: '3',
    name: 'room3',
  },
]);

function onCreate() {
  if (!inputQuery.value) return;
  chatStore.setRoom(inputQuery.value, userStore.loggedInUser);
  roomStore.createRoom(inputQuery.value, userStore.loggedInUser.uuid)
  console.log(inputQuery.value)
}
function getFS3Terms() {
  fs3TermsService.getFS3Terms()
      .then((result) => fs3Terms.value = result.data as FS3Term[])
      .catch((error) => console.log("error: " + error))

}
onMounted(() => {
  getFS3Terms();
})
</script>


<template>
  <div class="surface-section w-30rem">
    <div class="font-medium text-3xl text-900 mb-3">Borger information:</div>
    <div class="text-500 mb-5">Her kan du lave ændringer på borger.</div>
    <ul class="list-none p-0 m-0 min-w-full">
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Fornavn</div>
        <div class="p-5 text-900 w-full md:w-8 md:flex-order-10 flex-order-0 p-2">Nicolai</div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Efternavn</div>
        <div class="p-5 text-900 w-full md:w-8 md:flex-order-10 flex-order-0 p-2">Hansen</div>
        <!--            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">-->
        <!--                <Chip label="Crime" class="mr-2">dsadas</Chip>-->
        <!--                <Chip label="Drama" class="mr-2">dsadas</Chip>-->
        <!--                <Chip label="Thriller"></Chip>-->
        <!--            </div>-->
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-meditext-centerum">Fødselsdag</div>
        <div class="p-5 text-900 w-full md:w-8 md:flex-order-0 flex-order-1 p-2">Michael Mann</div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Medicin</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
          A group of professional bank robbers start to feel the heat from police
          when they unknowingly leave a clue at their latest heist.
        </div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
        </div>

      </li>
      <Accordion>
        <AccordionTab v-for="type in fs3Terms" :key="type" :header="type.term">
          <p>{{ type.term }}</p>

          <Button class="m-1" @click="openCreateRoomModal" label="Ny" icon="pi pi-external-link"/>
        </AccordionTab>
      </Accordion>
    </ul>
  </div>
<div>

</div>
  <Dialog header="Generelle oplysninger" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'} "
          :style="{width: '50vw'}">
    <Listbox v-model="selectedRoom" :options="rooms" :multiple="false" :filter="false" optionLabel="name"
             listStyle="max-height:250px" style="width:30rem" filterPlaceholder="Search">
    </Listbox>
    <Button label="Annuller" icon="pi pi-times" @click="closeCreateRoomModal" class="p-button-text"/>
    <Button label="Opret" icon="pi pi-check" @click="onCreate" autofocus/>
  </Dialog>

  <Dialog header="Helbreds-tilstande" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'} "
          :style="{width: '50vw'}">
    <Listbox v-model="selectedRoom" :options="rooms" :multiple="false" :filter="false" optionLabel="name"
             listStyle="max-height:250px" style="width:30rem" filterPlaceholder="Search">
    </Listbox>
    <Button label="Annuller" icon="pi pi-times" @click="closeCreateRoomModal" class="p-button-text"/>
    <Button label="Opret" icon="pi pi-check" @click="onCreate" autofocus/>
  </Dialog>

  <Dialog header="Funktionsevne-tilstande" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'} "
          :style="{width: '50vw'}">
    <Listbox v-model="selectedRoom" :options="rooms" :multiple="false" :filter="false" optionLabel="name"
             listStyle="max-height:250px" style="width:30rem" filterPlaceholder="Search">
    </Listbox>
    <Button label="Annuller" icon="pi pi-times" @click="closeCreateRoomModal" class="p-button-text"/>
    <Button label="Opret" icon="pi pi-check" @click="onCreate" autofocus/>
  </Dialog>

</template>

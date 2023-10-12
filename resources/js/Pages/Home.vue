<template>
    <div class="border h-12 flex items-center justify-start">
        <router-link :to="{name: 'CreateFolder'}">
            <button class="border bg-slate-400 w-[100px] h-10 rounded-lg">Create Folder</button>
        </router-link>
    </div>
    
    <div class="grid grid-cols-4 gap-1 p-2 border">
       <div class="pt-1 grid grid-col w-[50%] lg:w-[20%]" v-for="folder in folders">
            <font-awesome-icon :icon="faFolder" class="flex w-[100%] h-[100%] text-blue-400"/>
            <p class="ml-[20%]">{{ folder.name }}</p>
       </div>
    </div>


    <!--/////////////////////////////RECENT UPLOADS/////////////////////////////-->
    <div class="px-1 mt-4">
        <p class="px-2 mb-2"> Recent Uploads</p>
        <div class="flex mt-0 border cursor-pointer"  v-for="file in files">
            <div class="pt-0 w-[52px] h-[67px] flex justify-center items-center">
                  <img :src="`/images/icons/${file.type}.png`" alt="">
            </div>
            <div class=" px-2 w-[100%] bg-slate cursor-pointer">
                <p class=" my-2 w-[80%] h-[20px]">{{ file.name + '.'+file.type }}</p>
                <p class=" mt-2 w-[80%] h-[20px] text-[10px]">{{ file.create_at }}</p>
            </div>


            <div class="t-0 mt-2 mr-2 w-[20px] h-[20px] flex flex-col">
                <div class="flex">
                    <font-awesome-icon :icon="faDownload" class="flex w-[100%] h-[100%] text-blue-400"/>
                </div>
                <div class=" mt-2 flex">
                    <font-awesome-icon :icon="faArchive" class="flex w-[100%] h-[100%] text-red-500" />
                </div>
                
                
            </div>
        </div>
    </div>
    
</template>
<script>

////////////////////////IMPORTS/////////////////////////////

import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faFolder,faDownload, faArchive} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default {
    //////////////////////Variables////////////////////////
    data(){
        return {
            folders:[],
            files:[]
        }
        
    },
    created: function(){
        this.getData();
    },
    ///////////////////////Components////////////////////////
    components:{

    },
    
    /////////////////////Methods//////////////////////////
    methods: {
        async getData(){
            try{
                const {data} = await axios.get('api/home/get-data');
                this.folders = data.folders;
                this.files = data.files;
                console.log(data);
            }catch(error){
                console.log(error);
            }
        }
    },
    ////////////////////Mounted///////////////////////////
    mounted() {
        
    },
    /////////////////////Computed/////////////////////////
    computed:{
        faFolder(){return faFolder;},
        faFile(){return faFile;},
        faDownload(){return faDownload},
        faArchive(){return faArchive},
    },

   

}   
</script>
<style lang="">

</style>
<template>
    <div class="p-2 w-full" >
       <div class="pt-2" style="width: 40px; height: 40px;  float: left; cursor: pointer;">
            <i><font-awesome-icon :icon="faArrowLeftIcon" size="lg" /></i>
       </div>
       <div class="pt-1" style="width: calc(100% - 100px); height: 40px; float: left; ">
            <p class="text-center mt-1 font-semibold">
                File Management
            </p>
       </div>
       <div class="pt-1 text-center" style="width: 40px; height: 40px; float: left; font-size: 130%;">
            <i><font-awesome-icon :icon="faMagnifyingGlass" /></i>
        </div>
        <div style="clear: both;"></div>
    </div>
    <!--////////////////////////////////////ROUTER VIEW/////////////////////////////////////-->
    <router-view></router-view>
</template>
<script>
import { faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default {
    ///////////////////////Components////////////////////////
    components:{
        
    },

    //////////////////////Variables////////////////////////
    data(){
        return {

        }
    },
    /////////////////////Methods//////////////////////////
    methods: {
        
    },
    /////////////////////Computed/////////////////////////
    computed:{
        faArrowLeftIcon(){
            return faArrowLeft
        },
        faMagnifyingGlass(){
            return faMagnifyingGlass
        }

    },
    ////////////////////Mounted///////////////////////////
    mounted() {
        
    },

}   
</script>
<style lang="">
    
</style>
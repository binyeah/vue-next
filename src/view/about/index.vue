<template>
    <div class="route" @click="pathGo">首页</div>
</template>
<script>
import { defineComponent,onMounted } from 'vue';
import {useRouter} from 'vue-router';
import {regist} from '../../api/api.js';
export default defineComponent({
    setup() {
        const router = useRouter();
        const pathGo = ()=>{
            router.push('/')
        };
        const  toRegist = async ()=>{
            let data = {
                name:"11",
                age:'12'
            }
            // console.log(data)
            try{
                let res =await regist(data)
                console.log(res)
            }catch(e){
                console.log(e)
            }
        }
        onMounted(()=>{
            toRegist()
        })
        return{
            pathGo
        }
    }
})
</script>
<style lang="scss" scoped>

</style>
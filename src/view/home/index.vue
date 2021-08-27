<template>
    <div>{{num}}</div>
    <div class="route" @click="pathGo">关于</div>
</template>
<script>
import { defineComponent,onMounted,computed, ref  } from 'vue';
import {useRouter} from 'vue-router';
import { useStore } from 'vuex'
import {login} from '../../api/api.js';
export default defineComponent({
    setup() {
        const store = useStore()
        const router = useRouter();
        const pathGo = ()=>{
            router.push('/about')
        };
        const  toLogin = async ()=>{
            let data = {
                name:"11",
                age:'12'
            }
            // console.log(data)
            try{
                let res =await login(data)
                console.log(res)
            }catch(e){
                console.log(e)
            }
        }
        const num = computed(() => store.getters.getChangedNum);
        onMounted(()=>{
            toLogin()
        })
        return{
            num,
            pathGo,
        }
    }
})
</script>
<style lang="scss" scoped>

</style>
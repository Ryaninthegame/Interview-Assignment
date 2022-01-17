<template>
    <div>
        <div>
            <button @click="signOut">Sign Out</button>
        </div>
    </div>
</template>

<script>
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
import { firebase } from "../db"

    export default{
        methods:{
            async signOut(){
                try{
                    const data = await firebase.auth().signOut();
                    console.log(data); 
                    this.$router.replace({name:"login"});
                }catch(error){
                    console.log(error);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

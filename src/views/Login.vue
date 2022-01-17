<template>
    <div>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" placeholder="Email" v-model="email">
            </div>
            <div class="password">
                <input type="password" placeholder="password" v-model="password">
            </div>
            <button type="submit">Login</button>
        </form>
        <span>Need an account? Click here to <router-link to="/register">register</router-link></span>
    </div>
</template>

<script>
import { firebase } from "../db"

    export default{
        data(){
            return{
                email: '',
                password: '',
            }
        },
        methods:{
            async pressed(){
                try{
                    const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                    console.log(val);
                    this.$router.replace({path: '/information/'+this.email});
                }catch(error){
                    alert(error);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

.error{
    color: red;
}
input{
    width:400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
}
button{
    width: 400px;
    height: 75px;
    font-size: 100%;
}
</style>

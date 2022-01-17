<template>
    <div>
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="Email">
            </div>
            <div class="password">
                <input type="password" v-model="password_1" placeholder="Input password">
            </div>
            <div class="password">
                <input type="password" v-model="password_2" placeholder="Input password again">
            </div>
            <button type="submit">Register</button>
            
        </form>
    </div>
</template>

<script>
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { firebase } from "../db"

    export default{
        data(){
            return{
                email: "",
                password_1: '',
                password_2: '',
            }
        },
        methods:{
            async pressed(){
                try{
                    if(this.password_1 === this.password_2){
                        const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password_1);
                        console.log(user);
                        this.$router.replace({path: '/information/'+this.email});
                    }
                    else{
                        alert("The passwords entered are not the same. Please re-enter them.")
                    }
                }catch(error){
                    alert(error);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.error{
    color: red;
    font-size: 18px;
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

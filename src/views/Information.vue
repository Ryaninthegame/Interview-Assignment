<template>
    <div id="information">
        <h1>Profile Page</h1>
        <h3>{{this.mail}}</h3>
        <button v-if="button" @click="changeState">CHANGE PASSWORD</button>
        <form v-if="update" @submit.prevent="changePassword">
            <div>
                <input type="password" placeholder="Input new password" v-model="password_1">
            </div>
            <div>
                <input type="password" placeholder="Input new password again" v-model="password_2">
            </div>
            <button type="submit">Enter</button>
        </form>
        <top-header></top-header>
    </div>
    
</template>

<script>
import { firebase } from "../db"
import TopHeader from "../components/Top-Header";

    export default{
        components:{
            'top-header':TopHeader
        },
        data(){
            return{
                mail : this.$route.params.mail,
                update : false,
                button : true,
                password_1 : '',
                password_2 : ''
            }
        },
        methods:{
            changeState(){
                this.update = true;
                this.button = false;
            },
            changePassword(){
                // check haha OO
                // GG
                var user = firebase.auth().currentUser;
                if((this.password_1 === this.password_2) && (this.password_1.length>=6) && (this.password_2.length>=6)){
                    user.updatePassword(this.password_2);
                    alert("Success. Please login in again");
                    this.$router.replace({name:"login"});
                }
                else if((this.password_1 != this.password_2)){
                    alert("The passwords entered are not the same. Please re-enter them.")
                }
                else if((this.password_1.length<6) || (this.password_2.length<6)){
                    alert("Password should be at least 6 characters.")
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

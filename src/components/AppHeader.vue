<script setup>
import { useRouter } from "vue-router"
const router = useRouter()


function register() {
  router.push({ name: "register" })
  console.log("click")
}


</script>


<template>
  <div>
    <v-app-bar>
      <v-app-bar-title>
        <v-btn to="/">Vue+Firebase</v-btn>
      </v-app-bar-title>

      <v-card-actions>
        <v-btn-group>
          <!-- <v-btn @click="goToLogin">Login</v-btn> -->
          <v-btn to="/auth">Login</v-btn>
          <v-btn @click="register">Register</v-btn>
        </v-btn-group>
      </v-card-actions>
    </v-app-bar>
  </div>
</template>


<style></style>
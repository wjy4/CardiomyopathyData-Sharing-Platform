<template>
<div class="container">
  <h1>Register</h1>
  <form :model="form" @submit.prevent="submit">
    <label for="name">Name</label>
    <input
      id="name"
      type="name"
      class="form-control"
      name="name"
      value
      required
      autofocus
      v-model="form.name"
    />
    <label for="email">Email</label>
    <input
      id="email"
      type="email"
      class="form-control"
      name="email"
      value
      required
      autofocus
      v-model="form.email"
    />
    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      class="form-control"
      name="password"
      required
      v-model="form.password"
    />
    <button class="btn btn-primary" type="button" @click="submit">Register</button>
  </form>
</div>
</template>


<script>
import firebase from "firebase";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
      email: "",
      password: ""
    });

    function submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: form.name,
            })
            .then(() => {});
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    }

    return {submit, form};
  },
};
</script>
<template>
  <h1>Register</h1>
  <div>
    <el-form :model="form" @submit.prevent="submit">
      <el-form-item label="Name">
          <el-input
            id="name"
            type="name"
            class="form-control"
            name="name"
            value
            required
            autofocus
            v-model="form.name"
          />
      </el-form-item>
      <el-form-item label="Email">
          <el-input
            id="email"
            type="email"
            class="form-control"
            name="email"
            value
            required
            autofocus
            v-model="form.email"
          />
      </el-form-item>
      <el-form-item label="Password">
          <el-input
            id="password"
            type="password"
            class="form-control"
            name="password"
            required
            v-model="form.password"
          />
      </el-form-item>
      <div>
        <div>
          <el-button type="primary" @click="submit">Register</el-button>
        </div>
      </div>
    </el-form>
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
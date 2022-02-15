<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="name">Name</label>
      <div>
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
      </div>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <div>
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
      </div>
    </div>
    <div>
      <label for="password">Password</label>

      <div>
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          v-model="form.password"
        />
      </div>
    </div>
    <div>
      <div>
        <button @click="submit">Register</button>
      </div>
    </div>
  </form>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {});
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    },
  },
};
</script>
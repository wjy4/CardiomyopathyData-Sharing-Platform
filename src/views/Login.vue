<template>
  <div>Login</div>
  <div>
    <form @submit.prevent="submit">
      <div>
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
          <button @click="submit">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
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
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
            //some stuff for after login
        })
        .catch((err) => {
          console.log("error: " + err);
        });
        const user = firebase.auth().currentUser;

        if(user){
            console.log("logged in");
        }else{
            console.log("not logged in")
        }
    },
  },
};
</script>
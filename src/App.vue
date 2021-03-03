<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { db } from "@/api/db";
import firebase from "firebase";

export default {
  data() {
    return {
      documents: [],
    };
  },
  mounted() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        "zeeshanweb.official@gmail.com",
        "password"
      )
      .then((data) => {
        data.user
          .updateProfile({
            displayName: this.form.name,
          })
          .then(() => {});
      })
      .catch((err) => {
        this.error = err.message;
      });
  },
  firestore: {
    documents: db.collection("devices"),
  },
};
</script>
<style lang="scss">
</style>

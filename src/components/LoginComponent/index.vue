<script>
import axios from "../../../node_modules/axios";
import global_ from '../Global'
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  components: {},
  methods: {
    loginHandler() {
      loginRequest(this);
    },
  },
};

function loginRequest(input) {
  const form = new FormData();
  form.append("username", input.username);
  form.append("password", input.password);
  let vm = input;
  console.log(input.$store.state.status.loggedIn);
  if (input.username && input.password) {
    axios
      .post(global_.apiUrl+"/login", form)
      .then(function (response) {
        console.log(input.$store.state.status.loggedIn);
        console.log(response);
        // vm.$cookies.set("username", vm.userID);
      })
      .catch(function (error) {
        vm.message = error.response.data.error;
        console.log(error.response.data.error);
        input.$store.commit("loginSuccess");
        console.log(input.$store.state.status.loggedIn);
      });
  } else {
    vm.message = 'Please type username and password';
  }
  return;
}
</script>

<template src="./template.html"></template>
<style src="./style.css" scoped></style>
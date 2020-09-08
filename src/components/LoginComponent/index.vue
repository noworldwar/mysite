<script>
import axios from "../../../node_modules/axios";
export default {
  name: "Login",
  data() {
    return {
      userID: "",
      password: "",
      agentID: "",
      token: "",
    };
  },
  components:{
   
  },
  methods: {
    loginHandler() {
      loginRequest(this)
    }
  },
};

function loginRequest(input) {
  const form = new FormData();
      form.append("userID", input.userID);
      form.append("password", input.password);
      form.append("agentID", input.agentID);
      let vm = input;
      axios
        .post("https://dev-backoffice-api.weapi247.com/login", form)
        .then(function (response) {
          vm.token = response.data.token;
          vm.$cookies.set('userID', vm.userID)
          vm.$router.push({path: '/'})
        })
        .catch(function (error) {
          console.log(error);
        });
}

</script>

<template src="./template.html"></template>
<style src="./style.css" scoped></style>
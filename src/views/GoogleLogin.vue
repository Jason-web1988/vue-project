<template>
<div>
  <div class="g-signin2" data-onsuccess="onSignIn"></div>
  <div id="google-signin-btn"></div>
      <!-- <div id="g_id_onload"
         data-client_id="728237654091-mb4bcqo9m76evlncdb4ji2mt0stf6d2m.apps.googleusercontent.com"
         data-login_uri="http://localhost:8081/googlelogin"
         data-auto_prompt="false">
      </div>
      <div class="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left">
      </div> -->
     <div>
    <button type="button" @click="signOut">로그아웃</button>
   </div> 
</div>
</template>
<script>
// 해당건 지원중단 됨 https://developers.google.com/identity/sign-in/web/sign-in
export default {
  mounted() {
      window.gapi.signin2.render("google-signin-btn", {
          // 'scope': 'profile email',
          // 'width': 240,
          // 'height': 50,
          // 'longtitle': true,
          // 'theme': 'dark',
          'onsuccess': this.onSignIn,
          'onfailure': this.onFailure
        
        })     
  },
  methods: {
    onSignIn (googleUser) {
      console.log("googleUser : ", googleUser);
      const profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); 
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());
      const id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
    },
    signOut() {
      window.gapi.auth2.getAuthInstance().disconnect();
      // .then(function () {
      // console.log('User signed out.');
   // })
    }
    ,
    onFailure(error){
      console.log(error);
    }
  }
}
</script>

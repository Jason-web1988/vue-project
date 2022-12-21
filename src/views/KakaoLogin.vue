<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
        <img
            src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            width="222"
        />
    </a>
  </div>
  <div>
    <button type="button" @click="kakaoLogout">카카오 로그아웃</button>
   </div> 
</template>
<script>
export default {
    methods : {
        kakaoLogin(){
            console.log("kakaoLogin 시작");
            window.Kakao.Auth.login({
                 scope : 'profile_nickname',            
                success : this.getKakaoAccount,
            });
             console.log("kakaoLogin 끝");
        },
        getKakaoAccount(){
            console.log("getKakaoAccount 시작");
            window.Kakao.API.request({
                url:'/v2/user/me',            
                success : res => {
                    console.log(res);
                    const kakao_account = res.kakao_account;
                    const nickname = kakao_account.profile.nickname;    //카카오 닉네임
                    const email = kakao_account.email;          //카카오 이메일
                    console.log('kakao_account : ', kakao_account);
                    console.log('nickname : ', nickname);
                    console.log('email : ', email);


                    //로그인 처리 구현
                    alert("로그인 성공")
                    console.log("getKakaoAccount 끝");
                },
                fail: error => {
                    console.log(error);
                }
            })    
        },
        kakaoLogout(){
            if(!window.Kakao.Auth.getAccessToken()){
                console.log("Not logged in.")
                return;
            }

            window.Kakao.Auth.logout((response) => {
                //로그아웃
                console.log("access token : ", window.Kakao.Auth.getAccessToken());
                console.log("log out : ", response);

                console.log("response : ", response);
                alert("로그아웃 성공")
            })
        }
    }
}
</script>

<template>
    <section id="login">
        <div class="area_left">
            <h1 class="main_logo">
                <a href="index.html"
                    ><img src="../assets/img/logo_white.png" alt="퀀텀로고"
                /></a>
            </h1>
            <div class="wrap_cnt">
                <h2 class="main_titl">PMS 로그인</h2>
                <form class="main_cnt">
                    <div class="inner_userId">
                        <label for="id">아이디</label>
                        <input
                            type="text"
                            id="id"
                            placeholder="아이디를 입력하세요."
                        />
                    </div>
                    <div class="inner_userPassword">
                        <label for="pw">비밀번호</label>
                        <input
                            type="password"
                            id="pw"
                            placeholder="비밀번호를 입력하세요."
                        />
                    </div>
                    <button class="cursor">로그인</button>
                </form>
            </div>
            <div class="copy">
                © 2021 Quantum Solution. ALL RIGHTS RESERVED.
            </div>
        </div>
        <div class="area_right">
            <img
                src="../assets/img/login_img.png"
                alt="태양광 패널 이미지"
                class="img_login"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: "login",
    components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
li {
    list-style: none;
}
img {
    display: block;
}

body {
    background-color: #f4f7fc;
}
#login h1,
h2,
h3,
h4,
div,
p,
ul,
li,
span,
a,
label,
input,
button,
option,
select {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    font-weight: 400;
}
/* 
    font weight
    Thin 100
    Light 300
    Regular 400
    Medium 500
    Bold 700
    Black 900
  */

/* 공통 */

html,
body {
    height: 100%;
    scroll-behavior: smooth;
}
::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #999;
}
#login {
    display: flex;
    background-color: #2a58ae;
    width: 100%;
    height: 100%;
}
.area_left {
    width: 27%;
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.area_left > * {
    position: relative;
}
.area_left .wrap_cnt .main_titl {
    font-size: 48px;
    color: #ffbc3a;
    margin-bottom: 50px;
    font-weight: 700;
}
.area_left .wrap_cnt .main_cnt {
    display: flex;
    flex-direction: column;
}
.area_left .wrap_cnt .main_cnt > div > * {
    position: relative;
    width: 100%;
}
.area_left .wrap_cnt .main_cnt .inner_userId {
    position: relative;
    margin-bottom: 16px;
}
.area_left .wrap_cnt .main_cnt .inner_userPassword {
    position: relative;
    margin-bottom: 32px;
}
.area_left .wrap_cnt .main_cnt .inner_userId input {
    background: #fff url(../assets/img/ico_user.png) no-repeat center left 16px;
}
.area_left .wrap_cnt .main_cnt .inner_userPassword input {
    background: #fff url(../assets/img/ico_lock.png) no-repeat center left
        17.5px;
}
.area_left .wrap_cnt .main_cnt label {
    line-height: 32px;
    color: #fff;
}
.area_left .wrap_cnt .main_cnt input {
    height: 48px;
    border: 2px solid #ddd;
    border-radius: 4px;
    position: relative;
    display: block;
    color: #999;
    padding-left: 48px;
}
.area_left .wrap_cnt .main_cnt button {
    height: 48px;
    width: 100%;
    background-color: #313748;
    border: 2px solid #171a24;
    border-radius: 4px;
    font-weight: 700;
    color: #fff;
}
.area_left .copy {
    font-size: 12px;
    opacity: 0.5;
    color: #fff;
}
.area_right {
    width: 73%;
}
.area_right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>

<template>
    <section id="gnbSet">
        <nav id="gnb">
            <h1 class="main_logo">
                <router-link to="/dash-board"
                    ><img src="../../assets/img/logo_white.png" alt="퀀텀로고"
                /></router-link>
            </h1>
            <div class="depth_1">
                <router-link to="/dash-board"
                    ><h2 class="depth_1_titl selected_1">
                        대시보드
                    </h2></router-link
                >
                <router-link to="/pcs"
                    ><h2 class="depth_1_titl">PCS</h2></router-link
                >
                <router-link to="/battery"
                    ><h2 class="depth_1_titl">Battery</h2></router-link
                >
                <router-link to="/rack"
                    ><h2 class="depth_1_titl">Rack,Module</h2></router-link
                >
                <router-link to="/system"
                    ><h2 class="depth_1_titl">시스템 관리</h2></router-link
                >
            </div>
            <router-link to="/login" class="logout">
                <img src="../../assets/img/ico_logout.png" alt="로그아웃" />
                <p>로그아웃</p>
            </router-link>
        </nav>
    </section>
</template>

<script>
export default {
    name: "gnbSet",
    components: {},
};
</script>

<style>
#gnbSet * {
    color: #444;
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
#gnbSet {
    width: 100%;
    background-color: #f4f7fc;
}
.cursor {
    cursor: pointer;
}
.router-link-active h2 {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
#gnb {
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    width: 100%;
    height: 60px;
    background-color: #2a58ae;
    display: flex;
}
#gnb .main_logo {
    margin-left: 32px;
}
#gnb .depth_1 {
    display: flex;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
}
#gnb .depth_1 .depth_1_titl {
    display: flex;
    align-items: center;
    min-width: 120px;
    height: 40px;
    text-align: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
}
#gnb .logout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 114px;
    background-color: rgba(0, 0, 0, 0.1);
    height: 60px;
    color: #fff;
}
#gnb .logout img {
    width: 14px;
    height: 14px;
    text-align: center;
    margin-bottom: 4px;
}
#gnb .logout p {
    color: #fff;
    font-size: 14px;
}
.lnb_wrap {
    width: 100%;
    height: 48px;
    position: relative;
    background: #fff;
    border-bottom: 1px solid #ddd;
}
.lnb {
    height: 100%;
    margin: 0 auto;
    position: absolute;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    display: none;
}

.lnb a {
    margin-right: 40px;
}
.lnb a:last-child {
    margin-right: 0px;
}
.lnb .depth_2_titl {
    font-weight: 700;
}
.cnb_wrap {
    width: 100%;
    position: relative;
    height: 58px;
    margin-top: 32px;
    border-bottom: 1px solid #ddd;
}
.cnb_wrap .depth_3_wrap {
    position: absolute;
    height: 100%;
    display: flex;
    display: none;
}
.cnb_wrap .depth_3_wrap:first-child {
    display: flex;
}
.cnb_wrap .depth_3_wrap .depth_2_titl {
    display: flex;
    margin-right: 40px;
    line-height: 40px;
    font-size: 28px;
    font-weight: 500;
    color: #313748;
    margin-left: 32px;
}
.cnb_wrap .depth_3_wrap .depth_2_titl::before {
    content: "";
    background: url(../../assets/img/icon_pcs.png) no-repeat center;
    width: 40px;
    height: 40px;
    position: relative;
    top: 0%;
    left: 0%;
    margin-right: 15px;
    display: block;
}
.cnb_wrap .depth_3_wrap .depth_3 {
    display: flex;
}
.cnb_wrap .depth_3_wrap .depth_3 a {
    margin-right: 40px;
    position: relative;
}
.cnb_wrap .depth_3_wrap .depth_3_titl {
    line-height: 40px;
    font-weight: 500;
}
.cnb_wrap .depth_3_wrap .depth_3_titl:last-child {
    margin-right: 0px;
}
</style>

<template>
    <section id="lnbSet">
        <div class="lnb_wrap wrap">
            <nav class="lnb depth_2 list_pcs">
                <router-link to="/pcs/pcs-situation"
                    ><h3 class="depth_2_titl">PCS 현황</h3></router-link
                >
                <router-link to="/pcs/pcs-usage/"
                    ><h3 class="depth_2_titl">PCS 사용량</h3></router-link
                >
                <router-link to="/pcs/pcs-history"
                    ><h3 class="depth_2_titl">PCS 이력</h3></router-link
                >
                <router-link to="/pcs/pcs-menual"
                    ><h3 class="depth_2_titl">PCS 수동제어</h3></router-link
                >
                <router-link to="/pcs/pcs-setup"
                    ><h3 class="depth_2_titl">PCS 설정</h3></router-link
                >
            </nav>
            <nav class="lnb depth_2 list_battery">
                <router-link to="/battery/battery-situation"
                    ><h3 class="depth_2_titl selected_2">Battery 현황</h3></router-link
                >
                <router-link to="/battery/battery-history"
                    ><h3 class="depth_2_titl">Battery 운전이력</h3></router-link
                >
                <router-link to="/battery/battery-menual"
                    ><h3 class="depth_2_titl">Battery 수동제어</h3></router-link
                >
                <router-link to="/battery/battery-setup"
                    ><h3 class="depth_2_titl">Battery 설정</h3></router-link
                >
            </nav>
            <nav class="lnb depth_2 list_rack_module">
                <router-link to="/rack/rack-situation"
                    ><h3 class="depth_2_titl selected_2">Rack 현황</h3></router-link
                >
                <router-link to="/rack/rack-setup"
                    ><h3 class="depth_2_titl">Rack, Module 설정</h3></router-link
                >
            </nav>
            <nav class="lnb depth_2 list_system">
                <router-link to="/system/system-menual"
                    ><h3 class="depth_2_titl selected_2">
                        기타 기기 수동 제어
                    </h3></router-link
                >
                <router-link to="/system/system-download"
                    ><h3 class="depth_2_titl">데이터 다운로드</h3></router-link
                >
                <router-link to="/system/system-setup"
                    ><h3 class="depth_2_titl">기타 기기 설정</h3></router-link
                >
                <router-link to="/system/system-administrator"
                    ><h3 class="depth_2_titl">관리자 관리</h3></router-link
                >
                <router-link to="/system/system-code"
                    ><h3 class="depth_2_titl">코드 관리</h3></router-link
                >
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: "lnbSet",
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

#lnbSet h1,
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
button {
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
#lnbSet {
    width: 100%;
    background-color: #f4f7fc;
    height: 48px;
}
.cursor {
    cursor: pointer;
}

.lnb_wrap {
    width: 100%;
    height: 100%;
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
.lnb .depth_2 {
    display: none;
}
.lnb .depth_2_titl {
    font-weight: 700;
    color: #444444;
}
.lnb .router-link-active h3.depth_2_titl {
    color: #2a58ae;
}
</style>

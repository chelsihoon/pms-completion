<template>
    <section id="cnbSet">
        <div class="cnb_wrap wrap list_pcs">
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">PCS 현황</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">PCS 사용량</h3>
                <nav class="cnb depth_3 list_pcs_used">
                    <router-link to="/pcs/pcs-usage/time" class=""
                        ><h4 class="depth_3_titl">시간별</h4></router-link
                    >
                    <router-link to="/pcs/pcs-usage/day"
                        ><h4 class="depth_3_titl">일별</h4></router-link
                    >
                    <router-link to="/pcs/pcs-usage/month"
                        ><h4 class="depth_3_titl">월별</h4></router-link
                    >
                    <router-link to="/pcs/pcs-usage/year"
                        ><h4 class="depth_3_titl">연도별</h4></router-link
                    >
                </nav>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">PCS 이력</h3>
                <nav class="cnb depth_3 list_pcs_history">
                    <router-link
                        to="/pcs/pcs-history/operation"
                        class="selected_cnt"
                        ><h4 class="depth_3_titl">운행이력</h4></router-link
                    >
                    <router-link to="/pcs/pcs-history/trouble"
                        ><h4 class="depth_3_titl">고장이력</h4></router-link
                    >
                </nav>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">PCS 수동제어</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">PCS 설정</h3>
                <nav class="cnb depth_3 list_pcs_setting">
                    <router-link
                        to="/pcs/pcs-setup/setting"
                        class="selected_cnt"
                        ><h4 class="depth_3_titl">PCS 설정</h4></router-link
                    >
                    <router-link to="/pcs/pcs-setup/default"
                        ><h4 class="depth_3_titl">
                            자동제어 기준값
                        </h4></router-link
                    >
                    <router-link to="/pcs/pcs-setup/schedule"
                        ><h4 class="depth_3_titl">스케줄 설정</h4></router-link
                    >
                </nav>
            </div>
        </div>
        <div class="cnb_wrap wrap list_battery">
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">Battery 현황</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">Battery 운전이력</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">Battery 수동제어</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">Battery 설정</h3>
            </div>
        </div>
        <div class="cnb_wrap wrap list_rack_module">
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">Rack 현황</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">Rack, Module 설정</h3>
            </div>
        </div>
        <div class="cnb_wrap wrap list_system">
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">기타 기기 수동 제어</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">데이터 다운로드</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">기타 기기 설정</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">관리자 관리</h3>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">코드 관리</h3>
                <input
                    type="button"
                    name=""
                    id=""
                    value="코드 등록"
                    @click="handle_toggle_1"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "cnbSet",
    components: {},
    data() {
        return {
            modal_1: false,
        };
    },
    methods: {
        handle_toggle_1: function () {
            this.modal_1 = !this.modal_1;
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #444;
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

#cnbSet h1,
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
#cnbSet {
    width: 100%;
    background-color: #f4f7fc;
    position: relative;
    height: 58px;
}
.cursor {
    cursor: pointer;
}
.router-link-active h4 {
    color: #2a58ae !important;
}
.depth_3 .router-link-active::after {
    content: "" !important;
    height: 3px !important;
    width: 100% !important;
    background: #2a58ae !important;
    position: absolute !important;
    left: 0 !important;
    bottom: -1px !important;
}
#cnbSet .cnb_wrap {
    width: 100%;
    height: 100%;
    position: relative;
    border-bottom: 1px solid #ddd;
    display: none;
}
/* lnb 번호 지정 1 ~ 4 */
#cnbSet .cnb_wrap:nth-child(0) {
    display: flex;
}
#cnbSet .cnb_wrap .depth_3_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    display: none;
}
/* cnb 번호 지정 */
#cnbSet .cnb_wrap .depth_3_wrap:nth-child(0) {
    display: flex;
}
#cnbSet .cnb_wrap .depth_3_wrap .depth_2_titl {
    display: flex;
    margin-right: 40px;
    line-height: 40px;
    font-size: 28px;
    font-weight: 500;
    color: #313748;
    margin-left: 32px;
}
#cnbSet .list_pcs .depth_3_wrap .depth_2_titl::before {
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
#cnbSet .list_battery .depth_3_wrap .depth_2_titl::before {
    content: "";
    background: url(../../assets/img/icon_battery.png) no-repeat center;
    width: 40px;
    height: 40px;
    position: relative;
    top: 0%;
    left: 0%;
    margin-right: 15px;
    display: block;
}
#cnbSet .list_rack_module .depth_3_wrap .depth_2_titl::before {
    content: "";
    background: url(../../assets/img/icon_rack.png) no-repeat center;
    width: 40px;
    height: 40px;
    position: relative;
    top: 0%;
    left: 0%;
    margin-right: 15px;
    display: block;
}
#cnbSet .list_system .depth_3_wrap .depth_2_titl::before {
    content: "";
    background: url(../../assets/img/icon_setup.png) no-repeat center;
    width: 40px;
    height: 40px;
    position: relative;
    top: 0%;
    left: 0%;
    margin-right: 15px;
    display: block;
}
#cnbSet .list_system > div:last-child {
    justify-content: space-between;
    width: 100%;
}
#cnbSet .list_system > div:last-child input {
    width: 136px;
    height: 48px;
    border-radius: 4px;
    background-color: #2a58ae;
    border: 1px solid #0f3884;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    margin-right: 32px;
    cursor: pointer;
}
#cnbSet .cnb_wrap .depth_3_wrap .depth_3 {
    display: flex;
}
#cnbSet .cnb_wrap .depth_3_wrap .depth_3 a {
    margin-right: 40px;
    position: relative;
}
#cnbSet .cnb_wrap .depth_3_wrap .depth_3_titl {
    line-height: 40px;
    font-weight: 500;
    color: #777777;
}
#cnbSet .cnb_wrap .depth_3_wrap .depth_3_titl:last-child {
    margin-right: 0px;
}
</style>

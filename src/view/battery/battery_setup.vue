<template>
    <section id="battery_setup">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="battery_setup_cnt">
            <cnbSet></cnbSet>
            <section class="battery_setup_cnt_wrap">
                <batteryCntTop></batteryCntTop>
                <div class="cnt_left cnt_wrap">
                    <h4 class="cnt_titl">운영 설정</h4>
                    <div class="cnt_inner_left">
                        <ul class="list">
                            <li class="sub_titl"><h5>운영 정보</h5></li>
                            <li class="itm">
                                <p>PCS 명</p>
                                <input type="text" value="PCS#1" disabled />
                            </li>
                            <li class="itm">
                                <p>PCS 용량</p>
                                <input type="number" value="100" disabled />
                            </li>

                            <li class="itm toggle_box">
                                <p>사용 여부</p>
                                <div>
                                    <input type="checkbox" id="toggle_box" />
                                    <label for="toggle_box">
                                        <span class="toggle_btn"></span>
                                    </label>
                                </div>
                            </li>
                            <li class="itm">
                                <p>Battery 용량 [kW]</p>
                                <input type="number" value="30" />
                            </li>
                        </ul>
                    </div>
                    <div class="cnt_inner_right">
                        <ul class="list">
                            <li class="sub_titl"><h5>운영 파라미터</h5></li>
                            <li class="itm">
                                <p>Battery 운영 상한 SOC [%]</p>
                                <input type="number" value="90" />
                            </li>
                            <li class="itm">
                                <p>Battery 운영 상한 SOC [%]</p>
                                <input type="number" value="20" />
                            </li>
                        </ul>
                    </div>
                    <div class="save_btn">
                        <input type="button" value="저장" />
                    </div>
                </div>
            </section>
        </section>
        <mainFooter></mainFooter>
    </section>
</template>

<script>
import mainHeader from "../../components/common/main_header.vue";
import gnbSet from "../../components/common/gnb.vue";
import mainFooter from "../../components/common/main_footer.vue";
import cnbSet from "../../components/common/cnb.vue";
import lnbSet from "../../components/common/lnb.vue";
import batteryCntTop from "../../components/battery_contents/battery_cnt_top.vue";

export default {
    name: "batterySetup",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        batteryCntTop,
    },
};
</script>

<style>
/*
    font weight
    Thin 100
    Light 300
    Regular 400
    Medium 500
    Bold 700
    Black 900
  */
input[type="date"]::-webkit-clear-button,
input[type="date"]::-webkit-inner-spin-button {
    display: none;
}
input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    left: -12px;
    width: 20px;
    height: 20px;
    z-index: 1;
}
#battery_setup {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#battery_setup #lnbSet .lnb_wrap .depth_2:nth-child(2) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#battery_setup #cnbSet .cnb_wrap:nth-child(2) {
    display: flex;
}
/* cnb 번호 지정 */
#battery_setup #cnbSet .cnb_wrap .depth_3_wrap:nth-child(4) {
    display: flex;
}
#battery_setup_cnt .battery_setup_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}

#battery_setup_cnt .battery_setup_cnt_wrap .cnt_left {
    padding: 24px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    margin-top: 16px;
}

#battery_setup_cnt .battery_setup_cnt_wrap .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_left > div {
    display: flex;
    flex-direction: column;
    width: 892px;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_wrap .save_btn {
    width: 100%;
    display: flex;
    position: relative;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_wrap .save_btn input {
    width: 136px;
    height: 48px;
    background-color: #2a58ae;
    border: 1px solid #0f3884;
    border-radius: 4px;
    margin-left: auto;
    margin-top: auto;
    cursor: pointer;
    color: #fff;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_wrap .list li {
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 16px;
    align-items: center;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_wrap .list li:last-child {
    margin-bottom: 0px;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_left .list .sub_titl {
    height: 40px;
    background-color: #313748;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_wrap .list .sub_titl h5 {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_wrap .list li p {
    color: #222222;
    font-size: 16px;
    font-weight: 500;
}

#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_wrap
    .list
    li:not(.toggle_box)
    input {
    min-width: 644px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #444444;
    padding: 10px 16px;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_wrap
    .list
    li:not(.toggle_box)
    input:focus {
    outline: 2px solid #2a58ae;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_wrap .list li input:disabled {
    background-color: #f5f5f5;
    border: 1px solid #dddddd;
    color: #999999;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_right {
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_right .list {
    width: 100%;
    margin-bottom: auto;
}
#battery_setup_cnt .battery_setup_cnt_wrap .cnt_left .list .toggle_box > div {
    min-width: 580px;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"] {
    display: none;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    .toggle_btn {
    display: block;
    position: relative;
    width: 48px;
    height: 24px;
    border-radius: 50px;
    background: #2a58ae;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    .toggle_btn:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 26px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 100%;
    transition: left 0.3s;
    color: #444444;
    cursor: pointer;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]
    + label {
    position: relative;
    cursor: pointer;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]
    + label:after {
    content: "사용함";
    display: block;
    position: absolute;
    color: #2a58ae;
    font-weight: 500;
    right: -96px;
    top: 0;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]
    + label
    .toggle_btn:after {
    content: "사용안함";
    display: block;
    position: absolute;
    color: #444444;
    left: -64px;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
}

#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn:before {
    left: 2px;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn {
    background-color: #becce7;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn:after {
    color: #2a58ae;
    font-weight: 500;
}
#battery_setup_cnt
    .battery_setup_cnt_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label:after {
    color: #444;
    font-weight: 400;
}
</style>

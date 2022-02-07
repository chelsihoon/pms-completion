<template>
    <section id="battery_menual">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="battery_menual_cnt">
            <cnbSet></cnbSet>
            <section class="battery_menual_cnt_wrap">
                <batteryCntTop></batteryCntTop>
                <div class="cnt_left">
                    <div class="cnt_left_top cnt_wrap">
                        <h4 class="cnt_titl">Battery 운행상태</h4>
                        <div>
                            <h5>릴레이 상태</h5>
                            <p>ON</p>
                        </div>
                    </div>
                    <div class="cnt_left_btm cnt_wrap">
                        <h4 class="cnt_titl">Battery 제어</h4>
                        <div>
                            <h5>릴레이 기동 / 정지</h5>
                            <input
                                type="button"
                                value="ON"
                                class="on_btn"
                                @click="handle_toggle"
                                :class="{ able: tggl_btn === false }"
                            />
                            <input
                                type="button"
                                value="OFF"
                                @click="handle_toggle"
                                class="off_btn"
                                :class="{ able: tggl_btn }"
                            />
                        </div>
                        <div>
                            <h5>배터리 시스템 초기화</h5>
                            <input
                                type="button"
                                value="초기화"
                                class="able"
                                @click="handle_toggle_1"
                            />
                        </div>
                    </div>
                </div>
                <div class="cnt_right cnt_wrap">
                    <div class="cnt_table">
                        <h4 class="cnt_titl">Battery 수동 제어 이력</h4>

                        <ul class="list">
                            <li class="sub_titl"><p>No</p></li>
                            <li class="sub_titl"><p>시간</p></li>
                            <li class="sub_titl"><p>장치</p></li>
                            <li class="sub_titl"><p>릴레이 상태</p></li>
                            <li class="sub_titl"><p>배터리 시스템</p></li>
                        </ul>
                        <ul class="list">
                            <li class="itm"><p>37526</p></li>
                            <li class="itm"><p>2020-08-04 05:17:51.0</p></li>
                            <li class="itm"><p>PCS #1</p></li>
                            <li class="itm"><p>ON</p></li>
                            <li class="itm"><p>-</p></li>
                        </ul>
                        <ul class="list">
                            <li class="itm"><p>37525</p></li>
                            <li class="itm"><p>2020-08-04 05:17:51.0</p></li>
                            <li class="itm"><p>1</p></li>
                            <li class="itm"><p>OFF</p></li>
                            <li class="itm"><p>-</p></li>
                        </ul>
                        <ul class="list selected_list">
                            <li class="itm"><p>37524</p></li>
                            <li class="itm"><p>2020-08-04 05:17:51.0</p></li>
                            <li class="itm"><p>1</p></li>
                            <li class="itm"><p>ON</p></li>
                            <li class="itm"><p>-</p></li>
                        </ul>
                        <ul class="list">
                            <li class="itm"><p>37523</p></li>
                            <li class="itm"><p>2020-08-04 05:17:51.0</p></li>
                            <li class="itm"><p>1</p></li>
                            <li class="itm"><p>ON</p></li>
                            <li class="itm"><p>초기화</p></li>
                        </ul>
                    </div>
                    <ul class="page_ctrl">
                        <li class="prev_btn">
                            <a href=""></a>
                        </li>
                        <li>
                            <ul class="page_number">
                                <li class="selected_page">
                                    <a href=""><p>1</p></a>
                                </li>
                            </ul>
                        </li>
                        <li class="next_btn">
                            <a href=""></a>
                        </li>
                    </ul>
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
    name: "batteryMenual",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        batteryCntTop,
    },
    data() {
        return {
            tggl_btn: false,
        };
    },
    methods: {
        handle_toggle: function () {
            this.tggl_btn = !this.tggl_btn;
        },
        handle_toggle_1: function () {
            let check = confirm("베터리 시스템을 초기화하시겠습니까?");
            if (check) {
                alert("초기화가 완료되었습니다");
            }
        },
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
#battery_menual {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#battery_menual #lnbSet .lnb_wrap .depth_2:nth-child(2) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#battery_menual #cnbSet .cnb_wrap:nth-child(2) {
    display: flex;
}
/* cnb 번호 지정 */
#battery_menual #cnbSet .cnb_wrap .depth_3_wrap:nth-child(3) {
    display: flex;
}
#battery_menual_cnt .battery_menual_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}

#battery_menual_cnt .battery_menual_cnt_wrap {
    display: flex;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left {
    min-width: 500px;
    flex: 1;
    margin-top: 16px;
    margin-right: 32px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_wrap {
    padding: 24px;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-bottom: 32px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_wrap:last-child {
    margin-bottom: 0px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_left_top > div {
    min-width: 452px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-radius: 4px;
    margin-bottom: 8px;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_left
    .cnt_left_top
    > div:nth-child(2) {
    background-color: #519abb;
    border: 1px solid #3189b1;
    margin-bottom: 8px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_left_top > div h5 {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_left_top > div p {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_left_btm > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 40px;
    margin-bottom: 24px;
    align-items: center;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_left
    .cnt_left_btm
    > div:last-child {
    margin-bottom: 0px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_left_btm > div h5 {
    font-size: 16px;
    font-weight: 500;
    color: #222222;
    min-width: 148px;
    letter-spacing: -1px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_left_btm input {
    border-radius: 4px;
    background-color: #f5f5f5;
    border: 1px solid #dddddd;
    color: #999999;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_left .cnt_left_btm label {
    color: #999999;
    margin-left: 8px;
    margin-right: 32px;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_left
    .cnt_left_btm
    > div:nth-child(2)
    input {
    margin-left: 24px;
    min-width: 136px;
    height: 40px;
    margin-right: 8px;
    cursor: pointer;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_left
    .cnt_left_btm
    > div:nth-child(3)
    input {
    margin-left: 24px;
    min-width: 136px;
    height: 48px;
    font-weight: 500;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_left
    .cnt_left_btm
    > div:nth-child(3)
    input.able {
    background-color: #2a58ae;
    border: 1px solid #0f3884;
    color: #fff;
    cursor: pointer;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_left
    .cnt_left_btm
    > div:nth-child(2)
    input:last-child {
    margin: 0px;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_left
    .cnt_left_btm
    > div:nth-child(2)
    input.able {
    background-color: #1d3e7a;
    border: 1px solid #173161;
    color: #fff;
    cursor: pointer;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_left
    .cnt_left_btm
    > div:nth-child(3) {
    justify-content: flex-start;
}

#battery_menual_cnt .battery_menual_cnt_wrap .cnt_right {
    flex: 3;
    margin-top: 16px;
    background-color: #fff;
    padding: 24px;
    border-radius: 5px;
    border: 1px solid #dddddd;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_right .cnt_table {
    width: 100%;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_right .cnt_table p {
    color: #444;
    font-size: 14px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_right .cnt_table .list {
    height: 65px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_right .cnt_table .list li {
    min-width: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .cnt_table
    .list.selected_list
    li {
    background-color: #f4f7fc;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .cnt_table
    .list
    li:nth-child(1) {
    flex: 0.5;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .cnt_table
    .list
    li:nth-child(2) {
    flex: 1.5;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .cnt_table
    .list:not(:nth-child(2))
    li {
    border-right: 1px solid #ddd;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_table
    .list:not(:nth-child(2))
    li:last-child {
    border-right: none;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .cnt_table
    .list:nth-child(2) {
    height: 56px;
    background-color: #313748;
    border: none;
    border-radius: 4px;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .cnt_table
    .list:nth-child(2)
    p {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_right .page_ctrl {
    width: 100%;
    margin: 32px 0 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_right .page_ctrl li a {
    width: 100%;
    height: 100%;
}
#battery_menual_cnt .battery_menual_cnt_wrap .cnt_right .page_ctrl li p {
    color: #444444;
    font-size: 14px;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)) {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
    margin: 0 12px;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)):hover {
    background-color: #2a58ae;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)):hover
    a::after {
    border-color: #fff;
}

#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2))
    a {
    position: relative;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2))
    a:after {
    content: "";
    width: 8px;
    height: 8px;
    border-top: 2px solid #1a1818;
    border-right: 2px solid #1a1818;
    display: inline-block;
    transform: rotate(135deg);
    position: absolute;
    border-radius: 2px;
    top: 50%;
    left: 50%;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    > li:nth-child(1)
    a:after {
    transform: translate(-30%, -50%) rotate(225deg);
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    > li:nth-child(3)
    a:after {
    transform: translate(-80%, -50%) rotate(45deg);
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .page_ctrl
    .page_number {
    display: flex;
    justify-content: center;
    align-items: center;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .page_ctrl
    .page_number
    li {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin: 0 4px;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .cnt_right
    .page_ctrl
    .page_number
    li
    a {
    display: flex;
    justify-content: center;
    align-items: center;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    .page_number
    li:hover
    a {
    background-color: #2a58ae;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    .page_number
    li:hover
    a
    p {
    color: #fff;
    text-decoration: underline;
    text-underline-position: under;
}
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    .page_number
    li.selected_page
    a,
#battery_menual_cnt
    .battery_menual_cnt_wrap
    .page_ctrl
    .page_number
    li.selected_page
    a
    p {
    color: #fff;
    text-decoration: underline;
    text-underline-position: under;
    background-color: #2a58ae;
}
</style>

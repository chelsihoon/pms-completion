<template>
    <section id="system_menual">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="system_menual_cnt">
            <cnbSet></cnbSet>
            <section class="system_menual_cnt_wrap">
                <ul class="cnt_1 cnt_wrap">
                    <li>
                        <h4 class="cnt_titl">냉ㆍ난방기 제어</h4>
                    </li>
                    <li class="cnt_inner">
                        <h5>냉ㆍ난방기 선택</h5>
                        <select name="" id="" class="cooler_select">
                            <option value="">냉방기 #1</option>
                        </select>
                    </li>
                    <li class="cnt_inner">
                        <h5>동작 상태</h5>
                        <p>ON</p>
                    </li>
                    <li class="cnt_inner">
                        <h5>동작 버튼</h5>
                        <input
                            type="button"
                            value="ON"
                            class="on_btn"
                            :class="{ able: tggl_btn_1 }"
                            @click="handle_toggle_1"
                        />
                        <input
                            type="button"
                            value="OFF"
                            class="off_btn"
                            :class="{ able: tggl_btn_1 == false }"
                            @click="handle_toggle_1"
                        />
                    </li>
                    <li class="cnt_inner">
                        <h5>희망 온도 [℃]</h5>
                        <input type="number" value="0" />
                    </li>
                    <li class="cnt_inner">
                        <input type="button" value="적용" class="app_btn" />
                    </li>
                </ul>
                <ul class="cnt_2 cnt_wrap">
                    <li>
                        <h4 class="cnt_titl">냉ㆍ난방기 제어</h4>
                    </li>
                    <li class="cnt_inner">
                        <h5>냉ㆍ난방기 선택</h5>
                        <select name="" id="" class="cooler_select">
                            <option value="">냉방기 #2</option>
                        </select>
                    </li>
                    <li class="cnt_inner">
                        <h5>동작 상태</h5>
                        <p>ON</p>
                    </li>
                    <li class="cnt_inner">
                        <h5>동작 버튼</h5>
                        <input
                            type="button"
                            value="ON"
                            class="on_btn"
                            :class="{ able: tggl_btn_2 }"
                            @click="handle_toggle_2"
                        />
                        <input
                            type="button"
                            value="OFF"
                            class="off_btn"
                            :class="{ able: tggl_btn_2 == false }"
                            @click="handle_toggle_2"
                        />
                    </li>
                    <li class="cnt_inner">
                        <h5>희망 온도 [℃]</h5>
                        <input type="number" value="0" />
                    </li>
                    <li class="cnt_inner">
                        <input type="button" value="적용" class="app_btn" />
                    </li>
                </ul>
                <ul class="cnt_3 cnt_wrap">
                    <li>
                        <h4 class="cnt_titl">냉ㆍ난방기 제어</h4>
                    </li>
                    <li class="cnt_inner">
                        <h5>냉ㆍ난방기 선택</h5>
                        <select name="" id="" class="cooler_select">
                            <option value="">냉방기 #3</option>
                        </select>
                    </li>
                    <li class="cnt_inner">
                        <h5>동작 상태</h5>
                        <p>ON</p>
                    </li>
                    <li class="cnt_inner">
                        <h5>동작 버튼</h5>
                        <input
                            type="button"
                            value="ON"
                            class="on_btn"
                            :class="{ able: tggl_btn_3 }"
                            @click="handle_toggle_3"
                        />
                        <input
                            type="button"
                            value="OFF"
                            class="off_btn"
                            :class="{ able: tggl_btn_3 == false }"
                            @click="handle_toggle_3"
                        />
                    </li>
                    <li class="cnt_inner">
                        <h5>희망 온도 [℃]</h5>
                        <input type="number" value="0" />
                    </li>
                    <li class="cnt_inner">
                        <input type="button" value="적용" class="app_btn" />
                    </li>
                </ul>
                <ul class="cnt_4 cnt_wrap">
                    <li>
                        <h4 class="cnt_titl">냉ㆍ난방기 제어</h4>
                    </li>
                    <li class="cnt_inner">
                        <h5>냉ㆍ난방기 선택</h5>
                        <select name="" id="" class="cooler_select">
                            <option value="">냉방기 #4</option>
                        </select>
                    </li>
                    <li class="cnt_inner">
                        <h5>동작 상태</h5>
                        <p>ON</p>
                    </li>
                    <li class="cnt_inner">
                        <h5>동작 버튼</h5>
                        <input
                            type="button"
                            value="ON"
                            class="on_btn"
                            :class="{ able: tggl_btn_4 }"
                            @click="handle_toggle_4"
                        />
                        <input
                            type="button"
                            value="OFF"
                            class="off_btn"
                            :class="{ able: tggl_btn_4 == false }"
                            @click="handle_toggle_4"
                        />
                    </li>
                    <li class="cnt_inner">
                        <h5>희망 온도 [℃]</h5>
                        <input type="number" value="0" />
                    </li>
                    <li class="cnt_inner">
                        <input type="button" value="적용" class="app_btn" />
                    </li>
                </ul>
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

export default {
    name: "systemMenual",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
    },
    data() {
        return {
            tggl_btn_1: false,
            tggl_btn_2: false,
            tggl_btn_3: false,
            tggl_btn_4: false,
        };
    },
    methods: {
        handle_toggle_1: function () {
            this.tggl_btn_1 = !this.tggl_btn_1;
            return;
        },
        handle_toggle_2: function () {
            this.tggl_btn_2 = !this.tggl_btn_2;
            return;
        },
        handle_toggle_3: function () {
            this.tggl_btn_3 = !this.tggl_btn_3;
            return;
        },
        handle_toggle_4: function () {
            this.tggl_btn_4 = !this.tggl_btn_4;
            return;
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
/* #system_menual */
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

#system_menual {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#system_menual #lnbSet .lnb_wrap .depth_2:nth-child(4) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#system_menual #cnbSet .cnb_wrap:nth-child(4) {
    display: flex;
}
/* cnb 번호 지정 */
#system_menual #cnbSet .cnb_wrap .depth_3_wrap:nth-child(1) {
    display: flex;
}
#system_menual #system_cnt_top_wrap .cnt_top .month_wrap {
    display: none;
}
#system_menual_cnt .system_menual_cnt_wrap {
    display: flex;
    padding: 24px 32px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap {
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-right: 32px;
    min-width: 440px;
    padding: 24px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap:last-child {
    margin-right: 0px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
    font-size: 18px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li {
    height: 40px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:nth-child(2) {
    height: 48px;
    margin-bottom: 20px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:nth-child(3) {
    height: 24px;
    margin-bottom: 24px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:nth-child(4) {
    margin-bottom: 28px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:last-child {
    margin-bottom: 0px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li h5 {
    color: #222222;
    font-weight: 500;
    width: 152px;
    font-size: 16px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li .cooler_select {
    width: 240px;
    height: 100%;
    border-radius: 2px;
    border: 1px solid #dddddd;
    padding: 14px 16px;
    background: url(../../assets/img/select_arr.png) no-repeat 90% 50%;
    appearance: none;
    font-size: 14px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li .cooler_select option {
    font-size: 14px;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:nth-child(3) p {
    font-weight: 700;
    color: #00b561;
    margin-right: auto;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:nth-child(4) input {
    width: 116px;
    height: 100%;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    cursor: pointer;
    background-color: #f5f5f5;
    border: 1px solid #dddddd;
    color: #999999;
}
#system_menual_cnt
    .system_menual_cnt_wrap
    .cnt_wrap
    li:nth-child(4)
    input.able {
    background-color: #1d3e7a;
    border: 1px solid #173161;
    color: #fff;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:nth-child(4) .off_btn {
    margin-left: 8px;
}

#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:nth-child(5) input {
    width: 240px;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;
}
#system_menual_cnt .system_menual_cnt_wrap .cnt_wrap li:last-child .app_btn {
    width: 136px;
    height: 48px;
    border: 1px solid #0f3884;
    border-radius: 4px;
    background-color: #2a58ae;
    padding: 10px 16px;
    font-size: 16px;
    font-weight: 500;
    margin-left: auto;
    color: #fff;
    cursor: pointer;
}
</style>

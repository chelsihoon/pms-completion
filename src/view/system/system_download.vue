<template>
    <section id="system_download">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="system_download_cnt">
            <cnbSet></cnbSet>
            <section class="system_download_cnt_wrap">
                <div class="cnt_top">
                    <select name="" id="">
                        <option value="">새 PCS #0</option>
                        <option value="">새 PCS #1</option>
                        <option value="">새 PCS #2</option>
                        <option value="">새 PCS #3</option>
                        <option value="">새 PCS #4</option>
                    </select>
                    <select name="" id="">
                        <option value="">PCS</option>
                        <option value="">PCS</option>
                        <option value="">PCS</option>
                    </select>
                    <div class="month_wrap">
                        <input
                            type="date"
                            name=""
                            value="2015-08-15"
                            class="cnt_month"
                        />
                        <div class="month_wave">~</div>
                        <input
                            type="date"
                            name=""
                            value="2020-08-20"
                            class="cnt_month"
                        />
                    </div>
                    <div class="btn_wrap">
                        <button class="search btn">조회</button>
                        <button class="download btn">엑셀 다운로드</button>
                    </div>
                </div>
                <div class="cnt_center">
                    <div class="cnt_table">
                        <ul class="list">
                            <li class="sub_titl"><p>No</p></li>
                            <li class="itm"><p>시간</p></li>
                            <li class="itm"><p>모듈 현재 전압[V]</p></li>
                            <li class="itm"><p>모듈 평균 전압[V]</p></li>
                            <li class="itm"><p>셀 최저 전압[V]</p></li>
                            <li class="itm"><p>최대 전압 편차값[V]</p></li>
                            <li class="itm"><p>온도[°C]</p></li>
                        </ul>
                    </div>
                    <div class="no_results">
                        <img src="../../assets/img/ico_caution.png" alt="" />
                        <p>검색된 내용이 없습니다.</p>
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

export default {
    name: "system_download",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
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
/* #system_download */
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

#system_download {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#system_download #lnbSet .lnb_wrap .depth_2:nth-child(4) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#system_download #cnbSet .cnb_wrap:nth-child(4) {
    display: flex;
}
/* cnb 번호 지정 */
#system_download #cnbSet .cnb_wrap .depth_3_wrap:nth-child(2) {
    display: flex;
}

#system_download .system_download_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
#system_download .system_download_cnt_wrap .cnt_center {
    flex: 3;
    margin-top: 16px;
    background-color: #fff;
    padding: 24px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    position: relative;
}
#system_download .system_download_cnt_wrap .cnt_center .cnt_table {
    width: 100%;
    height: 546px;
}
#system_download .system_download_cnt_wrap .cnt_center .no_results {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#system_download .system_download_cnt_wrap .cnt_center .no_results img {
    margin-bottom: 16px;
}
#system_download .system_download_cnt_wrap .cnt_center .no_results p {
    color: #777;
    font-weight: 500;
    font-size: 16px;
}
#system_download .system_download_cnt_wrap .cnt_center .cnt_table p {
    color: #444;
    font-size: 14px;
}
#system_download .system_download_cnt_wrap .cnt_center .cnt_table .list {
    height: 65px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
}
#system_download .system_download_cnt_wrap .cnt_center .cnt_table .list li {
    min-width: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
#system_download
    .system_download_cnt_wrap
    .cnt_center
    .cnt_table
    .list.selected_list
    li {
    background-color: #f4f7fc;
}
#system_download
    .system_download_cnt_wrap
    .cnt_center
    .cnt_table
    .list
    li:nth-child(1) {
    flex: 0.5;
}
#system_download
    .system_download_cnt_wrap
    .cnt_center
    .cnt_table
    .list:not(:nth-child(1))
    li {
    border-right: 1px solid #ddd;
}
#system_download
    .system_download_cnt_wrap
    .cnt_table
    .list:not(:nth-child(1))
    li:last-child {
    border-right: none;
}
#system_download
    .system_download_cnt_wrap
    .cnt_center
    .cnt_table
    .list:nth-child(1) {
    height: 56px;
    background-color: #313748;
    border: none;
    border-radius: 4px;
}
#system_download
    .system_download_cnt_wrap
    .cnt_center
    .cnt_table
    .list:nth-child(1)
    p {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
}
#system_download .system_download_cnt_wrap .cnt_center .page_ctrl {
    width: 100%;
    margin: 32px 0 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
#system_download .system_download_cnt_wrap .cnt_center .page_ctrl li a {
    width: 100%;
    height: 100%;
}
#system_download .system_download_cnt_wrap .cnt_center .page_ctrl li p {
    color: #444444;
    font-size: 14px;
}
#system_download .system_download_cnt_wrap .page_ctrl > li:not(:nth-child(2)) {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
    margin: 0 12px;
}
#system_download
    .system_download_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)):hover {
    background-color: #2a58ae;
}
#system_download
    .system_download_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)):hover
    a::after {
    border-color: #fff;
}

#system_download
    .system_download_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2))
    a {
    position: relative;
}
#system_download
    .system_download_cnt_wrap
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
#system_download
    .system_download_cnt_wrap
    .page_ctrl
    > li:nth-child(1)
    a:after {
    transform: translate(-30%, -50%) rotate(225deg);
}
#system_download
    .system_download_cnt_wrap
    .page_ctrl
    > li:nth-child(3)
    a:after {
    transform: translate(-80%, -50%) rotate(45deg);
}
#system_download .system_download_cnt_wrap .cnt_center .page_ctrl .page_number {
    display: flex;
    justify-content: center;
    align-items: center;
}
#system_download
    .system_download_cnt_wrap
    .cnt_center
    .page_ctrl
    .page_number
    li {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin: 0 4px;
}
#system_download
    .system_download_cnt_wrap
    .cnt_center
    .page_ctrl
    .page_number
    li
    a {
    display: flex;
    justify-content: center;
    align-items: center;
}
#system_download .system_download_cnt_wrap .page_ctrl .page_number li:hover a {
    background-color: #2a58ae;
}
#system_download
    .system_download_cnt_wrap
    .page_ctrl
    .page_number
    li:hover
    a
    p {
    color: #fff;
    text-decoration: underline;
    text-underline-position: under;
}
#system_download
    .system_download_cnt_wrap
    .page_ctrl
    .page_number
    li.selected_page
    a,
#system_download
    .system_download_cnt_wrap
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
#system_download_cnt input:focus,
#system_download_cnt select:focus {
    outline: 2px solid #2a58ae;
}
input[type="date"]::-webkit-clear-button,
input[type="date"]::-webkit-inner-spin-button {
    display: none;
}
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="month"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    left: -12px;
    width: 20px;
    height: 20px;
    z-index: 1;
}
input[type="time"]::-webkit-clear-button,
input[type="time"]::-webkit-inner-spin-button {
    display: none;
}

input[type="time"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    left: 2px;
    width: 20px;
    height: 20px;
    z-index: 1;
}

#system_download_cnt .cnt_top {
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    padding: 20px 24px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    justify-content: flex-start;
}
#system_download_cnt .cnt_top select {
    border: 1px solid #ddd;
    width: 240px;
    height: 48px;
    padding: 14px 16px;
    border-radius: 2px;
    appearance: none;
    background: url(../../assets/img/select_arr.png) no-repeat 90% 50%;
    color: #444444;
    font-size: 14px;
    margin-right: 8px;
}
#system_download_cnt .cnt_top select option {
    color: #444444;
    font-size: 14px;
}
#system_download_cnt .cnt_top input {
    border: 1px solid #ddd;
    width: 240px;
    height: 48px;
    padding: 14px 40px;
    border-radius: 2px;
    color: #444;
    background: transparent;
    position: relative;
    margin-right: 8px;
    font-size: 14px;
}
#system_download_cnt .cnt_top .month_wrap {
    display: flex;
}
#system_download_cnt .cnt_top .month_wrap .cnt_month:first-child {
    margin: 0px;
}
#system_download_cnt .cnt_top .month_wrap .month_wave {
    margin: 0 7px;
    color: #777;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
}
#system_download_cnt .cnt_top .month_wrap input::after {
    position: absolute;
    left: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(../../assets/img/ico_calendar.png) no-repeat;
}
#system_download_cnt .cnt_top .btn_wrap {
    margin-left: auto;
}
#system_download_cnt .cnt_top .btn {
    width: 136px;
    height: 48px;
    background-color: #1d3e7a;
    border: 1px solid #173161;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 8px;
}
#system_download_cnt .cnt_top .download {
    background-color: #2a58ae;
    margin-right: 0px;
    border: 1px solid #0f3884;
}
#system_download_cnt .cnt_top input[type="date"]::after {
    position: absolute;
    left: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(../../assets/img/ico_calendar.png) no-repeat;
}
</style>

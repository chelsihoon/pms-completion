<template>
    <section id="battery_history">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="battery_history_cnt">
            <cnbSet></cnbSet>
            <section class="battery_history_cnt_wrap">
                <batteryCntTop></batteryCntTop>
                <div class="cnt_right cnt_wrap">
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
        <mainFooter> </mainFooter>
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
    name: "batteryhistory",
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
#battery_history {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#battery_history #lnbSet .lnb_wrap .depth_2:nth-child(2) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#battery_history #cnbSet .cnb_wrap:nth-child(2) {
    display: flex;
}
/* cnb 번호 지정 */
#battery_history #cnbSet .cnb_wrap .depth_3_wrap:nth-child(2) {
    display: flex;
}
#battery_history .cnt_top select {
    display: block;
}
#battery_history .cnt_top .date_wrap {
    display: flex;
}
#battery_history .cnt_wrap .search {
    display: block;
}
#battery_history_cnt .battery_history_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right {
    flex: 3;
    margin-top: 16px;
    background-color: #fff;
    padding: 24px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    position: relative;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .cnt_table {
    width: 100%;
    height: 546px;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .no_results {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .no_results img {
    margin-bottom: 16px;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .no_results p {
    color: #777;
    font-weight: 500;
    font-size: 16px;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .cnt_table p {
    color: #444;
    font-size: 14px;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .cnt_table .list {
    height: 65px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .cnt_table .list li {
    min-width: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .cnt_right
    .cnt_table
    .list.selected_list
    li {
    background-color: #f4f7fc;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .cnt_right
    .cnt_table
    .list
    li:nth-child(1) {
    flex: 0.5;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .cnt_right
    .cnt_table
    .list:not(:nth-child(1))
    li {
    border-right: 1px solid #ddd;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .cnt_table
    .list:not(:nth-child(1))
    li:last-child {
    border-right: none;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .cnt_right
    .cnt_table
    .list:nth-child(1) {
    height: 56px;
    background-color: #313748;
    border: none;
    border-radius: 4px;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .cnt_right
    .cnt_table
    .list:nth-child(1)
    p {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .page_ctrl {
    width: 100%;
    margin: 32px 0 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .page_ctrl li a {
    width: 100%;
    height: 100%;
}
#battery_history_cnt .battery_history_cnt_wrap .cnt_right .page_ctrl li p {
    color: #444444;
    font-size: 14px;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)) {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
    margin: 0 12px;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)):hover {
    background-color: #2a58ae;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)):hover
    a::after {
    border-color: #fff;
}

#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2))
    a {
    position: relative;
}
#battery_history_cnt
    .battery_history_cnt_wrap
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
#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    > li:nth-child(1)
    a:after {
    transform: translate(-30%, -50%) rotate(225deg);
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    > li:nth-child(3)
    a:after {
    transform: translate(-80%, -50%) rotate(45deg);
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .cnt_right
    .page_ctrl
    .page_number {
    display: flex;
    justify-content: center;
    align-items: center;
}
#battery_history_cnt
    .battery_history_cnt_wrap
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
#battery_history_cnt
    .battery_history_cnt_wrap
    .cnt_right
    .page_ctrl
    .page_number
    li
    a {
    display: flex;
    justify-content: center;
    align-items: center;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    .page_number
    li:hover
    a {
    background-color: #2a58ae;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    .page_number
    li:hover
    a
    p {
    color: #fff;
    text-decoration: underline;
    text-underline-position: under;
}
#battery_history_cnt
    .battery_history_cnt_wrap
    .page_ctrl
    .page_number
    li.selected_page
    a,
#battery_history_cnt
    .battery_history_cnt_wrap
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

<template>
    <section id="pcs_history">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="pcs_history_cnt">
            <cnbSet></cnbSet>
            <section class="pcs_history_cnt_wrap">
                <pcsHistoryCntTrouble></pcsHistoryCntTrouble>
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
import pcsHistoryCntTrouble from "../../components/pcs_contents/pcs_history_cnt_trouble.vue";

export default {
    name: "pcsHistoryTrouble",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        pcsHistoryCntTrouble,
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
/* pcs_history */
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

#pcs_history {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#pcs_history #lnbSet .lnb_wrap .depth_2:nth-child(1) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#pcs_history #cnbSet .cnb_wrap:nth-child(1) {
    display: flex;
}
/* cnb 번호 지정 */
#pcs_history #cnbSet .cnb_wrap .depth_3_wrap:nth-child(3) {
    display: flex;
}
#pcs_history_cnt .pcs_history_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
.pcs_history_cnt_wrap #pcs_cnt_top_wrap .cnt_top .month_wrap {
    display: flex;
}
</style>

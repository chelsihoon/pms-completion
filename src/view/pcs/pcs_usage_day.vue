<template>
    <section id="pcs_usage">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="pcs_usage_cnt">
            <cnbSet></cnbSet>
            <section class="pcs_usage_cnt_wrap">
                <pcsUsageCntDay></pcsUsageCntDay>
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
import pcsUsageCntDay from "../../components/pcs_contents/pcs_usage_cnt_day.vue";

export default {
    name: "pcsUsageDay",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        pcsUsageCntDay,
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
/* pcs_usage */
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
#pcs_usage {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#pcs_usage #lnbSet .lnb_wrap .depth_2:nth-child(1) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#pcs_usage #cnbSet .cnb_wrap:nth-child(1) {
    display: flex;
}
/* cnb 번호 지정 */
#pcs_usage #cnbSet .cnb_wrap .depth_3_wrap:nth-child(2) {
    display: flex;
}
#pcs_usage_cnt .pcs_usage_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
</style>

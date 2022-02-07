<template>
    <section id="pcs_setup_cnt_default">
        <div class="pcs_setup_cnt_default_wrap"></div>
    </section>
</template>

<script>
export default {
    name: "pcsSetupCntDefault",
    components: {},
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

.pcs_setup_cnt_wrap #pcs_cnt_top_wrap .cnt_top .cnt_date {
    display: none;
}
.pcs_setup_cnt_wrap #pcs_cnt_top_wrap .cnt_top .month_wrap {
    display: none;
}
#pcs_setup_cnt_default {
    width: 100%;
    height: 900px;
}
#pcs_cnt_top_wrap {
    display: none;
}
</style>

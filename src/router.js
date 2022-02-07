import login from "./view/login.vue";
import dashBoard from "./view/dash_board.vue";
import pcs from "./view/pcs/pcs.vue";
import battery from "./view/battery/battery.vue";
import rack from "./view/rack/rack.vue";
import system from "./view/system/system.vue";
import pcsSituation from "./view/pcs/pcs_situation.vue";
import pcsUsage from "./view/pcs/pcs_usage.vue";
import pcsUsageYear from "./view/pcs/pcs_usage_year.vue";
import pcsUsageTime from "./view/pcs/pcs_usage_time.vue";
import pcsUsageMonth from "./view/pcs/pcs_usage_month.vue";
import pcsUsageDay from "./view/pcs/pcs_usage_day.vue";
import pcsHistoryOperation from "./view/pcs/pcs_history_operation.vue";
import pcsHistory from "./view/pcs/pcs_history.vue";
import pcsHistoryTrouble from "./view/pcs/pcs_history_trouble.vue";
import pcsMenual from "./view/pcs/pcs_menual.vue";
import pcsSetupSetting from "./view/pcs/pcs_setup_setting.vue";
import pcsSetup from "./view/pcs/pcs_setup.vue";
import pcsSetupDefault from "./view/pcs/pcs_setup_default.vue";
import pcsSetupSchedule from "./view/pcs/pcs_setup_schedule.vue";
import batterySituation from "./view/battery/battery_situation.vue";
import batteryHistory from "./view/battery/battery_history.vue";
import batteryMenual from "./view/battery/battery_menual.vue";
import batterySetup from "./view/battery/battery_setup.vue";
import rackSituation from "./view/rack/rack_situation.vue";
import rackSetup from "./view/rack/rack_setup.vue";
import systemSetup from "./view/system/system_setup.vue";
import systemCode from "./view/system/system_code.vue";
import systemMenual from "./view/system/system_manual.vue";
import systemDownload from "./view/system/system_download.vue";
import systemAdministrator from "./view/system/system_administrator.vue";

import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: login,
    },
    {
        path: "/dash-board",
        component: dashBoard,
    },
    {
        path: "/pcs",
        component: pcs,
        children: [
            { path: "", redirect: "/pcs/pcs-situation" },
            { path: "pcs-situation", component: pcsSituation },
            {
                path: "pcs-usage",
                component: pcsUsage,
                children: [
                    { path: "", redirect: "/pcs/pcs-usage/time" },
                    { path: "year", component: pcsUsageYear },
                    { path: "time", component: pcsUsageTime },
                    { path: "month", component: pcsUsageMonth },
                    { path: "day", component: pcsUsageDay },
                ],
            },
            {
                path: "pcs-history",
                component: pcsHistory,
                children: [
                    { path: "", redirect: "/pcs/pcs-history/operation" },
                    { path: "operation", component: pcsHistoryOperation },
                    { path: "trouble", component: pcsHistoryTrouble },
                ],
            },
            {
                path: "pcs-menual",
                component: pcsMenual,
            },
            {
                path: "pcs-setup",
                component: pcsSetup,
                children: [
                    { path: "", redirect: "/pcs/pcs-setup/setting" },
                    { path: "setting", component: pcsSetupSetting },
                    { path: "default", component: pcsSetupDefault },
                    { path: "schedule", component: pcsSetupSchedule },
                ],
            },
        ],
    },
    {
        path: "/battery",
        component: battery,
        children: [
            { path: "", redirect: "/battery/battery-situation" },
            { path: "battery-situation", component: batterySituation },
            { path: "battery-history", component: batteryHistory },
            { path: "battery-menual", component: batteryMenual },
            { path: "battery-setup", component: batterySetup },
        ],
    },
    {
        path: "/rack",
        component: rack,
        children: [
            { path: "", redirect: "/rack/rack-situation" },
            { path: "rack-situation", component: rackSituation },
            { path: "rack-setup", component: rackSetup },
        ],
    },
    {
        path: "/system",
        component: system,
        children: [
            { path: "", redirect: "/system/system-menual" },
            { path: "system-menual", component: systemMenual },
            { path: "system-setup", component: systemSetup },
            { path: "system-download", component: systemDownload },
            { path: "system-administrator", component: systemAdministrator },
            { path: "system-code", component: systemCode },
        ],
    },
]; //라우팅 패스, 컴포넌트 등 정의
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;

<template>
    <section id="rack_setup">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="rack_setup_cnt">
            <cnbSet></cnbSet>
            <section class="rack_setup_cnt_wrap">
                <div class="cnt_1 cnt_wrap">
                    <h4 class="cnt_titl">Rack, Module 갯수 설정</h4>
                    <ul class="list">
                        <li class="itm">
                            <p>Rack 개수 설정&nbsp;<span> [개]</span></p>
                            <input type="number" value="6" />
                        </li>
                        <li class="itm">
                            <p>Module 최대 개수 설정&nbsp;<span>[개]</span></p>
                            <input type="number" value="16" />
                        </li>
                    </ul>
                    <div class="save_btn">
                        <input type="button" value="저장" />
                    </div>
                </div>
                <div class="rack_wrap cnt_wrap cnt_2">
                    <h5 class="cnt_name">Rack</h5>
                    <div class="cnt_inner">
                        <h6 class="itm_name">Rack #1</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_1"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">Rack #2</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_1"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">Rack #3</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_1"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">Rack #4</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_1"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <input
                        type="button"
                        name=""
                        id=""
                        class="add_btn"
                        value="Rack 추가+"
                        @click="handle_toggle_1"
                    />
                </div>
                <div class="pra_wrap cnt_wrap cnt_3">
                    <h5 class="cnt_name">PRA</h5>
                    <div class="cnt_inner">
                        <h6 class="itm_name">PAA01</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_2"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">PAA02</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_2"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <input
                        type="button"
                        name=""
                        id=""
                        class="add_btn"
                        value="PRA 추가+"
                        @click="handle_toggle_2"
                    />
                </div>
                <div class="cmu_wrap cnt_wrap cnt_4">
                    <h5 class="cnt_name">CMU</h5>
                    <div class="cnt_inner">
                        <h6 class="itm_name">CMU #1</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_3"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">CMU #2</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_3"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">CMU #3</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_3"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">CMU #4</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_3"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">CMU #5</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_3"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">CMU #6</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_3"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <div class="cnt_inner">
                        <h6 class="itm_name">CMU #7</h6>
                        <input
                            type="button"
                            name=""
                            id=""
                            value="수정"
                            @click="handle_toggle_3"
                        />
                        <input type="button" name="" id="" value="삭제" />
                    </div>
                    <input
                        type="button"
                        name=""
                        id=""
                        class="add_btn"
                        value="CMU 추가+"
                        @click="handle_toggle_3"
                    />
                </div>
            </section>
            <div class="light_box modal_1" v-show="modal_1">
                <div class="inner_box light_box_1">
                    <h4 class="cnt_titl">Rack 관리</h4>
                    <ul class="list">
                        <li class="itm">
                            <p>Rack 명</p>
                            <input type="text" value="Rack #1" />
                        </li>
                        <li class="itm">
                            <p>Channel</p>
                            <input type="number" value="1" />
                        </li>
                    </ul>
                    <div class="btn">
                        <input
                            type="button"
                            value="취소"
                            @click="handle_toggle_1"
                        />
                        <input type="button" value="저장" />
                    </div>
                </div>
            </div>
            <div class="light_box modal_2" v-show="modal_2">
                <div class="inner_box light_box_2">
                    <h4 class="cnt_titl">PRA 관리</h4>
                    <ul class="list">
                        <li class="itm">
                            <p>Rack 명</p>
                            <select name="" id="" class="rack_select">
                                <option value="">Rack #1</option>
                                <option value="">Rack #2</option>
                                <option value="">Rack #3</option>
                            </select>
                        </li>
                        <li class="itm">
                            <p>PRA 명</p>
                            <input type="text" value="Rack #1" />
                        </li>
                        <li class="itm">
                            <p>Channel</p>
                            <input type="number" value="1" />
                        </li>
                    </ul>
                    <div class="btn">
                        <input
                            type="button"
                            value="취소"
                            @click="handle_toggle_2"
                        />
                        <input type="button" value="저장" />
                    </div>
                </div>
            </div>
            <div class="light_box modal_3" v-show="modal_3">
                <div class="inner_box light_box_3">
                    <h4 class="cnt_titl">CMU 관리</h4>
                    <ul class="list">
                        <li class="itm">
                            <p>Rack</p>
                            <select name="" id="" class="rack_select">
                                <option value="">Rack #1</option>
                                <option value="">Rack #2</option>
                                <option value="">Rack #3</option>
                            </select>
                        </li>
                        <li class="itm">
                            <p>PRA</p>
                            <select name="" id="" class="rack_select">
                                <option value="">PAA01</option>
                                <option value="">PAA02</option>
                            </select>
                        </li>
                        <li class="itm">
                            <p>CMU 명</p>
                            <input type="text" value="Rack #1" />
                        </li>
                        <li class="itm">
                            <p>Channel</p>
                            <input type="number" value="1" />
                        </li>
                    </ul>
                    <div class="btn">
                        <input
                            type="button"
                            value="취소"
                            @click="handle_toggle_3"
                        />
                        <input type="button" value="저장" />
                    </div>
                </div>
            </div>
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
    name: "rackSetup",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
    },
    data() {
        return {
            modal_1: false,
            modal_2: false,
            modal_3: false,
        };
    },
    methods: {
        handle_toggle_1: function () {
            this.modal_1 = !this.modal_1;
        },
        handle_toggle_2: function () {
            this.modal_2 = !this.modal_2;
        },
        handle_toggle_3: function () {
            this.modal_3 = !this.modal_3;
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
#rack_setup {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#rack_setup #lnbSet .lnb_wrap .depth_2:nth-child(3) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#rack_setup #cnbSet .cnb_wrap:nth-child(3) {
    display: flex;
}
/* cnb 번호 지정 */
#rack_setup #cnbSet .cnb_wrap .depth_3_wrap:nth-child(2) {
    display: flex;
}
#rack_setup_cnt .rack_setup_cnt_wrap {
    display: flex;
    padding: 24px 32px;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap {
    background-color: #fff;
    padding: 24px;
    border-radius: 5px;
    border: 1px solid#DDDDDD;
    margin-left: 32px;
    /* align-self: flex-start; */
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap:first-child {
    margin-left: 0px;
}
#rack_setup .rack_setup_cnt_wrap .cnt_1 {
    width: 500px;
    height: 284px;
}

#rack_setup .rack_setup_cnt_wrap .cnt_wrap .itm p span {
    font-size: 14px;
    font-weight: 500;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
    font-size: 18px;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap .itm {
    height: 40px;
    margin-bottom: 28px;
    display: flex;
    justify-content: space-between;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap .itm p {
    color: #222;
    font-weight: 500;
    position: relative;
    margin-bottom: 16px;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    height: inherit;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap .itm input {
    min-width: 240px;
    height: 100%;
    padding: 10px 16px;
    border: 1px solid #dddddd;
    border-radius: 4px;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap .save_btn {
    display: flex;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap .save_btn input {
    min-width: 136px;
    height: 48px;
    padding: 10px 16px;
    border: 1px solid #0f3884;
    border-radius: 4px;
    background-color: #2a58ae;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    margin-left: auto;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap:not(.cnt_1) {
    width: 420px;
    height: 617px;
    display: flex;
    flex-direction: column;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap:not(.cnt_1) .cnt_name {
    width: 100%;
    height: 56px;
    background-color: #313748;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap:not(.cnt_1) .cnt_inner {
    width: 100%;
    height: 62px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap:not(.cnt_1) .cnt_inner:last-child {
    border-bottom: none;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap:not(.cnt_1) .cnt_inner .itm_name {
    font-weight: 500;
    margin-right: auto;
    font-size: 16px;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap:not(.cnt_1) .cnt_inner input {
    width: 80px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
}
#rack_setup
    .rack_setup_cnt_wrap
    .cnt_wrap:not(.cnt_1)
    .cnt_inner
    input:nth-child(2) {
    background-color: #2a58ae;
    border: 1px solid #0f3884;
    color: #fff;
}
#rack_setup
    .rack_setup_cnt_wrap
    .cnt_wrap:not(.cnt_1)
    .cnt_inner
    input:nth-child(3) {
    background-color: #ffffff;
    border: 1px solid #dddddd;
}
#rack_setup .rack_setup_cnt_wrap .cnt_wrap:not(.cnt_1) .add_btn {
    background-color: #1d3e7a;
    border: 1px solid #173161;
    margin-top: auto;
    margin-left: auto;
    border-radius: 4px;
    width: 136px;
    height: 48px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
}
#rack_setup .light_box {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}
#rack_setup .light_box .inner_box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 488px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 24px 32px 32px;
    border-radius: 4px;
}
#rack_setup .light_box .inner_box .cnt_titl {
    color: #313748;
    font-weight: 400;
    height: 48px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
    font-size: 28px;
}
#rack_setup .light_box .inner_box .list select {
    width: 240px;
    height: 48px;
    border-radius: 2px;
    border: 1px solid #dddddd;
    font-size: 14px;
    padding: 14px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    background: url(../../assets/img/select_arr.png) no-repeat 90% 50%;
    margin-right: 40px;
}
#rack_setup .light_box .inner_box .list .itm:first-child {
    margin-bottom: 20px;
}
#rack_setup .light_box .inner_box .list .itm {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
}
#rack_setup .light_box .inner_box .list .itm p {
    font-weight: 500;
    color: #222222;
}
#rack_setup .light_box .inner_box .list .itm input {
    width: 280px;
    height: 40px;
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 4px;
    border: 1px solid #dddddd;
}
#rack_setup .light_box .inner_box .btn {
    display: flex;
    justify-content: center;
    height: 48px;
    margin-top: 44px;
}
#rack_setup .light_box .inner_box .btn input {
    width: 136px;
    height: 100%;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
#rack_setup .light_box .inner_box .btn input:first-child {
    background-color: #313748;
    border: 1px solid #171a24;
    margin-right: 8px;
}
#rack_setup .light_box .inner_box .btn input:last-child {
    background-color: #2a58ae;
    border: 1px solid #0f3884;
}
</style>

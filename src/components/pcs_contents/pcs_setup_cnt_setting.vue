<template>
    <section id="pcs_setup_cnt_setting">
        <div class="pcs_setup_cnt_setting_wrap">
            <div class="cnt_left cnt_wrap">
                <h4 class="cnt_titl">운영 설정</h4>
                <div class="cnt_inner_left">
                    <ul class="list">
                        <li class="sub_titl"><h5>운영 정보</h5></li>
                        <li class="itm">
                            <p>PCS 명</p>
                            <input type="text" value="PCS#1" />
                        </li>
                        <li class="itm">
                            <p>PCS 용량 <span>[kW]</span></p>
                            <input type="number" value="100" />
                        </li>
                        <li class="itm">
                            <p>Battery 용량 <span>[kW]</span></p>
                            <input type="number" value="100" />
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
                    </ul>
                </div>
                <div class="cnt_inner_right">
                    <ul class="list">
                        <li class="sub_titl"><h5>운영 파라미터</h5></li>
                        <li class="itm">
                            <p>Battery 운영 상한 SOC <span>[%]</span></p>
                            <input type="number" value="90" />
                        </li>
                        <li class="itm">
                            <p>Battery 운영 상한 SOC <span>[%]</span></p>
                            <input type="number" value="20" />
                        </li>
                    </ul>
                </div>
                <div class="save_btn">
                    <input type="button" value="저장" />
                </div>
            </div>
            <div class="cnt_right cnt_wrap">
                <h4 class="cnt_titl">Rack, Module 갯수 설정</h4>
                <ul class="list">
                    <li class="itm">
                        <p>Rack 개수 설정 <span>[개]</span></p>
                        <input type="number" value="6" />
                    </li>
                    <li class="itm">
                        <p>Module 최대 개수 설정 <span>[개]</span></p>
                        <input type="number" value="16" />
                    </li>
                </ul>
                <div class="save_btn">
                    <input type="button" value="저장" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "pcsSetupCntSetting",
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

#pcs_setup_cnt_setting {
    width: 100%;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap {
    border-radius: 5px;
    margin-top: 16px;
    display: flex;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_left {
    padding: 24px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_wrap:first-child {
    flex: 2;
    margin-right: 32px;
    min-width: 1208px;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_left > div {
    display: flex;
    flex-direction: column;
    width: 568px;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_wrap .save_btn {
    width: 100%;
    display: flex;
    position: relative;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_wrap .save_btn input {
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
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_wrap .list li {
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 16px;
    align-items: center;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_wrap
    .list
    li:last-child {
    margin-bottom: 0px;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_left .list .sub_titl {
    height: 40px;
    background-color: #313748;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_wrap
    .list
    .sub_titl
    h5 {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_wrap .list li p {
    color: #222222;
    font-size: 16px;
    font-weight: 500;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_wrap .list li p span {
    color: #222222;
    font-size: 14px;
    font-weight: 500;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_wrap
    .list
    li:not(.toggle_box)
    input {
    min-width: 320px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #444444;
    padding: 10px 16px;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_wrap
    .list
    li:not(.toggle_box)
    input:focus {
    outline: 2px solid #2a58ae;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_right {
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
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_right .list {
    width: 100%;
    margin-bottom: auto;
}
#pcs_setup_cnt_setting .pcs_setup_cnt_setting_wrap .cnt_left .list .toggle_box {
    margin-right: 50px;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"] {
    display: none;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
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
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
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
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]
    + label {
    position: relative;
    cursor: pointer;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
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
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
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

#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn:before {
    left: 2px;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn {
    background-color: #becce7;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn:after {
    color: #2a58ae;
    font-weight: 500;
}
#pcs_setup_cnt_setting
    .pcs_setup_cnt_setting_wrap
    .cnt_left
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label:after {
    color: #444;
    font-weight: 400;
}
</style>

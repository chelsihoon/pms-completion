<template>
    <section id="rack_situation">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="rack_situation_cnt">
            <cnbSet></cnbSet>
            <section class="rack_situation_cnt_wrap">
                <div class="cnt_top cnt_wrap">
                    <div class="rack_1_wrap rack_wrap">
                        <h4 class="rack_no">Rack #1</h4>
                        <div class="cnt_inner">
                            <div class="cnt_inner_left">
                                <h5 class="paa_no">PAA01</h5>
                                <ul class="itm_left itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #1
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #2
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #3
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #4
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #5
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #6
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #7
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #8
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #9
                                    </li>
                                </ul>
                                <ul class="itm_right itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #10
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #11
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #12
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #13
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #14
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #15
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #16
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #17
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #18
                                    </li>
                                </ul>
                            </div>
                            <div class="cnt_inner_right">
                                <h5 class="paa_no">PAA02</h5>
                                <ul class="itm_left itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #1
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #2
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #3
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #4
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #5
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #6
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #7
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #8
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #9
                                    </li>
                                </ul>
                                <ul class="itm_right itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #10
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #11
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #12
                                    </li>
                                    <li
                                        class="itm selected"
                                        @click="handle_toggle"
                                    >
                                        CMU #13
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #14
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #15
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #16
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #17
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #18
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rack_2_wrap rack_wrap">
                        <h4 class="rack_no">Rack #2</h4>
                        <div class="cnt_inner">
                            <div class="cnt_inner_left">
                                <h5 class="paa_no">PAA01</h5>
                                <ul class="itm_left itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #1
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #2
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #3
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #4
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #5
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #6
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #7
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #8
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #9
                                    </li>
                                </ul>
                                <ul class="itm_right itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #10
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #11
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #12
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #13
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #14
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #15
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #16
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #17
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #18
                                    </li>
                                </ul>
                            </div>
                            <div class="cnt_inner_right">
                                <h5 class="paa_no">PAA02</h5>
                                <ul class="itm_left itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #1
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #2
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #3
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #4
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #5
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #6
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #7
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #8
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #9
                                    </li>
                                </ul>
                                <ul class="itm_right itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #10
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #11
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #12
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #13
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #14
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #15
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #16
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #17
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #18
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rack_3_wrap rack_wrap">
                        <h4 class="rack_no">Rack #2</h4>
                        <div class="cnt_inner">
                            <div class="cnt_inner_left">
                                <h5 class="paa_no">PAA01</h5>
                                <ul class="itm_left itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #1
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #2
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #3
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #4
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #5
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #6
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #7
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #8
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #9
                                    </li>
                                </ul>
                                <ul class="itm_right itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #10
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #11
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #12
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #13
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #14
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #15
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #16
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #17
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #18
                                    </li>
                                </ul>
                            </div>
                            <div class="cnt_inner_right">
                                <h5 class="paa_no">PAA02</h5>
                                <ul class="itm_left itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #1
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #2
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #3
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #4
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #5
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #6
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #7
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #8
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #9
                                    </li>
                                </ul>
                                <ul class="itm_right itm_wrap">
                                    <li class="itm" @click="handle_toggle">
                                        CMU #10
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #11
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #12
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #13
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #14
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #15
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #16
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #17
                                    </li>
                                    <li class="itm" @click="handle_toggle">
                                        CMU #18
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cnt_btm cnt_wrap">
                    <ul class="list sub_titl_list">
                        <li class="sub_titl">Rack</li>
                        <li class="sub_titl">Voltage[V]</li>
                        <li class="sub_titl">Current[A]</li>
                        <li class="sub_titl">SOC[%]</li>
                        <li class="sub_titl">셀 최고 전압[V]</li>
                        <li class="sub_titl">셀 최저 전압[V]</li>
                        <li class="sub_titl">모듈 최고 온도[°C]</li>
                        <li class="sub_titl">모듈 최저 온도[°C]</li>
                    </ul>
                    <ul class="list">
                        <li class="rack_no">Rack #1</li>
                        <li class="itm_list">
                            <ul class="paa_top list">
                                <li class="paa_itm paa_no">PAA01</li>
                                <li class="paa_itm">493.7</li>
                                <li class="paa_itm">0.0</li>
                                <li class="paa_itm">30.3</li>
                                <li class="paa_itm">3.503</li>
                                <li class="paa_itm">3.221</li>
                                <li class="paa_itm">26</li>
                                <li class="paa_itm">24</li>
                            </ul>
                            <ul class="paa_btm list">
                                <li class="paa_itm paa_no">PAA02</li>
                                <li class="paa_itm">493.7</li>
                                <li class="paa_itm">0.0</li>
                                <li class="paa_itm">31.9</li>
                                <li class="paa_itm">3.503</li>
                                <li class="paa_itm">3.221</li>
                                <li class="paa_itm">26</li>
                                <li class="paa_itm">24</li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list">
                        <li class="rack_no">Rack #2</li>
                        <li class="itm_list">
                            <ul class="paa_top list">
                                <li class="paa_itm paa_no">PAA01</li>
                                <li class="paa_itm">493.6</li>
                                <li class="paa_itm">0.0</li>
                                <li class="paa_itm">31.4</li>
                                <li class="paa_itm">3.463</li>
                                <li class="paa_itm">3.305</li>
                                <li class="paa_itm">26</li>
                                <li class="paa_itm">24</li>
                            </ul>
                            <ul class="paa_btm list">
                                <li class="paa_itm paa_no">PAA02</li>
                                <li class="paa_itm">493.6</li>
                                <li class="paa_itm">0.0</li>
                                <li class="paa_itm">29.2</li>
                                <li class="paa_itm">3.434</li>
                                <li class="paa_itm">3.404</li>
                                <li class="paa_itm">26</li>
                                <li class="paa_itm">24</li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list">
                        <li class="rack_no">Rack #3</li>
                        <li class="itm_list">
                            <ul class="paa_top list">
                                <li class="paa_itm paa_no">PAA01</li>
                                <li class="paa_itm">493.6</li>
                                <li class="paa_itm">0.0</li>
                                <li class="paa_itm">28.8</li>
                                <li class="paa_itm">3.434</li>
                                <li class="paa_itm">3.413</li>
                                <li class="paa_itm">27</li>
                                <li class="paa_itm">25</li>
                            </ul>
                            <ul class="paa_btm list">
                                <li class="paa_itm paa_no">PAA02</li>
                                <li class="paa_itm">493.7</li>
                                <li class="paa_itm">0.0</li>
                                <li class="paa_itm">28.8</li>
                                <li class="paa_itm">3.434</li>
                                <li class="paa_itm">3.410</li>
                                <li class="paa_itm">27</li>
                                <li class="paa_itm">25</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="light_box" v-show="modal">
                <div class="inner_box">
                    <h3 class="cnt_titl">Module 정보</h3>
                    <div class="select_bar">
                        <select name="" id="" class="rack_select">
                            <option value="">Rack #1</option>
                            <option value="">Rack #2</option>
                            <option value="">Rack #3</option>
                        </select>
                        <select name="" id="" class="paa_select">
                            <option value="">PAA01</option>
                            <option value="">PAA02</option>
                        </select>
                        <select name="" id="" class="cmu_select">
                            <option value="" class="cmu_itm">
                                <p>전체</p>
                            </option>
                            <option class="cmu_itm">CMU #1</option>
                            <option class="cmu_itm">CMU #2</option>
                            <option class="cmu_itm">CMU #3</option>
                            <option class="cmu_itm">CMU #4</option>
                            <option class="cmu_itm">CMU #5</option>
                            <option class="cmu_itm">CMU #6</option>
                            <option class="cmu_itm">CMU #7</option>
                            <option class="cmu_itm">CMU #8</option>
                            <option class="cmu_itm">CMU #9</option>
                            <option class="cmu_itm">CMU #10</option>
                            <option class="cmu_itm">CMU #11</option>
                            <option class="cmu_itm">CMU #12</option>
                            <option class="cmu_itm">CMU #13</option>
                            <option class="cmu_itm">CMU #14</option>
                            <option class="cmu_itm">CMU #15</option>
                            <option class="cmu_itm">CMU #16</option>
                            <option class="cmu_itm">CMU #17</option>
                            <option class="cmu_itm">CMU #18</option>
                        </select>
                        <input type="button" value="조회" />
                    </div>
                    <div class="table">
                        <ul class="list sub_titl_list">
                            <li class="sub_titl paa_itm">CMU</li>
                            <li class="sub_titl paa_itm">모듈 전압[V]</li>
                            <li class="sub_titl paa_itm">
                                모듈내 셀 평균 전압[V]
                            </li>
                            <li class="sub_titl paa_itm">MAX. 셀 전압[V]</li>
                            <li class="sub_titl paa_itm">MIN. 셀 전압[V]</li>
                            <li class="sub_titl paa_itm">
                                모듈 내 셀 편차값[V]
                            </li>
                            <li class="sub_titl paa_itm">온도[°C]</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #1</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #2</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #3</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #4</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #5</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #6</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #7</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #8</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #9</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #10</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #11</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #12</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #13</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #14</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #15</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #16</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #17</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #18</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                        <ul class="list">
                            <li class="paa_itm paa_no">CMU #19</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">0</li>
                            <li class="paa_itm">3.488</li>
                            <li class="paa_itm">3.471</li>
                            <li class="paa_itm">0.017</li>
                            <li class="paa_itm">25</li>
                        </ul>
                    </div>
                    <input
                        class="btn"
                        type="button"
                        value="닫기"
                        @click="handle_toggle"
                    />
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
    name: "rackSituation",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
    },
    data() {
        return {
            modal: false,
        };
    },
    methods: {
        handle_toggle: function () {
            this.modal = !this.modal;
        },
    },
    computed: {},
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
input:focus,
select:focus {
    outline: 2px solid #2a58ae;
}
#rack_situation {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#rack_situation #lnbSet .lnb_wrap .depth_2:nth-child(3) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#rack_situation #cnbSet .cnb_wrap:nth-child(3) {
    display: flex;
}
/* cnb 번호 지정 */
#rack_situation #cnbSet .cnb_wrap .depth_3_wrap:nth-child(1) {
    display: flex;
}
#rack_situation .rack_situation_cnt_wrap {
    padding: 24px 32px;
    position: relative;
}
#rack_situation .rack_situation_cnt_wrap .cnt_top {
    margin-bottom: 32px;
    display: flex;
}
#rack_situation .rack_situation_cnt_wrap .cnt_top .rack_wrap {
    background-color: #fff;
    padding: 24px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-right: 16px;
    width: 608px;
    display: flex;
    flex-wrap: wrap;
}
#rack_situation .rack_situation_cnt_wrap .cnt_top .rack_wrap:last-child {
    margin-right: 0px;
}
#rack_situation .rack_situation_cnt_wrap .cnt_top .rack_wrap .rack_no {
    width: 100%;
    background-color: #313748;
    height: 56px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
}
#rack_situation .rack_situation_cnt_wrap .cnt_top .rack_wrap .cnt_inner {
    display: flex;
}
#rack_situation .rack_situation_cnt_wrap .cnt_top .rack_wrap .cnt_inner > div {
    width: 276px;
    display: flex;
    flex-wrap: wrap;
    margin-right: 8px;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_top
    .rack_wrap
    .cnt_inner
    > div:last-child {
    margin-right: 0px;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_top
    .rack_wrap
    .cnt_inner
    > div
    .paa_no {
    width: 100%;
    height: 40px;
    background-color: #dddddd;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #222222;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_top
    .rack_wrap
    .cnt_inner
    > div
    .itm_wrap {
    margin-right: 4px;
    display: flex;
    flex-direction: column;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_top
    .rack_wrap
    .cnt_inner
    > div
    .itm_wrap:last-child {
    margin-right: 0px;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_top
    .rack_wrap
    .cnt_inner
    > div
    .itm_wrap
    .itm {
    width: 136px;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    color: #222222;
    cursor: pointer;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_top
    .rack_wrap
    .cnt_inner
    > div
    .itm_wrap
    .itm.selected {
    border: 1px solid #2a58ae;
    color: #2a58ae;
    background-color: #f4f7fc;
}
#rack_situation .rack_situation_cnt_wrap .cnt_btm {
    background-color: #fff;
    padding: 24px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    width: 100%;
}
#rack_situation .rack_situation_cnt_wrap .cnt_btm .list {
    display: flex;
    width: 100%;
}
#rack_situation .rack_situation_cnt_wrap .cnt_btm .list.sub_titl_list {
    height: 56px;
    background-color: #313748;
    border-radius: 4px;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_btm
    .list.sub_titl_list
    .sub_titl {
    color: #fff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_btm
    .list.sub_titl_list
    .sub_titl:first-child {
    min-width: 366px;
}
#rack_situation .rack_situation_cnt_wrap .cnt_btm > .list:not(.sub_titl_list) {
    height: 96px;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_btm
    > .list:not(.sub_titl_list)
    .rack_no {
    height: 100%;
    min-width: 200px;
    background-color: #dddddd;
    color: #222222;
    border-bottom: 1px solid #aaaaaa;
    display: flex;
    justify-content: center;
    align-items: center;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_btm
    > .list:not(.sub_titl_list)
    .itm_list {
    width: 100%;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_btm
    > .list:not(.sub_titl_list)
    .itm_list
    > .list {
    height: 50%;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_btm
    > .list:not(.sub_titl_list)
    .itm_list
    > .list
    .paa_itm {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dddddd;
    border-top: none;
    border-left: none;
}
#rack_situation
    .rack_situation_cnt_wrap
    .cnt_btm
    > .list:not(.sub_titl_list)
    .itm_list
    > .list
    .paa_no {
    height: 100%;
    min-width: 166px;
    background-color: #f5f5f5;
    color: #444444;
}
#rack_situation .light_box {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}
#rack_situation .light_box .inner_box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1000px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 24px 32px 32px;
    border-radius: 4px;
}
#rack_situation .light_box .inner_box > * {
    display: flex;
}
#rack_situation .light_box .inner_box .cnt_titl {
    color: #313748;
    height: 48px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
    font-size: 28px;
}
#rack_situation .light_box .inner_box .select_bar {
    width: 100%;
    margin-bottom: 16px;
    height: 48px;
}
#rack_situation .light_box .inner_box .select_bar select {
    height: 48px;
    width: 240px;
    margin-left: 8px;
    border-radius: 2px;
    border: 1px solid #ddd;
    padding: 14px 16px;
    font-size: 14px;
    color: #444;
    background: url(../../assets/img/select_arr.png) no-repeat 90% 50%;
    appearance: none;
}
#rack_situation .light_box .inner_box .select_bar select:first-child {
    margin-left: 0px;
}
#rack_situation .light_box .inner_box .select_bar input {
    height: 48px;
    width: 136px;
    margin-left: auto;
    border-radius: 4px;
    border: 1px solid #173161;
    background-color: #1d3e7a;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
}
#rack_situation .light_box .inner_box .table {
    width: 100%;
    height: 494px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
}
#rack_situation .light_box .inner_box .table .list {
    display: flex;
}
#rack_situation .light_box .inner_box .table .sub_titl_list {
    width: 100%;
    height: 56px;
    background-color: #313748;
    border-radius: 4px;
}
#rack_situation .light_box .inner_box .table .sub_titl {
    color: #fff;
    font-weight: 500;
}
#rack_situation .light_box .inner_box .table .paa_itm {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: none;
    border-left: none;
    height: 48px;
}
#rack_situation .light_box .inner_box .table .paa_itm:not(.sub_titl) {
    border: 1px solid #dddddd;
    border-top: none;
    border-left: none;
    height: 48px;
}
#rack_situation
    .light_box
    .inner_box
    .table
    .paa_itm:not(.sub_titl):first-child {
    background-color: #f5f5f5;
}

#rack_situation .light_box .inner_box .table .paa_itm:first-child,
#rack_situation .light_box .inner_box .table .paa_itm:nth-child(2),
#rack_situation .light_box .inner_box .table .paa_itm:last-child {
    flex: 0.75;
}

#rack_situation .light_box .inner_box .table .paa_itm:nth-child(3) {
    flex: 1.25;
}
#rack_situation .light_box .inner_box .btn {
    width: 136px;
    height: 48px;
    border-radius: 4px;
    background-color: #313748;
    border: 1px solid #171a24;
    color: #fff;
    font-weight: 500;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>

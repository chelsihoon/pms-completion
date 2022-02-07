<template>
    <section id="mainHeader">
        <header id="header">
            <div class="wrap_text">
                <p>설명 및 소제목이 들어갑니다. 설명 및 소제목이 들어갑니다.</p>
                <h2>타이틀이 들어갑니다.</h2>
            </div>
        </header>
    </section>
</template>

<script>
export default {
    name: "mainHeader",
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
#header {
    position: relative;
    background: url(../../assets/img/sub_topBanner.png) no-repeat center/100%
        100%;
    width: 100%;
    height: 100px;
}
#header .wrap_text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
#header .wrap_text p {
    text-shadow: 0 0 4px #000;
    color: #fff;
}
#header .wrap_text h2 {
    text-shadow: 0 0 4px #000;
    font-weight: 700;
    font-size: 22px;
    color: #fff;
}
</style>

<template>
    <footer id="footer">
        <div class="copy">© 2021 Quantum Solution. ALL RIGHTS RESERVED.</div>
    </footer>
</template>

<script>
export default {
    name: "mainFooter",
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
#footer {
    position: relative;
    height: 60px;
    margin-top: 48px;
}
#footer .copy {
    position: absolute;
    right: 32px;
    bottom: 40px;
    color: #bbb;
}
</style>

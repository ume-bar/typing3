/*global Vue*/
var app = new Vue({
    el: "#app",
    data: {
        // データを書くところ
        counter: 999,
        key: "",
        // keyコード(文字に番号が振られている)がそれぞれあるので、取得
        code: 0,
        // 文字列に渡すデータ内容
        background: "red",
        width: "100px",
        height: "100px",
        size: "100px",
    },
    // keydownが押した時(データが呼ばれると)onKeyDownに流れる仕組み　keyupはkeyから指を離した時
    mounted() {
        document.addEventListener("keydown", this.onKeyDown);
    },
    methods: {
        // メソッドを書くところ
        click() {
            this.counter += 1;
        },
        onKeyDown(event) {
            this.key = event.key;
            this.code = event.keyCode;
            // if (this.key == "b") {
            //     this.background = "blue";
            // } else if (this.key == "r") {
            //     this.background = "red";
            // } else if (this.key == "g") {
            //     this.background = "green";
            // } else if (this.key == "y") {
            //     this.background = "yellow";
            // } else if (this.key == "p") {
            //     this.background = "purple";
            // } else if (this.key == "1") {
            //     this.width = "100px";
            // } else if (this.key == "2") {
            //     this.width = "200px";
            // } else if (this.key == "3") {
            //     this.width = "300px";
            // } else if (this.key == "4") {
            //     this.width = "400px";
            // } else if (this.key == "5") {
            //     this.height = "100px";
            // } else if (this.key == "6") {
            //     this.height = "200px";
            // } else if (this.key == "7") {
            //     this.height = "300px";
            // } else if (this.key == "8") {
            //     this.height = "400px";
            // } else if (this.key == "9") {
            //     this.width = "50px";
            // } else if (this.key == "0") {
            //     this.height = "50px";
            // } else if (this.code == 32) {
            //     this.background = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")";
            // }
            if (this.code >= 48 && this.code <= 57) {
                this.size = (this.code - 48) * 100 + "px";
            } else if (this.code == 32) {
                this.background = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")";
            } else {
                this.size = "100px";
                this.background = "red";
            }
        }
    },
});


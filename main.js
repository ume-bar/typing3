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
        background: "white",
        colors: [
            "#ffff00",
            "#ffc0cb",
            "#ffa500",
            "#ff69b4",
            "#ff4500",
            "#ff00ff",
            "#ff0000",
            "#e4d00a",
            "#c71585",
            "#b26400",
            "#afeeee",
            "#aaff32",
            "#a52a2a",
            "#a0522d",
            "#9400d3",
            "#800000",
            "#708090",
            "#556b2f",
            "#32cd32",
            "#2f4f4f",
            "#1e90ff",
            "#191970",
            "#01153e",
            "#008b8b",
            "#0000ff",
            "#000000"
        ],
        // boxColors: [
        //     { cKey: "a", cCode: 65, cColor: "#ffff00" },
        //     { cKey: "b", cCode: 66, cColor: "#ffc0cb" },
        //     { cKey: "c", cCode: 67, cColor: "#ffa500" },
        //     { cKey: "d", cCode: 68, cColor: "#ff69b4" },
        //     { cKey: "e", cCode: 69, cColor: "#ff4500" },
        //     { cKey: "f", cCode: 70, cColor: "#ff00ff" },
        //     { cKey: "g", cCode: 71, cColor: "#ff0000" },
        //     { cKey: "h", cCode: 72, cColor: "#e4d00a" },
        //     { cKey: "i", cCode: 73, cColor: "#c71585" },
        //     { cKey: "j", cCode: 74, cColor: "#b26400" },
        //     { cKey: "k", cCode: 75, cColor: "#afeeee" },
        //     { cKey: "l", cCode: 76, cColor: "#aaff32" },
        //     { cKey: "m", cCode: 77, cColor: "#a52a2a" },
        //     { cKey: "n", cCode: 78, cColor: "#a0522d" },
        //     { cKey: "o", cCode: 79, cColor: "#9400d3" },
        //     { cKey: "p", cCode: 80, cColor: "#800000" },
        //     { cKey: "q", cCode: 81, cColor: "#708090" },
        //     { cKey: "r", cCode: 82, cColor: "#556b2f" },
        //     { cKey: "s", cCode: 83, cColor: "#32cd32" },
        //     { cKey: "t", cCode: 84, cColor: "#2f4f4f" },
        //     { cKey: "u", cCode: 85, cColor: "#1e90ff" },
        //     { cKey: "v", cCode: 86, cColor: "#191970" },
        //     { cKey: "w", cCode: 87, cColor: "#01153e" },
        //     { cKey: "x", cCode: 88, cColor: "#008b8b" },
        //     { cKey: "y", cCode: 89, cColor: "#0000ff" },
        //     { cKey: "z", cCode: 90, cColor: "#000000" }],
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
        changeColor(value) {

            this.key = value.key
            return this.key

        },
        onKeyDown(event) {
            this.key = event.key;
            this.code = event.keyCode;
            // colors[0] とかくと配列の最初の要素が取れ。その 0 のところを keyCode から計算
            this.background = this.colors[event.keyCode - 65];

            // this.background = this.colors.find((e) => { return e === event.key });
            // this.code === 65 ? this.background = this.colors[0] : this.background = this.colors[1];

            // this.background = this.colors.reduce((this.code, "white", 0, this.colors), "#ffff00"); ダメ
            // this.background = document.getElement(this.colors.length); ダメ
            // this.code === 65 ? this.background = this.colors[0] : this.background = 'white'　OK
            // for (var i = 65; i < this.co[lors.length; i++) {
            //     return this.background = this.colors[i]++; ダメ
            // }
            // this.background = this.boxColors.find((event) => event.key === this.boxColors.cKey && event.keyCode === this.boxColors.cCode).cColor;　ダメ
            // console.log(this.boxColors.map((e) => e.cColor));
            // switch (event.key) {
            //     case 'a': this.background = "#ffff00";
            //         break;
            //     case 'b': this.background = "#ffc0cb";
            //         break;
            //     case 'c': this.background = "#ffa500";
            //         break;
            //     case 'd': this.background = "#ff69b4";
            //         break;
            // };
            // switch (event.keyCode) {
            //     case 65: this.background = this.colors[0];
            //         break;
            //     case 66: this.background = this.colors[1];
            //         break;
            //     case 67: this.background = this.colors[2];
            //         break;
            //     case 68: this.background = this.colors[3];
            //         break;
            // }
            console.log(this.background);
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
            // if (this.code >= 48 && this.code <= 57) {
            //     this.size = (this.code - 48) * 100 + "px";
            // } else if (this.code == 32) {
            //     this.background = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")";
            // } else {
            //     this.size = "100px";
            //     this.background = "red";
            // }
        }
    },
});


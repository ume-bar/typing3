/*global Vue*/
var app = new Vue({
    el: "#app",
    data: {
        counter: 999,
        // データを書くところ
    },
    methods: {
        // メソッドを書くところ
        click() {
            this.counter += 1;
        },
    },
});


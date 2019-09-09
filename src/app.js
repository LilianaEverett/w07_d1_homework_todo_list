import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            toDos: [
                {name:"Buy shopping", checked: false},
                {name:"Clean bathroom", checked: true},
                {name:"Car's MOT", checked: false}
            ],
            newToDo: ""
        },
        methods: {
            addNewToDo: function () {
                this.toDos.push({
                    name: this.newToDo,
                    checked: false
                });
                this.newToDo = "";
            },
            checkToDo: function (index) {
                this.toDos[index].checked = true;
            }
        }
    });
});
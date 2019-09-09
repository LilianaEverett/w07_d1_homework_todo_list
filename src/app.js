import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            toDos: [
                {name:"Buy shopping", checked: false, highPriority: true},
                {name:"Clean bathroom", checked: true, highPriority: true},
                {name:"Car's MOT", checked: false, highPriority: false}
            ],
            newToDo: ""
        },
        methods: {
            addNewToDo: function () {
                this.toDos.push({
                    name: this.newToDo,
                    checked: false,
                    highPriority: this.newToDo
                });
                this.newToDo = "";
            },
            checkToDo: function (index) {
                this.toDos[index].checked = true;
            },
            checkPriority: function (index) {
                this.toDos[index].highPriority = true;
            }
        }
    });
});
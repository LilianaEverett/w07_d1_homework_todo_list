import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                {name:"Buy shopping", checked: false},
                {name:"Clean bathroom", checked: true},
                {name:"Car's MOT", checked: false}
            ],
            newItem:""
        },
        methods: {
            addNewToDo: function () {
                this.todos.push({
                    name: this.newItem,
                    checked: false
                });
                this.newItem = "";
            }
        }
    )};
)};
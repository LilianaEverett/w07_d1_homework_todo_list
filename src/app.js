import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            toDos: [
                {name:"Shopping", checked: false, priority: "Low Priority"},
                {name:"Clean bathroom", checked: true, priority: "High Priority"},
                {name:"Study Javascript", checked: false, priority: "High Priority"}
            ],
            newToDo: {name:"", checked: false, priority: ""}
            // how to test the 2 way binding: newToDo:"test"
        },
        methods: {
            addNewToDo: function() {
                this.toDos.push(this.newToDo);
                this.newToDo = {name:"", checked: false, priority: ""}
                // after we add a new to do it needs to reset to an empty this.newToDo = ""
            },
            checkToDo: function (index) {
                this.toDos[index].checked = true;
            }
        }
    });
});
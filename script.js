$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();

        const inputTask = $("#task-input").val();

        if (inputTask !== "") {
            const newTask = $("<li>").text(inputTask);
            $("ul").append(newTask);
            $("#task-input").val("");

            newTask.click(function () {
                $(this).toggleClass("task-completed");
            });
        }
    });
});

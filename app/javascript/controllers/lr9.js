
$(document).ready(function () {
    $("#input_form").bind("ajax:success",
        function (xhr, data, status) {
            // data is already an object
            show_result(data)
        })
})

console.log("5")
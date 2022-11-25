function show_result(data){
    var result = document.getElementById("result");
    result.innerHTML = "<hr/>Result is: " + data.value +
    "<hr/><p>"+"</p>";
    }
    $(document).ready(function(){
    $("#input_form").bind("ajax:success",
    function(xhr, data, status) {
    // data is already an object
    show_result(data)
    })
    })
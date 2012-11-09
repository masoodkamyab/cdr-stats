$(function() {
    var today = new Date();
    var last_day_of_month = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();

    var fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
    var toDate = new Date(today.getFullYear(), today.getMonth(), last_day_of_month);

    $('#id_from_date').datepicker({
        format: 'yyyy-mm-dd'
    }).on('changeDate', function(selectedDate){
        if (selectedDate.date.valueOf() > toDate.valueOf()){
            $('#id_from_date').datepicker('setValue', fromDate);
        } else {
            fromDate = new Date(selectedDate.date);
        }
    });

    $('#id_to_date').datepicker({
        format: 'yyyy-mm-dd'
    }).on('changeDate', function(selectedDate){
        if (selectedDate.date.valueOf() < fromDate.valueOf()){
            $('#id_to_date').datepicker('setValue', toDate);
        } else {
            toDate = new Date(selectedDate.date);
        }
    });
});

var $amountInput = $('[type="number"]');
var amount = '';
var $getId = $('[type="hidden"]');
var getparse=ParaMeter();
$getId.val(getparse.id);
$(".quick_amount p").off("click").on("click", function () {
    amount = $(this).text();
    if (!$(this).hasClass('active')) {
        $(this).addClass('active').siblings().removeClass('active');
        $amountInput.val(amount);
    } else {
        $(this).removeClass('active');
        $amountInput.val('');
    }
})
$amountInput.on('input propertychange', function () {
    if ($(this).val() > 5000) {
        $('#exampleModal').modal('show')
    }
    if($(this).val()!==$('.quick_amount p.active').text()){
        $('.quick_amount p').removeClass('active');
    }
})
$('#exampleModal').on('hidden.bs.modal', function (e) {
    $amountInput.val(5000);
})
function ParaMeter()
{
    var obj={};
    var arr=location.href.substring(location.href.lastIndexOf('?')+1).split("&");
    for(var i=0;i < arr.length;i++){
        var aa=arr[i].split("=");
        obj[aa[0]]=aa[1];
    }
    return obj;
}

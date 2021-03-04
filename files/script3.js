require([], function () {
    $(function () {
        $('.closeNetworkNotificationPopuper').on('click', function (e) {
            e.preventDefault();

            var id = $(this).attr('data-id');

            $.post('/local/components/adv/services.works/templates/.default/ajax.php', {
                id: id,
                mode: 'disable_notification'
            }, function (data) {
                if (data.success) {
                    $('.network_service_works_notification_container[data-id=' + id + ']').hide();
                }
            }, 'json');
        })
    });
});

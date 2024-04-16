document.addEventListener('DOMContentLoaded', function () {
    const showNotificationBtn = document.getElementById('showNotification');
    const closeNotificationBtn = document.getElementById('closeNotification');
    const notificationContainer = document.getElementById('notificationContainer');

    showNotificationBtn.addEventListener('click', function () {
        notificationContainer.style.display = 'block';
    });

    closeNotificationBtn.addEventListener('click', function () {
        notificationContainer.style.display = 'none';
    });
});

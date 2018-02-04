$(document).ready(function () {
    hiddenText();
});

function hiddenText() {
    $(".toggle-btn").click(function () {
        $(".hidden-text").toggleClass('hidden-text-active');
    });
}
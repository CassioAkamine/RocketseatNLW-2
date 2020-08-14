// Deletando adição de novo horário!
$('#rmv-time').hide();
$('#add-time').on("click", showRemoveField)

function showRemoveField() {
    const removeFields = document.querySelectorAll('.schedule-item')

    if (removeFields.length > 1) {
        return $('#rmv-time').show()
    } else {

    }
}

$('#rmv-time').on("click", hideRemoveField)

function hideRemoveField() {
    const hideButton = document.querySelectorAll('.schedule-item')
    if (hideButton.length <= 1) {
        return $('#rmv-time').remove()
    } else {

    }
}
// Deletando adição de novo horário!
$('#rmv-time').hide();
$('#add-time').on("click", showRemoveButton)

function showRemoveButton() {
    return $('#rmv-time').show()
}

$('#rmv-time').on("click", removeScheduleItem)

// Botão remover oculto se tiver somente um SCHEDULE-ITEM
function removeScheduleItem() {
    const { length: scheduleList } = document.querySelectorAll('.schedule-item')

    if (scheduleList > 1) {
        $('.schedule-item:last').remove()

        if ((scheduleList - 1) == 1) {
            return $('#rmv-time').hide()
        }
    }
}
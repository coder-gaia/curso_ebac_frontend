$(document).ready(function(){
    $(`#tel`).mask(`(00) 00000-0000`)

    $(`#social-number`).mask(`000.000.000-00`)

    $(`#zip-code`).mask(`00000-000`)

    $(`form`).validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            name: `Required Field <p></p>`,
            email: `Required Field <p></p>`,
            tel: `Required Field <p></p>`
        }
    })
})


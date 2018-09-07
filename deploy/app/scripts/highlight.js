function highlight_button(id) {
    all_style_button('user_buttons', {
        "border": "0px solid yellow"
    })
    style_button('user_buttons', get_target_instance(id), {
        "border": "2px solid yellow"
    })
    if (get_target_instance(id) == 1) {

        $('.sections').children().show()

        // hide all other pages
        $('.hold_section_title_insurer').hide()

    }
    if (get_target_instance(id) == 2) {

        $('.sections').children().hide()

        load_insurer_page()
    }
    if (get_target_instance(id) == 3) {

        $('.sections').children().hide()

        load_boatowner_page()
    }
    if (get_target_instance(id) == 4) {

        $('.sections').children().hide()

        load_passenger_page()
    }
}
load_fonts({
    "font": "Ubuntu"
})

style_body({
    "background": "rgb(85, 85, 85)",
    //"background-image": "url('img/backdrop.jpg')",
    "font-family": "Ubuntu",
    "min-width": "1300px"
})

add_navigation_bar({
    "this_class": "my_nav"
})

style_navigation_bar('my_nav', 1, {
    "background-color": "rgba(91, 95, 100, 0.95)",
    "border-radius" : "4px",
    "margin-bottom" : "20px"
})

add_top_button({
    "this_class": "to_top_button",
    "text": "TOP",
    "side": "right"
})

add_layout('my_nav', 1, {
    "this_class": "nav_layout",
    "cell_class": "nav_layout_cells",
    "row_class": "nav_layout_rows",
    "number_of_rows": 1,
    "number_of_columns": 3
})

style_layout('nav_layout', 1, {
    "height": "90px",
    "column_widths": ['20%', '50%', '30%'],
    "border": 0
})

add_image('nav_layout_cells', 1, {
    "this_class": "logo",
    "image_path": "img/logo.png"
})

style_image('logo', 1, {
    "margin-left" : "10px",
    "shadow" : "drop-shadow(4px 4px 40px white)",
    "width" : "60px"
})

add_text('nav_layout_cells', 2, {
    "this_class": "title",
    "text": "LIFESAVER"
})

style_text('title', 1, {
    "font-size": "30px",
    "color": "white",
    "align": "center"
})

add_spa({
    "this_class" : "sections",
    "sections" : 3
})

all_style_spa('sections', {
    "background" : "rgba(91, 95, 100, 0.95)",
    "height" : "auto"
})

// *********** SECTION 1

add_layout('sections', 1, {
    "this_class" : "hold_section_title",
    "row_class" : "hold_section_title_row",
    "cell_class" : "hold_section_title_cell",
    "number_of_columns" : 2,
    "number_of_rows" : 1
})

style_layout('hold_section_title', 1, {
    "height" : "auto",
    "column_widths" : ['50%','%50'],
    "border" : 0
})

style_layout('hold_section_title_cell', 2, {
    "halign" : "right"
})

add_text('hold_section_title_cell', 1, {
    "this_class" : "section_title",
    "text" : "PASSENGER PROFILER"
})

add_layout('hold_section_title_cell', 2, {
    "this_class" : "hold_option_buttons",
    "row_class" : "hold_option_buttons_row",
    "cell_class" : "hold_option_buttons_cell",
    "number_of_columns" : 3,
    "number_of_rows" : 1
})

style_layout('hold_option_buttons', 1, {
    "height" : "auto",
    "width" : "auto",
    "border" : 0
})

add_button('hold_option_buttons_cell', 1, {
    "this_class" : "option_button",
    "text" : "VISUAL 1"
})
add_event('option_button', 1, {
    "type" : "click",
    "function" : "pop_viz_modal()"
})
add_button('hold_option_buttons_cell', 2, {
    "this_class" : "option_button",
    "text" : "VISUAL 2"
})
add_event('option_button', 2, {
    "type" : "click",
    "function" : "pop_viz_modal()"
})
add_button('hold_option_buttons_cell', 3, {
    "this_class" : "option_button",
    "text" : "VISUAL 3"
})
add_event('option_button', 3, {
    "type" : "click",
    "function" : "pop_viz_modal()"
})

// section 1 visuals
add_layout('sections', 1, {
    "this_class" : "section_1_visuals",
    "row_class" : "section_1_visuals_row",
    "cell_class" : "section_1_visuals_cell",
    "number_of_columns" : 3,
    "number_of_rows" : 1
})

style_layout('section_1_visuals', 1, {
    "column_widths" : ['20%', '50%', '30%'],
    "border" : 0
})

add_dropdown('section_1_visuals_cell', 1, {
    "this_class" : "select_passenger",
    "title" : "select passenger...",
    "options" : ['bar_data_a','bar_data_b','bar_data_c', 'bar_data_d']
})

style_dropdown('select_passenger', 1, {
    "width" : "200px"
})

add_event('select_passenger', 1, {
    "type" : "change",
    "function" : "$('.bar_chart_frame')[0].contentWindow.draw_chart(eval(this.value)); toggle_functions('smile_one()', 'smile_two()')"
})
/*
add_text('section_1_visuals_cell', 2, {
    "this_class" : "profile_viz_title",
    "text" : "PASSENGER PROFILE"
})

style_text('profile_viz_title', 1, {
    "color" : "white",
    "font-size" : "20px"
})
*/

add_iframe("section_1_visuals_cell", 2, {
	"this_class" : "bar_chart_frame",
	"source" : "d3/bar_chart.html"
})
style_iframe('bar_chart_frame', 1, {
    "width" : "100%",
    "margin-left" : "50px"
})
$(".bar_chart_frame")[0].setAttribute("scrolling", "no");

add_image('section_1_visuals_cell', 3, {
    "this_class" : "show_smiles",
    "image_path" : "img/smile_1.png"
})

style_image('show_smiles', 1, {
    "width" : "160px"
})

// *********** SECTION 2

clone_layout("sections", 2, {
    "copy_class" : "hold_section_title",
    "copy_instance" : 1,
    "this_class" : "hold_section_title_b",
    "row_class" : "hold_section_title_b_row",
    "cell_class" : "hold_section_title_b_cell"
    })

remove_element('section_title', 2)

add_text('hold_section_title_b_cell', 1, {
    "this_class" : "section_title",
    "text" : "PROFILE TESTER"
})


clone_layout("sections", 2, {
    "copy_class" : "section_1_visuals",
    "copy_instance" : 1,
    "this_class" : "section_2_visuals",
    "row_class" : "section_2_visuals_row",
    "cell_class" : "section_2_visuals_cell"
    })

style_layout('section_2_visuals', 1, {
    "border" : 0
})

delay_event({
"function" : `
style_layout('section_2_visuals_cell', 1, {
    "valign" : "center",
    "halign" : "center"
})
`
})

remove_element('select_passenger', 2)

add_dropdown('section_2_visuals_cell', 1, {
    "this_class" : "select_random_passenger",
    "title" : "select random passenger...",
    "options" : ['bar_data_a','bar_data_b','bar_data_c', 'bar_data_d']
})

style_dropdown('select_random_passenger', 1, {
    "width" : "220px"
})

add_event('select_random_passenger', 1, {
    "type" : "change",
    "function" : "$('.bar_chart_frame_b')[0].contentWindow.draw_chart(eval(this.value))"
})

remove_element('bar_chart_frame', 2)

add_iframe("section_2_visuals_cell", 2, {
	"this_class" : "bar_chart_frame_b",
	"source" : "d3/bar_chart_b.html"
})
style_iframe('bar_chart_frame_b', 1, {
    "width" : "100%",
    "margin-left" : "50px"
})
$(".bar_chart_frame_b")[0].setAttribute("scrolling", "no");


remove_element('show_smiles', 2)

add_text('section_2_visuals_cell', 3, {
    "this_class" : "make_choice_title",
    "text" : "<br><br>MAKE YOUR CHOICE"
})

style_text('make_choice_title', 1, {
    "color" : "white",
    "font-size" : "20px"
})

style_layout('section_2_visuals_cell', 3, {
    "halign" : "center"
})

add_layout('section_2_visuals_cell', 3, {
    "this_class" : "hold_make_choice_buttons",
    "row_class" : "hold_make_choice_buttons_row",
    "cell_class" : "hold_make_choice_buttons_cell",
    "number_of_columns" : 1,
    "number_of_rows" : 3
})

style_layout('hold_make_choice_buttons', 1, {
    "height" : "200px",
    "border" : 0
})

add_button('hold_make_choice_buttons_cell', 1, {
    "this_class" : "hold_make_choice_button",
    "text" : "SURVIVES"
})

add_button('hold_make_choice_buttons_cell', 2, {
    "this_class" : "hold_make_choice_button",
    "text" : "DOES NOT SURVIVE"
})
add_button('hold_make_choice_buttons_cell', 3, {
    "this_class" : "hold_make_choice_button",
    "text" : "ASK AI"
})

delay_event({
"function" : `
style_button('hold_make_choice_button', 1, {
"background" : "rgba(145, 255, 94, 0.69)"
})
add_event('hold_make_choice_button', 1, {
"type" : "click",
"function" : "animate_element('hold_make_choice_button', 1, {'type' : 'spin'})"
})
style_button('hold_make_choice_button', 2, {
"background" : "rgba(255, 24, 78, 0.97)"
})
add_event('hold_make_choice_button', 2, {
"type" : "click",
"function" : "animate_element('hold_make_choice_button', 2, {'type' : 'hinge'})"
})
style_button('hold_make_choice_button', 3, {
"background" : "rgba(47, 206, 255, 0.88)"
})
add_event('hold_make_choice_button', 3, {
"type" : "click",
"function" : "animate_element('hold_make_choice_button', 3, {'type' : 'spin'})"
})
`
})

// *********** SECTION 3

add_text('sections', 3, {
    "this_class" : "section_title",
    "text" : "SCOREBOARD"
})

add_iframe("sections", 3, {
	"this_class" : "bar_chart_frame_c",
	"source" : "d3/bar_chart_c.html"
})
style_iframe('bar_chart_frame_c', 1, {
    "width" : "1000px",
    "height" : "300px"
})

$(".bar_chart_frame_c")[0].setAttribute("scrolling", "no");

// *********** ALL_ STYLES
all_style_text('section_title', {
    "color" : "white",
    "font-size" : "24px"
})
all_style_layout("hold_option_buttons_cell", {
    "halign" : "center"
})
all_style_button('option_button', {
    "background" : "orangered"
})
all_style_layout("section_1_visuals_cell", {
    "valign" : "top"
})
all_style_button('hold_make_choice_button', {
    "background" : "orangered",
    "width" : "80%"
})
all_style_layout("hold_make_choice_buttons_cell", {
    "halign" : "center"
})

// ******* PRECEDENCE STYLES
style_layout('section_1_visuals_cell', 3, {
    "halign" : "center",
    "valign" : "center"
})

// *********** UTILITY FUNCTIONS
function smile_one() {
    $('.show_smiles').attr('src', 'img/smile_1.png')
    }

function smile_two() {
    $('.show_smiles').attr('src', 'img/smile_2.png')
    }
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
    "options" : ['','','']
})

style_dropdown('select_passenger', 1, {
    "width" : "200px"
})

add_text('section_1_visuals_cell', 2, {
    "this_class" : "profile_viz_title",
    "text" : "PASSENGER PROFILE"
})

style_text('profile_viz_title', 1, {
    "color" : "white",
    "font-size" : "20px"
})

add_iframe("section_1_visuals_cell", 2, {
	"this_class" : "bar_chart_frame",
	"source" : "d3/bar_chart.html"
})
style_iframe('bar_chart_frame', 1, {
    "width" : "100%"
})
$(".bar_chart_frame")[0].setAttribute("scrolling", "no");

add_image('section_1_visuals_cell', 3, {
    "this_class" : "show_smiles",
    "image_path" : "img/smile_1.png"
})

style_image('show_smiles', 1, {
    "width" : "160px"
})

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

// ******* PRECEDENCE STYLES
style_layout('section_1_visuals_cell', 3, {
    "halign" : "center",
    "valign" : "center"
})

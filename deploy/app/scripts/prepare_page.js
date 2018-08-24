load_fonts({
    "font": "Ubuntu"
})

style_body({
    "background": "rgb(85, 85, 85)",
    "font-family": "Ubuntu",
    "min-width": "1200px"
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

add_layout('nav_layout_cells', 3, {
    "this_class": "users_layout",
    "cell_class": "users_layout_cells",
    "row_class": "users_layout_rows",
    "number_of_rows": 1,
    "number_of_columns": 5
})

style_layout('users_layout', 1, {
    "height": "60px",
    "width" : "500px",
    "border": 0
})

all_style_layout('users_layout_cells', {
"halign" : "center"
})

user_button_titles = ['PASSENGER', 'CREW MEMBER', 'INSURER', 'BOAT OWNER']
call_multiple({
"iterations" : 4,
"function" : `
add_button('users_layout_cells', index, {
"this_class" : "user_buttons",
"text" : user_button_titles[index]
})
all_style_button('user_buttons', {
"background" : "rgb(246, 193, 120)",
"color" : "black",
"font-weight" : "bold"
})
add_event('user_buttons', last_class_instance('user_buttons'), {
"type" : "click",
"function" : "highlight_button(this.id)"
})
`
})

style_button('user_buttons', 1, {
"border" : "2px solid yellow"
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
    "number_of_columns" : 4,
    "number_of_rows" : 1
})

style_layout('hold_option_buttons', 1, {
    "height" : "auto",
    "width" : "580px",
    "border" : 0
})

add_button('hold_option_buttons_cell', 1, {
    "this_class" : "select_passenger",
    "text" : "SELECT RANDOM PASSENGER"
})

style_button('select_passenger', 1, {
    "width" : "auto",
    "background" : "ivory",
    "color" : "black",
    "font-weight" : "bold"
})

add_event('select_passenger', 1, {
    "type" : "click",
    "function" : `
        fetch_random_passenger();
        setTimeout(function() {
        $('.bar_chart_frame')[0].contentWindow.draw_chart(show_chart())
        toggle_functions('smile_one()', 'smile_two()');
        show_title();
        show_sex();
        show_fare();
        }, 500)

        `
})

add_button('hold_option_buttons_cell', 2, {
    "this_class" : "option_button",
    "text" : "VISUAL 1"
})
add_event('option_button', 1, {
    "type" : "click",
    "function" : "pop_viz_modal()"
})
add_button('hold_option_buttons_cell', 3, {
    "this_class" : "option_button",
    "text" : "VISUAL 2"
})
add_event('option_button', 2, {
    "type" : "click",
    "function" : "pop_viz_modal()"
})
add_button('hold_option_buttons_cell', 4, {
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
    "number_of_columns" : 2,
    "number_of_rows" : 1
})

style_layout('section_1_visuals', 1, {
    "column_widths" : ['70%', '30%'],
    "border" : 0
})

style_layout('section_1_visuals_cell', 2, {
    "halign" : "center",
    "valign" : "center"
})

add_iframe("section_1_visuals_cell", 1, {
	"this_class" : "bar_chart_frame",
	"source" : "d3/bar_chart.html"
})
style_iframe('bar_chart_frame', 1, {
    "width" : "100%"
})
$(".bar_chart_frame")[0].setAttribute("scrolling", "no");

add_layout('section_1_visuals_cell', 2, {
    "this_class" : "hold_details",
    "row_class" : "hold_details_row",
    "cell_class" : "hold_details_cell",
    "number_of_columns" : 2,
    "number_of_rows" : 1
})

style_layout('hold_details', 1, {
    "column_widths" : ['50%', '50%'],
    "width": "320px",
    "margin-right" : "50px",
    "border" : 0
})

all_style_layout('hold_details_cell', {
    "halign" : "center",
    "valign" : "top"
})

add_text('hold_details_cell', 2, {
    "this_class" : "deets_title",
    "text" : "SURVIVORSHIP"
})

all_style_text('deets_title', {
    "color" : "white",
    "margin-top" : "30px"
})


add_image('hold_details_cell', 2, {
    "this_class" : "show_smiles",
    "image_path" : "img/smile_1.png"
})

style_image('show_smiles', 1, {
    "width" : "130px",
    "margin-top" : "30px"
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

add_button('hold_option_buttons_cell', 5, {
    "this_class" : "select_passenger",
    "text" : "SELECT RANDOM PASSENGER"
})


delay_event({
"delay" : 1000,
"function" :  `
style_button('select_passenger', 2, {
    "width" : "auto",
    "background" : "ivory",
    "color" : "black",
    "font-weight" : "bold"
})
`
})

add_event('select_passenger', 2, {
    "type" : "click",
    "function" : `
        setTimeout(function() {
        $('.bar_chart_frame_b')[0].contentWindow.draw_chart_b(show_chart());
        remove_element('showing_user_choices', 1)
        remove_element('ai_choice', 1)
        remove_element('correct_answer', 1)
        }, 500)

        `
})

add_event('option_button', 4, {
    "type" : "click",
    "function" : "pop_viz_modal()"
})
add_event('option_button', 5, {
    "type" : "click",
    "function" : "pop_viz_modal()"
})
add_event('option_button', 6, {
    "type" : "click",
    "function" : "pop_viz_modal()"
})

remove_element('select_passenger', 2)
remove_element('bar_chart_frame', 2)
remove_element('hold_details', 2)
remove_element('show_smiles', 2)




add_iframe("section_2_visuals_cell", 1, {
	"this_class" : "bar_chart_frame_b",
	"source" : "d3/bar_chart_b.html"
})
style_iframe('bar_chart_frame_b', 1, {
    "width" : "100%",
    "margin-left" : "50px"
})
$(".bar_chart_frame_b")[0].setAttribute("scrolling", "no");


style_layout('section_2_visuals_cell', 3, {
    "halign" : "center"
})

add_layout('section_2_visuals_cell', 2, {
    "this_class" : "hold_make_choice_buttons",
    "row_class" : "hold_make_choice_buttons_row",
    "cell_class" : "hold_make_choice_buttons_cell",
    "number_of_columns" : 1,
    "number_of_rows" : 5
})

style_layout('hold_make_choice_buttons', 1, {
    "height" : "200px",
    "width" : "200px",
    "margin-top" : "20px",
    "border" : 0
})

add_text('hold_make_choice_buttons_cell', 1, {
    "this_class" : "make_choice_title",
    "text" : "MAKE YOUR CHOICE"
})

style_text('make_choice_title', 1, {
    "color" : "white",
    "font-size" : "20px",
    "margin-top" : "5px",
    "margin-bottom" : "5px"
})

add_button('hold_make_choice_buttons_cell', 2, {
    "this_class" : "hold_make_choice_button",
    "text" : "SURVIVES"
})

add_button('hold_make_choice_buttons_cell', 3, {
    "this_class" : "hold_make_choice_button",
    "text" : "DOES NOT SURVIVE"
})
add_button('hold_make_choice_buttons_cell', 4, {
    "this_class" : "hold_make_choice_button",
    "text" : "ASK AI"
})
add_button('hold_make_choice_buttons_cell', 5, {
    "this_class" : "hold_make_choice_button",
    "text" : "CORRECT ANSWER"
})

global_choice_clicked=''

delay_event({
"function" : `
style_button('hold_make_choice_button', 1, {
"background" : "rgba(145, 255, 94, 0.69)",
"margin-bottom" : "8px",
"width" : "180px"
})
add_event('hold_make_choice_button', 1, {
"type" : "click",
"function" : "animate_element('hold_make_choice_button', 1, {'type' : 'spin'}); remove_element('showing_user_choices', 1); add_text('show_choices_layout_cells', 1, {'this_class' : 'showing_user_choices', 'text' : 'SURVIVED'}); style_text('showing_user_choices', 1, {'color' : 'rgb(255, 253, 5)'}); global_choice_clicked='survived'"
})
style_button('hold_make_choice_button', 2, {
"background" : "rgba(255, 24, 78, 0.97)",
"margin-bottom" : "10px",
"width" : "180px"
})
add_event('hold_make_choice_button', 2, {
"type" : "click",
"function" : "animate_element('hold_make_choice_button', 2, {'type' : 'hinge'}); remove_element('showing_user_choices', 1); add_text('show_choices_layout_cells', 1, {'this_class' : 'showing_user_choices', 'text' : 'DOES NOT SURVIVE'}); style_text('showing_user_choices', 1, {'color' : 'rgb(255, 253, 5)'}); global_choice_clicked='not survived'"
})
style_button('hold_make_choice_button', 3, {
"background" : "rgba(47, 206, 255, 0.88)",
"margin-top" : "10px",
"margin-bottom" : "10px",
"width" : "180px"
})
add_event('hold_make_choice_button', 3, {
"type" : "click",
"function" : "make_prediction()"
})
style_button('hold_make_choice_button', 4, {
"width" : "180px"
})
add_event('hold_make_choice_button', 4, {
"type" : "click",
"function" : "get_answer()"
})
style_layout('hold_make_choice_buttons_cell', 1, {
"background" : "grey"
})
style_layout('hold_make_choice_buttons_cell', 2, {
"background" : "grey"
})
style_layout('hold_make_choice_buttons_cell', 3, {
"background" : "grey"
})
`
})

add_layout('sections', 2, {
    "this_class": "show_choices_layout",
    "cell_class": "show_choices_layout_cells",
    "row_class": "show_choices_layout_rows",
    "number_of_rows": 1,
    "number_of_columns": 3
})

style_layout('show_choices_layout', 1, {
    "height": "60px",
    "table-layout": "fixed",
    "border": 2
})

all_style_layout('show_choices_layout_cells', {
    "halign" : "center"
})


add_text('show_choices_layout_cells', 1, {
"this_class" : "choices_text",
"text" : "USER CHOICE"
})

add_text('show_choices_layout_cells', 2, {
"this_class" : "choices_text",
"text" : "AI CHOICE"
})

add_text('show_choices_layout_cells', 3, {
"this_class" : "choices_text",
"text" : "CORRECT ANSWER"
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
all_style_text('choices_text', {
    "color" : "white",
    "font-size" : "18px"
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

global_ai_clicked = ''
function make_prediction() {
    if(global_choice_clicked !== '') {
    animate_element('hold_make_choice_button', 3, {'type' : 'lightSpeedOut'})
    add_spinner({'speed' : 1000, 'duration' : 1000})
    remove_element('ai_choice', 1);
    add_text('show_choices_layout_cells', 2, {'this_class' : 'ai_choice', 'text' : '???'});
    style_text('ai_choice', 1, {'color' : 'rgb(255, 253, 5)'})
    global_ai_clicked = 'yes'
    } else {
    alert('make a choice first')
    }
}
function get_answer() {
    one_zero = Math.round(Math.random())
    if(one_zero == 0) {
    use_answer = 'SURVIVED'
    } else {
    use_answer = 'NOT SURVIVED'
    }
    if(global_choice_clicked !== '' && global_ai_clicked !== '') {
    global_choice_clicked = ''
    remove_element('correct_answer', 1);
    add_text('show_choices_layout_cells', 3, {'this_class' : 'correct_answer', 'text' : use_answer});
    style_text('correct_answer', 1, {'color' : 'rgb(255, 253, 5)'})
    $('.bar_chart_frame_c')[0].contentWindow.draw_chart_c(eval('all_scores[Math.floor(Math.random() * all_scores.length)]'))
    animate_element('hold_make_choice_button', 4, {'type' : 'rubberBand'});
    show_arrow_point_b()
} else {
alert('make a choice and ask AI')
}
}

function show_arrow_point() {
remove_element('arrow_right', 1)
add_icon('hold_option_buttons_cell', 1, {
"this_class" : "arrow_right",
"icon_class" : "fa-arrow-right"
})
style_icon('arrow_right', 1, {
"color" : "white",
"font-size" : "20px"
})
animate_element('arrow_right', 1, {'type' : 'rubberBand', 'iterations' : 'infinite'})
move_up_down('arrow_right', 1, 'up')
}

function show_arrow_point_b() {
remove_element('arrow_right', 2)
add_icon('hold_option_buttons_cell', 5, {
"this_class" : "arrow_right",
"icon_class" : "fa-arrow-right"
})
style_icon('arrow_right', 2, {
"color" : "white",
"font-size" : "20px"
})
animate_element('arrow_right', 2, {'type' : 'rubberBand', 'iterations' : 'infinite'})
move_up_down('arrow_right', 2, 'up')
}

// onload
delay_event({
"delay" : 2000,
"function" : "click_element('select_passenger', 1); show_arrow_point()"
})
delay_event({
"delay" : 2000,
"function" : "click_element('select_passenger', 2)"
})
delay_event({
"delay" : 2000,
"function" : "show_arrow_point_b()"
})


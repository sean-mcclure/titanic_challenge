function load_insurer_page() {

// *********** SECTION 1

$('.hold_section_title_insurer').remove()

add_layout('sections', 1, {
    "this_class" : "hold_section_title_insurer",
    "row_class" : "hold_section_title_insurer_row",
    "cell_class" : "hold_section_title_insurer_cell",
    "number_of_columns" : 2,
    "number_of_rows" : 1
})

style_layout('hold_section_title_insurer', 1, {
    "height" : "auto",
    "column_widths" : ['50%','%50'],
    "border" : 1
})

// first cell
add_iframe("hold_section_title_insurer_cell", 1, {
	"this_class" : "bubble_frame",
	"source" : "d3/bubble.html"
})

style_iframe('bubble_frame', 1, {
    "width" : "100%",
    "height" : "500px"
})
$(".bubble_frame")[0].setAttribute("scrolling", "no");

// second cell
add_iframe("hold_section_title_insurer_cell", 2, {
	"this_class" : "upright_frame",
	"source" : "d3/upright_bar.html"
})

style_iframe('upright_frame', 1, {
    "width" : "100%",
    "height" : "500px"
})
$(".upright_frame")[0].setAttribute("scrolling", "no");


}
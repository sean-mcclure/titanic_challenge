function load_insurer_page() {

// *********** SECTION 1

$('.hold_section_title_insurer').remove()

add_text('sections', 1, {
    "this_class" : "section_title",
    "text" : "DISCOVERED PROFILES"
})

add_layout('sections', 1, {
    "this_class" : "hold_section_title_insurer",
    "row_class" : "hold_section_title_insurer_row",
    "cell_class" : "hold_section_title_insurer_cell",
    "number_of_columns" : 2,
    "number_of_rows" : 1
})

style_layout('hold_section_title_insurer', 1, {
    "height" : "auto",
    "column_widths" : ['50%','50%'],
    "border" : 0
})

// first cell
bubble_wrapper_arguments = {
    "chart_size" : 700
}

bubble_extras = {
    "add_ids" : "all_apply_id('text')",
    "click_bubble" : "all_add_event('text', {'type' : 'click', 'function' : 'parent.change_bar_data($(this).text())'})",
    "position" : "style_d3('svg.bubbleChart', 1, {'width' : '500px', 'height' : '500px', 'margin-top' : '0px', 'margin-left' : '50px'})"
}

add_d3_visual('hold_section_title_insurer_cell', 1, {
    "this_class" : "bubble_chart",
    "html_path" : "d3/bubble.html",
    "wrapper_arguments" : bubble_wrapper_arguments,
     "extra_functions" : bubble_extras
})

// second cell
up_bar_wrapper_arguments = {
    "data_path" : "../data/upright.tsv"
}

up_bar_extras = {

}

add_d3_visual('hold_section_title_insurer_cell', 2, {
    "this_class" : "upbar_chart",
    "html_path" : "d3/upright_bar.html",
    "wrapper_arguments" : up_bar_wrapper_arguments,
    "extra_functions" : up_bar_extras
})

// *********** SECTION 2

add_text('sections', 2, {
    "this_class" : "section_title",
    "text" : "INSURANCE PACKAGE RECOMMENDER"
})

add_text('sections', 2, {
    "this_class" : "assign_title",
    "text" : "Fill out applicant information to automatically assign the best insurance package."
})

all_style_text('assign_title', {
    "color" : "white",
    "font-size" : "18px",
    "margin-bottom" : "20px"
})

add_layout('sections', 2, {
    "this_class" : "assign_layout",
    "row_class" : "assign_layout_row",
    "cell_class" : "assign_layout_cell",
    "number_of_columns" : 5,
    "number_of_rows" : 1
})

style_layout('assign_layout', 1, {
    "height" : "auto",
    "width" : "100%",
    "column_widths" : ['20%', '10%', '10%', '50%', '10%'],
    "border" : 0
})

all_style_layout('assign_layout_cell', {
    "valign" : "center",
    "halign" : "center"
})

hold_form_titles = ['NAME: ', 'SEX: ', 'AGE: ', 'FAMILY SIZE: ', '# CHILDREN: ', 'EMBARKING: ', 'TITLE: ']

add_layout('assign_layout_cell', 1, {
    "this_class" : "applicant_form",
    "row_class" : "applicant_form_row",
    "cell_class" : "applicant_form_cell",
    "number_of_columns" : 2,
    "number_of_rows" : hold_form_titles.length
})

style_layout('applicant_form', 1, {
    "height" : "500px",
    "width" : "400px",
    "border" : 0
})

fill_column('applicant_form', 1, {
    "header" : false,
    "cell_class" : "applicant_form_cell",
    "cell_number" : 1,
    "text_class" : "form_deets",
    "array" : hold_form_titles
})

all_style_text('form_deets', {
    "color" : "white",
    "font-size" : "17px"
})


call_multiple({
"iterations" : hold_form_titles.length,
"function" : `
add_input('applicant_form_cell', (index*2) + 2, {
    "this_class" : "form_inputs",
    "placeholder" : "...",
    "spellcheck" : false
})
`
})

add_image('assign_layout_cell', 2, {
    "this_class" : "arrow_img",
    "image_path" : "img/arrow_right.png"
})

style_image('arrow_img', 1, {
    "width" : "70px"
})

add_button('assign_layout_cell', 3, {
    "this_class" : "run_assign",
    "text" : "RECOMMEND PACKAGE"
})

style_button('run_assign', 1, {
    "width" : "100px",
    "background" : "rgb(254, 245, 157)",
    "height" : "60px",
    "width" : "auto",
    "color" : "black",
    "border" : "1px solid black"
})

add_event('run_assign', 1, {
    "type" : "click",
    "function" : `
        animate_element('run_assign', 1, {
            "type" : "spin"
        })

        var randomProperty = function (obj) {
        var keys = Object.keys(obj)
        return obj[keys[ keys.length * Math.random() << 0]];
        };

        call_d3_wrapper('packages_barchart', 1, {
            "wrapper_arguments" : packages_wrapper_arguments,
            "extra_functions" : packages_extras,
            "data_choice" : randomProperty(packages_data)
        })

    `
})


packages_wrapper_arguments = {
    "data_choice" : packages_data['packages_1'],
    "chart_width" : 400,
    "chart_height" : 500,
    "left_choice" : 100
}

packages_extras = {
    "remove_but_last" : "$('svg').eq(0).remove()"
}

add_d3_visual('assign_layout_cell', 4, {
    "this_class" : "packages_barchart",
    "html_path" : "d3/packages_bar.html",
    "wrapper_arguments" : packages_wrapper_arguments,
    //"extra_functions" : packages_extras
})


add_layout('assign_layout_cell', 5, {
    "this_class" : "package_pops",
    "row_class" : "package_pops_row",
    "cell_class" : "package_pops_cell",
    "number_of_columns" : 1,
    "number_of_rows" : 7
})

style_layout('package_pops', 1, {
    "height" : "500px",
    "width" : "auto",
    "border" : 0
})


call_multiple({
"iterations" : 7,
"function" : `
add_text('package_pops_cell', index + 1, {
    "this_class" : "pop_packs",
    "text" : "?"
})
all_style_text('pop_packs', {
    "color" : "rgb(254, 245, 157)",
    "font-size" : "60px",
    "cursor" : "pointer"
})
use_pack = index+1
add_event('pop_packs', index + 1, {
    "type" : "click",
    "function" : "pop_packs(" + use_pack + ")"
})
`
})


// *********** SECTION 3

add_text('sections', 3, {
    "this_class" : "section_title",
    "text" : "RISK PREDICTOR"
})


clone_layout("sections", 3, {
    "copy_class" : "assign_layout",
    "copy_instance" : 1,
    "this_class" : "risk_layout",
    "row_class" : "risk_layout_row",
    "cell_class" : "risk_layout_cell"
    })

style_layout('risk_layout', 1, {
    "border" : 0
})

empty_contents('assign_layout_cell', 9)


remove_element('run_assign', 2)

add_button('assign_layout_cell', 8, {
    "this_class" : "run_assign",
    "text" : "PREDICT RISKS"
})

style_button('run_assign', 2, {
    "width" : "100px",
    "background" : "rgb(254, 245, 157)",
    "height" : "60px",
    "width" : "auto",
    "color" : "black",
    "border" : "1px solid black"
})


gauges_wrapper_arguments = {

}

gauges_extras = {
    "top" : "style_d3('svg', 1, {'margin-top' : '50px'})"
}

add_d3_visual('assign_layout_cell', 9, {
    "this_class" : "gauge_chart",
    "html_path" : "d3/fill_gauges.html",
    "wrapper_arguments" : gauges_wrapper_arguments,
    "extra_functions" : gauges_extras
})










// *** all_styles
all_style_text('section_title', {
    "font-size" : "22px",
    "color" : "rgb(254, 245, 157)"
})
all_style_text('form_titles', {
    "color" : "white",
    "font-size" : "18px"
})

}


function change_bar_data(instance) {
    if(instance == 'A') {
    call_d3_wrapper('upbar_chart', 1, {
        "wrapper_arguments" : up_bar_wrapper_arguments,
        "extra_functions" : up_bar_extras,
        "data_path" : "../data/upright_b.tsv"
    })
    }
    if(instance == 'B') {
    call_d3_wrapper('upbar_chart', 1, {
        "wrapper_arguments" : up_bar_wrapper_arguments,
        "extra_functions" : up_bar_extras,
        "data_path" : "../data/upright_b.tsv"
    })
    }
    if(instance == 'C') {
    call_d3_wrapper('upbar_chart', 1, {
        "wrapper_arguments" : up_bar_wrapper_arguments,
        "extra_functions" : up_bar_extras,
        "data_path" : "../data/upright_b.tsv"
    })
    }
    if(instance == 'D') {
    call_d3_wrapper('upbar_chart', 1, {
        "wrapper_arguments" : up_bar_wrapper_arguments,
        "extra_functions" : up_bar_extras,
        "data_path" : "../data/upright_b.tsv"
    })
    }
    if(instance == 'E') {
    call_d3_wrapper('upbar_chart', 1, {
        "wrapper_arguments" : up_bar_wrapper_arguments,
        "extra_functions" : up_bar_extras,
        "data_path" : "../data/upright_b.tsv"
    })
    }
}




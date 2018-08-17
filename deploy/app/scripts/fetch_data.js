//root_url = "http://localhost:9090/get_random_passenger"
root_url = "http://104.236.231.30:9090/get_random_passenger"

        /*
        bar_data_a = [{
                "name": "PASSENGER AGE",
                "value": 3,
        },
            {
                "name": "SIBLINGS / SPOUSES",
                "value": 5,
        },
            {
                "name": "PARENTS / CHILDREN",
                "value": 7,
        },
            {
                "name": "FARE PAID",
                "value": 5,
        }];

         bar_data_b = [{
                "name": "PASSENGER AGE",
                "value": 13,
        },
            {
                "name": "SIBLINGS / SPOUSES",
                "value": 2,
        },
            {
                "name": "PARENTS / CHILDREN",
                "value": 8,
        },
            {
                "name": "FARE PAID",
                "value": 2,
        }];

         bar_data_c = [{
                "name": "PASSENGER AGE",
                "value": 5,
        },
            {
                "name": "SIBLINGS / SPOUSES",
                "value": 1,
        },
            {
                "name": "PARENTS / CHILDREN",
                "value": 9,
        },
            {
                "name": "FARE PAID",
                "value": 5,
        }];

         bar_data_d = [{
                "name": "PASSENGER AGE",
                "value": 6,
        },
            {
                "name": "SIBLINGS / SPOUSES",
                "value": 2,
        },
            {
                "name": "PARENTS / CHILDREN",
                "value": 7,
        },
            {
                "name": "FARE PAID",
                "value": 8,
        }];

        */

        score_data_a = [29,19]
        score_data_b = [139,170]
        score_data_c = [104,90]
        score_data_d = [232,190]

        all_scores = [score_data_a, score_data_b, score_data_c, score_data_d]

setTimeout(function() {
$('.bar_chart_frame')[0].contentWindow.draw_chart(eval('bar_data_a'))
}, 1000)

setTimeout(function() {
$('.bar_chart_frame_b')[0].contentWindow.draw_chart_b(eval('bar_data_b'))
}, 1000)

setTimeout(function() {
$('.bar_chart_frame_c')[0].contentWindow.draw_chart_c(eval('score_data_a'))
}, 1000)

hold_images = ['img/deck_a.png', 'img/deck_b.png', 'img/deck_c.png', 'img/deck_d.png', 'img/deck_e.png', 'img/deck_f.png', 'img/deck_g.png']



function fetch_random_passenger() {

random_passenger_data = []
titles_data = []
sex_data = []
family_size_data = []
fare_data = []

call_api({
    "url" : root_url,
    "parameters" : '{}',
    "done" : `

        $.each(JSON.parse(data)[0], function(k,v) {
        inner_data={}
        if(k == 'fare' || k == 'sibsp' || k == 'parch' || k == 'age') {
        inner_data['name'] = k
        inner_data['value'] = v
        random_passenger_data.push(inner_data)
        }
        })

        $.each(JSON.parse(data)[0], function(k,v) {
        inner_data={}
        if(k.includes('title_') && v == 1) {
        inner_data['name'] = k
        inner_data['value'] = v
        titles_data.push(inner_data)
        }
        })

        $.each(JSON.parse(data)[0], function(k,v) {
        inner_data={}
        if(k.includes('sex')) {
        inner_data['name'] = k
        if(v == 1) {
        inner_data['value'] = 'male'
        } else {
        inner_data['value'] = 'female'
        }
        sex_data.push(inner_data)
        }
        })

        $.each(JSON.parse(data)[0], function(k,v) {
        inner_data={}
        if(k.includes('family_count')) {
        inner_data['name'] = k
        inner_data['value'] = v
        family_size_data.push(inner_data)
        }
        })

        $.each(JSON.parse(data)[0], function(k,v) {
        inner_data={}
        if(k.includes('fare')) {
        inner_data['name'] = k
        inner_data['value'] = v
        fare_data.push(inner_data)
        }
        })

    `
    })
}

function show_title() {
    all_remove_element('miss_title_main')
    all_remove_element('miss_title')
    add_text('hold_details_cell', 1, {
    "this_class" : "miss_title_main",
    "text" : "TITLE"
    })
    add_text('hold_details_cell', 1, {
    "this_class" : "miss_title",
    "text" : JSON.parse(JSON.stringify(titles_data[0]))['name'].replace('title_', '')
    })
    all_style_text('miss_title_main', {
    "color" : "white",
    "margin-top" : "30px"
    })
    all_style_text('miss_title', {
    "color" : "yellow",
    })
}


function show_sex() {
    all_remove_element('sex_title_main')
    all_remove_element('sex_title')
    all_remove_element('fa-male')
    all_remove_element('fa-female')
    add_text('hold_details_cell', 1, {
    "this_class" : "sex_title_main",
    "text" : "SEX"
    })
    gender = JSON.parse(JSON.stringify(sex_data[0]))['value'].replace('sex_', '')
    add_text('hold_details_cell', 1, {
    "this_class" : "sex_title",
    "text" : gender
    })
    all_style_text('sex_title_main', {
    "color" : "white",
    "margin-top" : "30px"
    })
    all_style_text('sex_title', {
    "color" : "yellow"
    })
    if(gender == 'male') {
    add_icon('hold_details_cell', 1, {
    "this_class" : "sex_icon",
    "icon_class" : "fa-male"
    })
    } else {
    add_icon('hold_details_cell', 1, {
    "this_class" : "sex_icon",
    "icon_class" : "fa-female"
    })
    }
    all_style_icon('sex_icon', {
    "color" : "white",
    "font-size" : "60px",
    "margin-top" : "20px"
    })
}

function show_fare() {
    all_remove_element('money_title_main')
    all_remove_element('money_title')
    add_text('hold_details_cell', 1, {
    "this_class" : "money_title_main",
    "text" : "<br>FARE"
    })
    dollar = JSON.parse(JSON.stringify(fare_data[0]))['value']
    if(Math.round(fare_data[0].value, 2) == 1) {
    add_text('hold_details_cell', 1, {
    "this_class" : "money_title",
    "text" : "$"
    })
    }
    if(Math.round(fare_data[0].value, 2) == 2) {
    add_text('hold_details_cell', 1, {
    "this_class" : "money_title",
    "text" : "$$"
    })
    }
    if(Math.round(fare_data[0].value, 2) == 3) {
    add_text('hold_details_cell', 1, {
    "this_class" : "money_title",
    "text" : "$$$"
    })
    }
    if(Math.round(fare_data[0].value, 2) == 4) {
    add_text('hold_details_cell', 1, {
    "this_class" : "money_title",
    "text" : "$$$$"
    })
    }
    if(Math.round(fare_data[0].value, 2) == 5) {
    add_text('hold_details_cell', 1, {
    "this_class" : "money_title",
    "text" : "$$$$$"
    })
    }
    all_style_text('money_title_main', {
    "color" : "white",
    "margin-top" : "5px"
    })
    all_style_text('money_title', {
    "color" : "yellow",
    "font-size" : "22px"
    })
}
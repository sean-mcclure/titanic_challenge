//root_url = "http://localhost:9090/get_random_passenger"
//root_url = "http://104.236.231.30:9090/get_random_passenger"

        score_data_a = [29,19]
        score_data_b = [139,170]
        score_data_c = [104,90]
        score_data_d = [232,190]

        all_scores = [score_data_a, score_data_b, score_data_c, score_data_d]

setTimeout(function() {
//$('.bar_chart_frame')[0].contentWindow.draw_chart(eval('bar_data_a'))
}, 1000)

setTimeout(function() {
//$('.bar_chart_frame_b')[0].contentWindow.draw_chart_b(eval('bar_data_b'))
}, 1000)

setTimeout(function() {
//$('.bar_chart_frame_c')[0].contentWindow.draw_chart_c(eval('score_data_a'))
}, 1000)

hold_images = ['img/deck_a.png', 'img/deck_b.png', 'img/deck_c.png', 'img/deck_d.png', 'img/deck_e.png', 'img/deck_f.png', 'img/deck_g.png']

function fetch_random_passenger() {

random_passenger_data = []
titles_data = []
sex_data = []
family_size_data = []
fare_data = []

if(local_overide == false) {

call_api({
    "url" : root_url,
    "parameters" : '{}',
    "done" : `

        $.each(JSON.parse(data)[0], function(k,v) {
        inner_data={}
        inner_data['name'] = k
        inner_data['value'] = v
        random_passenger_data.push(inner_data)
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

        } else {

        random_passenger_data = mock_passenger()

        }


}

// choose which features to include in section 1 chart
function show_chart() {
    outer_chart=[]
    inner_chart={}
    for(i=0;i<random_passenger_data.length;i++) {
    if(random_passenger_data[i].name.includes('sibsp') || random_passenger_data[i].name.includes('parch') || random_passenger_data[i].name.includes('fare')) {
    inner_chart['name'] = random_passenger_data[i].name
    inner_chart['value'] = random_passenger_data[i].value
    outer_chart.push(inner_chart)
    inner_chart={}
    }
    }
return(outer_chart)
}

function show_title() {
    for(i=0;i<random_passenger_data.length;i++) {
    if(random_passenger_data[i].name.includes('title_') && random_passenger_data[i].value == 1) {
    use_title = random_passenger_data[i].name.replace('title_', '')
    }
    }
    all_remove_element('miss_title_main')
    all_remove_element('miss_title')
    add_text('hold_details_cell', 1, {
    "this_class" : "miss_title_main",
    "text" : "TITLE"
    })
    add_text('hold_details_cell', 1, {
    "this_class" : "miss_title",
    "text" : use_title
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
    for(i=0;i<random_passenger_data.length;i++) {
    if(random_passenger_data[i].name.includes('sex_male') && random_passenger_data[i].value == 1) {
    gender = random_passenger_data[i].name.replace('sex_', '')
    }
    }
    all_remove_element('sex_title_main')
    all_remove_element('sex_title')
    all_remove_element('fa-male')
    all_remove_element('fa-female')
    add_text('hold_details_cell', 1, {
    "this_class" : "sex_title_main",
    "text" : "SEX"
    })
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
    for(i=0;i<random_passenger_data.length;i++) {
    if(random_passenger_data[i].name.includes('fare')) {
    dollar = random_passenger_data[i].value
    }
    }
    all_remove_element('money_title_main')
    all_remove_element('money_title')
    add_text('hold_details_cell', 1, {
    "this_class" : "money_title_main",
    "text" : "<br>FARE"
    })
    for(i=0;i<random_passenger_data.length;i++) {
    if(random_passenger_data[i].name.includes('fare')) {
    dollar = random_passenger_data[i].value
    }
    }
    loop_cnt = Math.round(dollar)
    console.log(loop_cnt)
    hold_dolla=[]
    for(i=0;i<loop_cnt;i++) {
    hold_dolla.push("$")
    }
    add_text('hold_details_cell', 1, {
    "this_class" : "money_title",
    "text" : hold_dolla.join().replace(/,/g, '')
    })
    all_style_text('money_title_main', {
    "color" : "white",
    "margin-top" : "5px"
    })
    all_style_text('money_title', {
    "color" : "yellow",
    "font-size" : "22px"
    })
}


// ******** MOCK DATA ********

// local overrides
local_overide = true

function mock_passenger() {

res = [{
 	"name": "pclass",
 	"value": 2
 }, {
 	"name": "survived",
 	"value": 0
 }, {
 	"name": "name",
 	"value": "Pengelly, Mr. Frederick William"
 }, {
 	"name": "age",
 	"value": 19
 }, {
 	"name": "sibsp",
 	"value": 0
 }, {
 	"name": "parch",
 	"value": 0
 }, {
 	"name": "ticket",
 	"value": "28665"
 }, {
 	"name": "fare",
 	"value": 2.4423470354
 }, {
 	"name": "family_count",
 	"value": 0
 }, {
 	"name": "embarked_Q",
 	"value": 0
 }, {
 	"name": "embarked_S",
 	"value": 1
 }, {
 	"name": "sex_male",
 	"value": 1
 }, {
 	"name": "title_Col",
 	"value": 0
 }, {
 	"name": "title_Don",
 	"value": 0
 }, {
 	"name": "title_Dona",
 	"value": 0
 }, {
 	"name": "title_Dr",
 	"value": 0
 }, {
 	"name": "title_Jonkheer",
 	"value": 0
 }, {
 	"name": "title_Lady",
 	"value": 0
 }, {
 	"name": "title_Major",
 	"value": 0
 }, {
 	"name": "title_Master",
 	"value": 0
 }, {
 	"name": "title_Miss",
 	"value": 0
 }, {
 	"name": "title_Mlle",
 	"value": 0
 }, {
 	"name": "title_Mme",
 	"value": 0
 }, {
 	"name": "title_Mr",
 	"value": 1
 }, {
 	"name": "title_Mrs",
 	"value": 0
 }, {
 	"name": "title_Ms",
 	"value": 0
 }, {
 	"name": "title_Rev",
 	"value": 0
 }, {
 	"name": "title_Sir",
 	"value": 0
 }, {
 	"name": "title_the Countess",
 	"value": 0
 }]
return(res)
}


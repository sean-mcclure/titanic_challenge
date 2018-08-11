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
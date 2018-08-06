add_overlay({
    "this_class" : "overlay",
    "width" : "100%",
    "height" : "100%",
})

style_overlay('overlay', 1, {
    "background" : "rgb(85, 85, 85)"
})

style_text('x_out_overlay', 1, {
    "visibility" : "hidden"
})

add_image('overlay', 1, {
    "this_class" : 'spin_start',
    "image_path" : "img/logo.png"
})

style_image('spin_start', 1, {
    "margin-top" : "100px",
    "width" : "100px",
    "align" : "center",
    "shadow" : "drop-shadow(4px 4px 40px white)"
})

setTimeout(function() {
    click_element('x_out_overlay', 1)
    }, 5000)

$('.overlay').append("<div class='main_prog_bar' id='myProgress'><div id='myBar'>10%</div></div>")
$('#myProgress').css('width', '60%').css('background-color', '#ddd')
$('#myBar').css('width','10%').css('height','30px').css('background-color','#33AADE').css('text-align','center').css('line-height','30px').css('color','white')

$('#myProgress').css('margin-top', '40px')

align_element('main_prog_bar', 1, 'center')

add_text('overlay', 1, {
"this_class" : "overlay_txt",
"text" : "loading lifesaver..."
})

style_text('overlay_txt', 1, {
"color" : "white",
"align" : "center",
"margin-top" : "10px"
})

animate_element('overlay_txt', 1, {
"type" : "fadeIn"
})

delay_event({
"delay" : 500,
"function" : "progress_bar()"
})

// utility function
function progress_bar() {
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}
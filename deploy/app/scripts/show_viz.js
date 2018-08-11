function pop_viz_modal() {
    add_modal({
        "this_class" : "viz_modal",
        "content_class" : "viz_modal_content"
    })
    style_modal('viz_modal', 1, {
        "width" : "500px",
        "height" : "auto"
    })
    add_image('viz_modal_content', 1, {
        "this_class" : "showing_viz",
        "image_path" : hold_images[Math.floor(Math.random() * hold_images.length)]
    })
    style_image('showing_viz', 1, {
        "width" : "300px"
    })
}
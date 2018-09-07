function pop_packs(pack_choice) {
add_modal({
    "this_class" : "packs_modal",
    "content_class" : "packs_modal_content"
})
style_modal('packs_modal', 1, {
    "width" : "auto",
    "height" : "auto"
})
add_text('packs_modal_content', 1, {
    "this_class" : "wrapper_ex_text",
    "text" : "PACKAGE " + pack_choice
})
}
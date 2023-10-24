
const components_list = {
    'All_components': {
        'title': 'All components',
        'href': './' + PATH + 'index.html',
    },
    'Colors': {
        'title': 'Colors',
        'href': './' + PATH + 'pages/colors.html',
    },
    'Typography': {
        'title': 'Typography',
        'href': './' + PATH + 'pages/typography.html',
    },
    'Buttons': {
        'title': 'Buttons',
        'href': './' + PATH + 'pages/buttons.html',
    },
    'Checkbox': {
        'title': 'Checkbox + Radio',
        'href': './' + PATH + 'pages/checkbox_radio.html',
    },
    'Input': {
        'title': 'Input',
        'href': './' + PATH + 'pages/input.html',
    },
    'Select': {
        'title': 'Select',
        'href': './' + PATH + 'pages/select.html',
    },
    'Drop-down': {
        'title': 'Drop down',
        'href': './' + PATH + 'pages/drop_down.html',
    },
    'Link': {
        'title': 'Link',
        'href': './' + PATH + 'pages/link.html',
    },
    'Modal': {
        'title': 'Modal',
        'href': './' + PATH + 'pages/modal.html',
    },
    'Table': {
        'title': 'Table',
        'href': './' + PATH + 'pages/table.html',
    },
    'Tab': {
        'title': 'Tab',
        'href': './' + PATH + 'pages/tab.html',
    },
    'Tree': {
        'title': 'Tree',
        'href': './' + PATH + 'pages/tree.html',
    },
    'Circle-background': {
        'title': 'Circle background',
        'href': './' + PATH + 'pages/circle_background.html',
    },
    'Loader+Progress': {
        'title': 'Loader + Progress',
        'href': './' + PATH + 'pages/loader.html',
    },
    'Segment': {
        'title': 'Segment',
        'href': './' + PATH + 'pages/segment.html',
    },
    'Block': {
        'title': 'Block',
        'href': './' + PATH + 'pages/block.html',
    },
    'Code': {
        'title': 'Code',
        'href': './' + PATH + 'pages/code.html',
    },

}

function componentsListGenerate(list){
    let result = ''
    for (let component_key in components_list){
        result += '<li><a href="' + components_list[component_key]['href'] + '" class="link link-default link-none"><div class="tree-item ' + ((PAGE_SELECTED === component_key) ? 'tree-item-selected' : '') + '">' + components_list[component_key]['title'] + '</div></a></li>'
    }

    return result
}

document.addEventListener('DOMContentLoaded', function(){
    const components_list_body = document.querySelector('#components-list')

    components_list_body.innerHTML = componentsListGenerate(components_list)
});
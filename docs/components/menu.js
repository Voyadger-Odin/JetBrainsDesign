
const components_list = {
    'Colors': {
        'title': 'Colors',
        'href': './' + PATH + 'pages/colors.html',
    },
    'Typography': {
        'title': 'Typography',
        'href': './' + PATH + 'pages/typography.html',
    },
    'Gradient': {
        'title': 'Gradient',
        'href': '#',
    },
    'Buttons': {
        'title': 'Buttons',
        'href': '#',
    },
    'Checkbox': {
        'title': 'Checkbox + Radio',
        'href': '#',
    },
    'Input': {
        'title': 'Input',
        'href': '#',
    },
    'Select': {
        'title': 'Select',
        'href': '#',
    },
    'Drop-down': {
        'title': 'Drop down',
        'href': '#',
    },
    'Link': {
        'title': 'Link',
        'href': '#',
    },
    'Modal': {
        'title': 'Modal',
        'href': '#',
    },
    'Table': {
        'title': 'Table',
        'href': '#',
    },
    'Tab': {
        'title': 'Tab',
        'href': '#',
    },
    'Tree': {
        'title': 'Tree',
        'href': '#',
    },
    'Circle-background': {
        'title': 'Circle background',
        'href': '#',
    },
    'Loader+Progress': {
        'title': 'Loader + Progress',
        'href': '#',
    },
    'Segment': {
        'title': 'Segment',
        'href': '#',
    },
    'Block': {
        'title': 'Block',
        'href': '#',
    },
    'Code': {
        'title': 'Code',
        'href': '#',
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
const header = '<div class="gradient" style="background: var(--gradient-4)"></div>\n' +
    '        <a href="#" class="link link-default link-underline-none tb ms-2 d-flex align-items-center" >\n' +
    '            <img src="../assets/img/Contest.png" class="logo me-2">\n' +
    '            <h6>JetBrains Design</h6>\n' +
    '        </a>'

document.addEventListener('DOMContentLoaded', function(){
    const header_body = document.querySelector('#header')

    header_body.innerHTML = header
});
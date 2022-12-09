const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab_item')
const tabContents = $$('.tab-content_item')

const   tabActive = $('.tab_item.active')
const   line = $('.tab .line')

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach((tab, i) => {
    const tabContent = tabContents[i]

    tab.onclick = function () {
        $('.tab_item.active').classList.remove('active')
        $('.tab-content_item.active').classList.remove('active')

        this.classList.add('active')
        tabContent.classList.add('active')

        line.style.left = tab.offsetLeft + 'px'
        line.style.width = tab.offsetWidth + 'px'
}})
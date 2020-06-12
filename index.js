var changeMdUrlToHtml = path => {
    if(path.endsWith('.md')){
        return '/' + path.substr(0,path.length -3) + '.html';
    }
    return '/' + path;
}
module.exports = {
    website: {
        assets: './assets/',
        js: [
            'index.js'
        ],
        css: [
            'index.css'
        ]
    },
    hooks: {
        'page:before': function(page) {
            // 添加前一页后一页的导航
            var pagePrevNext = [];
            var previous = page.previous;
            var next = page.next;
            if(previous){
                pagePrevNext.push(`<a class="previous-page-link page-link-nav" href="${changeMdUrlToHtml(previous.path)}"><i class="fa fa-arrow-left"></i><span>${previous.title}</span></a>`);
            }
            if(next){
                pagePrevNext.push(`<a class="next-page-link page-link-nav" href="${changeMdUrlToHtml(next.path)}"><span>${next.title}</span><i class="fa fa-arrow-right"></i></a>`);
            }
            if(pagePrevNext.length > 0){
                page.content = `${page.content}<div class="page-link-nav-box clearfix">${pagePrevNext.join('')}</div>`;
            }
            return page;
        },
        finish: function () {
            // var configOption = this.config.get('pluginsConfig')['theme-lixj'];
        }
    }
};
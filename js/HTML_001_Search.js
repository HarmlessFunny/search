alert("欢迎来到搜索");
window.onload = function () {

    // 定义用到的DOM
    const search = document.getElementById("search");
    const baidu_search = document.getElementById("baidu-search");
    const baidu_wiki = document.getElementById("baidu-wiki");
    const bing_search = document.getElementById("bing-search");
    const bilibili_search = document.getElementById("bilibili-search");
    const sougou_search = document.getElementById("sougou-search");

    // 定义用到的多选框
    const baidu_search_checkbox = document.getElementById("baidu-search-checkbox");
    const baidu_wiki_checkbox = document.getElementById("baidu-wiki-checkbox");
    const bing_search_checkbox = document.getElementById("bing-search-checkbox");
    const bilibili_search_checkbox = document.getElementById("bilibili-search-checkbox");
    const sougou_search_checkbox = document.getElementById("sougou-search-checkbox");

    // 添加多选框的作用
    baidu_search_checkbox.onclick = function () {
        if (baidu_search_checkbox.checked === true) {
            baidu_search.style.display = "block";
        } else {
            baidu_search.style.display = "none";
        }
    }

    baidu_wiki_checkbox.onclick = function () {
        if (baidu_wiki_checkbox.checked === true) {
            baidu_wiki.style.display = "block";
        } else {
            baidu_wiki.style.display = "none";
        }
    }

    bing_search_checkbox.onclick = function () {
        if (bing_search_checkbox.checked === true) {
            bing_search.style.display = "block";
        } else {
            bing_search.style.display = "none";
        }
    }

    bilibili_search_checkbox.onclick = function () {
        if (bilibili_search_checkbox.checked === true) {
            bilibili_search.style.display = "block";
        } else {
            bilibili_search.style.display = "none";
        }
    }

    sougou_search_checkbox.onclick = function () {
        if (sougou_search_checkbox.checked === true) {
            sougou_search.style.display = "block";
        } else {
            sougou_search.style.display = "none";
        }
    }


    // 表单换位操作

    baidu_search.ondblclick = function () {
        if (search.firstChild !== baidu_search) {
            search.insertBefore(baidu_search, search.firstChild);
        } else {
            search.append(baidu_search);
            search.children.eq(0).remove();
        }
    }

    baidu_wiki.ondblclick = function () {
        if (search.firstChild !== baidu_wiki) {
            search.insertBefore(baidu_wiki, search.firstChild);
        } else {
            search.append(baidu_wiki);
            search.children.eq(0).remove();
        }
    }

    bing_search.ondblclick = function () {
        if (search.firstChild !== bing_search) {
            search.insertBefore(bing_search, search.firstChild);
        } else {
            search.append(bing_search);
            search.children.eq(0).remove();
        }
    }

    bilibili_search.ondblclick = function () {
        if (search.firstChild !== bilibili_search) {
            search.insertBefore(bilibili_search, search.firstChild);
        } else {
            search.append(bilibili_search);
            search.children.eq(0).remove();
        }
    }

    sougou_search.ondblclick = function () {
        if (search.firstChild !== sougou_search) {
            search.insertBefore(sougou_search, search.firstChild);
        } else {
            search.append(sougou_search);
            search.children.eq(0).remove();
        }
    }
}


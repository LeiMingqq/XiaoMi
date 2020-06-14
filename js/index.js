// 上部分隐藏的轮播图
function testSct() {
    var navUl = document.querySelector(".header-nav ul"),
        roRotation = document.querySelector(".container-rotation"),
        contImg = document.querySelector(".container-rotation .container ul");
    index = 0;//表示第几页

    // 切换图片的方法
    function switchImg(n) {
        var value = n * -100 + "%";
        contImg.style.marginLeft = value;
    }
    // 移入相应的属性 跟着切换
    navUl.onmouseover = function (e) {
        var children = Array.from(navUl.children);
        var value = children.indexOf(e.target);
        if (value < 0 || value > 7) {
            // clearTimeout(item,900);
            if (value != -1) {
                roRotation.style.height = "0px";
                var item = setTimeout(function () {
                    roRotation.style.display = "none";
                }, 1000);
            }
            return false;
        }
        // 鼠标移入变成块盒
        if (value >= 0 && value <= 7) {
            roRotation.style.display = "block";
            var item = setTimeout(function () {
                clearInterval(item);
                roRotation.style.height = "229px";
            }, 200);
        }
        switchImg(value - 1);
    }
}

// 控制大轮播图
function test() {
    // 控制大轮播图

    /**
     * 属性
     */
    // 找到要控制的图片
    var cont = document.getElementsByClassName("img-ul")[0];
    // 控制图片的按钮
    var iconSpan = document.querySelector(".icon"),//点按钮
        iconLeft = document.querySelector(".icon-left"),//左按钮
        iconRight = document.querySelector(".icon-right"),//右按钮
        index = 0,//表示第几张图片
        item = null;//清空定时器

    /**
     * 方法 
     */

    // 设置一个方法用来切换图片和按钮
    function switchImgButton(n) {
        var imgActive = document.querySelector('.img-active');
        var buttonActive = document.querySelector('.icon-active');
        imgActive.className = "";//每次切换，清除一下类
        buttonActive.className = "";//每次切换，清除一下类
        cont.children[n].className = "img-active";
        iconSpan.children[n].className = "icon-active";//让按钮也跟着动
        // 表示cont 子元素的第几个 添加 类
    }
    // 这个方法是点击切换图片
    iconSpan.onclick = function (e) {
        // 表示cont 子元素的第几个 添加 类
        var children = Array.from(iconSpan.children);//转化成数组
        var value = children.indexOf(e.target);//得到元素的位置
        if (value < 0) {
            return;
        }
        // 传值给切换图片方法
        index = value;
        switchImgButton(value);
    }

    // 设置一个方法 返回上一张图片
    iconLeft.onclick = function () {
        --index;
        if (index < 0) {
            index = 5;
        }
        switchImgButton(index);
    }
    // 设置一个方法 返回下一张图片
    iconRight.onclick = function () {
        index++;
        if (index == 6) {
            index = 0;
        }
        switchImgButton(index);
    }

    // 这个方法控制图片自动切换
    function start() {
        clearInterval(item);//每次执行清空一次
        item = setInterval(function () {
            index++;
            if (index == 6) {
                index = 0;
            }
            switchImgButton(index);
        }, 3000);
    }

    start();

    // 停止切换图片
    function stop() {
        clearInterval(item);
    }

    // 当鼠标移入cont类标签停止切换图片
    cont.onmouseover = function () {
        stop();
    }
    iconLeft.onmouseover = function () {
        stop();
    }
    iconRight.onmouseover = function () {
        stop();
    }
    // 当鼠标移出cont类标签开始切换图片
    cont.onmouseout = function () {
        start();
    }
    iconLeft.onmouseout = function () {
        start();
    }
    iconRight.onmouseout = function () {
        start();
    }
}

// 小米闪购区域
function testwot() {
    // 获取倒计时的类
    var round = document.querySelector(".round"),
        span = document.querySelector(".countdown");
    // 小轮播图
    var rotation = document.querySelector(".rt-rotation ul"),
        rtButton = document.querySelector(".box-rotation .rt-button"),
        index = 0;//表示第几页
    clebe = "";

    //设一个方法模拟倒计时
    function countDown() {
        round.innerHTML = "22:00 场";
        var s = 22 - (new Date().getHours());//时
        var f = 60 - (new Date().getMinutes());//分
        var m = 60 - (new Date().getSeconds());//秒
        var item = setInterval(function () {
            span.children[4].innerHTML = m;
            m--;
            if (m < 0) {
                m = 59;
                f--;
                if (f < 0) {
                    f = 59;
                    if (s > 0) {
                        s--;
                    }
                }
            }
            if (s == 0 && f == 0 && s == 0) {
                clearInterval(item)
                alert("该睡觉了")
            }
            span.children[0].innerHTML = s;
            span.children[2].innerHTML = f;
        }, 1000);
    }

    // 设计一个方法控制小轮播图
    function roTion(n) {
        var value = n * -100 + "%";
        rotation.style.marginLeft = value;
    }

    // 这个方法是向左切换
    rtButton.children[0].onclick = function () {
        if (index <= 4) {
            rtButton.children[1].style.color = "#b0b0b0";
            rtButton.children[1].style.cursor = "pointer";
        }
        if (index == 1) {
            rtButton.children[0].style.color = "#e0e0e0";
            rtButton.children[0].style.cursor = "default";
            index--;
            roTion(index);
            return false;
        }
        if (index >= 1) {
            index--;
            roTion(index);
        }
    }
    // 鼠标移入颜色发生改变
    rtButton.children[0].onmouseover = function () {
        if (index != 0) {
            stop();
            rtButton.children[0].style.color = "#ff6700";
        }
    }
    // 鼠标移出颜色变回
    rtButton.children[0].onmouseout = function () {
        if (index != 0) {
            rtButton.children[0].style.color = "#b0b0b0";
        }
        setTimeout(start, 5000);
    }
    // 这个方法是向右切换
    rtButton.children[1].onclick = function () {
        if (index == 0) {
            rtButton.children[0].style.color = "#b0b0b0";
            rtButton.children[0].style.cursor = "pointer";
        }
        if (index == 3) {
            rtButton.children[1].style.color = "#e0e0e0";
            rtButton.children[1].style.cursor = "default";
            index++;
            roTion(index);
            return false;
        }
        if (index <= 3) {
            index++;
            roTion(index);
        }
    }
    // 鼠标移入颜色发生改变
    rtButton.children[1].onmouseover = function () {
        if (index != 4) {
            stop();
            rtButton.children[1].style.color = "#ff6700";
        }
    }
    // 鼠标移出颜色变回
    rtButton.children[1].onmouseout = function () {
        if (index != 4) {
            rtButton.children[1].style.color = "#b0b0b0";
        }
    }
    // 设置一个定时器 规定 它多少秒切换一次
    function start() {
        clearInterval(clebe);
        clebe = setInterval(function () {
            index++;
            if (index == 5) {
                index = 0;
            }
            roTion(index);
        }, 8000);
    }
    start();
    // 停止切换
    function stop() {
        clearInterval(clebe);
    }
    countDown();
}

// 图片标签控制切换区域
function testShi() {
    var tabList = document.getElementsByClassName("tab-list");
    var bdRight = document.getElementsByClassName("bd-right");

    // 切换标签 1
    function testTitle(n) {
        var active = document.getElementsByClassName("tab-active");
        active[0].className = "";
        tabList[0].children[n].className = "tab-active";
        // 判断 是0展示1 是1展示2   
        if (n == 1) {
            bdRight[1].children[n].style.zIndex = "1";
        } else {
            bdRight[1].children[1].style.zIndex = "-1";
        }
    }
    tabList[0].onmouseover = function (e) {
        var children = Array.from(tabList[0].children);
        var value = children.indexOf(e.target);
        if (value == -1) {
            return false;
        }
        // 调用切换方法 传值 切换
        testTitle(value);
    }

    // 切换标签 2
    function testTitle1(n) {
        var active = document.getElementsByClassName("tab-active");
        active[1].className = "";
        tabList[1].children[n].className = "tab-active";
        if (n == 1) {
            bdRight[2].children[n].style.zIndex = "1";
            bdRight[2].children[2].style.zIndex = "-1";//每次鼠标移入第二个，清除 第3个
        } else if (n == 2) {
            bdRight[2].children[n].style.zIndex = "2";
        } else {
            bdRight[2].children[1].style.zIndex = "-1";
            bdRight[2].children[2].style.zIndex = "-1";
        }
    }
    tabList[1].onmouseover = function (e) {
        var children = Array.from(tabList[1].children);
        var value = children.indexOf(e.target);
        if (value == -1) {
            return false;
        }
        testTitle1(value);
    }

    
}

// 执行方法
test();
testwot();
testSct();
testShi();
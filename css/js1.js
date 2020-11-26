function countTime(time) {
    var nowtime = +new Date();
    var inputime = +new Date(time);
    var countime = (inputime - nowtime) / 1000;
    var h = parseInt(countime / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    var m = parseInt(countime / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(countime % 60);
    s = s < 10 ? '0' + s : s;
    return h + 'h' + m + 'm' + s + 's'
}

function getTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    return '现在时间是' + h + '时' + m + '分' + s + '秒';
}

function move(obj,target,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        if (step > 0) {
            step = Math.ceil(step);
        } else {
            step = Math.floor(step);
        }
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)

}
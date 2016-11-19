function padLeft(val){
    if(val >= 10){
        return val.toString();
    }

    return "0" + val;
}

function formatDate(time){
    let date = new Date(time);
    let year = date.getFullYear();
    let month = padLeft(date.getMonth() + 1);
    let day = padLeft(date.getDate());
    let hour = padLeft(date.getHours());
    let min = padLeft(date.getMinutes());
    let sec = padLeft(date.getSeconds());

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

function _formatDate(time){
    var date = new Date(parseInt(time));
    var month = padLeft(date.getMonth() + 1);
    var day = padLeft(date.getDate());
    
    return "{month}-{day}".replace("{month}", month).replace("{day}", day)
}

function formatTime(createTime){
    if(!createTime){
        return "";
    }

    var division = new Date().getTime() - createTime;
    var MINUTE = 60 * 1000;
    var HOUR = MINUTE * 60;
    var DAY = HOUR * 24;

    if(division < MINUTE){
        return Math.ceil(division / 1000) + " sec";
    }

    if(division < HOUR){
        return Math.floor(division / MINUTE) + " min";
    }

    if(division < DAY){
        return Math.floor(division / HOUR) + " hour"
    }

    return _formatDate(createTime);
}

export default {formatTime, formatDate}
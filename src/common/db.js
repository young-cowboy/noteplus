const DB_NAME = "NOTEPLUS";

function getItem(){
    let str = localStorage.getItem(DB_NAME);

    try{
        return JSON.parse(str);
    }catch(e){
        return {};
    }
}

function setItem(obj){
    let str = "";

    if(typeof obj == "object"){
        str = JSON.stringify(obj);
    }else{
        str = obj;
    }

    localStorage.setItem(DB_NAME, str);
}

function getList(){
    let db = getItem() || {};
    let list = db.list || [];

    return list;
}

function insert(obj){
    let db = getItem() || {};
    let list = db.list || [];

    list.unshift(obj);
    db.list = list;
    setItem(db);
}

function removeItemById(id){
    let db = getItem() || {};
    let list = db.list || [];
    let newList = [];

    list.forEach(function (item, index){
        if(item.id != id){
            newList.push(item);
        }
    });

    db.list = newList;
    setItem(db);
}

export default {insert, removeItemById, getList};
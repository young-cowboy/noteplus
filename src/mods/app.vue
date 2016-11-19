<style lang="less">
    .list-item{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        padding: 5px;
        border-bottom: 1px solid #eee;

        &:last-child{
            margin-bottom: 0px;
            border-bottom: 0;
        }

        &:hover{
            background-color: rgba(0, 0, 0, 0.1);
        }
        
        .info, .handler{
            display: flex;
            align-items: center;
        }

        .date{
            display: inline;
            color: #fff;
            width: 50px;
            font-size: 12px;
            text-align: center;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border-radius: 3px;
            background-color: #5cb85c;
            margin-right: 5px;
        }
        .text{
            line-height: 18px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 468px;
        }
        .btn{
            cursor: pointer;
            font-family: 'iconfont';
            border: 1px solid #999;
            background-color:#fff;
            line-height: 1.5;
            box-sizing: border-box;
            width: 23px;
            height: 23px;
            text-align: center;
            border-right-width: 0;            

            &:first-child{
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
            }

            &:last-child{
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
                border-right-width: 1px;
            }
        }
    }

    .detail-wrap{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1001;
        display: flex;
        align-items: center;
        justify-content: center;

        .detail{
            width: 500px;
            background-color: #fff;
            box-shadow: 0 5px 15px rgba(0,0,0,.5);
            border-radius: 6px;
            padding: 20px;
            position: relative;

            h2{
                font-size: 20px;
                margin-bottom: 15px;
            }

            h3{
                font-size: 18px;
                margin-bottom: 15px;
            }

            .controls{
                display: block;
                width: 100%;
                height: 34px;
                padding: 6px 12px;
                font-size: 14px;
                line-height: 1.42857143;
                color: #555;
                background-color: #eee;
                background-image: none;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                resize: none;
                outline: none;
                margin-bottom: 15px;
            }
            .textarea{
                height: 150px;
            }
        }

        .close-btn{
            font-family: 'iconfont';
            position: absolute;
            z-index: 1002;
            right: 10px;
            top: 10px;
            cursor: pointer;
        }
    }
</style>
<template>
    <div>
        <ul>
            <li v-for="(index, item) in list" class="list-item">
                <div class="info">
                    <span class="date" v-if="item.createTime">{{item.createTime | filterTime}}</span>
                    <span class="text">{{item.text}}</span>
                </div>
                <div class="handler">
                    <span class="btn" @click="view(index)">&#xe63e;</span>
                    <span class="btn" @click="del(index)">&#xe61e;</span>
                </div>
            </li>
        </ul>
        <div class="detail-wrap" v-if="showDetail">
            <div class="detail">
                <span class="close-btn" @click="close">&#xe61e;</span>
                <h2>Create Time : {{selected.createTime | filterDate}}</h2>
                <input class="controls" value="{{selected.url}}">
                <textarea class="controls textarea">{{selected.text}}</textarea>
            </div>
        </div>
    </div>
</template>
<script>
    import DB from "../common/db";
    import utils from "../common/utils";

    export default {
        components : {
        },
        data () {
            return {
                list : [],
                selected: {},
                showDetail : false
            }
        },
        created () {
            
        },
        ready() {
            // chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
            //     console.log(arguments);
            // });
            let list = DB.getList();

            this.list = list;
        },
        methods : {
            del(index){
                let item = this.list[index];
                let id = item.id;

                DB.removeItemById(id);
                this.list.splice(index, 1);
            },
            view(index){
                let item = this.list[index];

                this.selected = item;
                this.showDetail = true;
            },
            close(){
                this.showDetail = false;
            }
        },
        watch : {

        },
        filters: {
            filterTime : function (time){
                return utils.formatTime(time);
            },
            filterDate : function (time){
                return utils.formatDate(time);
            }
        }
      }
</script>
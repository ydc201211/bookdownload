$(function () {

    initTable();
    var bookList = [];
});

function doQuery(params){
    $('#demo-table').bootstrapTable('refresh');    //刷新表格
}

// 初始化主表
function initTable(){
    alert(document.cookie);
    console.log(document.cookie);
    var url = "http://localhost:3000/book/getBook";
    
    $('#demo-table').bootstrapTable({
        method:'POST',
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        cache: false,
        striped: true,                      //是否显示行间隔色
        detailView: true,                  //父子表
        detailFormatter:getChildTable,
        sidePagination: 'server',         //分页方式：client客户端分页，server服务端分页（*）
        url:url,
        showRefresh:'true',
        width:$(window).width(),
        height:$(window).width(),
        showColumns:true,
        pagination:true,
        queryParams:queryParams,
        queryParamsType:'',
        minimumCountColumns:2,
        pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 1,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
                      
        exportDataType: 'all',
        responseHandler:responseHandler,
        columns: [
        // {
        //     field: '',
        //     title: '',
        //     formatter: function (value, row, index) {
        //         return index+1;
        //     }
        // },
        {
            field : 'bid',
            title : '书籍编号',
            align : 'center',
            valign : 'middle'
        },
        {
            field : 'bookName',
            title : '书籍名',
            align : 'center',
            valign : 'middle'
        },
        {
            field : 'bookChapter',
            title : '书籍章节',
            align : 'center',
            valign : 'middle'
        }]
    });
}


function queryParams(params) {
    var param = {
        orgCode : $("#orgCode").val(),
        userName : $("#userName").val(),
        startDate : $("#startDate").val(),
        endDate : $("#endDate").val(),
        limit : this.limit, // 页面大小
        offset : this.offset, // 页码
        pageNumber : this.pageNumber,
        pageSize : this.pageSize
    }
    return param;
} 

// 用于server 分页，表格数据量太大的话 不想一次查询所有数据，可以使用server分页查询，数据量小的话可以直接把sidePagination: "server"  改为 sidePagination: "client" ，同时去掉responseHandler: responseHandler就可以了，
function responseHandler(res) { 
   
    if (res) {
        bookList = res.rows;
        
        return {
            "rows" : res.rows,
            "total" : res.total
        };
    } else {
        return {
            "rows" : [],
            "total" : 0
        };
    }
}

// 生成子表
function getChildTable(index, row, $detail) {
    
    var url = 'http://localhost:3000/book/getChapter?random='+Math.random(); 
    
    var parentId = bookList[index].bid;
    
    var cur_table = $detail.html('<table id="child_table"></table>').find('table');
    $('#child_table').bootstrapTable({
        url: url,
        method: 'POST',
        queryParams: {parentId: parentId},
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        cache: false,
        striped: true,                      //是否显示行间隔色
        width:$(window).width(),
        queryParamsType:'',
        pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 1000000,                       //每页的记录行数（*）
        responseHandler:function(res){
            return res.rows;
        },
        columns: [
            {
                field: 'cid',
                title: '章节编号',
                align: 'center',
               
            },
            {
                field: 'chapterName',
                title: '章节名',
                align: 'center',
           
            },
            {
                field: 'chapterSize',
                title: '章节大小',
                align: 'center',
                formatter: function(value) {
                    return value + "MB";
                },
            },
            {
                field: 'downloadUrl',
                title: '下载链接',
                align: 'center',
                valign:'middle',
                formatter: function(value) {
                    return '<a class="download-btn" href='+ value +'>下载</a>'
                },
            }
        ],
        //无线循环取子表，直到子表里面没有记录
        onExpandRow: function (index, row, $Subdetail) {
            getChildTalbe(index, row, $Subdetail);
        }
    });
}
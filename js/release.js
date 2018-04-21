var editor = new Vue({
            el: "#main",
            data: {
                title: "",
                class_id: "",
                editList:{},
            },
            mounted: function(){
                var ue = UE.getEditor('container');
                this.edit();
            },
            methods: {
                getUeditorContent: function(){
                    return UE.getEditor('container').getContent()
                },
                issue: function(){
                    $.ajax({
                        "url": "http://blog.com/api/blog/doAdd",
                        "type": "post",
                        "dataType": "json",
                        "data": {
                            "user_id": window.localStorage.user_id,
                            "title": this.title,
                            "content": this.getUeditorContent(),
                            "classify_id": this.class_id,
                        },
                        success: function(res){
                            if(res.error_code == 0){
                                alert("发布成功即将跳转。。。。。。");
                                window.location.href="./release-list.html"
                            }else {
                                alert(res.message);
                            }
                        }
                    })
                },
                edit:function(item){
                    var that=this;
                    $.ajax({
                        url:"http://blog.com/api/blog/add",
                        data:{
                            user_id: window.localStorage.user_id,
                            blog_id: window.location.search.split("=")[1],
                        },
                        type:"get",
                        dataType:"json",
                        success: function(res){
                            if(res.error_code == 0){
                                that.editList=res.data.my_blog_info;
                                that.title=res.data.my_blog_info.title;
                                that.content=res.data.my_blog_info.content;
                            }else{
                                alert("res.message");
                            }
                        },
                        error:function(){

                        }
                    })
                    
            
                },
                editSuc:function(){
                    var that=this;
                    $.ajax({
                        url:"http://blog.com/api/blog/doEdit",
                        data:{
                            "user_id": window.localStorage.user_id,
                            "blog_id":window.location.search.split("=")[1],
                            "title": that.title,
                            "content":that.getUeditorContent(),
                            "classify_id":that.class_id,
                        },
                        type:"post",
                        dataType:"json",
                        success: function(res){
                            if(res.error_code == 0){
                                 alert("编辑成功即将跳转。。。。。。");
                                 window.location.href="./release-list.html"
                            }else{
                                alert(res.message);
                            }
                        },
                        error:function(){

                        }
                    })
                        
                }
            }
        })
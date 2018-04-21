var list=new Vue({
	el: "#main",
	data:{
		list:[],
	},
	mounted: function(){
		this.getList();
	},
	methods: {
		getList: function(){
			var that=this;
			$.ajax({
				url:"http://blog.com/api/collect/lists",
				type: "post",
                dataType: "json",
                data:{
                	user_id:window.localStorage.user_id,
                },
                success: function(res){
                	if(res.error_code == 0){
                		that.list=res.data.blog_lists;
                		alert("收进列表");
                	}else{

                	};

                },
                error: function(){

                }
			})
		}
	}
})
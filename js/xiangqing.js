var newAjax = new Vue({
	el:"#main",
	data:{
		list:[],
		contentList:[],
	},
	mounted: function(){
		this.getData();
	},
	methods: {
		getData: function(){
			var that = this;
			$.ajax({
				url:"http://blog.com/api/blog/info",
				type:"get",
				data:{
					id:window.location.search.split("=")[1],
        			user_id: window.localStorage.user_id,
				},
				dataType: "json",
				success: function(res){
					that.list=res.data.blog_info;
					that.contentList=res.data.related_blog;
					if(res.data.blog_info.collect_status == 0){
						alert("没收藏")
					}else if(res.data.blog_info.collect_status == 1){
						that.$refs.collects.innerHTML="已收藏";
					}else{
						alert("用户没登录")
						window.location.href="./denglu.html";
					}	
				},
				error:function(res){

				}
			})
		},
		collect: function(){
			var that = this;
			$.ajax({
				url:"http://blog.com/api/collect/add",
				type:"post",
				data:{
					user_id:window.localStorage.user_id,
					blog_id:window.location.search.split("=")[1],
				},
				dataType:"json",
				success:function(res){
					if( res.error_code == 0){
						that.$refs.collects.innerHTML="已收藏";
					}else{
						that .$refs.collects.innerHTML="收藏";
					}
				},
				error:function(res){

				}
			})
		},
		
	}
})
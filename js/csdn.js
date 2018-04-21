var newAjax = new Vue({
	el:"#main",
	data:{
		list:[],
		picList:[],
	},
	mounted: function(){
		this.getData();
	},
	methods: {
		getData: function(){
			var that = this;
			$.ajax({
				url:"http://blog.com/api/index/index",
				type:"get",
				data:{},
				dataType: "json",
				success: function(res){
					that.list=res.data.blog_lists;
					that.picList=res.data.banner;
				},
				error:function(res){

				}
			})
		}
	}
})



var mySwiper = new Swiper ('.swiper-container', {
	autoplay:2000,
	observer:true,
	loop:true,//在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换
	autoplayDisableOnInteraction:false,//用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
    pagination:".swiper-pagination",
	paginationClickable:true,//点击分页器的指示点分页器会控制Swiper切换。
});



var bannerAry = ["img/visual_01.jpg","img/visual_02.jpg","img/visual_03.jpg"];
var bannerLinkAry = ["#1","#2","#3"];
var bannerLoadCount = 0;
var bannerMax;

var visualInterval;
var visualIntervalTime = 3500;

var curNum = 0;


jQuery(function()
{	
	bannerInit();
} );
function bannerInit(){
	var len = bannerAry.length;
	bannerMax = len;
	var img_str = "<div class='img_list'><ul>";
	var btn_str = "<div class='btn_list'><ul>";
	for(var i=0; i<len;i++){
		var url = bannerLinkAry[i%len];
		var src = bannerAry[i%len];
		
		if(url){
			img_str += "<li><a href='"+url+"'><img src='"+src+"' style='display:none;'/></a></li>";
		}else{
			img_str += "<li><img src='"+src+"' style='display:none;'/></li>";
		}		
		btn_str += "<li><img src='img/btn_off.png' alt='"+name+"'/><img src='img/btn_on.png' alt='"+name+"' class='hidden'/></li>";
	}
	img_str += "</ul></div>";
	btn_str += "</ul></div>";
	str = btn_str+img_str;

	jQuery(str).prependTo("#banner");
	jQuery("#banner .img_list img").load(function(){bannerImgLoadChk();});

	
	
}
function bannerImgLoadChk(){
	bannerLoadCount++;
	if(bannerMax<=bannerLoadCount){
		bannerConfig();	
	}
}
function bannerConfig(){
	
	jQuery("#banner .img_list ul li").each(function(i) {					
		jQuery(this).find("img").stop().animate({opacity:0},0);	
	});

	jQuery("#banner .btn_list ul li").click(bannerBtnClick).css("cursor","pointer");
	bannerPlay(0);


	clearInterval(visualInterval);
	visualInterval = setTimeout(bannerRoll, 4000);

}
function bannerBtnClick(){
	clearInterval(visualInterval);
	visualInterval = setTimeout(bannerRoll, visualIntervalTime);

	var idx = jQuery(this).index();
	bannerPlay(idx);
}
function bannerRoll(){
	
	curNum++;
	if(curNum>bannerMax-1){
		curNum = 0;		
	}
	bannerPlay(curNum);
}
function bannerPlay(n){
	jQuery("#banner .img_list ul li").each(function(i) {						
		if(i==n){
			jQuery(this).find("img").css("display","block");			
			jQuery(this).find("img").stop().animate({opacity:1},800);
		}else{
			jQuery(this).find("img").css("display","none");
			jQuery(this).find("img").stop().animate({opacity:0},0);			
		}
	});
	bannerBtnPlay(n);
	clearInterval(visualInterval);
	visualInterval = setTimeout(bannerRoll, visualIntervalTime);
	curNum = n;
}
function bannerBtnPlay(n){
	jQuery("#banner .btn_list ul li").each(function(i) {				
		if(i==n){
			jQuery(this).find("img").eq(0).addClass("hidden");
			jQuery(this).find("img").eq(1).removeClass("hidden");
		}else{
			jQuery(this).find("img").eq(1).addClass("hidden");
			jQuery(this).find("img").eq(0).removeClass("hidden");
		}
	});
}
var $window, $body;

var project3={
	mobileMenu: function(){
		var t=0;
		//mobile_menu
		$(".tab").click(function(e){
			e.preventDefault();
			$("body").toggleClass("static");
			$(".mobile").toggleClass("active");
			$(".tab").toggleClass("active");
			$(".dim").toggleClass("active");
		});
		
		$(".tab2").click(function(e){
			e.preventDefault();
			$("body").removeClass("static");
			$(".mobile").removeClass("active");
			$(".tab").removeClass("active");
			$(".dim").removeClass("active");
		});
	},
	
	keyvisual: function(){
		//배경
		var video=document.getElementById("my_video");
		video.muted=true;
		video.play();
		var w, h; //화면 크기를 얻는 변수
		var videoW, videoH; //비디오 크기에 해당하는 변수
		
		var videoH;

		$window.resize(function(){ //.video_area가 absolute이므로 #start가 세로 부피를 가지지 못함
			$("#header").removeAttr("style");
			$("#my_video").removeAttr("style");
			w=$window.width();
			h=$window.height();

			if(w > h){ // 가로뷰
				// 비디오의 가로크기를 w에 맞춘다.
				videoW=w;
				$("#my_video").css({width:videoW});
			}
			else{ // 세로뷰
				// 비디오의 세로크기를 h에 맞춘다.
				videoH=h;
				$("#my_video").css({height:videoH});
				videoW=$("#my_video").width();
				$("#my_video").css({left:"50%", marginLeft:(-1)*videoW/2});
			}
			videoH=$("#my_video").height();

			if(videoH > h){
				$("#header").css({height:h});
			}
			else{
				$("#header").css({height:videoH});
			}
		});
		
		video.addEventListener("loadeddata", function(){
		//video.onloadeddata=function(){ //비디오를 다 로드한 후에 높이 측정
			$window.trigger("resize"); //로드 초기에 오류가 발생하기때문에 위에를 적어야함
			//console.log("video loaded complete!!");
		});
	},
	tabMenu: function(){
		var goPage;
		var topPos;
		var t=0;
		var n=0;
		var firstFlag=false;
		var timer=0;

		$("#gnb li").eq(n).find("a").addClass("on");

		setTimeout(function(){
			$("html").animate({scrollTop:0},800, function(){
				firstFlag=true;
				$("#business").removeClass("active");
				$window.trigger("scroll");
			});
		}, 10);

		$window.scroll(function(){
			if(firstFlag == false){
				return;
			}
			t=$window.scrollTop();

			if(t < $("#service").offset().top-200){
				n=0;
			}
			else if(t < $("#portfolio").offset().top-200){
				n=1;
			}
			else if(t < $("#about").offset().top-200){
				n=2;
				$("#portfolio").addClass("active");
			}
			else if(t < $("#our_team").offset().top-200){
				n=3;
				$("#about").addClass("active");
			}
			else if(t < $("#contact").offset().top-200){
				n=4;
				$("#our_team").addClass("active");

				if(n == $window.height() - $("#contact").offset().top-200){
					$("#contact").addClass("active");
				}
			}
			else{
				n=5;
			}

			if(n == 0){
				$("#header").addClass("active")
				$(".btn_top").removeClass("active");
				$(".menu_zone").removeClass("active");
			}
			else{
				$("section").eq(n-1).addClass("active");
				if(n >= 1){
					$(".btn_top").addClass("active");
					$(".menu_zone").addClass("active");
					$("#service").addClass("active");
				}
				else{
					$(".btn_top").removeClass("active");
					$(".menu_zone").removeClass("active");
				}
			}
			$("#gnb a").removeClass("on");
			$("#gnb li").eq(n).find("a").addClass("on");
		});
		$(".btn_top").click(function(e){
			e.preventDefault();
			$("html").animate({scrollTop:0}, 400, function(){
				$window.scrollTop(0);
			});
		});
		$(".tab").click(function(e){
			e.preventDefault();
			$("body").toggleClass("static");
			$("#m_gnb").toggleClass("active");
			$(".tab").toggleClass("active");
			$(".dim").toggleClass("active");
		});
		$(".dim").click(function(){
			$("body").removeClass("static");
			$(".mobile").removeClass("active");
			$(".tab").removeClass("active");
			$(".dim").removeClass("active");
		});

		var w;
		var h;

		$window.resize(function(){
			w=$window.width();
			if(w > 720){
				if($(".mobile").hasClass("active")){
					$(".dim").trigger("click");
				}
			}
		});
		$window.trigger("resize");	
	}

};
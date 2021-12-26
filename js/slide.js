//<![CDATA[
    $(document).ready(function(){

        var $slideNum = 0;
        
        $width = $("#slides").width();
        $(window).resize(function(){
            $width = $("#slides").width();
        });
        // 사용자의 창 사이즈가 변할 때마다 슬라이드 사이즈 저장 (슬라이드 엇나감 방지)

        $(".next").click(function(){
            $slideNum++;
            if($slideNum>2){
                $slideNum = 0;
            }// $slideNum이 2보다 커지면 0으로 (다시 처음으로)
            if($slideNum == 0){
                $(".slide_smr h2, .slide_smr p, .slide_smr a").css("opacity","0");    
            }// $slideNum이 0이면 (다시 처음으로 돌아올 때) 텍스트들 opacity : 0
            $(".slide_container").stop().animate({left: -$width*$slideNum},600,function(){
                $(".slide_smr h2").css("animation","movement 1s ease-in-out forwards");
                $(".slide_smr p").css("animation","movement 1.3s ease-in-out forwards");
                $(".slide_smr a").css("animation","movement 1.6s ease-in-out forwards");
                // 슬라이드 이동 후 텍스트들에 애니메이션 css 부여
                $(".bullet img").attr("src","./images/slide_image/state_out.png");
                $(".bullet img").eq($slideNum).attr("src","./images/slide_image/state_over_black.png");
            });// 초기화 후 해당하는 $slideNum의 인덱스를 가진 요소만 속성 변경
            $(".slide_smr h2, .slide_smr p, .slide_smr a").css("animation","");
        });// 텍스트에 부여한 애니메이션 삭제

        $(".prev").click(function(){
            $slideNum--;
            if($slideNum<0){
                $slideNum = 2;
            }// $slideNum이 0보다 작아지면 2로 (마지막 슬라이드로)
            $(".slide_container").stop().animate({left: -$width*$slideNum},600,function(){
                $(".slide_smr h2").css("animation","movement 1s ease-in-out forwards");
                $(".slide_smr p").css("animation","movement 1.3s ease-in-out forwards");
                $(".slide_smr a").css("animation","movement 1.6s ease-in-out forwards");
                // 슬라이드 이동 후 텍스트들에 애니메이션 css 부여
                $(".bullet img").attr("src","./images/slide_image/state_out.png");
                $(".bullet img").eq($slideNum).attr("src","./images/slide_image/state_over_black.png");
            });// 초기화 후 해당하는 $slideNum의 인덱스를 가진 요소만 속성 변경
            $(".slide_smr h2, .slide_smr p, .slide_smr a").css("animation","");
        });// 텍스트에 부여한 애니메이션 삭제
        //슬라이드 버튼 제어

        setInterval(function(){
            $slideNum++;
            if($slideNum>2){
                $slideNum = 0;
            }// $slideNum이 2보다 커지면 0으로 (다시 처음으로)
            if($slideNum == 0){
            $(".slide_smr h2, .slide_smr p, .slide_smr a").css("opacity","0");    
            }// $slideNum이 0이면 (다시 처음으로 돌아올 때) 텍스트들 opacity : 0
            $(".slide_container").stop().animate({left: -$width*$slideNum},600,function(){
                $(".slide_smr h2").css("animation","movement 1s ease-in-out forwards");
                $(".slide_smr p").css("animation","movement 1.3s ease-in-out forwards");
                $(".slide_smr a").css("animation","movement 1.6s ease-in-out forwards");
                // 슬라이드 이동 후 텍스트들에 애니메이션 css 부여    
                $(".bullet img").attr("src","./images/slide_image/state_out.png");
                $(".bullet img").eq($slideNum).attr("src","./images/slide_image/state_over_black.png");
            });// 초기화 후 해당하는 $slideNum의 인덱스를 가진 요소만 속성 변경
            $(".slide_smr h2, .slide_smr p, .slide_smr a").css("animation","");
        }, 3000);// 텍스트에 부여한 애니메이션 삭제
        //슬라이드 3초마다 자동 넘김

        $(".bullet_1").click(function(){
            $slideNum = 0; // 클릭했을 때 $slideNum에 0을 저장
            $(".slide_container").stop().animate({left: -$width*$slideNum},600,function(){
                $(".slide_smr h2").css("animation","movement 1s ease-in-out forwards");
                $(".slide_smr p").css("animation","movement 1.3s ease-in-out forwards");
                $(".slide_smr a").css("animation","movement 1.6s ease-in-out forwards");

                $(".bullet img").attr("src","./images/slide_image/state_out.png");
                $(".bullet img").eq($slideNum).attr("src","./images/slide_image/state_over_black.png");
            });
            $(".slide_smr h2, .slide_smr p, .slide_smr a").css("animation","");
        });// $slideNum이 0일 때의 동작 

        $(".bullet_2").click(function(){
            $slideNum = 1; // 클릭했을 때 $slideNum에 1을 저장
            $(".slide_container").stop().animate({left: -$width*$slideNum},600,function(){
                $(".slide_smr h2").css("animation","movement 1s ease-in-out forwards");
                $(".slide_smr p").css("animation","movement 1.3s ease-in-out forwards");
                $(".slide_smr a").css("animation","movement 1.6s ease-in-out forwards");

                $(".bullet img").attr("src","./images/slide_image/state_out.png");
                $(".bullet img").eq($slideNum).attr("src","./images/slide_image/state_over_black.png");
            });
            $(".slide_smr h2, .slide_smr p, .slide_smr a").css("animation","");
        });// $slideNum이 1일 때의 동작
        
        $(".bullet_3").click(function(){
            $slideNum = 2; // 클릭했을 때 $slideNum에 2를 저장
            $(".slide_container").stop().animate({left: -$width*$slideNum},600,function(){
                $(".slide_smr h2").css("animation","movement 1s ease-in-out forwards");
                $(".slide_smr p").css("animation","movement 1.3s ease-in-out forwards");
                $(".slide_smr a").css("animation","movement 1.6s ease-in-out forwards");

                $(".bullet img").attr("src","./images/slide_image/state_out.png");
                $(".bullet img").eq($slideNum).attr("src","./images/slide_image/state_over_black.png");
            });
            $(".slide_smr h2, .slide_smr p, .slide_smr a").css("animation","");
        });// $slideNum이 2일 때의 동작
        //슬라이드 목록 버튼 제어






    });
//]]>
let swiperRender=(function () {
    let music=document.getElementsByClassName("return")[0];
    let musicAudio=document.getElementById("musicAudio");
    function autoPlay() {
        music.onclick=function () {
            if(musicAudio.paused){
                musicAudio.play();
                return
            }
            musicAudio.pause()
        };
    }
    return {
        init:function () {
            autoPlay();
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 3200,
                autoplayDisableOnInteraction : true,
                effect : 'coverflow',
                onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                    swiperAnimateCache(swiper); //隐藏动画元素
                    swiperAnimate(swiper); //初始化完成开始动画
                },
                onSlideChangeEnd: function(swiper){
                    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                }
            });
        }
    }
})();
swiperRender.init()
document.addEventListener('DOMContentLoaded', () => {
  $(function(){ 
    var $blogSlideCont = $(".blog-slide");
    $blogSlideCont.css({"z-index":"0"});
    $blogSlideCont.first().css({"z-index":"1"}).addClass("blog-slide-progress blog-slide-textIn");
    var blogRectSize = $blogSlideCont.first().find(".blog-slide_txt_line1").outerWidth();
    $blogSlideCont.find(".blog-slide_txt_line1").css({
      "clip":"rect(auto, " + blogRectSize +"px, auto, auto)"
    });
    var blogSlide = {    
      speed: 1600,    
      requireKlasses: 'blog-slide-progress blog-slide-textIn',
      index: 0,
      is_anime: false,    
      classMove : function(){},    
      goTo:function(number){},

      next : function(){      
        if(this.is_anime){
          return;
        }else{
          this.is_anime = true;
        }      
        var that = this;
        var slide_height = $(".blog-slider").height();
        var slide_width = $(".blog-slider").width();      
        if( this.index < $blogSlideCont.length - 1 ){        
          $blogSlideCont.eq(that.index + 1).find(".blog-slide_txt_line1").css({
            "clip":"rect(auto, 0, auto, auto)"
          });        
          $blogSlideCont.eq(this.index + 1)
            .css({"z-index":"2"})
            .stop().animate(
              { fx: slide_width },
              {
                duration: this.speed,
                step: function(now,fx){
                  $blogSlideCont.eq(that.index + 1).css({"clip": "rect(0px, " + now + "px," + slide_height + "px, 0px)"});
                },
                complete: function(){

                  $blogSlideCont.eq(that.index).css({"z-index":"0"}).removeClass(that.requireKlasses).stop().animate(
                    { fx: 0 },
                    {
                      duration: 1,
                      complete: function(){
                        $blogSlideCont.eq(that.index + 1).css({"z-index":"1"}).addClass(that.requireKlasses);
                        var blogRectSize = $blogSlideCont.eq(that.index + 1).find(".blog-slide_txt_line1").outerWidth();
                        $blogSlideCont.eq(that.index + 1).find(".blog-slide_txt_line1").css({
                          "clip":"rect(auto, " + blogRectSize +"px, auto, auto)"
                        });
                        that.is_anime = false;                  
                        that.index++;                      
                      }
                    }
                  );
                }
              }
            );
        }else{
          $blogSlideCont.first().find(".blog-slide_txt_line1").css({
            "clip":"rect(auto, 0, auto, auto)"
          });
          $blogSlideCont.first()
            .css({"z-index":"2"})
            .stop().animate({
              fx: slide_width
            },{
              duration: this.speed,
              step: function(now,fx){
                $blogSlideCont.first().css({"clip": "rect(0px, " + now + "px," + slide_height + "px, 0px)"});
              },
              complete: function(){
                $blogSlideCont.eq(that.index).css({"z-index":"0"}).removeClass(that.requireKlasses).stop().animate({
                  fx: 0
                },{
                  duration: 1,
                  complete: function(){
                    $blogSlideCont.first().css({"z-index":"1"}).addClass(that.requireKlasses);
                    var blogRectSize = $blogSlideCont.first().find(".blog-slide_txt_line1").outerWidth();
                    $blogSlideCont.first().find(".blog-slide_txt_line1").css({
                      "clip":"rect(auto, " + blogRectSize +"px, auto, auto)"
                    });
                    that.is_anime = false;
                    that.index= 0;                  
                  }
                });
              }
            });
        }
      },
      prev : function(){      
        if(this.is_anime){
          return;
        }else{
          this.is_anime = true;
        }
        var that = this;
        var slide_height = $(".blog-slider").height();
        var slide_width = $(".blog-slider").width();
        if( this.index > 0 ){        
          $blogSlideCont.eq(this.index - 1).find(".blog-slide_txt_line1").css({
            "clip":"rect(auto, 0, auto, auto)"
          });        
          $blogSlideCont.eq(this.index - 1)
            .css({"z-index":"2"})
            .stop().animate({
              fx: slide_width
            },{
              duration: this.speed,
              step: function(now, fx){
                var n_now = slide_width - now;
                $blogSlideCont.eq(that.index - 1).css({"clip": "rect(0px, " + slide_width + "px," + slide_height + "px," + n_now + "px)"});
              },
              complete: function(){
                $blogSlideCont.eq(that.index).css({"z-index":"0"}).removeClass(that.requireKlasses).stop().animate({
                  fx: 0
                },{
                  duration: 1,
                  complete: function(){
                    $blogSlideCont.eq(that.index - 1).css({"z-index":"1"}).addClass(that.requireKlasses);
                    var blogRectSize = $blogSlideCont.eq(that.index - 1).find(".blog-slide_txt_line1").outerWidth();
                    $blogSlideCont.eq(that.index - 1).find(".blog-slide_txt_line1").css({
                      "clip":"rect(auto, " + blogRectSize +"px, auto, auto)"
                    });                  
                    that.is_anime = false;
                    that.index--;                 
                  }
                });
              }
            });
        }else{
          $blogSlideCont.last().find(".blog-slide_txt_line1").css({
            "clip":"rect(auto, 0, auto, auto)"
          });        
          $blogSlideCont.last()
            .css({"z-index":"2"})
            .stop().animate({
            fx: slide_width
          },{
            duration: this.speed,
            step: function(now,fx){
              var n_now = slide_width - now;
              $blogSlideCont.last().css({"clip": "rect(0px, " + slide_width + "px," + slide_height + "px," + n_now + "px)"});
            },
            complete: function(){
              $blogSlideCont.eq(that.index).css({"z-index":"0"}).removeClass(that.requireKlasses).stop().animate({
                fx: 0
              },{
                duration: 1,
                complete: function(){
                  $blogSlideCont.last().css({"z-index":"1"}).addClass(that.requireKlasses);
                  var blogRectSize = $blogSlideCont.last().find(".blog-slide_txt_line1").outerWidth();
                  $blogSlideCont.last().find(".blog-slide_txt_line1").css({
                    "clip":"rect(auto, " + blogRectSize +"px, auto, auto)"
                  });                
                  that.is_anime = false;
                  that.index = $blogSlideCont.length - 1;                
                }
              });
            }
          });  
        }
      }
    };
    var autoplay = true;  
    //var autoplay = false;  
    var duration = 5000;
    if( autoplay ){
      var timerId = setInterval(function(){
          blogSlide.next()},duration);
    }
    $(".js-blog-arrow-left").on("click", function(){
      if( autoplay ){
        clearInterval(timerId);
      }    
      blogSlide.prev();    
      if( autoplay ){
        timerId = setInterval(function(){
          blogSlide.next()},duration);
      }
    });
    $(".js-blog-arrow-right").on("click", function(){
      if( autoplay ){
        clearInterval(timerId);
      }
      blogSlide.next();    
      if( autoplay ){
        timerId = setInterval(function(){
          blogSlide.next()},duration);
      }
    });
  });
});
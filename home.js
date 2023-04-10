<script>
    $(function(){
        
        //主页把日期换成div展示
        $('.dayTitle > a').replaceWith(function() {
            return $('<div/>', {
                html: this.innerHTML
            });
        });

        //文章页面把标题替换成h2
        var title = $('.post > .postTitle > a > span').text();
        $('.post > .postTitle > a').remove();
        $('.post > .postTitle').text(title);
        $('.post > .postTitle').replaceWith(function(){
            return $('<h2/>',{
                html: this.innerHTML
            });
        })

        //判断是主页还是文章页面
        function isMainPage(){
            if($('#post_detail').length>0){
                //文章页面
                return false
            }
            return true
        }

        if(isMainPage()){
            //判断主页给forFlow写样式
            $('.forFlow').css({"margin":"5% 10% 2% 10%"})

            //主页给div添加点击事件
            $('.day').click(function(){
                var post_link = $(this).find('a').attr('href')
                window.location.href=post_link
            });
        }

    });
</script>
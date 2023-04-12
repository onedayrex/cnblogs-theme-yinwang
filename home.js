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
        });

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
        }else{
            //由于评论加载后有其它js处理，设置定时500ms后再执行
            setTimeout(function(){
                //评论按钮修改
                $('#btn_comment_submit').addClass('btn btn-primary')
                $('#commentbox_opt').find('a').remove()
                //去掉提示文本
                var comment_p = $('#comment_form_container').find('p');
                for(var i=0; i< comment_p.length;i++){
                    if(comment_p[i].id === undefined || comment_p[i].id === ''){
                        $(comment_p[i]).remove()
                    }
                }
            },500)
        }

    });
</script>
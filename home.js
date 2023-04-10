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

    
    });
</script>
$(
    function(){
        $.loading({
            container:$('#container'),
            bgcolor:'rgba(255,0,0,0.1)',
            color:'#EE4000'
        });
        setTimeout($.loadingFinish,3000);
    }
);
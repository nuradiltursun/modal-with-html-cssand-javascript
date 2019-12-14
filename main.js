document.querySelector('body').addEventListener('click',function(e){
    if(e.target.nodeName == "BUTTON" && e.target.getAttribute('data-toggle')=='modal'){
        var target_modal=document.querySelector(e.target.getAttribute('data-target'));
        var target_modal_dialog=document.querySelector(e.target.getAttribute('data-target')).querySelector('.modal-dialog');
        target_modal_dialog.classList.toggle('modal-dialog-active');
        target_modal.classList.toggle('modal-active')
    }
    if(e.target.nodeName == "BUTTON" && e.target.getAttribute('data-dismiss')=='modal'){
//         这个函数从关闭按钮向上遍历查找父节点
        var check=function(e){
            if(e.parentNode.hasAttribute('class')){
                    e.parentNode.classList.remove('modal-dialog-active')
                    setTimeout(function(){
                        e.parentNode.classList.remove('modal-active')
                    },300)    //这个时间是跟css的transition的0.4秒对应的
               return  check(e.parentNode);
            }else{
                return ;
            }
        }
        check(e.target);
    }
})

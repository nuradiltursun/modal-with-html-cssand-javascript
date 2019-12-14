document.querySelector('body').addEventListener('click',function(e){
    if(e.target.nodeName == "BUTTON" && e.target.getAttribute('data-toggle')=='modal'){
        var target_modal=document.querySelector(e.target.getAttribute('data-target'));
        var target_modal_dialog=document.querySelector(e.target.getAttribute('data-target')).querySelector('.modal-dialog');
        target_modal_dialog.classList.toggle('modal-dialog-active');
        target_modal.classList.toggle('modal-active')
    }
    if(e.target.nodeName == "BUTTON" && e.target.getAttribute('data-dismiss')=='modal'){
        var check=function(e){
            if(e.parentNode.hasAttribute('class')){
                    e.parentNode.classList.remove('modal-dialog-active')
                    setTimeout(function(){
                        e.parentNode.classList.remove('modal-active')
                    },300)
               return  check(e.parentNode);
            }else{
                return ;
            }
        }
        check(e.target);
    }
})
var clicker=true;

$('div.box').on('click', function(){
    if(clicker){
      $(this).css('backgroundColor','yellow');
      clicker = false;
    } else {
      $(this).css('backgroundColor','blue');
      clicker=true
  }
})

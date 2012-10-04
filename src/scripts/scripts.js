function navigate(e) {
  
  if (e.keyCode == 37) {
    var prevPage = $('nav.previous').find('a').attr('href');
    if(prevPage) {
      window.location.href = prevPage;   
    }
    return false;
  }
  
  if (e.keyCode == 39) {
    var nextPage = $('nav.next').find('a').attr('href');
    if(nextPage) {
      window.location.href = nextPage;   
    }
    return false;
  }
    
}

$(function(){
  
  $(document).keydown(function(e){
    navigate(e);
  });

});
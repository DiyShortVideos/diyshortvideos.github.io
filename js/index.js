$(document).ready(function(){


  if ($('#modal-getstarted').size() && $("#get-started-button-bottom").size()) {
    $('#modal-getstarted')
      .modal('attach events', '#get-started-button-bottom');
  }


  $("[data-popup]").each(function(_, item){
    item = $(item);
    item.popup({
      popup: "#" + item.data("popup"),
      exclusive: true,
      hoverable: true,
      lastResort: "bottom left"
    });
  });

  $('#ppc-value-tab-menu .item')
  .tab()
  ;

});

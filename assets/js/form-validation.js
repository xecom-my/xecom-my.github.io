$(window).ready(function() {
  $('.needs-validation').each(function() {
    $(this).submit(function(evt) {
      if (!$(this).get(0).checkValidity()) {
        evt.preventDefault()
        evt.stopPropagation()
      }
      $(this).addClass("was-validated")
    })
  })
})
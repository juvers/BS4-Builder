

  $(document).ready(function () {
    // Mobile sidebar
    $('#sidebar-mobile').on('click', function () {
      $(this).toggleClass('active');
      $('.sidebar-nav').toggleClass('active');
    });


    function saveLayout() {
      $.ajax({
        type: "POST",
        url: "/build_v4/saveLayout",
        data: {
          'layout-v4': $('.demo').html()
        },
        success: function (data) {
  
        }
      });
    }
  
    function downloadLayout() {
      $.ajax({
        type: "POST",
        url: "/build_v4/downloadLayout",
        data: {
          'layout-v4': $('#download-layout').html()
        },
        success: function (data) {
          window.location.href = '/build_v4/download';
        }
      });
    }
  
    function downloadHtmlLayout() {
      $.ajax({
        type: "POST",
        url: "/build_v4/downloadLayout",
        data: {
          'layout-v4': $('#download-layout').html()
        },
        success: function (data) {
          window.location.href = '/build_v4/downloadHtml';
        }
      });
    }
  
    function undoLayout() {
  
      $.ajax({
        type: "POST",
        url: "/build_v4/getPreviousLayout",
        data: {},
        success: function (data) {
          undoOperation(data);
        }
      });
    }
  
    function redoLayout() {
  
      $.ajax({
        type: "POST",
        url: "/build_v4/getPreviousLayout",
        data: {},
        success: function (data) {
          redoOperation(data);
        }
      });
    }
  
  
  // google analytics
  $('.btn-hire-header-home').click(function(){
      ga('send', 'event', 'hire', 'home-header');
    });
  
    $('.btn-hire-footer-home').click(function(){
      ga('send', 'event', 'hire', 'home-footer');
    });
  });



  
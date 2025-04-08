$(document).ready(function() {
    // Filter gallery items
    $('.gallery-filter button').click(function() {
      $('.gallery-filter button').removeClass('active');
      $(this).addClass('active');
      
      const filterValue = $(this).attr('data-filter');
      
      if (filterValue === 'all') {
        $('.gallery-item-full').show();
      } else {
        $('.gallery-item-full').hide();
        $(`.gallery-item-full[data-category="${filterValue}"]`).show();
      }
    });
    
    // Animation for gallery items
    $('.gallery-item-full').hover(
      function() {
        $(this).find('img').css('transform', 'scale(1.05)');
        $(this).find('.gallery-overlay').css('transform', 'translateY(0)');
      },
      function() {
        $(this).find('img').css('transform', 'scale(1)');
        $(this).find('.gallery-overlay').css('transform', 'translateY(100%)');
      }
    );
    
    // Load more functionality
    $('.load-more a').click(function(e) {
      e.preventDefault();
      // In a real implementation, this would load more images via AJAX
      alert('سيتم تحميل المزيد من الصور في التطبيق الكامل');
    });
  });

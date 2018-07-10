/**
 *  * @file
 *   * Add a clear button inside search boxes.
 *    */

/**
 *  * All ipt APIs are contained in this namespace.
 *   *
 *    * @namespace
 *     */
(function ($, Drupal, window, document, wb ) {
  'use strict';

  Drupal.behaviors.sort_form = {
    attach: function (context, settings) {
      $('html', context).once('sort_form').each(function () {
        $('#edit-sort-by').parents('.form-item').remove();
        $('#sort-form-edit-sort-by').on("change", function() {
          this.form.submit();
        });
      });
    }
  };

  Drupal.behaviors.clear_btn = {
    attach: function (context, settings) {
      $('html', context).once('clear_btn').each(function () {
        var $textInput = $('#edit-search-api-fulltext');

        if ($('.clear-btn').length == 0) {
         $textInput.after('<span class="clear-btn hidden-xs" title="Clear">&times;</span>');
        }
        $('.clear-btn').css('visibility', ($textInput.val().length) ? "visible" : "hidden");

        // Show the clear button if text input value is not empty
        $textInput.keyup(function() {
          $('.clear-btn').css('visibility', ($(this).val().length) ? "visible" : "hidden");
        });

        // Hide the clear button on click, and reset the input value
        $('.clear-btn').on( "click", function() {
          $textInput.val('');
          $(this).css('visibility', 'hidden');
          // $(this).parents('form').find('button.form-submit').trigger('click');
        });
      });
    }
  };

  Drupal.behaviors.filter_sort_btn = {
    attach: function (context, settings) {
      $('html', context).once('sort_btn').each(function () {
        var $filterElm = $('.bs-region--left');
        $filterElm.attr('id', 'bs-region--left');

        var sidebarClass = "hidden-xs hidden-sm col-md-3";
        var popupClass = "wb-overlay modal-content overlay-def wb-popup-full";
        $('#view-filter-mobile').on( "click", function() {
          $filterElm.removeClass(sidebarClass);
          $filterElm.addClass(popupClass);
          $filterElm.trigger("wb-init.wb-overlay");
          $filterElm.trigger("open.wb-overlay");
        });

        // Link trigger
        wb.doc.on( "click vclick", ".wb-overlay a[href^='#']", function( event ) {
          $filterElm.removeClass(popupClass + " wb-overlay-inited");
          $filterElm.addClass(sidebarClass);
          $filterElm.find(".modal-footer,#hdrClose").remove();
        });

        // Close trigger
        wb.doc.on( "click vclick", ".overlay-close", function( event ) {
          $filterElm.removeClass(popupClass + " wb-overlay-inited");
          $filterElm.addClass(sidebarClass);
          $filterElm.find(".modal-footer,#hdrClose").remove();
        });

        // JS or keyboard trigger
        wb.doc.on( "timerpoke.wb wb-init.wb-overlay keydown open.wb-overlay close.wb-overlay", ".wb-overlay", function( event ) {
          if ((event.type == "close") || (event.which == 27)) {
            $filterElm.removeClass(popupClass + " wb-overlay-inited");
            $filterElm.addClass(sidebarClass);
            $filterElm.find(".modal-footer,#hdrClose").remove();
          }
        });
      });
    }
  };

})(jQuery, Drupal, window, document, wb);

/**
 *  * @file
 *   * Add a clear button inside search boxes.
 *    */

/**
 *  * All ipt APIs are contained in this namespace.
 *   *
 *    * @namespace
 *     */
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.clear_btn = {
    attach: function(context, settings) {
      var $textInput = $('#edit-search-api-fulltext');

      if ($('.clear-btn').length == 0) {
       $textInput.after('<span class="clear-btn hidden-xs" title="Clear">&times;</span>');
      }
      $(this).next().css('visibility', ($textInput.length) ? "visible" : "hidden");

      $textInput.keyup(function() {
        // Show the clear button if text input value is not empty
        $(this).next().css('visibility', ($(this).length) ? "visible" : "hidden");
      });

      // Hide the clear button on click, and reset the input value
      $('.clear-btn').on( "click", function() {
        $textInput.val('');
        $(this).css('visibility', 'hidden');
        $(this).parents('form').find('button.form-submit').trigger('click');
        // $(this).parents('form').submit();
      });
    }
  };

  Drupal.behaviors.filter_sort_btn = {
    attach: function(context, settings) {
      $('#view-filter-mobile').on( "click", function() {
        var fullClasses = "hidden-xs col-sm-3 col-md-3";
        var modalClasses = "wb-overlay overlay-def wb-panel-r wb-init wb-overlay-inited modal-content open";
        var $region = $('.bs-region--top-left');
        if ($region.hasClass("open")) {
          $region.addClass(fullClasses).removeClass(modalClasses);
        } else {
          $region.removeClass(fullClasses).addClass(modalClasses);
        }
      });
      $('#view-sort-mobile').on( "click", function() {
alert("SORT");
      });


    }
  };




})(window.jQuery, window.Drupal, window.drupalSettings);

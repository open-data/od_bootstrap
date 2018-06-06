/**
 * @file
 * Transforms links into checkboxes.
 */

(function ($) {

  'use strict';

  /**
   * Replace a link with a checked checkbox.
   */
  Drupal.facets.makeCheckbox = function () {
    var $link = $(this);
    var active = $link.hasClass('is-active');
    var href = $link.attr('href');
    var id = $link.data('drupal-facet-item-id');

    var checkbox = $('<input type="checkbox" class="facets-checkbox">')
      .attr('id', id)
      .data($link.data())
      .data('facetsredir', href);

    checkbox.on('change.facets', function (e) {
      Drupal.facets.disableFacet($link.parents('.js-facets-checkbox-links'));
      window.location.href = $(this).data('facetsredir');
    });

    if (active) {
      $link.parents(".list-group-item").addClass("active");
    }

    var label = $('<div class="checkbox"><label>' + $link.html() + '</label></div>');

    if (active) {
      checkbox.attr('checked', true);
      label.find('.js-facet-deactivate').remove();
    }
    label.find('label').prepend(checkbox);

    $link.before(label).remove();
  };

  Drupal.behaviors.autoExpandFacet = {
    attach: function(context, settings) {
      $('details.block-facets').each(function( index ) {
        if ($(this).find('input:checkbox:checked').length) {
          $(this).attr('open','open');
        }
      });
    }
  };

})(jQuery);

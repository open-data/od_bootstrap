<?php

namespace Drupal\od_bootstrap\Plugin\Preprocess;

use Drupal\bootstrap\Plugin\Preprocess\PreprocessBase;
use Drupal\bootstrap\Utility\Variables;
use Drupal\Core\Template\Attribute;

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @ingroup plugins_form
 *
 * @BootstrapPreprocess("facets_summary_item_list")
 */
class FacetSummaryItemList extends PreprocessBase {

  /**
   * {@inheritdoc}
   */
  public function preprocessVariables(Variables $variables) {
    foreach ($variables['items'] as &$facet) {
      if (!empty($facet['value']['#title']['#theme']) &&
          $facet['value']['#title']['#theme'] == 'facets_result_item__summary') {
        $facet['value']['#title']['#value'] .= ' [X]';
      }
    }
  }

}

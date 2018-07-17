<?php

namespace Drupal\od_bootstrap\Plugin\Preprocess;

use Drupal\bootstrap\Plugin\Preprocess\PreprocessBase;
use Drupal\bootstrap\Utility\Variables;

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @ingroup plugins_form
 *
 * @BootstrapPreprocess("views_exposed_form")
 */
class ViewsSearchApiFullText extends PreprocessBase {

  /**
   * {@inheritdoc}
   */
  public function preprocessVariables(Variables $variables) {
    $form = &$variables['form'];
    $form['search_api_fulltext']['#size'] = 50;
  }

}

<?php

namespace Drupal\od_bootstrap\Plugin\Preprocess;

use Drupal\bootstrap\Plugin\Preprocess\PreprocessBase;
use Drupal\bootstrap\Utility\Variables;

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @ingroup plugins_form
 *
 * @BootstrapPreprocess("pager")
 */
class Pager extends PreprocessBase {

  /**
   * {@inheritdoc}
   */
  public function preprocessVariables(Variables $variables) {
    global $pager_total;

    if (isset($variables['items']['first'])) {
      $variables['items']['first']['text'] = 1;
    }
    if (isset($variables['items']['last'])) {
      $variables['items']['last']['text'] = $pager_total[$variables['pager']['#element']];
    }
  }

}

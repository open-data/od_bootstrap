<?php

namespace Drupal\od_bootstrap\Plugin\Preprocess;

use Drupal\Core\Render\Markup;
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
    $variables['items']['first']['text'] = 1;
    $variables['items']['last']['text'] = $pager_total[$variables['pager']['#element']];
  }

}

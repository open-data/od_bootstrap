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
 * @BootstrapPreprocess("views_bootstrap_panel")
 */
class ViewsBootstrapPanel extends PreprocessBase {

  /**
   * {@inheritdoc}
   */
  public function preprocessVariables(Variables $variables) {
    $view = $variables['view'];
    $cores = [
      'views-bootstrap-pd-core-ati-block-1',
      'views-bootstrap-pd-core-contracts-block-1',
      'views-bootstrap-pd-core-contractsa-block-1',
      'views-bootstrap-pd-core-grants-block-1',
      'views-bootstrap-pd-core-hospitalitya-block-1',
      'views-bootstrap-pd-core-hospitalityq-block-1',
      'views-bootstrap-pd-core-inventory-block-1',
      'views-bootstrap-pd-core-reclassification-block-1',
      'views-bootstrap-pd-core-travela-block-1',
      'views-bootstrap-pd-core-travelq-block-1',
      'views-bootstrap-pd-core-wrongdoing-block-1',
    ];
    $id = explode('--', $variables['id']);
    if (in_array($id[0], $cores)) {
      $panel_title_field = $view->style_plugin->options['panel_title_field'];
      foreach ($variables['rows'] as $id => $row) {
        if ($title = $view->style_plugin->getField($id, $panel_title_field)) {
          $label = $view->field[$panel_title_field]->label();
          $variables['rows'][$id]['title'] = Markup::Create($label . $this->t(': ') . $title);
        }
      }
    }
  }

}

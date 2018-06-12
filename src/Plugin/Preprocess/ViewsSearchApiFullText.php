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
    $form['search_api_fulltext']['#size'] = 100;

    if ((isset($form['form_id'])) && ($form['form_id']['#value'] == "views_exposed_form")) {
      if ($variables['attributes']['region'] == "top") {
        unset($form['sort_by']);
        unset($form['sort_order']);
      } else {
        foreach($form as $key => $element) {
          if (($key[0] != "#") && ($element['#type'] != "") 
             && (!in_array($element['#type'], array('actions','hidden'))) && (!in_array($key, array('sort_by','sort_order')))) {
            unset($form[$key]);
          }
        }
      }
    }
  }

}

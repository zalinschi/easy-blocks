import './style.scss'
import $ from 'jquery'


function spoilerToggle(){
  $( '.wp-block-esblocks-content-toggle__button' ).click(function() {
    $(this).parent().parent().attr('data-show-content', function(index, attr){
      return attr === "true" ? attr = "false" : attr = "true";
    })
  })
}

$( document ).ready(function() {
  spoilerToggle()
})
export {spoilerToggle}
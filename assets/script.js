var zvBlocks = (function () {
    'use strict'
  
    function setDefaultLabel (settings, newLabel) {
      settings['styles'] = settings['styles'].map(function (style) {
        if (style.isDefault) style.label = newLabel
        return style
      })
    }
  
    function addStyles (settings, styles) {
      settings['styles'] = settings['styles'].concat(styles)
    }
  
    function removeStyles (settings, styles) {
      settings['styles'] = settings['styles'].filter(function (style) {
        return styles.indexOf(style.name) === -1
      })
    }
  
    return {
      adjustBlocks: function (settings, name) {
        
        switch (name) {
          case 'core/cover':
            addStyles(settings, [
              {
                name: 'hero_shape',
                label: 'Hero shape',
              }])
            return settings
            break
          case 'core/quote':
            removeStyles(settings, ['large'])
            return settings
            break
          case 'core/list':
            addStyles(settings, [
              {
                name: 'list-checked',
                label: 'Checked',
              },
              {
                name: 'list-arrow',
                label: 'Arrow',
              }])
            return settings
            break
          case 'core/button':
            removeStyles(settings, ['outline'])
            addStyles(settings, [
              {
                name: 'transparent',
                label: 'Transparent',
              },
              {
                name: 'full',
                label: 'Full Width',
              }])
  
            //setDefaultLabel(settings, 'Squared')
  
            return settings
            break
          default:
            return settings
        }
      },
    }
  
  }())
  
  wp.hooks.addFilter(
    'blocks.registerBlockType',
    'enspire/editor',
    zvBlocks.adjustBlocks,
  )
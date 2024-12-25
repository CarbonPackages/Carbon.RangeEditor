[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Enhanced range editor for Neos CMS

This editor has some more features as the one who is already in the core:

* Minimal and maximal are clickable
* It's possible to hide the input via `showInput: false`
* The text input has a nicer UX, specially if a unit is set
* You can set a own text for every value
* The input field is debounced, so it is finally possible to set the value with the keypad
* Handle arrows keys (up/down) (with modifier keys for bigger steps) to increase or decrease the value via keyboard
* Ratio mode
* Shows reset button of `resetValue` is set

Example:

```yaml
'Foo.Bar:Element':
  properties:
    zoomLevel:
      type: integer
      ui:
        inspector:
          editor: 'Carbon.RangeEditor/Editor'
          editorOptions:
            showMinLabel: true
            showMaxLabel: true
            minLabel: null
            maxLabel: null
            showInput: true
            # If set, it will show a reset button
            resetValue: 4
            # Sets a custom icon for the reset button, defaults to 'times'
            resetIcon: 'undo'
            # Set custom label to reset button, defaults to 'Carbon.RangeEditor:Main:reset'. The value is also passed to the translation function
            resetLabel: 'Reset back to {0}'
            min: 1
            max: 6
            step: 1
            unit: ''
            valueLabels:
              1: Globe
              2: Coninent
              3: Country
              4: Area
              5: City
              6: Street
```

Of course you can localize a value. e.g. `Vendor.Package:Folder.Filename:1`
If you have set a value label for the min or max value, you don't need to set `minLabel` of `maxLabel`.

If you work with `xlf` files, you can also ad a setting called `valueLabelsFile`:

```yaml
'Foo.Bar:Element':
  properties:
    zoomLevel:
      type: integer
      ui:
        inspector:
          editor: 'Carbon.RangeEditor/Editor'
          editorOptions:
            minLabel: null
            maxLabel: null
            min: 1
            max: 6
            step: 1
            unit: ''
            valueLabelsFile: 'Foo.Bar:ZoomLevel'
            valueLabels:
              2: 'Override label from Foo.Bar:ZoomLevel:2'
```

In that case, the plugin search for the translation value in the file `ZoomLevel.xlf` in the package `Foo.Bar`.
Example: For the value `5` the translation string will be `Foo.Bar:ZoomLevel:5`.

## Ratio mode

If the unit i set to `%`, the `min` value `0` or bigger, the `max` value `100` or smaller and `ratio` is set to `true`,
it will show the ratio of the two values. For example, if the value is set to `30`, the left value will show `30%` and
the right value will show `70%`.

```yaml
'Foo.Bar:Element':
  properties:
    ratio:
      type: integer
      ui:
        inspector:
          editor: 'Carbon.RangeEditor/Editor'
          editorOptions:
            ratio: true
            min: 25
            max: 75
            step: 5
```

[packagist]: https://packagist.org/packages/carbon/rangeeditor
[latest stable version]: https://poser.pugx.org/carbon/rangeeditor/v/stable
[total downloads]: https://poser.pugx.org/carbon/rangeeditor/downloads
[license]: https://poser.pugx.org/carbon/rangeeditor/license
[github forks]: https://img.shields.io/github/forks/CarbonPackages/Carbon.RangeEditor.svg?style=social&label=Fork
[github stars]: https://img.shields.io/github/stars/CarbonPackages/Carbon.RangeEditor.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/CarbonPackages/Carbon.RangeEditor.svg?style=social&label=Watch
[fork]: https://github.com/CarbonPackages/Carbon.RangeEditor/fork
[stargazers]: https://github.com/CarbonPackages/Carbon.RangeEditor/stargazers
[subscription]: https://github.com/CarbonPackages/Carbon.RangeEditor/subscription

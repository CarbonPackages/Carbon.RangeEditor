[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Enhanced range editor for Neos CMS

This editor has some more features as the one who is already in the core:

* Minimal and maximal are clickable
* If minimal or maximal value is set, the value in the middle gets hidden
* You can set a own text for every value

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

# @nico2433/rbxts-react-utils

This is a utility package for [@rbxts/react-roblox](https://www.npmjs.com/package/@rbxts/react-roblox), providing custom components with compatibility for [TailwindCSS](https://tailwindcss.com) classes to Roblox UI components and other utilities.

## Installation

Install the package with an alias under the `rbxts` package:

```sh
npm i @rbxts/react-utils@npm:@nico2433/rbxts-react-utils
```

## Features

This package adds custom components that have compatibility with TailwindCSS classes for Roblox UI components. All classes based on pixels will have their passed value multiplied by 4. For example, `p-4` will be 16px, just like in Tailwind. Classes should accept custom parameters with or without brackets.

## Currently Support

- `Frame`
- `ImageButton`
- `ImageLabel`
- `ScrollingFrame`
- `TextBox`
- `TextButton`
- `TextLabel`
- `VideoFrame`
- `ViewPortFrame`

## Supported PseudoClasses

- `hover`: hover event

## Supported Classes

### AnchorPoint (percentage-based)

- `a`: sets both x and y anchor points
- `ax`: sets x anchor point
- `ay`: sets y anchor point

### BorderRadius

- `rounded-sm`
- `rounded`
- `rounded-md`
- `rounded-lg`
- `rounded-xl`
- `rounded-2xl`
- `rounded-3xl`
        -   Note: Selective corner rounding does not work.

### BorderWidth

- `border`

### Color

- Supports all Tailwind base colors.
- `bg`: background
- `text`: text
- `border`: border

### Opacity (percentage-based)

- `opacity`
- `bg-opacity`
- `text-opacity`
- `image-opacity`

### Padding

- `p`: padding
- `px`: padding-left and padding-right
- `py`: padding-top and padding-bottom
- `pt`: padding-top
- `pr`: padding-right
- `pb`: padding-bottom
- `pl`: padding-left

### Position

- `inset`: sets all four inset values
- `inset-x`: sets left and right inset values
- `inset-y`: sets top and bottom inset values
- `top`: top inset value
- `right`: right inset value
- `bottom`: bottom inset value
- `left`: left inset value

### Size

- `size`: sets both width and height
- `w`: width
- `h`: height

### Size Constraint (does not work based on parent)

- `min-w`: minimum width
- `min-h`: minimum height
- `max-w`: maximum width
- `max-h`: maximum height

### Automatic Size

- `size-auto`: sets both width and height
- `w-auto`: width
- `h-auto`: height

### Visibility

- `hidden`

### Text Scale

- `text-auto`

### Text Size

- `text-xs`
- `text-lg`
- `text-xl`
- `text-2xl`
- `text-3xl`
- `text-4xl`
- `text-4xl`
- `text-6xl`
- `text-7xl`
- `text-8xl`
- `text-9xl`

### Text Align

- `text-left`
- `text-center`
- `text-right`

### ZIndex

- `z`

### Flex

- `flex`
- `flex-col`
- `flex-row`

### Justify

- `justify-start`
- `justify-center`
- `justify-end`

### Align

- `items-start`
- `items-center`
- `items-end`

### Gap

- `gap`

## Custom Values

You can add your custom values for some classes, currently support:
colors | borderRadius | borderWidth | size

```javascript
// Add
CssConfig.addValues("colors", {
        primary: {
                test: "#9400D3",
        }
})

// Replace (This will replace all colors object with your custom)
CssConfig.setValues("colors", {
        red: {
                50: #fef2f2,
                100: #fee2e2,
                ...values
        }
        ...otherColors
})
```

## Usage

To use these classes, simply add them to your components as you would with TailwindCSS, and they will be applied with the corresponding Roblox UI transformations.

---

Feel free to contribute or raise issues if you find any bugs or have feature requests. Enjoy using `@nico2433/rbxts-react-utils`!

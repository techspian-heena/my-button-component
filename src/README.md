# orxe-btn

A button indicates an action upon a touch, to trigger an event. Buttons in ORXe 3 are used for:

. Confirming a user’s action

. Submitting data

. Opening or closing a popup/modal


## Usage

### Angular / javascript

```html
<!-- Default or Primary Button-->
<orxe-btn button-size='large-btn' button-label='Primary Button' a11y-label='primary button large'></orxe-btn>

<!-- Primary disabled button -->
<orxe-btn disabled-button button-label='Primary' a11y-label='primary button disabled'></orxe-btn>

<!-- Secondary Button -->
<orxe-btn button-size='large-btn' button-type='secondary-btn' button-label='Secondary Button' a11y-label='secondary button large'></orxe-btn>

<!-- Secondary disabled button -->
<orxe-btn disabled-button button-label='Secondary' a11y-label='secondary button disabled'></orxe-btn>


<!-- Tertiary Button -->
<orxe-btn button-size='large-btn' button-type='tertiary-btn' button-label='Tertiary Button' a11y-label='tertiary button large'></orxe-btn>

<!-- Tertiary disabled button -->
<orxe-btn button-type='tertiary-btn' disabled-button button-label='Tertiary' a11y-label='tertiary button disabled'></orxe-btn>

<!-- Floating Button  -->
  <orxe-btn button-type="floating-btn" button-label='Label 1' a11y-label="label1"></orxe-btn>

<!-- Link Button -->
<orxe-btn button-type="link-btn" button-label='Link Button'></orxe-btn>


<!-- Icon Button -->
<orxe-btn button-type="icon" icon-type="trash" button-size="icon-btn-type1"></orxe-btn>

<!-- Icon disabled button -->
<orxe-btn button-type="icon" icon-type="trash" button-size="icon-btn-type1" disabled-button></orxe-btn>
```

## Properties

Property Type - `buttonType`

Default - `primary-btn`

Attribute - `button-type`

Description - It takes 6 types of button: primary, secondary, tertiary, floating, link, icon.

---------------------------------------------------------------------------------------------------------

Property Type - `buttonSize`

Default - `mediuam-btn`

Attribute - `button-size`

Description - It takes three different size - large, mediuam, small.

---------------------------------------------------------------------------------------------------------

Property Type - `iconType`

Default - `''`

Attribute - `icon-type`

Description - It takes icon types.

---------------------------------------------------------------------------------------------------------

Property Type - `buttonLabel`

Default - `''`

Attribute - `buttonLabel`

Description - It takes the label of button

---------------------------------------------------------------------------------------------------------

Property Type - `disabled`

Default - `false`

Attribute - `disabled-button`

Description - It takes true or false, used to disable the button

---------------------------------------------------------------------------------------------------------

Property Type - `a11yLabel`

Default - `button`

Attribute - `a11y-label`

Description - It is used to set aria-label

---------------------------------------------------------------------------------------------------------
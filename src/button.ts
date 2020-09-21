/**
 * @packageDocumentation
 * @module Button
 */


import { customElement, html, LitElement, property } from "lit-element";
import styles from './button-css';

/**
 * @noInheritDoc
 */
@customElement('orxe-btn')
export default class OrxeButton extends LitElement {

   /**
   *
   * @memberof OrxeButton
   * This is used to give the type of a button(primary-button, secondary-button or tertiary-button)
   */
  @property({ type: String, reflect: true, attribute: 'button-type' })
  buttonType = 'primary-btn';

   /**
   *
   * @memberof OrxeButton
   * This is used to give the size of a button(large-button, medium-button or small-button)
   */
  @property({ type: String, reflect: true, attribute: 'button-size' })
  buttonSize = 'medium-btn';

  @property({ type: String, reflect: true, attribute: 'icon-type' })
  iconType = '';

  @property({ type: String, reflect: true, attribute: 'button-label' })
  buttonLabel = '';


  /**
   *
   * @memberof OrxeButton
   * this property is used to disable the button
   */
  @property({ type: Boolean, reflect: true, attribute: 'disabled-button' })
  disabled = false;

    /**
   *
   * @memberof OrxeCard
   * This property will set the aria-label
   */
  @property({ type: String, reflect: true, attribute: 'a11y-label' })
  a11yLabel = 'button';



  render() {

   if (this.buttonType === 'icon') {
      return html `
      ${this._renderIconButton()}
      ` 
    }

    if (this.buttonType === 'link-btn') {

        return html `
        ${this._renderLinkButton()}
        `
    }
    if (this.buttonType === 'tertiary-btn' && this.disabled) {

        return html `
        ${this._renderTertiaryDisabled()}
        `
    }
        return html`
        <button data-testid="button__container" class="button-container" @click="${() => this._handleClickEvent()}" disabled-button=${this.disabled} button-size=${this.buttonSize} 
        aria-label="${this.a11yLabel}" button-type=${this.buttonType}>
        ${this.buttonLabel}
        <slot></slot>
        </button>
       `; 
  }

  private _renderIconButton() {
    return html `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div @click="${() => this._handleClickEvent()}">
        <i class="fa fa-${this.iconType}" button-size=${this.buttonSize} disabled-button=${this.disabled}></i>
        </div>
        `
  }

  private _renderLinkButton() {
    return html `
       <a href="#link" class="link-container" button-size=${this.buttonSize} @click="${() => this._handleClickEvent()}">
       ${this.buttonLabel}
       </a>
       `;
  }

  private _renderTertiaryDisabled() {
    return html `
        <button data-testid="tertiary__container" class="tertiary-disabled"  aria-label="${this.a11yLabel}">
        ${this.buttonLabel}
        </button> 
        `;
  }

  _handleClickEvent(): void{
      const event = new CustomEvent('ButtonEvent', {
       detail: {
           message: "Button has clicked"
       }
      });
      this.dispatchEvent(event);
  }


  static styles = styles;

}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, html, LitElement, property } from "lit-element";
import styles from './button-css';
let OrxeButton = class OrxeButton extends LitElement {
    constructor() {
        super(...arguments);
        this.buttonType = 'primary-btn';
        this.buttonSize = 'medium-btn';
        this.iconType = '';
        this.buttonLabel = '';
        this.disabled = false;
        this.a11yLabel = 'button';
    }
    render() {
        if (this.buttonType === 'icon') {
            return html `
      ${this._renderIconButton()}
      `;
        }
        if (this.buttonType === 'link-btn') {
            return html `
        ${this._renderLinkButton()}
        `;
        }
        if (this.buttonType === 'tertiary-btn' && this.disabled) {
            return html `
        ${this._renderTertiaryDisabled()}
        `;
        }
        return html `
        <button data-testid="button__container" class="button-container" @click="${() => this._handleClickEvent()}" disabled-button=${this.disabled} button-size=${this.buttonSize} 
        aria-label="${this.a11yLabel}" button-type=${this.buttonType}>
        ${this.buttonLabel}
        <slot></slot>
        </button>
       `;
    }
    _renderIconButton() {
        return html `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div @click="${() => this._handleClickEvent()}">
        <i class="fa fa-${this.iconType}" button-size=${this.buttonSize} disabled-button=${this.disabled}></i>
        </div>
        `;
    }
    _renderLinkButton() {
        return html `
       <a href="#link" class="link-container" button-size=${this.buttonSize} @click="${() => this._handleClickEvent()}">
       ${this.buttonLabel}
       </a>
       `;
    }
    _renderTertiaryDisabled() {
        return html `
        <button data-testid="tertiary__container" class="tertiary-disabled"  aria-label="${this.a11yLabel}">
        ${this.buttonLabel}
        </button> 
        `;
    }
    _handleClickEvent() {
        const event = new CustomEvent('ButtonEvent', {
            detail: {
                message: "Button has clicked"
            }
        });
        this.dispatchEvent(event);
    }
};
OrxeButton.styles = styles;
__decorate([
    property({ type: String, reflect: true, attribute: 'button-type' }),
    __metadata("design:type", Object)
], OrxeButton.prototype, "buttonType", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'button-size' }),
    __metadata("design:type", Object)
], OrxeButton.prototype, "buttonSize", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'icon-type' }),
    __metadata("design:type", Object)
], OrxeButton.prototype, "iconType", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'button-label' }),
    __metadata("design:type", Object)
], OrxeButton.prototype, "buttonLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'disabled-button' }),
    __metadata("design:type", Object)
], OrxeButton.prototype, "disabled", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'a11y-label' }),
    __metadata("design:type", Object)
], OrxeButton.prototype, "a11yLabel", void 0);
OrxeButton = __decorate([
    customElement('orxe-btn')
], OrxeButton);
export default OrxeButton;

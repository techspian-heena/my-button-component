import { LitElement } from "lit-element";
export default class OrxeButton extends LitElement {
    buttonType: string;
    buttonSize: string;
    iconType: string;
    buttonLabel: string;
    disabled: boolean;
    a11yLabel: string;
    render(): import("lit-element").TemplateResult;
    private _renderIconButton;
    private _renderLinkButton;
    private _renderTertiaryDisabled;
    _handleClickEvent(): void;
    static styles: import("lit-element").CSSResult;
}

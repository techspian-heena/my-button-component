import { OrxeButton } from "..";
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);
describe('orxe-button-axe', () => {
    let button;
    beforeEach(function () {
        OrxeButton;
        document.body.appendChild(document.createElement('orxe-btn'));
        button = document.querySelector('orxe-btn');
    });
    afterEach(function () {
        button.remove();
    });
    it('should support all WCAG Accessibility Rules. when component is rendered', async () => {
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when buttonType is given', async () => {
        button.buttonType = 'primary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when primary button size is large is given', async () => {
        button.buttonSize = 'large-btn';
        button.a11yLabel = 'primary button large';
        button.buttonType = 'primary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when primary button size is mediuam is given', async () => {
        button.buttonSize = 'mediuam-btn';
        button.a11yLabel = 'primary button mediuam';
        button.buttonType = 'primary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when primary button size is small is given', async () => {
        button.buttonSize = 'small-btn';
        button.a11yLabel = 'primary button small';
        button.buttonType = 'primary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when primary button disabled is given', async () => {
        button.disabled = true;
        button.a11yLabel = 'primary button disabled';
        button.buttonType = 'primary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when secondary button size is large is given', async () => {
        button.buttonSize = 'large-btn';
        button.a11yLabel = 'secondary button large';
        button.buttonType = 'secondary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when secondary button size is mediuam is given', async () => {
        button.buttonSize = 'mediuam-btn';
        button.a11yLabel = 'secondary button mediuam';
        button.buttonType = 'secondary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when secondary button size is small is given', async () => {
        button.buttonSize = 'small-btn';
        button.a11yLabel = 'secondary button small';
        button.buttonType = 'secondary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when secondary button disabled is given', async () => {
        button.disabled = true;
        button.a11yLabel = 'secondary button disabled';
        button.buttonType = 'secondary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when tertiary button size is large is given', async () => {
        button.buttonSize = 'large-btn';
        button.a11yLabel = 'tertiary button large';
        button.buttonType = 'tertiary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when tertiary button size is mediuam is given', async () => {
        button.buttonSize = 'mediuam-btn';
        button.a11yLabel = 'tertiary button mediuam';
        button.buttonType = 'tertiary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when tertiary button size is small is given', async () => {
        button.buttonSize = 'small-btn';
        button.a11yLabel = 'tertiary button small';
        button.buttonType = 'tertiary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when tertiary button disabled is given', async () => {
        button.disabled = true;
        button.a11yLabel = 'tertiary button disabled';
        button.buttonType = 'tertiary-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when floating button label 1', async () => {
        button.a11yLabel = 'label 1';
        button.buttonType = 'floating-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
    it('should support all WCAG Accessibility Rules. when floating button label 2', async () => {
        button.a11yLabel = 'label 2';
        button.buttonType = 'floating-btn';
        await button.requestUpdate();
        const results = await axe(button);
        expect(results).toHaveNoViolations();
    });
});

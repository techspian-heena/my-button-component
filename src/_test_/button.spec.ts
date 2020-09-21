import { OrxeButton } from '../index';
import { toHaveAttribute } from '@testing-library/jest-dom/matchers';

expect.extend({
    toHaveAttribute,
  })

describe('orxe-btn', () => {
let button;

beforeEach(async function() {
    OrxeButton;
    button = (await document.body.appendChild(document.createElement('orxe-btn'))) as OrxeButton;
  });

  afterEach(async function() {
    await button.remove();
  });


  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (button.hasOwnProperty(property)) {
        button[property] = properties[property];
      }
    }
    await button.requestUpdate();
  }

  function getByTestId(id: string): HTMLElement {
    return button.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('should check default value for properties of button', () => {
    expect(button.buttonType).toEqual('primary-btn');
    expect(button.buttonSize).toEqual('medium-btn');
    expect(button.disabled).toBeFalsy();
    expect(button.iconType).toEqual('');
  });


  it('Should check button is primary button if no buttonType is given', async () => {
    const buttonContainer = getByTestId('button__container');
    expect(buttonContainer).toHaveAttribute('button-type', 'primary-btn');
  });

  it('Should set secondary button Type', async () => {
    await setProperties({ buttonType: 'secondary-btn' });
    const buttonContainer = getByTestId('button__container');
    expect(buttonContainer).toHaveAttribute('button-type', 'secondary-btn');
  });

  it('Should set tertiary button Type', async () => {
    await setProperties({ buttonType: 'tertiary-btn' });
    const buttonContainer = getByTestId('button__container');
    expect(buttonContainer).toHaveAttribute('button-type', 'tertiary-btn');
  });

  it('Should set floating button Type', async () => {
    await setProperties({ buttonType: 'floating-btn' });
    const buttonContainer = getByTestId('button__container');
    expect(buttonContainer).toHaveAttribute('button-type', 'floating-btn');
  });


  it('Should check button is medium button if no buttonSize is given', async () => {
    const buttonContainer = getByTestId('button__container');
    expect(buttonContainer).toHaveAttribute('button-size', 'medium-btn');
  });

  it('Should set large button Type', async () => {
    await setProperties({ buttonSize: 'large-btn' });
    const buttonContainer = getByTestId('button__container');
    expect(buttonContainer).toHaveAttribute('button-size', 'large-btn');
  });

  it('Should set small button Type', async () => {
    await setProperties({ buttonSize: 'small-btn' });
    const buttonContainer = getByTestId('button__container');
    expect(buttonContainer).toHaveAttribute('button-size', 'small-btn');
  });

  it('Should click event', async () => {
    await setProperties({ buttonType: 'floating-btn' });
    const closeIconContainer = getByTestId('button__container');
    await closeIconContainer.click();
    expect(document.querySelector(`orxe-btn`)).toBeTruthy();
  });

       
});



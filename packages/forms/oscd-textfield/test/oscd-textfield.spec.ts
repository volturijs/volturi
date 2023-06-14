import { expect, fixture, html } from '@open-wc/testing';
import { it } from 'node:test';

import '../src/OscdTextfield.js';
import { OscdTextfield } from '../src/OscdTextfield.js';

describe('oscd-textfield', () => {
  let element: OscdTextfield;

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-textfield></oscd-textfield>`
    );
    await element.updateComplete;
  });

  it('looks like the latest snapshot', async () => {
    await expect(element).shadowDom.to.equalSnapshot();
  });
});

import { expect, fixture, html } from '@open-wc/testing';
import { it } from 'node:test';

import '../src/OscdCheckbox.js';
import { OscdCheckbox } from '../src/OscdCheckbox.js';

describe('oscd-checkbox', () => {
  let element: OscdCheckbox;

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-checkbox></oscd-checkbox>`
    );
    await element.updateComplete;
  });

  it('looks like the latest snapshot', async () => {
    await expect(element).shadowDom.to.equalSnapshot();
  });
});

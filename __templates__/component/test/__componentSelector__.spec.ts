import { expect, fixture, html } from '@open-wc/testing';
import { it } from 'node:test';

import '../src/{{ componentClass }}.js';
import { {{ componentClass }} } from '../src/{{ componentClass }}.js';

describe('{{ componentSelector }}', () => {
  let element: {{ componentClass }};

  beforeEach(async () => {
    element = await fixture(
      html`<{{ componentSelector }}></{{ componentSelector }}>`
    );
    await element.updateComplete;
  });

  it('looks like the latest snapshot', async () => {
    await expect(element).shadowDom.to.equalSnapshot();
  });
});

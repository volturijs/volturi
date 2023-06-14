import { css, html, LitElement, TemplateResult } from 'lit';

import '@material/mwc-icon';

/**
 * @tag {{ componentSelector }}
 */
export class {{ componentClass }} extends LitElement {

  render(): TemplateResult {
    return html`<span>{{ componentSelector }} works!</span>`
  }

  static styles = css`
  `;
}

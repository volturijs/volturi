import { css, html, LitElement, TemplateResult } from 'lit';

import '@material/mwc-icon';

/**
 * @cssprop [--oscd-textfield-primary=--oscd-primary] - Primary Textfield Color
 * @tag oscd-textfield
 */
export class OscdTextfield extends LitElement {
  render(): TemplateResult {
    return html`<span>oscd-textfield works!</span>`;
  }

  static styles = css``;
}

import { html, TemplateResult } from "lit-element";
import "../../../packages/forms/oscd-checkbox/dist/OscdCheckbox.js";

export default {
  title: "forms/OscdCheckbox",
  component: "oscd-checkbox",
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = ({}: ArgTypes) =>
  html`<oscd-checkbox></oscd-checkbox>`;

export const Regular = Template.bind({});

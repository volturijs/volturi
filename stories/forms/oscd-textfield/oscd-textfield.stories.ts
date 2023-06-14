import { html, TemplateResult } from "lit-element";
import "../../../packages/forms/oscd-textfield/dist/OscdTextfield.js";

export default {
  title: "Forms/OscdTextfield",
  component: "oscd-textfield",
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = ({}: ArgTypes) =>
  html`<oscd-textfield></oscd-textfield>`;

export const Regular = Template.bind({});

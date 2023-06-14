import { html, TemplateResult } from "lit-element";
import "../../../packages/{{ directory }}/{{ componentSelector }}/dist/{{ componentClass }}.js";

export default {
  title: "{{ directory }}/{{ componentClass }}",
  component: "{{ componentSelector }}",
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = ({}: ArgTypes) =>
  html`<{{ componentSelector }}></{{ componentSelector }}>`;

export const Regular = Template.bind({});

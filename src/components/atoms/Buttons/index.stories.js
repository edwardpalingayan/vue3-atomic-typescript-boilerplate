import AtomButton from "./index.vue";

export default {
  title: "Atom/Button",
  component: AtomButton,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "Submit",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    block: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    round: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    elevated: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    size: {
      control: { type: "select" },
      options: ["sx", "sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "success", "error", "default"],
      defaultValue: "default",
    },
    onClick: {
      action: "clicked",
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AtomButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind='args'`
  template: '<AtomButton v-bind="args" />',
});

export const Default = Template.bind({});

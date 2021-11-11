import AtomAlert from "./index.vue";

export default {
  title: "Atom/Alert",
  component: AtomAlert,
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "Informational message",
    },
    contents: {
      control: { type: "text" },
      defaultValue: "Some additional text to explain said message.",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "success", "error", "default"],
      defaultValue: "default",
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AtomAlert },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind='args'`
  template: '<AtomAlert v-bind="args" />',
});

export const Default = Template.bind({});

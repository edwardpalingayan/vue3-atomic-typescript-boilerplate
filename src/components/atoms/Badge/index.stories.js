import AtomBadge from "./index.vue";

export default {
  title: "Atom/Badge",
  component: AtomBadge,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "#travel",
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
  components: { AtomBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind='args'`
  template: '<AtomBadge v-bind="args" />',
});

export const Default = Template.bind({});

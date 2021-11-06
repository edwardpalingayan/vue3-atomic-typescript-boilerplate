import { shallowMount } from "@vue/test-utils";
import Button from "@/components/atoms/Button/index.vue";

describe("Atom -> Button", () => {
  it("renders props.label when passed", () => {
    const label = "Submit";
    const wrapper = shallowMount(Button, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});

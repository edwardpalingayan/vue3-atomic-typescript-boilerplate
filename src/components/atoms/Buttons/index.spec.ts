import { shallowMount } from "@vue/test-utils";
import Buttons from "@/components/atoms/Buttons/index.vue";

describe("Atom -> Button", () => {
  it("renders props.label when passed", () => {
    const label = "Submit";
    const wrapper = shallowMount(Buttons, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});

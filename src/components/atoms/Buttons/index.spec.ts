import { shallowMount } from "@vue/test-utils";
import Buttons from "@/components/atoms/Buttons/index.vue";

describe("AtomButton.vue", () => {
  it("renders props.msg when passed", () => {
    const label = "new message";
    const wrapper = shallowMount(Buttons, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});

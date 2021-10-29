import { shallowMount } from "@vue/test-utils";
import Badge from "@/components/atoms/Badge/index.vue";

describe("Atom -> Badge", () => {
  it("renders props.label when passed", () => {
    const label = "#ramen";
    const wrapper = shallowMount(Badge, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});

import { shallowMount } from "@vue/test-utils";
import Alerts from "@/components/atoms/Alerts/index.vue";

describe("Atom -> Alert", () => {
  it("renders props.label when passed", () => {
    const title = "Title area";
    const contents = "Contents area";
    const variant = "success";
    const wrapper = shallowMount(Alerts, {
      props: { title, contents, variant },
    });
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(contents);
    expect(wrapper.classes("bg-green-100")).toBe(true);
  });
});

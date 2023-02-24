import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  test("if user are not logged in, do not show logout button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  test("if user are  logged in, show logout button", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});

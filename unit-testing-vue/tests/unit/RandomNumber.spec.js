import { mount } from "@vue/test-utils";
import RandomNumber from "../../src/components/RandomNumber.vue";
describe("RandomNumber", () => {
  test("By default, random numbers should be 0", () => {
    const wrapper = mount(RandomNumber);
    expect(wrapper.html()).toContain("<span>0</span>");
  });
  test("if button is clicked, randomNumber should be between 1 an 10", async () => {
    const wrapper = mount(RandomNumber);
    await wrapper.find("button").trigger("click");
    const randomNumber = parseInt(wrapper.find("span").text());
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  test("if button is clicked, randomNumber should be between 200 an 300", async () => {
    const wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300,
      },
    });
    await wrapper.find("button").trigger("click");
    const randomNumber = parseInt(wrapper.find("span").text());
    expect(randomNumber).toBeGreaterThanOrEqual(200);
    expect(randomNumber).toBeLessThanOrEqual(300);
  });
});

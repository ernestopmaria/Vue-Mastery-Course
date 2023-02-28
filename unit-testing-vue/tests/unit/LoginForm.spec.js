import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("Login Form", () => {
  it("emits an event with a user data payload", async () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find("[data-testid='name-input']");

    await input.setValue("Ernesto Maria");
    wrapper.trigger("submit");

    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: "Ernesto Maria" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});

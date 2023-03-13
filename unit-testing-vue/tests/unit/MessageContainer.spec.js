import MessageContainer from "@/components/MessageContainer";
import { mount } from "@vue/test-utils";

describe("MessageConatiner", () => {
  it("Wraps MessageDIsplay component", () => {
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: '<p data-testid="message">Hello from the db!</p>',
          },
        },
      },
    });

    const stubMessage = "Hello from the db!";

    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toEqual(stubMessage);
  });
});

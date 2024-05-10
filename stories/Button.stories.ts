import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { fn } from "@storybook/test";
import { userEvent, within, expect } from "@storybook/test";

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        text: "Button",
        icon: "emoji_emotions",
        onClick: fn(),
        id: "button",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId("button"));
    },
};

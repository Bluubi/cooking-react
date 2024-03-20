import type {Meta, StoryObj} from "@storybook/react";
import {Card} from "../components/card";
import bg1 from '../assets/bg1.jpg';

const meta = {
    title: 'Example/Card',
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
        image: bg1,
        id:'1',
        title: 'Ensalada campestre con salsa vinagreta'
    }
};

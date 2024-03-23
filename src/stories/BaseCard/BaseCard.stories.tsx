import {BaseCard} from "../../components/card/base";
import {CardProps} from "../../components/card";
import {StoryFn} from "@storybook/react";
import '../../index.css'
import bg1 from '../../assets/bg1.jpg';
export default {
    title: 'BaseCard',
    component: BaseCard,
    argTypes: {

    }
}

const ShadowSM: StoryFn<CardProps> = () =>
    <BaseCard id={'01'} shadow={'shadow-sm'} position={'static'}>
        <img src={bg1} alt={""}/>
        <h2 className={'p-3.5'}>This is a Base card</h2>
    </BaseCard>

const ShadowMD: StoryFn<CardProps> = () =>
    <BaseCard id={'01'} shadow={'shadow-md'} position={'static'}>
        <img src={bg1} alt={""} />
        <h2 className={'p-3.5'}>This is a Base card</h2>
    </BaseCard>
const ShadowLg: StoryFn<CardProps> = () =>
    <BaseCard id={'01'} shadow={'shadow-lg'} position={'static'}>
        <img src={bg1} alt={""}/>
        <h2 className={'p-3.5'}>This is a Base card</h2>
    </BaseCard>

export const ShadowSMTemplate = ShadowSM.bind({});
export const ShadowMDTemplate = ShadowMD.bind({});
export const ShadowLGTemplate = ShadowLg.bind({});

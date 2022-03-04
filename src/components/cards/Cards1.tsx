import React from 'react'
import { provideFluentDesignSystem, fluentCard, fluentButton } from '@fluentui/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import { ButtonDefaultExample } from './Buttons';
import "./Cards1.css"
import image from"./download.jpg"

const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());

export const FluentCard = wrap(fluentCard());
export const FluentButton = wrap(fluentButton());

const Cards1 = () => {
    return (
        <div className='Cards1'>
            <FluentCard className='Card'>
                <div className="leftSide">
                    <div className="cardButton">
                        <button><div className='dot'></div>Birthday</button>
                    </div>
                    <h2>Micheal Scott</h2>
                    <div className="Button">
                        <ButtonDefaultExample text='Send a Wish' />
                    </div>
                </div>
                <div className="CardRightSide">
                    <img src={image} alt="Image Here" />
                </div>
            </FluentCard>

            <FluentCard className='Card'>
                <div className="leftSide">
                    <div className="cardButton2">
                        <button><div className='dot2'></div>Event</button>
                    </div>
                    <h2>BNB 5 Year Anniversary</h2>
                    <p>Manhattan 7.00 PM-11.00 PM</p>
                    <div className="Button">
                        <ButtonDefaultExample text='Add a Reminder' />
                    </div>
                </div>

                <div className="CardRightSide">
                    <img src={image} alt="Image Here" />
                </div>
            </FluentCard>
        </div>
    )
}

export default Cards1
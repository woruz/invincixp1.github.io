import React from 'react'
import { provideFluentDesignSystem, fluentCard, fluentButton } from '@fluentui/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import "./ListSection.css"
import { item } from "./data"
import { DefaultButton } from '@fluentui/react/lib/Button';

const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());

export const FluentCard = wrap(fluentCard());
//export const FluentButton = wrap(fluentButton());*/

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}


const ListSection = () => {
  return (
    <div className='ListName'>
      {item.map((val) =>
        <FluentCard className='ListSectionCard'>
          <div className="left">
            <div className="dob">
              <div className="day">{val.dobd}</div><div className="month">{val.dobm}</div>
            </div>
            <div className="name">
              <div className="event">
                <button id={val.occasion}><div className={val.occasion}></div><div className="buttonText">{val.occasion}</div></button>
              </div>
              <div className="person">{val.name}</div>
            </div>
          </div>

          <div className="right">
            <div className="ListButton">
              <DefaultButton>
                {val.button}
              </DefaultButton>
            </div>
          </div>
        </FluentCard>
      )}
    </div>
  )
}

export default ListSection
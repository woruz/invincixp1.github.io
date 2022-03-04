import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

export interface IButtonExampleProps {
    // These are set based on the toggles shown above the examples (not needed in real code)
    disabled?: boolean;
    checked?: boolean;
  }

  type GreetProps = {
    text: string
  }

  const stackTokens: IStackTokens = { childrenGap: 40 };

  export const ButtonDefaultExample = (props: GreetProps) => {
    
  
    return (
      <Stack horizontal tokens={stackTokens}>
        <DefaultButton text={props.text}  />
      </Stack>
    );
  };
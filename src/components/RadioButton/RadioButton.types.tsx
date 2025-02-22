export type RadioButtonProps = {
    label: string;
    value: string;
    name: string;
    checked?: boolean;
    onChange: (value: string) => void;
    disabled?: boolean;
  };
  export {};
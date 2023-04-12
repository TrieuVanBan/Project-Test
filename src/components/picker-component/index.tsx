import { Select } from 'antd';
import React, { forwardRef, ReactNode } from 'react'

type PickerProps = {
    // data: ItemPropsModel[] | any,
    suffixIcon?: string,
    defaultValue?: string,
    value?: string;
    icLeft?: string,
    icRight?: string,
    disable?: boolean,
    notFoundComponent?: ReactNode,
    placeholder?: string,
    defaultOpen?: boolean,
    clearImage?: string,
    title?: string;
    isImportant?: boolean,
    autoFocus?: boolean,
    showSearch?: boolean,
    showArrow?: boolean,
    allowClear?: boolean,
    titleItemPickerText?: string,
    mainContainer?: string,
    itemContainer?: string,
    errorPickerText?: string,
    labelItemStyle?: string,
    isCheckbox?: boolean,
    listHeight?: number,
    dropdownRender?: (menu?: any) => any,
    onClose?: () => void,
    onOpen?: () => void,
    onClear?: (label?: string) => void,
    onSelectItem?: (content: any) => void,
    onCheckbox?: () => any,
    isShadow?: boolean,
};

export type PickerAction = {
    show?: (content?: string) => any,
    hide?: (content?: string) => any,
    getValue: (text?: string | number) => void,
    setValue: (text: string | number) => void,
    setError: (text: string) => any,
    clearValue?: () => void,
    getCheckBox?: () => void,
};

const  PickerComponent= forwardRef<PickerAction, PickerProps>(({
    // data,
    title,
    suffixIcon,
    listHeight,
    onClose,
    onOpen,
    defaultValue,
    onSelectItem,
    onClear,
    value,
    clearImage,
    disable,
    defaultOpen,
    notFoundComponent,
    placeholder,
    isImportant,
    autoFocus,
    showSearch,
    showArrow,
    allowClear,
    mainContainer,
    itemContainer,
    titleItemPickerText,
    errorPickerText,
    labelItemStyle,
    icLeft,
    icRight,
    isCheckbox,
    dropdownRender,
    onCheckbox,
    isShadow
}: PickerProps,

ref: any) => {

    const { Option } = Select;

  return (
    <div>PickerComponent</div>
  )
})

export default PickerComponent
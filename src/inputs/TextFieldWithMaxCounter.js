import React from 'react';
import { useId } from '@reach/auto-id';

import {
    FormField,
    Text,
    TextInput
} from '@sanity/ui';

import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'

export const TextFieldWithMaxCounter = React.forwardRef((props, ref) => {
    const id = useId();

    const {
        onBlur,
        onChange,
        onFocus,
        markers,
        placeholder,
        presence,
        readOnly,
        type,
        value
    } = props;

    const {
        description,
        title,
    } = type;

    const handleChange = React.useCallback((event) => {
        const value = event.currentTarget.value;

        onChange(
            PatchEvent.from(value ? set(value) : unset)
        );
    }, [onChange]);

    const max = type.validation[0]._rules.filter(rule => rule.flag == 'max')[0].constraint;

    return <FormField
        description={description}
        inputId={id}
        title={title}
        __unstable_markers={markers}
        __unstable_presence={presence}
    >
        <TextInput
            id={id}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={onFocus}
            placeholder={placeholder}
            readOnly={readOnly}
            value={value}
            ref={ref}
        />

        <Text muted>
            {value ? value.length : '0'} / {max}
        </Text>
    </FormField>;
});
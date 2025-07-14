"use client";

import { forwardRef, useEffect } from "react";
import { useIMask } from "react-imask";
import { Input } from "./input";

type MaskedInputProps = {
  mask: string;
  value: string;
  onAccept: (val: string) => void;
  placeholder?: string;
  className?: string;
};

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, value, onAccept, placeholder, className, ...rest }, ref) => {
    const {
      ref: maskRef,
      value: maskedValue,
      setValue,
    } = useIMask({
      mask,
      lazy: false,
      overwrite: true,
    });

    useEffect(() => {
      setValue(value);
    }, [value, setValue]);

    return (
      <Input
        {...rest}
        ref={(node) => {
          if (node) {
            if (typeof ref === "function") ref(node);
            else if (ref)
              (ref as React.MutableRefObject<HTMLInputElement>).current = node;
            maskRef.current = node;
          }
        }}
        value={maskedValue}
        onChange={() => {}}
        onInput={(e) => onAccept((e.target as HTMLInputElement).value)}
        placeholder={placeholder}
        className={className}
      />
    );
  },
);

MaskedInput.displayName = "MaskedInput";

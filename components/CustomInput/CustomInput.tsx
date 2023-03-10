import React from 'react';
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@mui/styles';
import { Input, FormControl, InputLabel } from '@mui/material';

import styles from '@styles/jss/nextjs-material-kit/components/customInputStyle';

const useStyles = makeStyles(styles as any);

export default function CustomInput(props: CustomInputProps) {
  const classes = useStyles();
  const { formControlProps, labelText, id, labelProps, inputProps, error, white, inputRootCustomClasses, success } =
    props;

  const labelClasses = classNames({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [`${inputRootCustomClasses}`]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  let formControlClasses;
  if (formControlProps !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    formControlClasses = classNames(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel className={`${classes.labelRoot} ${labelClasses}`} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
}

export interface CustomInputProps {
  labelText?: string;
  labelProps?: any;
  id?: string;
  inputProps?: any;
  formControlProps?: any;
  inputRootCustomClasses?: string;
  error?: boolean;
  success?: boolean;
  white?: boolean;
}

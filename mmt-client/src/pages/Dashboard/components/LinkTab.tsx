import React from 'react';
import { Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface LinkTabProps {
  label: string;
  value: string;
}

export function LinkTab({ value, ...props }: LinkTabProps) {
  return <Tab to={value} component={Link} {...props} />;
}

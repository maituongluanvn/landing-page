// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import react from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// constant
const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 },
};

export default function MainCard(props: any) {
  const {
    border = true,
    boxShadow,
    children,
    content = true,
    contentClass = '',
    contentSX = {},
    darkTitle,
    secondary,
    shadow,
    sx = {},
    title,
    ...others
  } = props;
  const ref = react.useRef();
  const theme: any = useTheme();

  return (
    <Card
      ref={ref}
      {...others}
      sx={{
        border: border ? '1px solid' : 'none',
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        borderColor: theme.palette.primary[200] + 75,
        ':hover': {
          boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit',
        },
        ...sx,
      }}
    >
      {/* card header and action */}
      {!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}
      {darkTitle && title && (
        <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
      )}

      {/* content & header divider */}
      {title && <Divider />}

      {/* card content */}
      {content && (
        <CardContent sx={contentSX} className={contentClass}>
          {children}
        </CardContent>
      )}
      {!content && children}
    </Card>
  );
}

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  shadow: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
};

// export default MainCard;

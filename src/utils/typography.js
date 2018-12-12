import Typography from 'typography';
import TypographyTheme from 'typography-theme-lincoln';

TypographyTheme.overrideThemeStyles = () => {
    return {
        a: {
            color: '#E65632',
            textShadow: 'none',
            backgroundImage: 'none',
        },
        'a.symbol:before': {
            content: 'attr(title)',
        },
        span: {
            color: '#94C5CC',
        },
        'ul li': {
            width: 'auto',
            margin: '0 .2rem',
        },
        'ul li a': {
            fontSize: '3.5em',
            textDecoration: 'none',
        },
        'ul li a span': {
            color: '#f6f7eb',
        },
    };
};

const typography = new Typography(TypographyTheme);

export default typography;

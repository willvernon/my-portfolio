import React from 'react';
import PropTypes from 'prop-types';
interface IProps {
    onChange: () => void;
    checked: boolean;
    size?: number;
    startInactive?: boolean;
    animationInactive?: boolean;
    shadows?: boolean;
    className?: string | undefined;
    [props: string]: any;
}
declare const _default: React.MemoExoticComponent<{
    ({ onChange, checked, size, startInactive, animationInactive, shadows, className, ...labelProps }: IProps): JSX.Element;
    propTypes: {
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        checked: PropTypes.Validator<boolean>;
        size: PropTypes.Requireable<number>;
        startInactive: PropTypes.Requireable<boolean>;
        animationInactive: PropTypes.Requireable<boolean>;
        shadows: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        onChange: () => null;
        checked: boolean;
        size: number;
        startInactive: boolean;
        animationInactive: boolean;
        shadows: boolean;
        className: undefined;
    };
}>;
export default _default;
//# sourceMappingURL=index.d.ts.map
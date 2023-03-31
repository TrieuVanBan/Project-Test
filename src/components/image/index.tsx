import Spinner from '../../components/spinner';
import React, { ImgHTMLAttributes, useCallback, useState } from 'react';
import LazyLoad from 'react-lazy-load';

export function MyImage(props: ImgHTMLAttributes<any>) {

    return <img
        {...props}
        alt='' />;
}


function LazyImage({ src, className, width }:
    {
        src?: string,
        className?: string,
        width?: string,
        onPress?: () => void,
    }
) {
    const [loaded, setLoaded] = useState(false);
    const handleVisible = useCallback(() => setLoaded(true), []);

    return <>
        <LazyLoad onContentVisible={handleVisible}>
            <MyImage src={src} width={width}
                className={className}
            />
        </LazyLoad>
        {!loaded && <Spinner />}
    </>;
}

export default LazyImage;

function Background2x1(theme, isMirrored = false) {
    return (
        '"data:image/svg+xml,' +
        encodeURIComponent(`<svg
            width="200mm"
            height="100mm"
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <g ${isMirrored ? 'transform="matrix(-1 0 0 1 200 0)"' : ""} stroke-width="1.1579">
                <rect
                    transform="scale(-1,1)"
                    x="-200"
                    y=".0081022"
                    width="200"
                    height="99.992"
                    fill="${theme.background2}"
                />
                <path d="M 1e-5,58.096 0,0 H 67.482 L 0,100 Z" fill="${theme.headingBackground}" />
                <path
                    d="m200 0.0081065-98.738-1.622e-5 98.738 79.324v-79.324z"
                    fill="${theme.background3}"
                />
            </g>
        </svg>`) +
        '"'
    );
}

function Background6x1(theme, isMirrored = false) {
    return (
        '"data:image/svg+xml,' +
        encodeURIComponent(`<svg
            width="600mm"
            height="100mm"
            viewBox="0 0 600 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
                <rect transform="scale(-1,1)" x="-600" y="-.0014095" width="600" height="99.999" fill="${theme.background4}" stroke-width="1.2469"/>
                <g ${isMirrored ? 'transform="matrix(-1 0 0 1 600 0)"' : ""} stroke-width="3.5275">
                     <path d="m244.26-0.0014126h-244.27v99.999z" fill="${theme.headingBackground}"/>
                     <path d="m123.91 99.992h476.1v-70.592z" fill="${theme.background2}"/>
                     <path d="m355.74-0.0014126h244.27v99.999z" fill="${theme.background3}"/>
                     <path d="m244.26 99.992h-244.27v-44.997z" fill="${theme.background5}"/>
                </g>
        </svg>`) +
        '"'
    );
}

export { Background2x1, Background6x1 };

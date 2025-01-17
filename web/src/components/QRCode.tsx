import React from 'react';
import QRCode from 'qrcode.react';

export default ({ text, size }: { text: string; size?: number; }) => (
    <>
        <div className='qr-code'>
            {text && (
                <QRCode
                    value={text}
                    size={size || 290}
                    level='H'
                />
            )}
        </div>
        <div>
            <a href={text}>Klick</a>
        </div>
        <div>
            <span style={{lineBreak: "anywhere"}}>{text}</span>
        </div>
    </>
);

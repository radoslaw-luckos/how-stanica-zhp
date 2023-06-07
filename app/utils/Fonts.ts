
import localFont from 'next/font/local';

export const MuseoSans = localFont({
    src: [
        { path: '../assets/fonts/museo-sans.otf', style: 'normal' },
        { path: '../assets/fonts/museo-sans-italic.otf', style: 'italic' },
    ],
});
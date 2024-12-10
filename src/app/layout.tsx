import { Rajdhani } from 'next/font/google';
import Providers from './providers';
const raj = Rajdhani({
  display: 'swap',
  style: 'normal',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raj.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

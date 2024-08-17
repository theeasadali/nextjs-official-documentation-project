import { NextFont } from 'next/dist/compiled/@next/font';
import {Inter, Lusitana} from 'next/font/google';

export const inter = Inter({ subsets: ['latin']});
export const lusitana: NextFont = Lusitana({subsets: ['latin'], weight: ["400", "700"]});
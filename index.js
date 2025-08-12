import '../styles/globals.css';
import dynamic from 'next/dynamic';
const ResumePortfolio = dynamic(() => import('../components/ResumePortfolio'), { ssr: false });
export default function Home() { return <ResumePortfolio />; }

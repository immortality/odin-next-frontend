import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/code/repos">Code</Link></li>
        <li><Link href="/">Contact</Link></li>
      </ul>
    </div>
  )
};
export default HomePage
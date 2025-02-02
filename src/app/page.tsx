import Image from 'next/image';

import styles from './page.module.css';

const links = [
  { href: 'https://ricale.kr/blog/', src: '/gatsby.svg', alt: 'gatsby' },
  { href: 'https://github.com/ricale/', src: '/github.svg', alt: 'github' },
  { href: 'mailto:kim.kangseong@gmail.com', src: '/mail.svg', alt: 'mail' },
  { href: 'https://www.linkedin.com/in/ricale/', src: '/linkedin.svg', alt: 'linkedin' },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ricale</h1>
      <div className={styles.links}>
        {links.map((item, idx) => (
          <a
            key={idx}
            className={styles.link}
            href={item.href}
            target='_blank'
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={32}
              height={32}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;

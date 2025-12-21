import GatsbyIcon from '~/components/icons/GatsbyIcon';
import GithubIcon from '~/components/icons/GithubIcon';
import LinkedinIcon from '~/components/icons/LinkedinIcon';
import MailIcon from '~/components/icons/MailIcon';

import styles from './page.module.css';

const links = [
  { href: 'https://ricale.kr/blog/', Comp: GatsbyIcon, title: 'Gatsby blog' },
  { href: 'https://github.com/ricale/', Comp: GithubIcon, title: 'GitHub' },
  { href: 'mailto:kim.kangseong@gmail.com', Comp: MailIcon, title: 'Mailto' },
  { href: 'https://www.linkedin.com/in/ricale/', Comp: LinkedinIcon, title: 'LinkedIn' },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ricale</h1>
      <div className={styles.links}>
        {links.map(({ Comp, href, title }, idx) => (
          <a
            key={idx}
            className={styles.link}
            href={href}
            target='_blank'
            title={title}
          >
            <Comp />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;

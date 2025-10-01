// components/FooterNav.js
import styles from './footer.module.css'
export default function QuickLinks() {
  const links = [
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Terms & Conditions', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'FAQ', url: '#' },
  ];

  return (

    <>
        <div className={styles.quickLinks}>
            <h3 className="text-2xl font-bold  border-b-2 border-white">
                Quick Links
            </h3>


            <nav className='pt-4!' >
                {links.map((link, idx) => (
                    <a key={idx} href={link.url} >
                        {link.name}
                    </a>
                ))}
            </nav>
        </div>
     </>
  );
}

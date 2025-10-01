import styles from './footer.module.css'
import Image from 'next/image';
import QuickLinks from './nav-quickLink'
import ShopNow from './nav-shop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
   return(
     <>
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.footerWrapper}>
               <div className={styles.footerTop}>
                    <div className={styles.footerLogo}>
                         <div className={styles.logo}>
                            <a href="/">
                            <Image
                            src="/images/logo.png"
                            alt="FreshNTrend Logo"
                            width={250}
                            height={100}
                            priority
                            />
                            </a>
                        </div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum libero voluptate delectus voluptatibus omnis, excepturi totam harum nihil atque dignissimos voluptatem, veritatis mollitia autem sed sapiente rem, amet qui aliquid.
                        </p>
                    </div>

                   <QuickLinks/>

                   <ShopNow/>

                    

                    <div className={styles.footerContact}>
                        <h3 className="text-2xl font-bold border-b-2 border-white">
                            Reach Us
                        </h3>
                        <div className={styles.contactInfo}>
                             <div className={styles.location}>
                                <p className='pt-4!' > <span className='text-lg font-bold pr-2!'>Location:</span>123 Main Street </p>
                                <p>Dhaka, Bangladesh</p>
                            </div> 
                            <p> <span className='text-lg font-bold pr-2!'>Email:</span><a href="#" className='underline'>info@example.com</a></p>
                            <p> <span className='text-lg font-bold pr-2!'>Phone:</span><a href="#" className='underline'>+880 123 456 789</a></p>
                        </div>
                           
                    </div>
               </div>
               
            </div>
        </div>
         <div className={styles.footerBottom}>
           <div className="container">
                 <div className={styles.footerBottomWrapper}>

                    <div className={styles.copyright}>
                        <p>&copy; 2025 <a style={{'color':'pink'}} href="/">FershNTrend</a>. All Rights Reserved.</p>
                    </div>

                    <div className={styles.socialLiks}>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} className={styles.socialLink} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.socialLink} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className={styles.socialLink}/></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} className={styles.socialLink}/></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className={styles.socialLink}/></a>
                    </div>

                 </div>
           
           </div>
        </div>
    </footer>
    </>
   )
}
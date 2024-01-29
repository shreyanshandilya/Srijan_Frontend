import { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";

function ReturnsAndRefundsPolicy() {
    useEffect(() => {
        scroll.scrollToTop({ duration: 1000 });
    }, []);
    return (
        <>
            <Navbar />
            {/* <div className="bg-[url('https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967623/fotofreaks_iitism_1675510867_3030727283148499964_5457821429_e2sk8e.jpg')] bg-cover bg-no-repeat bg-[#0d0c06] jusitfy-center items-center mt-5 h-full w-full backdrop-brightness-50"> */}
            <div className="bg-[#0d0c06] jusitfy-center items-center mt-5 h-full w-full backdrop-brightness-50">
                <div className="pt-8 pb-4 px-2 sm:px-4 max-w-screen-xl flex flex-col sm:flex-row items-center lg:py-16 mx-4 sm:mx-10 text-white">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        layout
                        transition={{ duration: 1 }}
                    >
                        <h1 className="mb-4 text-4xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl titleHeading">
                            Returns & Refunds Policy
                        </h1>
                    </motion.div>
                </div>
                <div className="text-white px-14 pb-14 text-sm">
                    <p>Last updated: January 14, 2024</p>
                    <p>Thank you for shopping at Srijan IIT ISM.</p>
                    <p>The following terms are applicable for any products that You purchased with Us.</p>
                    <h2 className="text-2xl text-left mt-4 font-semibold underline">Interpretation and Definitions</h2>
                    <p className="text-lg text-left mt-2">Interpretation</p>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <p className="text-lg text-left mt-2">Definitions</p>
                    <p>For the purposes of this Return and Refund Policy:</p>
                    <ul className="list-decimal mx-14">
                        <li>
                            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to IIT ISM, IIT ISM , DHANBAD , 826004 .</p>
                        </li>
                        <li>
                            <p><strong>Goods</strong> refer to the items offered for sale on the Service.</p>
                        </li>
                        <li>
                            <p><strong>Orders</strong> mean a request by You to purchase Goods from Us.</p>
                        </li>
                        <li>
                            <p><strong>Service</strong> refers to the Website.</p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refers to Srijan IIT ISM, accessible from <a href="https://www.srijan-iitism.com/" rel="external nofollow noopener noreferrer" target="_blank">https://www.srijan-iitism.com/</a></p>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        </li>
                    </ul>
                    <h2 className="text-2xl text-left mt-4 font-semibold underline">Your Order Cancellation Rights</h2>
                    <p>You are entitled to cancel Your Order within 45 days without giving any reason for doing so.</p>
                    <p>The deadline for cancelling an Order is 45 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
                    <p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
                    <ul className="list-decimal mx-14">
                        <li>By email: srijan@iitism.ac.in</li>
                    </ul>
                    <p>We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>
                    <h2 className="text-2xl text-left mt-4 font-semibold underline">Conditions for Returns</h2>
                    <p>In order for the Goods to be eligible for a return, please make sure that:</p>
                    <ul className="list-decimal mx-14">
                        <li>The Goods were purchased in the last 45 days</li>
                        <li>The Goods are in the original packaging</li>
                    </ul>
                    <p>The following Goods cannot be returned:</p>
                    <ul className="list-decimal mx-14">
                        <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                        <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                        <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                        <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                    </ul>
                    <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
                    <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
                    <h2 className="text-2xl text-left mt-4 font-semibold underline">Returning Goods</h2>
                    <p>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</p>
                    <p>IIT ISM DHANBAD , DHANBAD , 826004</p>
                    <p>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>
                    <h2 className="text-2xl text-left mt-4 font-semibold underline">Gifts</h2>
                    <p>If the Goods were marked as a gift when purchased and then shipped directly to you, You&apos;ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</p>
                    <p className="text-lg text-left mt-2">Contact Us</p>
                    <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                    <ul>
                        <li>By email: srijan@iitism.ac.in</li>
                    </ul>
                </div>
                <Footer />
            </div >
        </>
    );
}

export default ReturnsAndRefundsPolicy;

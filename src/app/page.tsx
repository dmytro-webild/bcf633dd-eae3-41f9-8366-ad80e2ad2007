"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Sparkles, Heart, Award, CheckCircle, Smile, Shield, Zap, Trophy, BookOpen, Phone, HelpCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmallSizeLargeTitles"
      background="noise"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Arunodaya Dental Clinic"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Specializations", id: "specializations" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "footer" }
          ]}
          button={{ text: "Book Appointment", href: "#book-appointment" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Your Smile, Our Expertise"
          description="Experience world-class dental care with Dr. Kalpana Sharma Rai, an Endodontist and Cosmetic Dentist with 18 years of experience specializing in painless root canal treatment and aesthetic dentistry."
          tag="Premium Dental Care"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "gradient-bars" }}
          buttons={[
            { text: "Book Appointment", href: "#book-appointment" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/close-up-dentist-instruments_23-2151042869.jpg"
          imageAlt="Modern Arunodaya Dental Clinic Interior"
          ariaLabel="Hero section for Arunodaya Dental Clinic"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Dr. Kalpana Sharma Rai"
          description="Dr. Kalpana Sharma Rai is an accomplished Endodontist, Cosmetic/Aesthetic Dentist, and Dental Surgeon with 18 years of overall experience, of which 13 years are as a specialist. She has been practicing in Bhopal, Indore, and Jabalpur, providing exceptional dental care with a focus on patient comfort and aesthetic excellence.Presently working as Associate Professor at Peoples dental Academy, Peoples University Bhopal"
          tag="Meet Your Doctor"
          tagIcon={Heart}
          tagAnimation="slide-up"
          bulletPoints={[
            { title: "Specialized Expertise", description: "13+ years as a specialist in endodontics and cosmetic dentistry", icon: Award },
            { title: "Painless Treatment", description: "Specializes in painless root canal treatment for patient comfort", icon: CheckCircle },
            { title: "Aesthetic Excellence", description: "Expert in cosmetic and aesthetic dental procedures for beautiful smiles", icon: Smile },
            { title: "Medical Verification", description: "Medical registration verified and recognized by dental authorities", icon: Shield }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B9hHkoTLDJfAqAALjpHHTAkp7o/uploaded-1773993897416-0ozn2ge0.jpg"
          imageAlt="Dr. Kalpana Sharma Rai - Endodontist and Cosmetic Dentist"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="About the dentist section"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentySeven
          title="Comprehensive Dental Services"
          description="We offer a wide range of dental services to meet all your oral health and aesthetic needs, from routine care to advanced specialized treatments."
          tag="Our Services"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: "crowns-bridges",              title: "Crowns and Bridges Fixing",              descriptions: [
                "Restore damaged teeth with custom crowns",                "Replace missing teeth with durable bridges",                "Professional installation and fitting"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/dentist-examining-female-patient_107420-65398.jpg",              imageAlt: "Dental crowns and bridges procedure"
            },
            {
              id: "impaction-extraction",              title: "Impaction / Impacted Tooth Extraction",              descriptions: [
                "Safe extraction of impacted wisdom teeth",                "Professional surgical removal",                "Post-operative care and support"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/female-patient-giving-thumbs-up-dental-procedure_651396-1872.jpg",              imageAlt: "Impacted tooth extraction procedure"
            },
            {
              id: "cosmetic-aesthetic",              title: "Cosmetic/Aesthetic Dentistry",              descriptions: [
                "Smile makeover and design",                "Teeth whitening and bleaching",                "Aesthetic tooth reshaping"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/woman-patient-visiting-dentist_1303-24407.jpg",              imageAlt: "Cosmetic dentistry smile design"
            },
            {
              id: "conservative-dentistry",              title: "Conservative Dentistry",              descriptions: [
                "Cavity filling and restoration",                "Tooth preservation techniques",                "Minimal invasive treatments"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/girl-dentists-office-dentist-examining-child-patients-teeth-dentistry-concept_169016-66909.jpg",              imageAlt: "Conservative dentistry treatment"
            },
            {
              id: "endo-surgery",              title: "Endo Surgery Or Apicoectomy",              descriptions: [
                "Advanced endodontic surgical procedures",                "Precision surgical techniques",                "Expert root canal surgery"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/dentist-process-dental-services-dental-office-dental-treatment_1321-2957.jpg",              imageAlt: "Endodontic surgery procedure"
            },
            {
              id: "smile-design",              title: "Smile Design",              descriptions: [
                "Digital smile design planning",                "Customized aesthetic solutions",                "Computer-aided treatment design"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-smiling-redhead-girl-sitting-dentist-chair-with-mirror-hands-looking-camera_613910-17783.jpg",              imageAlt: "Smile design consultation"
            },
            {
              id: "cosmetic-filling",              title: "Cosmetic Filling",              descriptions: [
                "Aesthetic white composite fillings",                "Natural-looking tooth restoration",                "Color-matched materials"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/young-female-patient-bed-physiotherapy-center_1139-1121.jpg",              imageAlt: "Cosmetic filling restoration"
            }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Services section"
        />
      </div>

      <div id="specializations" data-section="specializations">
        <FeatureCardTwentySeven
          title="Areas of Specialization"
          description="Dr. Kalpana Sharma Rai specializes in advanced dental procedures with expertise in the following areas:"
          tag="Expertise"
          tagIcon={Trophy}
          tagAnimation="slide-up"
          features={[
            {
              id: "endodontist",              title: "Endodontist",              descriptions: [
                "Root canal treatment specialist",                "Painless endodontic procedures",                "Advanced root canal therapy"
              ]
            },
            {
              id: "cosmetic-dentist",              title: "Cosmetic/Aesthetic Dentist",              descriptions: [
                "Smile makeover expert",                "Aesthetic tooth restoration",                "Beautiful smile creation"
              ]
            },
            {
              id: "dental-surgeon",              title: "Dental Surgeon",              descriptions: [
                "Oral surgical procedures",                "Complex tooth extraction",                "Surgical intervention specialist"
              ]
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Specializations section"
        />
      </div>

      <div id="experience" data-section="experience">
        <TeamCardEleven
          title="Professional Background"
          description="Dr. Kalpana Sharma Rai brings extensive experience and credentials to Arunodaya Dental Clinic."
          tag="Credentials"
          tagIcon={BookOpen}
          tagAnimation="slide-up"
          groups={[
            {
              id: "education",              groupTitle: "Education",              members: [
                {
                  id: "bds",                  title: "BDS",                  subtitle: "Bachelor of Dental Surgery",                  detail: "P.M.N.M. Dental College Hospital, Bagalkot (2007)"
                },
                {
                  id: "mds",                  title: "MDS",                  subtitle: "Master of Dental Surgery",                  detail: "Conservative Dentistry & Endodontics - Modern Dental College & Research Centre, Indore (2011)"
                }
              ]
            },
            {
              id: "experience",              groupTitle: "Professional Experience",              members: [
                {
                  id: "dental-surgeon-bhopal",                  title: "Dental Surgeon",                  subtitle: "Agrawal Dental Clinic, Bhopal",                  detail: "2007 - 2008"
                },
                {
                  id: "dental-surgeon-indore",                  title: "Dental Surgeon",                  subtitle: "Modern Dental College, Indore",                  detail: "2008 - 2011"
                },
                {
                  id: "senior-lecturer",                  title: "Senior Lecturer",                  subtitle: "College Of Dental Sciences, Rau, Indore",                  detail: "2011 - 2012"
                },
                {
                  id: "reader",                  title: "Reader",                  subtitle: "Hitkarini Dental College, Dumna Road, Jabalpur",                  detail: "2012 - 2015"
                },
                {
                  id: "administrator",                  title: "Practice Administrator & Endodontist",                  subtitle: "Arunodaya Dental Clinic, Jabalpur",                  detail: "2012 - 2015 onwards"
                }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Professional background section"
        />
      </div>

      <div id="awards" data-section="awards">
        <MetricCardSeven
          title="Awards & Recognitions"
          description="Dr. Kalpana Sharma Rai has been recognized and honored for her contributions to the dental field."
          tag="Recognition"
          tagIcon={Star}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "ida-satna",              value: "2014",              title: "Guest Speaker",              items: ["IDA Satna Branch", "Indian Dental Association", "Professional recognition"]
            },
            {
              id: "ida-rewa",              value: "2015",              title: "Guest Speaker",              items: ["IDA Rewa Branch", "Indian Dental Association", "Dental expertise sharing"]
            },
            {
              id: "registration",              value: "A-1162",              title: "Medical Registration",              items: ["Madhya Pradesh State Dental Council", "Registration Year 2007", "Verified and recognized"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Awards and recognitions section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about Dr. Kalpana Sharma Rai and Arunodaya Dental Clinic services."
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "faq-1",              title: "Where does Dr. Kalpana Sharma Rai practice?",              content: "Dr. Kalpana Sharma Rai practices at Arunodaya Dental Clinic located at #1140 Napier Town, Opposite Commercial Auto, Besides Shastri Bridge, Jabalpur. The clinic is open Monday to Saturday from 5:30 PM to 8:30 PM."
            },
            {
              id: "faq-2",              title: "Why do patients visit Dr. Kalpana Sharma Rai?",              content: "Patients frequently visit Dr. Kalpana Sharma Rai for Crowns and Bridges Fixing, Impaction/Impacted Tooth Extraction, and Cosmetic/Aesthetic Dentistry. Her expertise in painless root canal treatment and smile design makes her a preferred choice for comprehensive dental care."
            },
            {
              id: "faq-3",              title: "What is Dr. Kalpana Sharma Rai's education qualification?",              content: "Dr. Kalpana Sharma Rai holds the following qualifications: BDS (Bachelor of Dental Surgery) from P.M.N.M. Dental College Hospital, Bagalkot (2007) and MDS (Master of Dental Surgery) in Conservative Dentistry & Endodontics from Modern Dental College & Research Centre, Indore (2011)."
            },
            {
              id: "faq-4",              title: "What does Dr. Kalpana Sharma Rai specialize in?",              content: "Dr. Kalpana Sharma Rai specializes as an Endodontist, Cosmetic/Aesthetic Dentist, and Dental Surgeon. She has specialized expertise in painless root canal treatment, cosmetic dentistry, smile design, and complex dental procedures."
            },
            {
              id: "faq-5",              title: "How many years of experience does Dr. Kalpana Sharma Rai have?",              content: "Dr. Kalpana Sharma Rai has an overall experience of 18 years in dentistry, with 13 years as a specialist. She has practiced in Bhopal, Indore, and Jabalpur, bringing extensive expertise to her current practice at Arunodaya Dental Clinic."
            },
            {
              id: "faq-6",              title: "What are the clinic timings?",              content: "Arunodaya Dental Clinic is open Monday to Saturday from 5:30 PM to 8:30 PM. For appointments or inquiries, you can contact the clinic during these hours."
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="FAQ section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Book Your Appointment"
          description="Schedule your dental appointment with Dr. Kalpana Sharma Rai today. Experience expert dental care in a comfortable and professional environment."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Schedule Now"
          termsText="By booking an appointment, you agree to our terms and conditions."
          ariaLabel="Contact and appointment booking section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Arunodaya Dental Clinic"
          copyrightText="© 2024 Arunodaya Dental Clinic. All rights reserved."
          columns={[
            {
              title: "Contact Info",              items: [
                { label: "#1140 Napier Town, Jabalpur", href: "#" },
                { label: "Mon - Sat: 5:30 PM - 8:30 PM", href: "#" },
                { label: "Appointment: +91-[Phone Number]", href: "#" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "Root Canal Treatment", href: "#services" },
                { label: "Cosmetic Dentistry", href: "#services" },
                { label: "Smile Design", href: "#services" },
                { label: "Tooth Extraction", href: "#services" }
              ]
            },
            {
              title: "About",              items: [
                { label: "About Dr. Kalpana Sharma Rai", href: "#about" },
                { label: "Specializations", href: "#specializations" },
                { label: "Experience", href: "#experience" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Medical Disclaimer", href: "#" }
              ]
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}

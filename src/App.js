import React, { useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';
import { Link as ScrollLink } from 'react-scroll';
import { FaSchool, FaRobot, FaUsers, FaLightbulb, FaLaptopCode, FaRegSmile } from 'react-icons/fa';
import ThreeDAnimation from './ThreeDAnimation';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '90%',
    overflowY: 'auto',
  },
};

Modal.setAppElement('#root');

const App = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const content = {
    introduction: `
      Writing is a powerful tool for self-reflection and growth. This personal leadership charter and development plan will explore key moments in my life that have shaped my values, principles, and identity as a leader. This journey will traverse through my personal and family history, adversities overcome, peak experiences, influential people, and recent leadership experiences. By reflecting on these aspects, I aim to gain deeper insights into my personal and professional development and set a clear direction for my future.
    `,
    personalFamilyHistory: `
      I was born and raised in Connecticut, a place known for its rich history and diverse communities. My family’s journey, however, extends far beyond the borders of Connecticut. My parents were immigrants who came to the United States seeking better opportunities and a brighter future for their children. Their stories of resilience and determination have profoundly impacted my values and principles. One of the most notable parts of my family history is the perseverance shown by my parents. They arrived in the United States with very little but managed to build a stable and prosperous life through sheer determination. This legacy of resilience is a core part of my identity and has influenced my approach to challenges in life. Their experiences taught me the importance of hard work, education, and community support, which are values I carry with me today. Throughout my life, I have faced various adversities that have tested my character and resilience. One significant challenge was navigating the academic pressures during my high school years. The competitive environment and high expectations often led to stress and self-doubt. However, these challenges taught me valuable lessons about perseverance and self-belief.
    `,
    highSchoolExperiences: `
      One of the most defining aspects of my high school experience was my involvement in robotics. Joining the robotics club opened up a world of innovation and creativity for me. I participated in several robotics competitions, often competing against college students. These competitions were intense and challenging, pushing me to apply theoretical knowledge in practical scenarios and think critically under pressure. One particular competition stands out: our team, composed solely of high school students, competed in a national robotics championship against teams from prestigious universities. Despite the daunting challenge, we managed to secure a commendable position, thanks to our teamwork, innovative thinking, and relentless determination. This experience taught me the value of collaboration, strategic planning, and the importance of never underestimating one's potential, regardless of age or experience.
    `,
    peerPressureAsianCulture: `
      Growing up in a South Asian household, academic excellence and hard work were highly emphasized. While this cultural backdrop instilled in me a strong work ethic, it also came with significant peer pressure. There was a constant comparison with peers, which sometimes led to stress and anxiety. However, over time, I learned to channel this pressure positively. Instead of succumbing to it, I used it as a motivation to push myself further and achieve my goals. Asian culture also emphasizes respect for elders and the importance of community. These values have shaped my interactions and relationships, teaching me the importance of humility, respect, and the power of a supportive community. By embracing these cultural values, I have been able to maintain a positive outlook even in challenging times, always looking for ways to uplift those around me. Another major adversity was adapting to the cultural dynamics of my environment. Being part of a minority community in Connecticut, I often faced challenges related to identity and belonging. Overcoming these obstacles required me to embrace my cultural heritage while also finding common ground with others. These experiences have made me more empathetic and culturally aware, qualities that are very crucial for me in leadership.
    `,
    peakExperiencesInfluentialPeople: `
      Among the greatest experiences of my life, a few stand out as defining moments. One such moment was co-founding Fennec AI, a tech company focused on nightlife optimization. This venture allowed me to combine my passion for technology with my desire to create innovative solutions that enhance people's lives. The process of building a company from scratch, developing a product, and leading a team has been incredibly rewarding. This is definitely more on the recent side but still taught me a lot and I wanted to include it in this writing. Another great experience was teaching robotics to several school children across India during my summer vacation during high school. This experience was profoundly impactful as it allowed me to share my passion for technology with young minds and witness the excitement and curiosity it sparked in them. Leading these workshops was both challenging and rewarding. I had to adapt my teaching methods to different age groups and levels of understanding, ensuring that the concepts were accessible and engaging. The joy and enthusiasm the children displayed as they built and programmed their robots reinforced my commitment to education and community engagement. This experience taught me the importance of making education accessible and inspiring, regardless of geographical and socio-economic barriers. My parents have also been a constant source of inspiration. Their journey from India to the United States, their sacrifices, and their unwavering support have shaped my values and aspirations. They taught me the importance of integrity, hard work, and the significance of giving back to the community. Another influential figure in more recent times is my co-founder at Fennec AI, Shiv. His leadership style, characterized by empathy, vision, and resilience, has significantly impacted my approach to leadership. One particular scenario that stands out is when we faced a major setback during the validation phase of our app. Shiv’s calm and strategic response to the crisis demonstrated the importance of maintaining composure and focusing on solutions. This experience taught me valuable lessons about crisis management and the power of a positive attitude.
    `,
    characteristicsExceptionalLeader: `
      An exceptional leader I have observed closely is Steve Jobs, the co-founder of Apple Inc. His leadership style is a remarkable blend of visionary thinking, relentless pursuit of perfection, and the ability to inspire and motivate others. Steve Jobs was known for his innovative mindset and his ability to see possibilities where others saw obstacles. His vision for technology and design revolutionized multiple industries, from personal computing to mobile phones and digital entertainment. Jobs had an uncanny ability to anticipate consumer needs and create products that were not only functional but also aesthetically pleasing. One of Jobs' most admirable qualities was his insistence on excellence. He believed in pushing the boundaries of what was possible and never settling for mediocrity. This relentless pursuit of perfection often led to groundbreaking innovations. For example, the development of the iPhone, which redefined the smartphone industry, was a result of Jobs' commitment to creating a product that combined functionality, design, and user experience seamlessly. Another key quality of Steve Jobs was his ability to inspire and lead his team. Despite his demanding nature, Jobs had a unique talent for motivating his employees to achieve their best. He created a culture of innovation at Apple, where creativity and excellence were highly valued. His leadership style encouraged risk-taking and fostered a sense of purpose among his team members. One particular instance that demonstrates Jobs' exceptional leadership was the turnaround of Apple in the late 1990s. When Jobs returned to Apple, the company was on the brink of bankruptcy. Through his visionary leadership, he revitalized the company by streamlining the product line, focusing on design and innovation, and launching iconic products like the iMac and iPod. This remarkable turnaround is a testament to Jobs' strategic thinking, resilience, and ability to inspire a collective vision. Steve Jobs' leadership has influenced my own approach to leading teams and driving innovation. His emphasis on vision, excellence, and inspiration has taught me the importance of setting high standards, believing in my ideas, and motivating others to achieve a common goal.
    `,
    conclusion: `
      Reflecting on my journey, I realize how the experiences, challenges, and influential people in my life have shaped me into the leader I am today. Each key moment has taught me valuable lessons and has contributed to my personal and professional growth. As I look to the future, I am committed to continuing this journey of self-improvement, striving for excellence, and making a positive impact on the world around me. This leadership journey is ongoing, and I am excited for the experiences and lessons that lie ahead.
    `,
  };

  return (
    <animated.div style={fadeIn}>
      <header className="header">
        <div className="header-content">
          <h1>Vishal's Leadership Journey</h1>
          <p>Exploring the past, present, and future of leadership.</p>
          <ScrollLink to="intro" smooth={true} duration={1000} className="scroll-link">Learn More</ScrollLink>
        </div>
        <ThreeDAnimation />
      </header>

      <section className="intro" id="intro">
        <img src="/pfp.jpg" alt="Vishal Desh" className="profile-pic"/>
        <p>{content.introduction}</p>
        <ScrollLink to="timeline" smooth={true} duration={1000} className="scroll-link">View Timeline</ScrollLink>
      </section>

      <section className="timeline" id="timeline">
        <h2>Timeline of Key Moments</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6C63FF', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #6C63FF' }}
            date="Personal and Family History"
            iconStyle={{ background: '#6C63FF', color: '#fff' }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">Personal and Family History</h3>
            <img src="/fam.jpg" alt="Family" className="timeline-image"/>
            <p>{content.personalFamilyHistory.substring(0, 300)}...</p>
            <button onClick={() => openModal(content.personalFamilyHistory)}>Learn More</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#e0e0e0', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid  #e0e0e0' }}
            date="High School Experiences"
            iconStyle={{ background: '#e0e0e0', color: '#333' }}
            icon={<FaRobot />}
          >
            <h3 className="vertical-timeline-element-title">High School Experiences</h3>
            <img src="/robot.png" alt="robot" className="timeline-image"/>
            <p>{content.highSchoolExperiences.substring(0, 300)}...</p>
            <button onClick={() => openModal(content.highSchoolExperiences)}>Learn More</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6C63FF', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #6C63FF' }}
            date="Peer Pressure and Asian Culture"
            iconStyle={{ background: '#6C63FF', color: '#fff' }}
            icon={<FaUsers />}
          >
            <h3 className="vertical-timeline-element-title">Peer Pressure and South Asian Culture</h3>
            <p>{content.peerPressureAsianCulture.substring(0, 300)}...</p>
            <button onClick={() => openModal(content.peerPressureAsianCulture)}>Learn More</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#e0e0e0', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid  #e0e0e0' }}
            date="Peak Experiences and Influential People"
            iconStyle={{ background: '#e0e0e0', color: '#333' }}
            icon={<FaLightbulb />}
          >
            <h3 className="vertical-timeline-element-title">Peak Experiences and Influential People</h3>
            <img src="/fennec.jpg" alt="Fennec" className="timeline-image"/>
            <p>{content.peakExperiencesInfluentialPeople.substring(0, 300)}...</p>
            <button onClick={() => openModal(content.peakExperiencesInfluentialPeople)}>Learn More</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6C63FF', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #6C63FF' }}
            date="Characteristics of an Exceptional Leader"
            iconStyle={{ background: '#6C63FF', color: '#fff' }}
            icon={<FaLaptopCode />}
          >
            <h3 className="vertical-timeline-element-title">Characteristics of an Exceptional Leader</h3>
            <img src="/stevejobs.jpg" alt="Steve Jobs" className="timeline-image"/>
            <p>{content.characteristicsExceptionalLeader.substring(0, 300)}...</p>
            <button onClick={() => openModal(content.characteristicsExceptionalLeader)}>Learn More</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#e0e0e0', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid  #e0e0e0' }}
            date="Conclusion"
            iconStyle={{ background: '#e0e0e0', color: '#333' }}
            icon={<FaRegSmile />}
          >
            <h3 className="vertical-timeline-element-title">Conclusion</h3>
            <p>{content.conclusion.substring(0, 300)}...</p>
            <button onClick={() => openModal(content.conclusion)}>Learn More</button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      <footer>
        <p>&copy; 2024 Vishal Desh. All rights reserved.</p>
      </footer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="More Information"
      >
        <h2>More Information</h2>
        <button onClick={closeModal} className="modal-close-button">Close</button>
        <div>{modalContent}</div>
      </Modal>
    </animated.div>
  );
};

export default App;

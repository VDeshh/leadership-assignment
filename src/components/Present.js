import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { FaArrowLeft, FaSmile, FaLightbulb, FaHeart, FaCog, FaChartLine } from 'react-icons/fa';
import './Present.css';

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

const Present = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const content = {
    introduction: `Reflecting on critical incidents from the past helps us understand the patterns and lessons that shape our current values, principles, and motivations. This awareness forms the foundation of our behaviors, driving results in our personal and professional lives. This section explores my present values, principles, motivations, strengths, and how they guide my actions and leadership style.`,
    happiness: `The activities that bring me the greatest happiness and fulfillment involve creativity, problem-solving, and making a positive impact on others. One of the most fulfilling experiences was teaching robotics to school children in India during my summer vacation in high school. Seeing the excitement and curiosity in the children as they learned to build and program robots brought me immense joy and satisfaction. This experience reinforced my passion for education and my belief in the transformative power of technology.`,
    innovation: `Another source of happiness for me is working on innovative projects, such as co-founding Fennec AI. The process of building a company from scratch, developing a product, and leading a team has been incredibly rewarding. It allows me to combine my passion for technology with my desire to create solutions that enhance people's lives. The sense of accomplishment and the positive impact of my work drive my engagement and productivity.`,
    joyAndFlow: `I experience a peak state of joy and flow when I am fully absorbed in activities that challenge my creativity and intellect. Whether it's designing a new robot, developing a software solution, or brainstorming innovative ideas with my team, these moments make time seem to stop. One such instance was during a national robotics championship where my high school team competed against college students. Despite the daunting challenge, we secured a commendable position, thanks to our teamwork, innovative thinking, and relentless determination. This experience taught me the value of collaboration, strategic planning, and the importance of never underestimating one's potential, regardless of age or experience.`,
    leadership: `These experiences reveal that my leadership style is heavily influenced by creativity, empathy, and a passion for innovation. I strive to inspire and empower others, fostering a collaborative environment where ideas can flourish. My identity as a leader is shaped by my commitment to making a positive difference and my belief in the power of education and technology to transform lives.`,
    values: `The values that matter most to me are integrity, empathy, and continuous learning. I believe in the importance of staying true to one's principles, understanding and valuing others' perspectives, and constantly seeking knowledge and growth.`,
    valueStatement: `"I value integrity, empathy, and continuous learning above all else because they guide my actions and decisions, ensuring I make a positive impact on the world."`,
    livingValues: `I strive to live consistently with these values by integrating them into my daily life and decision-making processes. For example, at Fennec AI, I ensure that our product development aligns with ethical standards and prioritizes user well-being. However, there are times when external pressures and responsibilities can distract from what matters most. To align my life more closely with my core values, I aim to prioritize activities and commitments that reflect these principles and bring me closer to my goals.`,
    strengths: `To gain a comprehensive understanding of my strengths, I took the VIA Survey of Character Strengths. The results highlighted my top strengths: creativity, love of learning, leadership, kindness, and perseverance. These strengths reflect my passion for innovation, my dedication to growth, and my ability to lead and inspire others.`,
    usingStrengths: `Incorporating these strengths into my daily life involves finding new and creative ways to apply them. For instance, using my creativity and love of learning to develop innovative solutions at work, or leveraging my leadership and kindness to mentor and support my colleagues. By consciously integrating these strengths into my routine, I can enhance my happiness and productivity.`,
    bestSelf: `I conducted a 360-degree feedback exercise by asking 15 people, including friends, family members, co-workers, and mentors, to share stories of when they saw me at my best. The feedback revealed recurring themes of creativity, empathy, leadership, and perseverance. One recurring theme was my ability to stay calm and focused during crises, such as when our Fennec AI app faced a major setback during the validation phase. My co-founder, Shiv (My Roommate), and I managed to navigate the crisis effectively by maintaining composure and focusing on solutions.`,
    feedbackReflection: `This exercise highlighted that my greatest gifts lie in my ability to innovate, empathize, and lead with integrity. The positive feedback reinforced my belief in the importance of these qualities and motivated me to continue using them to make a meaningful impact. For example, the feedback from my co-founding friends at Fennec AI emphasized how my leadership and empathy created a supportive work environment, fostering creativity and collaboration.`,
    futureDirection: `Reflecting on this feedback, I am more committed than ever to pursuing a path that allows me to utilize my strengths and values. Whether through my work at Fennec AI, teaching, or community involvement, I aim to leverage my talents to inspire others and drive positive change. I plan to continue seeking opportunities to mentor young minds, develop innovative solutions, and create an inclusive and supportive environment for those around me.`,
    conclusion: `Exploring my present values, strengths, and motivations has provided valuable insights into my leadership style and identity. By staying true to my core principles and actively incorporating my strengths into my daily life, I can achieve greater fulfillment and make a meaningful contribution to the world. This journey of self-discovery and growth is ongoing, and I am excited to see where it leads.`,
  };

  const openModal = (id) => {
    setModalContent(content[id]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="present">
      <header className="header">
        <button className="back-button" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Home
        </button>
        <h1>Exploring the Present</h1>
      </header>
      <div className="mind-map-container">
        <div className="mind-map-node" onClick={() => openModal('introduction')}>
          <FaLightbulb size={24} />
          <span>Introduction</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('happiness')}>
          <FaSmile size={24} />
          <span>Finding Fulfillment</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('innovation')}>
          <FaLightbulb size={24} />
          <span>Innovation Projects</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('joyAndFlow')}>
          <FaSmile size={24} />
          <span>Peak State of Joy and Flow</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('leadership')}>
          <FaLightbulb size={24} />
          <span>Leadership Style</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('values')}>
          <FaHeart size={24} />
          <span>Core Values</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('valueStatement')}>
          <FaHeart size={24} />
          <span>Value Statement</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('livingValues')}>
          <FaHeart size={24} />
          <span>Living Values</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('strengths')}>
          <FaCog size={24} />
          <span>Identifying Strengths</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('usingStrengths')}>
          <FaCog size={24} />
          <span>Using Strengths</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('bestSelf')}>
          <FaLightbulb size={24} />
          <span>Best-Self Exercise</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('feedbackReflection')}>
          <FaLightbulb size={24} />
          <span>Feedback Reflection</span>
        </div>
        <div className="mind-map-node" onClick={() => openModal('futureDirection')}>
          <FaChartLine size={24} />
          <span>Future Direction</span>
        </div>

        <div className="mind-map-node" onClick={() => openModal('conclusion')}>
          <FaChartLine size={24} />
          <span>Conclusion</span>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="More Information"
      >
        <button onClick={closeModal} className="modal-close-button">Close</button>
        <div>{modalContent}</div>
      </Modal>
    </div>
  );
};

export default Present;

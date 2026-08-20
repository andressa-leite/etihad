const qaData = [
  {
    id: 1,
    question: "1. Tell me about yourself.",
    answer: "I am an enthusiastic and adaptable professional with a strong background in communication, education, and customer-facing roles. As an English teacher, I have spent years managing diverse groups, adapting to unique cultural backgrounds, and delivering exceptional service under dynamic conditions. I am naturally empathetic, highly organized, and passionate about creating memorable, safe experiences for people from all walks of life.",
    followUps: [
      "Can you give more detail on how your teaching skills transfer to an aircraft cabin?",
      "What key personality trait makes you best suited for world-class hospitality?"
    ]
  },
  {
    id: 2,
    question: "2. Why do you want to become a cabin crew member at Etihad?",
    answer: "Etihad represents the pinnacle of modern luxury aviation, innovation, and warm Arabian hospitality. I admire how Etihad bridges cultures through Abu Dhabi while prioritizing guest experience and safety. Joining Etihad allows me to align my passion for global service with an airline that sets international standards for excellence.",
    followUps: [
      "What specifically about Abu Dhabi as a hub appeals to your lifestyle and career goals?",
      "How do you embody Etihad’s core values of hospitality in your day-to-day life?"
    ]
  },
  {
    id: 3,
    question: "3. Why should we hire you?",
    answer: "You should hire me because I bring a unique combination of strong safety awareness, proven cross-cultural communication skills, and high emotional intelligence. Through my professional background, I’ve mastered the ability to stay calm under pressure, resolve issues before they escalate, and make every individual feel valued.",
    followUps: [
      "What did you learn from your previous roles that gives you an edge over other applicants?",
      "Can you give an example of how you go above and beyond for a customer?"
    ]
  },
  {
    id: 4,
    question: "4. Tell me about a time you dealt with a difficult customer.",
    answer: "In my teaching career, I had a student's parent who was extremely upset about a progress assessment. I actively listened without interrupting, validated their feelings, and calmly explained the evaluation framework while offering a personalized action plan. By remaining patient and professional, I turned a tense conflict into a collaborative partnership.",
    followUps: [
      "What did you learn from that experience when managing unexpected confrontation?",
      "How would you adapt that approach if a passenger became disruptive mid-flight?"
    ]
  },
  {
    id: 5,
    question: "5. Describe a situation where you worked as part of a team.",
    answer: "While organizing an end-of-year educational showcase, our team faced tight deadlines and unexpected staff shortages. I took the initiative to restructure individual responsibilities based on each member's strengths and maintained open channels of communication. Together, we executed a seamless event that received outstanding feedback.",
    followUps: [
      "Can you give more detail about how you resolved any conflicting opinions during that project?",
      "What did you learn about your own leadership style within a team setting?"
    ]
  },
  {
    id: 6,
    question: "6. How do you handle stress or pressure at work?",
    answer: "I handle stress by remaining structured, prioritizing safety and immediate tasks, and maintaining a positive mindset. During high-pressure situations, I take a momentary pause to assess the scenario objectively, break down required actions into logical steps, and communicate clearly with my colleagues.",
    followUps: [
      "Can you give more detail on a specific moment when pressure unexpectedly escalated?",
      "What self-care or mental strategies do you use to stay resilient during long shift hours?"
    ]
  },
  {
    id: 7,
    question: "7. What would you do if a passenger refused to follow safety instructions?",
    answer: "Safety is non-negotiable. I would approach the passenger with a calm, firm, and respectful tone, clearly explaining *why* the safety regulation is necessary for their protection and the flight's integrity. If resistance continued, I would de-escalate, enlist support from a senior crew member, and follow standard operating procedures for non-compliant guests.",
    followUps: [
      "What would you do if the situation escalated to physical or verbal aggression?",
      "What did you learn from safety training scenarios regarding assertive communication?"
    ]
  },
  {
    id: 8,
    question: "8. Tell me about a time you made a mistake. What did you learn?",
    answer: "Early in my career, I miscalculated the preparation time required for an advanced lesson plan, causing a slight delay in schedule delivery. I immediately owned the error, adjusted on the fly, and established a new preparation checklist system that I still use today. It taught me that accountability and proactive planning prevent systemic errors.",
    followUps: [
      "What did you learn about managing personal accountability in front of clients or guests?",
      "How do you ensure minor mistakes don't compromise safety or service quality?"
    ]
  },
  {
    id: 9,
    question: "9. What does excellent customer service mean to you?",
    answer: "To me, excellent customer service means anticipating needs before they are voiced, creating a sense of personalized care, and making every guest feel safe, respected, and special. It's about combining operational efficiency with genuine human warmth.",
    followUps: [
      "Can you give more detail about a time you anticipated a guest's unexpressed need?",
      "How do you maintain high service standards when you are physically exhausted?"
    ]
  },
  {
    id: 10,
    question: "10. Why are you leaving your current job as an English teacher?",
    answer: "Teaching has been an incredibly rewarding journey that developed my communication, empathy, and leadership skills. However, my long-standing ambition is to apply these human-centric skills on a global scale. Flying with Etihad allows me to combine my passion for international hospitality and cultural exchange in a dynamic career.",
    followUps: [
      "What did you learn from teaching that you will carry forward for the rest of your career?",
      "How will you adjust to the shift from a classroom schedule to unpredictable flight rosters?"
    ]
  },
  {
    id: 11,
    question: "11. You effectively handled a dissatisfied guest in a thoughtful and courteous manner. Please describe the situation, your actions, and the outcome.",
    answer: "When I worked as a Sales Assistant, a customer was frustrated because the specific red sneakers he wanted were out of stock. Instead of just turning him away, I listened to understand what he valued about that pair—mainly the comfort and design. Knowing the products we had available, I presented a similar alternative from another brand that matched his criteria and encouraged him to try them on. He was really happy with the suggestion, bought the pair, and thanked me for my assistance. This experience taught me that active listening and offering tailored solutions can turn customer disappointment into a positive experience.",
    followUps: [
    ]
  },
];

// Elementos DOM
const homeView = document.getElementById('home-view');
const detailView = document.getElementById('detail-view');
const questionsList = document.getElementById('questions-list');
const searchInput = document.getElementById('search-input');
const backBtn = document.getElementById('back-btn');

const detailTitle = document.getElementById('detail-title');
const detailAnswer = document.getElementById('detail-answer');
const detailFollowups = document.getElementById('detail-followups');

// Renderizar Lista
function renderQuestions(items) {
  questionsList.innerHTML = '';
  if (items.length === 0) {
    questionsList.innerHTML = '<li style="padding:10px;">Nenhuma pergunta encontrada.</li>';
    return;
  }
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'question-item';
    li.textContent = item.question;
    li.addEventListener('click', () => showDetail(item));
    questionsList.appendChild(li);
  });
}

// Mostrar Detalhes
function showDetail(item) {
  detailTitle.textContent = item.question;
  detailAnswer.textContent = item.answer;
  
  detailFollowups.innerHTML = '';
  item.followUps.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    detailFollowups.appendChild(li);
  });

  homeView.classList.add('hidden');
  detailView.classList.remove('hidden');
}

// Evento do Botão Voltar
backBtn.addEventListener('click', () => {
  detailView.classList.add('hidden');
  homeView.classList.remove('hidden');
});

// Busca em Tempo Real
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = qaData.filter(item => 
    item.question.toLowerCase().includes(query) || 
    item.answer.toLowerCase().includes(query)
  );
  renderQuestions(filtered);
});

// Inicialização
renderQuestions(qaData);
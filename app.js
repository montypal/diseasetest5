
/* ===== Disease Detectives Practice App ===== */

// --- Questions array (50 items) ---
const definitions_AJ = {
  'A': 'Non-living object that can transmit infection (fomite).',
  'B': 'Proportion of infected individuals who die from the disease (case fatality rate).',
  'C': 'Time between exposure and onset of symptoms (incubation period).',
  'D': 'Constant presence of a disease in a population (endemic).',
  'E': 'A microorganism or factor essential for disease occurrence (agent).',
  'F': 'Animate intermediary transmitting an agent (vector).',
  'G': 'Residue of dried droplets that remain airborne (droplet nuclei).',
  'H': 'Proportion of susceptible individuals who become ill during an outbreak (attack rate).',
  'I': 'Rate of new cases in a population over a time period (incidence rate).',
  'J': 'Habitat where an agent lives and multiplies (reservoir).'
};

const questions = [];

// Section A: Matching (1–10)
[
  [1,'Agent','dropdown',['A','B','C','D','E','F','G','H','I','J'],'E','An agent is any microorganism or factor essential for disease occurrence.'],
  [2,'Reservoir','dropdown',['A','B','C','D','E','F','G','H','I','J'],'J','The reservoir is the habitat where the agent lives, grows, and multiplies.'],
  [3,'Incubation Period','dropdown',['A','B','C','D','E','F','G','H','I','J'],'C','Incubation period is the time from exposure to symptom onset.'],
  [4,'Attack Rate','dropdown',['A','B','C','D','E','F','G','H','I','J'],'H','Attack rate is the proportion of susceptible individuals who become ill in an outbreak.'],
  [5,'Vector','dropdown',['A','B','C','D','E','F','G','H','I','J'],'F','A vector is an animate intermediary that transmits an agent.'],
  [6,'Fomite','dropdown',['A','B','C','D','E','F','G','H','I','J'],'A','A fomite is a non-living object capable of transmitting infection.'],
  [7,'Case Fatality Rate','dropdown',['A','B','C','D','E','F','G','H','I','J'],'B','CFR is the proportion of infected individuals who die.'],
  [8,'Endemic','dropdown',['A','B','C','D','E','F','G','H','I','J'],'D','Endemic means a disease is constantly present in a population.'],
  [9,'Droplet Nuclei','dropdown',['A','B','C','D','E','F','G','H','I','J'],'G','Droplet nuclei are dried residues that can remain airborne and be inhaled.'],
  [10,'Incidence Rate','dropdown',['A','B','C','D','E','F','G','H','I','J'],'I','Incidence rate quantifies new cases over time per population.']
].forEach(q => {
  questions.push({
    id: q[0], type: q[2],
    prompt: `Q${q[0]}. Match the term ‘${q[1]}’ to the correct definition letter.`,
    options: q[3], correct: q[4], explanation: q[5], graded: true,
    meta: { definitions: definitions_AJ }
  });
});

// Section B: MC (11–25)
[
  [11,'Which measure best describes the risk of developing disease in a population?',
    ['Prevalence','Incidence','Mortality rate','Case fatality rate'],'Incidence',
    'Incidence counts new cases over time and reflects risk of developing disease.'],
  [12,'Which of the following is an example of direct transmission?',
    ['Mosquito bite','Touching contaminated surfaces','Sneezing on someone','Eating contaminated food'],'Sneezing on someone',
    'Sneezing on someone spreads large droplets directly to another person.'],
  [13,'Which study design is best for rare diseases?',
    ['Cohort','Case-control','Cross-sectional','Randomized trial'],'Case-control',
    'Case-control studies start from cases and are efficient for rare outcomes.'],
  [14,'A nested cohort study is:',
    ['A case-control study within a cohort','A cohort within a larger cohort','A randomized trial within a cohort','None of the above'],'A case-control study within a cohort',
    'Nested case-control selects cases and controls from a defined cohort.'],
  [15,'Which bias occurs when participants drop out of a study?',
    ['Recall bias','Attrition bias','Selection bias','Interview bias'],'Attrition bias',
    'Attrition bias arises from differential loss to follow-up.'],
  [16,'Which term describes multiple epidemics interacting synergistically?',
    ['Syndemic','Pandemic','Endemic','Hyperendemic'],'Syndemic',
    'A syndemic involves co-occurring epidemics that exacerbate each other.'],
  [17,'Which surveillance approach commonly uses wastewater monitoring?',
    ['Passive','Active','Syndromic','Sentinel'],'Syndromic',
    'Wastewater monitoring is a syndromic approach using proxies of disease activity.'],
  [18,'Which of the following is NOT a component of the chain of infection?',
    ['Agent','Reservoir','Vector','Odds ratio'],'Odds ratio',
    'Odds ratio is an analytic measure, not a chain component.'],
  [19,'Which measure is used in case-control studies?',
    ['Relative Risk','Odds Ratio','Incidence Rate','Attack Rate'],'Odds Ratio',
    'Odds ratio estimates association when incidence is not available.'],
  [20,'Which is an example of horizontal transmission?',
    ['Mother to child during birth','Sexual contact between adults','Genetic inheritance','Breastfeeding'],'Sexual contact between adults',
    'Horizontal transmission occurs between individuals (not parent-to-child).'],
  [21,'Influenza pandemics have originated from:',
    ['Avian influenza viruses','Bats','Arthropods','Rodents'],'Avian influenza viruses',
    'Pandemic strains carry avian-origin segments (e.g., HA).'],
  [22,'Which prevention level aims to avoid unnecessary medical interventions?',
    ['Primary','Secondary','Tertiary','Quaternary'],'Quaternary',
    'Quaternary prevention reduces overmedicalization and harm.'],
  [23,'A person infected but asymptomatic is called a:',
    ['Carrier','Reservoir','Vector','Host'],'Carrier',
    'Carriers can transmit disease without symptoms.'],
  [24,'Which of the following is a sentinel surveillance system?',
    ['RESP-NET','NNDSS','Wastewater monitoring','Hospital discharge database'],'RESP-NET',
    'RESP-NET conducts active, sentinel surveillance for respiratory infections.'],
  [25,'Which is a limitation of passive surveillance?',
    ['High cost','Underreporting','Requires active case finding','Provides real-time data'],'Underreporting',
    'Passive relies on voluntary reports and often misses cases.']
].forEach(q => {
  questions.push({
    id: q[0], type: 'mc', prompt: `Q${q[0]}. ${q[1]}`,
    options: q[2], correct: q[3], explanation: q[4], graded: true
  });
});

// Section C: Short answer (26–35)
[
  [26,'Define latent infection and give one example.',null,null,
    'A latent infection is the presence of a pathogen without symptoms (subclinical). Examples: TB, Herpes, EBV, Varicella Zoster.',false],
  [27,'Explain why vaccination may not be effective against latent infections.',null,null,
    'Latency can hide pathogens from immune detection; vaccination is preventive before infection. Suppressive therapy keeps latency/controls reactivation.',false],
  [28,'Draw or list the chain of infection for tuberculosis.',null,null,
    'Agent: Mycobacterium tuberculosis → Reservoir: humans (lungs) → Portal of exit: respiratory tract → Mode: respiratory droplets → Portal of entry: respiratory tract → Susceptible host.',false],
  [29,'Name two ways to break the chain of infection for diphtheria.',null,null,
    'Vaccination (Tdap); antibiotics/antitoxin; isolation; hygiene; masks and droplet precautions.',false],
  [30,'What is an epi curve and what does it show?',null,null,
    'An epidemic curve is a histogram of cases by time of onset. It shows outbreak pattern and timing (point source vs propagated).',false],
  [31,'What type of propagation does a propagated outbreak indicate?',null,null,
    'Person-to-person transmission with successive waves.',true,'Person-to-person'],
  [32,'What is a case definition and why is it important?',null,null,
    'Standard clinical/lab/time-place-person criteria to classify cases consistently and avoid misclassification.',false],
  [33,'Give two examples of bias in epidemiological studies.',null,null,
    'Examples: recall bias; selection bias; attrition bias; interview bias; Hawthorne effect.',false],
  [34,'In a DAG, what is a collider?',null,null,
    'A variable affected by two (or more) other variables. Conditioning on it can induce spurious association.',true,'Collider'],
  [35,'In a DAG, what does “U” represent? Give an example.',null,null,
    'U denotes an unknown/unmeasured common cause (confounder), e.g., parental mental health, socioeconomic context.',false]
].forEach(item => {
  const [id,prompt,opts,corr,expl,graded,kw] = item;
  questions.push({
    id, type: 'short', prompt: `Q${id}. ${prompt}`,
    options: opts, correct: kw || null, explanation: expl, graded,
    shortMode: 'text'
  });
});

// Section D: Calculations (36–45)
[
  [36,'Calculate the attack rate: 40 people attended a picnic, 10 became ill. Provide %.',25.0,1.0,
    'Attack rate = (ill / at risk) × 100 = (10/40)×100 = 25%.','number'],
  [37,'Calculate the odds ratio (OR): Ill: Ate salad (15), Did not (5); Not ill: Ate salad (20), Did not (30).',4.5,0.05,
    'OR = (15×30)/(20×5) = 450/100 = 4.5.','number'],
  [38,'Calculate incidence rate: 50 new cases in a population of 10,000 over 1 year (per 1,000/year).',5.0,0.1,
    'Incidence = (50/10,000)×1,000 = 5 per 1,000/year.','number'],
  [39,'Calculate prevalence: 200 cases in a population of 5,000 (as %).',4.0,0.1,
    'Prevalence = (200/5,000)×100 = 4%.','number'],
  [40,'A point source epi curve typically shows what pattern?','Sharp single peak clustered in time',null,
    'Point source outbreaks show a sharp peak with most cases in a short interval.','text'],
  [41,'Construct a 2×2 test table: sensitivity 90%, specificity 80%. What % are false negatives?',10.0,0.0,
    'Sensitivity 90% ⇒ 10% false negatives among truly positive.','number'],
  [42,'If a test misses 10% of true positives, what is its sensitivity (%)?',90.0,0.0,
    'Sensitivity = 100% − 10% = 90%.','number'],
  [43,'Compute relative risk (RR): Attack rate exposed = 30%, unexposed = 10%.',3.0,0.0,
    'RR = 0.30 / 0.10 = 3.0.','number'],
  [44,'Period prevalence concept: Given cases/population. What formula defines period prevalence?','Cases during period / population at mid-period',null,
    'Period prevalence = total cases during the time interval ÷ population at risk (often mid-period).','text'],
  [45,'Why use odds ratio in case-control studies rather than relative risk?','Incidence not available; OR approximates RR when disease is rare',null,
    'In case-control designs, sampling is based on outcome, so incidence cannot be computed; OR estimates association and ≈ RR when rare.','text']
].forEach(item => {
  const [id,prompt,correct,tol,expl,mode] = item;
  const obj = {
    id, type: 'short', prompt: `Q${id}. ${prompt}`,
    explanation: expl, graded: true, shortMode: mode
  };
  if (mode === 'number') { obj.correct = correct; obj.tolerance = tol; }
  else { obj.correctText = correct; }
  questions.push(obj);
});

// Section E: Outbreak & Advanced (46–50)
[
  [46,'What study type is best for investigating a foodborne outbreak after exposure?',
    ['Cohort','Case-control','Cross-sectional','Randomized trial'],'Case-control',
    'Exposure already occurred; case-control is efficient and cost-effective.',true],
  [47,'Write a confirmed case definition for a Salmonella outbreak at a restaurant.',null,null,
    'Example: Laboratory-confirmed Salmonella infection + compatible illness + ate at the restaurant during [dates] in [location]. Include person/place/time.',false],
  [48,'Name two CDC respiratory surveillance systems and their data collection type.',null,null,
    'Examples: RESP-NET (active/sentinel), COVID-NET (population-based, active), FluSurv-NET (passive in some contexts).',false],
  [49,'Explain how wastewater monitoring tracks SARS-CoV-2.',null,null,
    'Infected individuals shed viral RNA in feces; wastewater sampling quantifies RNA trends to infer community transmission, regardless of symptoms.',false],
  [50,'Give two advantages and two disadvantages of DAGs in epidemiology.',null,null,
    'Advantages: clarify causal pathways; identify confounding/selection bias; simple to construct. Disadvantages: no effect size; cannot detect measurement error; limited depiction of interaction.',false]
].forEach(item => {
  const [id,prompt,opts,corr,expl,graded] = item;
  if (opts) {
    questions.push({ id, type: 'mc', prompt: `Q${id}. ${prompt}`, options: opts,
      correct: corr, explanation: expl, graded });
  } else {
    questions.push({ id, type: 'short', prompt: `Q${id}. ${prompt}`,
      explanation: expl, graded, shortMode: 'text' });
  }
});

// --- App state ---
let current = 0;
let gradedCorrect = 0;
let gradedTotal = 0;

// --- UI helpers ---
function setProgress() {
  const qNumEl = document.getElementById('qNum');
  const qTotalEl = document.getElementById('qTotal');
  const fill = document.getElementById('barFill');
  qNumEl.textContent = current + 1;
  qTotalEl.textContent = questions.length;
  fill.style.width = (((current) / (questions.length)) * 100).toFixed(1) + '%';
}

function renderDefinitions(defs) {
  const panel = document.getElementById('definitionsPanel');
  const list = document.getElementById('definitionsList');
  if (!defs) { panel.open = false; panel.classList.add('hidden'); return; }
  panel.classList.remove('hidden');
  list.innerHTML = Object.entries(defs).map(([k,v]) => `<p><strong>${k}.</strong> ${v}</p>`).join('');
}

function renderQuestion() {
  const q = questions[current];
  setProgress();
  const fb = document.getElementById('feedback');
  fb.classList.add('hidden');
  fb.innerHTML = '';
  document.getElementById('nextBtn').disabled = true;

  const promptEl = document.getElementById('questionPrompt');
  promptEl.textContent = q.prompt;

  renderDefinitions(q.meta && q.meta.definitions);

  const area = document.getElementById('responseArea');
  area.innerHTML = '';

  if (q.type === 'mc') {
    q.options.forEach(opt => {
      const id = 'opt_' + Math.random().toString(36).slice(2);
      const wrapper = document.createElement('div');
      wrapper.className = 'radioOption';
      const input = document.createElement('input');
      input.type = 'radio'; input.name = 'mc'; input.value = opt; input.id = id;
      const label = document.createElement('label');
      label.setAttribute('for', id);
      label.textContent = opt;
      wrapper.appendChild(input); wrapper.appendChild(label);
      area.appendChild(wrapper);
    });
  } else if (q.type === 'dropdown') {
    const select = document.createElement('select');
    select.id = 'ddSelect';
    const blank = document.createElement('option'); blank.value = ''; blank.textContent = '— Select letter —';
    select.appendChild(blank);
    q.options.forEach(letter => {
      const o = document.createElement('option'); o.value = letter; o.textContent = letter; select.appendChild(o);
    });
    area.appendChild(select);
    const note = document.createElement('small'); note.className = 'note';
    note.textContent = 'Tip: open definitions A–J above to view full statements.';
    area.appendChild(note);
  } else if (q.type === 'short') {
    if (q.shortMode === 'number') {
      const input = document.createElement('input'); input.type = 'number'; input.id = 'shortNum'; input.step = 'any';
      area.appendChild(input);
    } else {
      const textarea = document.createElement('textarea'); textarea.id = 'shortText';
      area.appendChild(textarea);
    }
  }
}

function normalize(s) { return (s || '').toString().trim().toLowerCase(); }

function checkAnswer(ev) {
  ev.preventDefault();
  const q = questions[current];
  const fb = document.getElementById('feedback');
  fb.classList.remove('hidden');

  let userAns = null, correct = false, userDisplay = '';

  if (q.type === 'mc') {
    const sel = document.querySelector('input[name="mc"]:checked');
    userAns = sel ? sel.value : '';
    userDisplay = userAns || '(no selection)';
    correct = (userAns === q.correct);
  } else if (q.type === 'dropdown') {
    const sel = document.getElementById('ddSelect');
    userAns = sel ? sel.value : '';
    userDisplay = userAns || '(no selection)';
    correct = (userAns === q.correct);
  } else if (q.type === 'short') {
    if (q.shortMode === 'number') {
      const val = document.getElementById('shortNum').value;
      userAns = parseFloat(val);
      userDisplay = (val === '' ? '(no entry)' : val);
      if (!isNaN(userAns)) {
        const diff = Math.abs(userAns - q.correct);
        correct = diff <= (q.tolerance || 0);
      } else {
        correct = false;
      }
    } else {
      const val = document.getElementById('shortText').value;
      userDisplay = val || '(no entry)';
      // Text items: if a keyword is provided and graded, check; otherwise mark informational.
      if (q.graded && q.correct) {
        correct = normalize(val) === normalize(q.correct);
      } else {
        correct = true; // informational completion
      }
    }
  }

  if (q.graded) {
    gradedTotal += 1;
    if (correct) gradedCorrect += 1;
  }

  fb.innerHTML = `
    <div class="${correct ? 'correct' : 'incorrect'}">
      <h3>${correct ? '✅ Correct' : '❌ Not quite'}</h3>
      <p><strong>Your answer:</strong> ${userDisplay}</p>
      <p><strong>Correct answer:</strong> ${q.type === 'short' && q.shortMode !== 'number' && q.correctText ? q.correctText : (q.correct || '(see explanation)')}</p>
      <p><strong>Explanation:</strong> ${q.explanation}</p>
    </div>`;

  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current += 1; renderQuestion();
  } else {
    // Show summary
    document.getElementById('questionContainer').classList.add('hidden');
    const sum = document.getElementById('summary');
    sum.classList.remove('hidden');
    document.getElementById('correctCount').textContent = gradedCorrect;
    document.getElementById('gradedCount').textContent = gradedTotal;
    document.getElementById('barFill').style.width = '100%';
    document.getElementById('progressText').textContent = 'Completed';
  }
}

function prevQuestion() { if (current > 0) { current -= 1; renderQuestion(); } }
function restart() {
  current = 0; gradedCorrect = 0; gradedTotal = 0;
  document.getElementById('summary').classList.add('hidden');
  document.getElementById('questionContainer').classList.remove('hidden');
  renderQuestion();
}

function init() {
  renderQuestion();
  document.getElementById('responseForm').addEventListener('submit', checkAnswer);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('prevBtn').addEventListener('click', prevQuestion);
   document.getElementById('restartBtn').addEventListener('click', restart);
}


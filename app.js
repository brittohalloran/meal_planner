/* ---------- Ingredient categorization ---------- */
const CATEGORY_MAP = {
  garlic:"Produce", kale:"Produce", lemon:"Produce","lemon zest":"Produce","yellow onion":"Produce","red onion":"Produce",
  "pickled red onions":"Produce","iceberg lettuce":"Produce","bell peppers":"Produce", peppers:"Produce", cucumber:"Produce",
  "grape tomatoes":"Produce","cherry tomatoes":"Produce", tomatoes:"Produce","baby spinach":"Produce", broccoli:"Produce",
  cauliflower:"Produce","brussels sprouts":"Produce", zucchini:"Produce", carrots:"Produce","fingerling potatoes":"Produce",
  avocado:"Produce", cilantro:"Produce", limes:"Produce", corn:"Produce","corn on the cob":"Produce", arugula:"Produce",
  salad:"Produce","caesar salad kit":"Produce", basil:"Produce","mashed potato":"Produce","green onion":"Produce",
  "italian sausage":"Meat & Seafood","ground sausage":"Meat & Seafood","pulled pork":"Meat & Seafood", beef:"Meat & Seafood",
  "ground beef":"Meat & Seafood","chicken thighs":"Meat & Seafood","rotisserie chicken":"Meat & Seafood", chicken:"Meat & Seafood",
  bacon:"Meat & Seafood","bacon jam":"Meat & Seafood", prosciutto:"Meat & Seafood","skirt steak":"Meat & Seafood",
  "flank steak":"Meat & Seafood", steak:"Meat & Seafood","pork shoulder":"Meat & Seafood", ham:"Meat & Seafood",
  bratwurst:"Meat & Seafood","hot dogs":"Meat & Seafood", kielbasa:"Meat & Seafood", ribs:"Meat & Seafood", pancetta:"Meat & Seafood",
  shrimp:"Meat & Seafood","chicken cutlets":"Meat & Seafood", carnitas:"Meat & Seafood","korean beef":"Meat & Seafood",
  "gyro meat":"Meat & Seafood","chuck roast":"Meat & Seafood","ground turkey":"Meat & Seafood","chicken cutlet meal":"Meat & Seafood",
  "chicken cutlets (little big meal)":"Meat & Seafood",
  "heavy cream":"Dairy & Refrigerated","heavy whipping cream":"Dairy & Refrigerated","parmigiano-reggiano":"Dairy & Refrigerated",
  "parmesano romano":"Dairy & Refrigerated","pecorino romano":"Dairy & Refrigerated","sharp cheddar":"Dairy & Refrigerated",
  "american cheese":"Dairy & Refrigerated", feta:"Dairy & Refrigerated","brie cheese":"Dairy & Refrigerated","swiss cheese":"Dairy & Refrigerated",
  mozzarella:"Dairy & Refrigerated","sour cream":"Dairy & Refrigerated","queso fresco":"Dairy & Refrigerated","oaxaca cheese":"Dairy & Refrigerated",
  "monterey jack":"Dairy & Refrigerated", eggs:"Dairy & Refrigerated","hard boiled eggs":"Dairy & Refrigerated", ricotta:"Dairy & Refrigerated",
  tzatziki:"Dairy & Refrigerated", hummus:"Dairy & Refrigerated", butter:"Dairy & Refrigerated",
  "brown bread":"Bread & Bakery","french bread":"Bread & Bakery","ciabatta rolls":"Bread & Bakery", buns:"Bread & Bakery",
  "hamburger buns":"Bread & Bakery","hawaiian rolls":"Bread & Bakery", naan:"Bread & Bakery", pita:"Bread & Bakery",
  "corn tortillas":"Bread & Bakery","tortilla chips":"Bread & Bakery", cornbread:"Bread & Bakery",
  rigatoni:"Pantry & Dry Goods", cellantini:"Pantry & Dry Goods", bucatini:"Pantry & Dry Goods", orzo:"Pantry & Dry Goods",
  rice:"Pantry & Dry Goods","black beans":"Pantry & Dry Goods","refried beans":"Pantry & Dry Goods","baked beans":"Pantry & Dry Goods",
  beans:"Pantry & Dry Goods","chicken broth":"Pantry & Dry Goods","vodka sauce":"Pantry & Dry Goods","bbq sauce":"Pantry & Dry Goods",
  salsa:"Pantry & Dry Goods", chimichurri:"Pantry & Dry Goods","horseradish sauce":"Pantry & Dry Goods","honey soy sauce":"Pantry & Dry Goods",
  "chik-fil-a sauce":"Pantry & Dry Goods","kalamata olives":"Pantry & Dry Goods","black olives":"Pantry & Dry Goods",
  "tomato basil soup":"Pantry & Dry Goods", marinara:"Pantry & Dry Goods","butter chicken sauce":"Pantry & Dry Goods",
  "tikka masala sauce":"Pantry & Dry Goods","fig jam":"Pantry & Dry Goods", relish:"Pantry & Dry Goods", sauerkraut:"Pantry & Dry Goods",
  "dill pickles":"Pantry & Dry Goods", pickles:"Pantry & Dry Goods", chips:"Pantry & Dry Goods", coleslaw:"Pantry & Dry Goods",
  "potato salad":"Pantry & Dry Goods","pasta salad":"Pantry & Dry Goods","fruit salad":"Pantry & Dry Goods",
  "waffle fries":"Frozen","sweet potato fries":"Frozen","tater tots":"Frozen","hash browns":"Frozen", potstickers:"Frozen", pancakes:"Frozen"
};
const CATEGORY_ORDER = ["Produce","Meat & Seafood","Dairy & Refrigerated","Bread & Bakery","Pantry & Dry Goods","Frozen","Other"];

function categoryFor(name){
  const key = name.trim().toLowerCase();
  return CATEGORY_MAP[key] || "Other";
}

/* ---------- Default meal library ---------- */
const DEFAULT_MEALS = [
 {name:"Lemon Parmesan Sausage Rigatoni with Kale", ingredients:["Rigatoni","Italian Sausage","Garlic","Heavy Cream","Chicken Broth","Kale","Lemon","Parmigiano-Reggiano","Brown Bread"]},
 {name:"Pulled Pork Paninis", ingredients:["Pulled Pork","Ciabatta Rolls","Sharp Cheddar","Coleslaw","BBQ Sauce","Dill Pickles","Red Onion"]},
 {name:"Smash Burgers", ingredients:["Beef","American Cheese","Pickles","Bacon Jam","Yellow Onion","Iceberg Lettuce","Buns","Waffle Fries","Bell Peppers"]},
 {name:"Tik Tok Pasta (Baked Feta)", ingredients:["Rigatoni","Feta","Cherry Tomatoes","Brown Bread","Salad"]},
 {name:"Prosciutto Paninis", ingredients:["French Bread","Prosciutto","Brie Cheese","Arugula","Fig Jam","Tomato Basil Soup","Caesar Salad Kit"]},
 {name:"Chicken Spinach Orzo", ingredients:["Chicken Thighs","Orzo","Chicken Broth","Baby Spinach","Garlic","Yellow Onion","Lemon","Parmigiano-Reggiano"]},
 {name:"Butter Chicken", ingredients:["Butter Chicken Sauce","Chicken Thighs","Rice","Naan","Cauliflower"]},
 {name:"Pulled Pork Sandwiches", ingredients:["Pulled Pork","Buns","Coleslaw","Baked Beans"]},
 {name:"Vodka Sausage Rigatoni/Cellantini", ingredients:["Cellantini","Vodka Sauce","Heavy Whipping Cream","Ground Sausage","Broccoli","Brown Bread"]},
 {name:"Stuffed Peppers", ingredients:["Bell Peppers","Ground Beef","Rice","Marinara","Mozzarella","French Bread","Salad"]},
 {name:"Greek Chicken Bowls", ingredients:["Rotisserie Chicken","Rice","Cucumber","Grape Tomatoes","Kalamata Olives","Hummus","Tzatziki","Feta"]},
 {name:"Chicken Parmesan (Little Big Meal)", ingredients:["Chicken Cutlets","Marinara","Mozzarella","Rigatoni"]},
 {name:"Blackstone Breakfast", ingredients:["Eggs","Pancakes","Bacon","Hash Browns"]},
 {name:"Grilled Skirt Steak", ingredients:["Skirt Steak","Chimichurri","Fingerling Potatoes","Salad"]},
 {name:"Protein Bowls", ingredients:["Rice","Black Beans","Corn","Hard Boiled Eggs","Avocado","Pickled Red Onions","Korean Beef","Salsa"]},
 {name:"Korean Beef Bowls", ingredients:["Rice","Korean Beef","Broccoli","Potstickers"]},
 {name:"Korean Beef or Tikka Masala + Rice + Broccoli", ingredients:["Korean Beef","Tikka Masala Sauce","Rice","Broccoli"]},
 {name:"Gyros", ingredients:["Gyro Meat","Pita","Tzatziki","Cucumber","Tomatoes","Red Onion","Lemon"]},
 {name:"Carnitas / Slow Cooker Pork Tacos", ingredients:["Pork Shoulder","Corn Tortillas","Limes","Cilantro","Pickled Red Onions","Sour Cream","Queso Fresco","Tortilla Chips","Salsa"]},
 {name:"Lemon Spinach Ricotta Pasta w/ Shrimp", shellfish:true, ingredients:["Rigatoni","Ricotta","Lemon Zest","Basil","Baby Spinach","Shrimp","Brown Bread"]},
 {name:"Sheet Pan Sausage & Veggies", ingredients:["Kielbasa","Bell Peppers","Zucchini","Red Onion","French Bread"]},
 {name:"Burrito Bowls", ingredients:["Chicken","Hard Boiled Eggs","Rice","Black Beans","Avocado","Corn","Queso Fresco","Pickled Red Onion","Cilantro"]},
 {name:"Carnitas Nachos", ingredients:["Tortilla Chips","Carnitas","Black Olives","Refried Beans","Oaxaca Cheese","Monterey Jack"]},
 {name:"Rotisserie Chicken Sliders", ingredients:["Rotisserie Chicken","Hawaiian Rolls","Swiss Cheese","Chik-Fil-A Sauce","Pickles","Sweet Potato Fries"]},
 {name:"Carbonara", ingredients:["Bucatini","Pancetta","Pecorino Romano","Eggs"]},
 {name:"Flank Steak, Broccoli & Mashed Potato", ingredients:["Flank Steak","Broccoli","Mashed Potato"]},
 {name:"Slow Cooker Pot Roast", ingredients:["Chuck Roast","Fingerling Potatoes","Carrots","Yellow Onion","Horseradish Sauce","French Bread","Salad"]},
 {name:"Ham & Swiss Sliders", ingredients:["Ham","Swiss Cheese","Hawaiian Rolls","Pickles","Chik-Fil-A Sauce","Sweet Potato Fries"]},
 {name:"Brats & Dogs", ingredients:["Bratwurst","Hot Dogs","Buns","Relish","Sauerkraut","Fruit Salad","Chips"]},
 {name:"Steaks & Wedge Salad", ingredients:["Steak","Iceberg Lettuce","Sharp Cheddar","Bacon","Tomatoes","Fingerling Potatoes","French Bread"]},
 {name:"Rotisserie Chicken Tacos", ingredients:["Rotisserie Chicken","Corn Tortillas","Salsa","Sour Cream"]},
 {name:"Ribs, Coleslaw & Cornbread", ingredients:["Ribs","Coleslaw","Cornbread","Baked Beans"]},
 {name:"Chicken, Broccoli & Rice Bowls", ingredients:["Chicken","Broccoli","Rice","Honey Soy Sauce"]},
 {name:"Costco Tikka Masala, Rice & Naan", ingredients:["Tikka Masala Sauce","Rice","Naan","Broccoli"]},
 {name:"Burgers & Corn on the Cob", ingredients:["Ground Beef","Hamburger Buns","Corn on the Cob","Pasta Salad"]},
 {name:"Little Big Meal – Stir Fry Noodles", ingredients:["Rigatoni","Ground Beef","Broccoli"]},
 {name:"Little Big Meal – Crispy Chicken Cutlets", ingredients:["Chicken Cutlets","Rice","Broccoli"]},
 {name:"Mediterranean Skillet (Fresh Market)", ingredients:["Chicken","Rice","Feta","Tomatoes"]},
 {name:"Fresh Market Meatloaf", ingredients:["Ground Beef","Mashed Potato","Broccoli"]}
];

/* Maps a meal name to one of the local icon illustrations in images/meals/ */
const MEAL_META = {
  "Lemon Parmesan Sausage Rigatoni with Kale": {cat:"pasta"},
  "Pulled Pork Paninis": {cat:"sandwich"},
  "Smash Burgers": {cat:"burger"},
  "Tik Tok Pasta (Baked Feta)": {cat:"pasta"},
  "Prosciutto Paninis": {cat:"sandwich"},
  "Chicken Spinach Orzo": {cat:"pasta"},
  "Butter Chicken": {cat:"curry"},
  "Pulled Pork Sandwiches": {cat:"sandwich"},
  "Vodka Sausage Rigatoni/Cellantini": {cat:"pasta"},
  "Stuffed Peppers": {cat:"stuffed-pepper"},
  "Greek Chicken Bowls": {cat:"bowl"},
  "Chicken Parmesan (Little Big Meal)": {cat:"pasta"},
  "Blackstone Breakfast": {cat:"breakfast"},
  "Grilled Skirt Steak": {cat:"steak"},
  "Protein Bowls": {cat:"bowl"},
  "Korean Beef Bowls": {cat:"bowl"},
  "Korean Beef or Tikka Masala + Rice + Broccoli": {cat:"curry"},
  "Gyros": {cat:"gyro"},
  "Carnitas / Slow Cooker Pork Tacos": {cat:"taco"},
  "Lemon Spinach Ricotta Pasta w/ Shrimp": {cat:"pasta"},
  "Sheet Pan Sausage & Veggies": {cat:"sausage"},
  "Burrito Bowls": {cat:"bowl"},
  "Carnitas Nachos": {cat:"nachos"},
  "Rotisserie Chicken Sliders": {cat:"sliders"},
  "Carbonara": {cat:"pasta"},
  "Flank Steak, Broccoli & Mashed Potato": {cat:"steak"},
  "Slow Cooker Pot Roast": {cat:"roast"},
  "Ham & Swiss Sliders": {cat:"sliders"},
  "Brats & Dogs": {cat:"sausage"},
  "Steaks & Wedge Salad": {cat:"steak"},
  "Rotisserie Chicken Tacos": {cat:"taco"},
  "Ribs, Coleslaw & Cornbread": {cat:"ribs"},
  "Chicken, Broccoli & Rice Bowls": {cat:"bowl"},
  "Costco Tikka Masala, Rice & Naan": {cat:"curry"},
  "Burgers & Corn on the Cob": {cat:"burger"},
  "Little Big Meal – Stir Fry Noodles": {cat:"pasta"},
  "Little Big Meal – Crispy Chicken Cutlets": {cat:"chicken"},
  "Mediterranean Skillet (Fresh Market)": {cat:"bowl"},
  "Fresh Market Meatloaf": {cat:"roast"}
};

const ICON_CATEGORIES = ["pasta","sandwich","burger","curry","stuffed-pepper","bowl","breakfast","steak","gyro","taco","sausage","nachos","sliders","roast","ribs","chicken"];

/* Best-effort category guess for meals added by the user (no MEAL_META entry) */
function guessIconCategory(meal){
  const hay = (meal.name + ' ' + meal.ingredients.join(' ')).toLowerCase();
  const rules = [
    [/taco|tortilla/, 'taco'],
    [/slider/, 'sliders'],
    [/burger|patty/, 'burger'],
    [/panini|sandwich|sub roll/, 'sandwich'],
    [/pasta|rigatoni|spaghetti|penne|orzo|noodle|carbonara|bucatini|cellantini/, 'pasta'],
    [/curry|tikka|masala/, 'curry'],
    [/stuffed pepper/, 'stuffed-pepper'],
    [/bowl|burrito/, 'bowl'],
    [/egg|pancake|waffle|breakfast|bacon/, 'breakfast'],
    [/steak/, 'steak'],
    [/gyro/, 'gyro'],
    [/sausage|bratwurst|kielbasa|hot dog|brat/, 'sausage'],
    [/nacho/, 'nachos'],
    [/roast|meatloaf/, 'roast'],
    [/rib/, 'ribs'],
    [/chicken/, 'chicken']
  ];
  for(const [re, cat] of rules){
    if(re.test(hay)) return cat;
  }
  return 'custom';
}

function iconCategoryFor(meal){
  const meta = MEAL_META[meal.name];
  if(meta && meta.cat) return meta.cat;
  return guessIconCategory(meal);
}

function imageUrlFor(meal){
  return `images/meals/${iconCategoryFor(meal)}.svg`;
}

/* ---------- Persistence (localStorage) ---------- */
const LS_KEYS = {
  library:'mp_meal_library',
  plan:'mp_plan_ids',
  assignments:'mp_day_assignments',
  checked:'mp_checked_items',
  dayNotes:'mp_day_notes'
};

function loadJSON(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    if(raw===null) return fallback;
    return JSON.parse(raw);
  }catch(e){
    return fallback;
  }
}
function saveJSON(key, value){
  try{
    localStorage.setItem(key, JSON.stringify(value));
  }catch(e){ /* storage unavailable, ignore */ }
}

let meals = [];
let planIds = new Set();
let dayAssignments = {};
let checkedItems = new Set();
let dayNotes = {};
let currentView = 'browse';

function loadData(){
  meals = loadJSON(LS_KEYS.library, null);
  if(!meals){
    meals = DEFAULT_MEALS.map((m,i)=>({id:'m'+i, ...m}));
    saveJSON(LS_KEYS.library, meals);
  }
  planIds = new Set(loadJSON(LS_KEYS.plan, []));
  dayAssignments = loadJSON(LS_KEYS.assignments, {});
  checkedItems = new Set(loadJSON(LS_KEYS.checked, []));
  dayNotes = loadJSON(LS_KEYS.dayNotes, {});
}
function saveLibrary(){ saveJSON(LS_KEYS.library, meals); }
function savePlan(){ saveJSON(LS_KEYS.plan, [...planIds]); }
function saveAssignments(){ saveJSON(LS_KEYS.assignments, dayAssignments); }
function saveChecked(){ saveJSON(LS_KEYS.checked, [...checkedItems]); }
function saveDayNotes(){ saveJSON(LS_KEYS.dayNotes, dayNotes); }

/* ---------- View switching ---------- */
function setView(view){
  currentView = view;
  document.getElementById('viewBrowse').hidden = view!=='browse';
  document.getElementById('viewPlan').hidden = view!=='plan';
  document.getElementById('tabBrowse').classList.toggle('active', view==='browse');
  document.getElementById('tabPlan').classList.toggle('active', view==='plan');
  if(view==='plan') renderPlanView();
  window.location.hash = view;
}

/* ---------- Rendering ---------- */
function render(){
  updatePlanBadge();
  renderGrid();
  if(currentView==='plan') renderPlanView();
}

function updatePlanBadge(){
  document.getElementById('planBadge').textContent = planIds.size;
  document.getElementById('clearPlanHeaderBtn').hidden = planIds.size===0;
}

function clearPlan(){
  if(planIds.size===0) return;
  if(!confirm('Clear all meals from this week\'s plan?')) return;
  planIds = new Set();
  dayAssignments = {};
  checkedItems = new Set();
  dayNotes = {};
  savePlan();
  saveAssignments();
  saveChecked();
  saveDayNotes();
  render();
}

function renderGrid(){
  const grid = document.getElementById('mealsGrid');
  const search = document.getElementById('search').value.trim().toLowerCase();
  const sortBy = document.getElementById('sortSelect').value;

  let list = meals.filter(m=>{
    if(!search) return true;
    const hay = (m.name + ' ' + m.ingredients.join(' ')).toLowerCase();
    return hay.includes(search);
  });

  if(sortBy==='az') list.sort((a,b)=> a.name.localeCompare(b.name));
  /* 'added' = keep library order as-is (newest additions are unshifted to the front) */

  grid.innerHTML = '';
  if(list.length===0){
    grid.innerHTML = '<p class="empty-note">No meals match that search.</p>';
    return;
  }

  list.forEach(m=>{
    const card = document.createElement('div');
    const selected = planIds.has(m.id);
    card.className = 'grid-card' + (selected ? ' selected' : '');
    card.innerHTML = `
      <div class="gc-image-wrap">
        <img src="${imageUrlFor(m)}" alt="${m.name}" loading="lazy">
      </div>
      <div class="gc-add-btn" title="${selected ? 'Remove from plan' : 'Add to plan'}">${selected ? '✓' : '+'}</div>
      <div class="gc-body">
        <p class="gc-name">${m.name}</p>
        <p class="gc-ingredients">${m.ingredients.join(', ')}</p>
        ${m.shellfish ? `<div class="gc-meta"><span class="tag tag-shellfish">Shellfish</span></div>` : ''}
      </div>
    `;
    card.addEventListener('click', ()=> togglePlan(m.id));
    grid.appendChild(card);
  });
}

function togglePlan(id){
  if(planIds.has(id)){
    planIds.delete(id);
    delete dayAssignments[id];
    saveAssignments();
  }else{
    planIds.add(id);
  }
  savePlan();
  render();
}

/* ---------- Week schedule ---------- */
const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function getWeekDates(){
  const today = new Date();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());
  const dates = [];
  for(let i=0;i<7;i++){
    const d = new Date(sunday);
    d.setDate(sunday.getDate()+i);
    dates.push(d);
  }
  return dates;
}
function formatDate(d){
  return `${d.getMonth()+1}/${d.getDate()}`;
}

function renderPlanView(){
  renderWeekRange();
  renderScheduleGrid();
  renderShoppingList();
}

function renderWeekRange(){
  const dates = getWeekDates();
  document.getElementById('weekRange').textContent =
    `${formatDate(dates[0])} – ${formatDate(dates[6])}`;
}

function mealById(id){
  return meals.find(m=>m.id===id);
}

function buildPlanCard(meal){
  const card = document.createElement('div');
  card.className = 'plan-card';
  card.draggable = true;
  card.dataset.mealId = meal.id;

  const options = ['<option value="unscheduled">Unscheduled</option>']
    .concat(DAY_NAMES.map((d,i)=>`<option value="${i}">${d}</option>`));

  card.innerHTML = `
    <button class="pc-remove" title="Remove from plan">×</button>
    <span class="pc-name">${meal.name}</span>
    <select class="pc-day-select">${options.join('')}</select>
  `;
  const select = card.querySelector('.pc-day-select');
  const assignedDay = dayAssignments[meal.id];
  select.value = (assignedDay===undefined || assignedDay===null) ? 'unscheduled' : String(assignedDay);
  select.addEventListener('click', e=> e.stopPropagation());
  select.addEventListener('change', ()=>{
    assignMealToDay(meal.id, select.value==='unscheduled' ? null : parseInt(select.value,10));
  });

  card.querySelector('.pc-remove').addEventListener('click', (e)=>{
    e.stopPropagation();
    togglePlan(meal.id);
  });

  card.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('text/plain', meal.id);
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(()=> card.classList.add('dragging'), 0);
  });
  card.addEventListener('dragend', ()=>{
    card.classList.remove('dragging');
  });

  return card;
}

function assignMealToDay(mealId, day){
  if(day===null) delete dayAssignments[mealId];
  else dayAssignments[mealId] = day;
  saveAssignments();
  renderScheduleGrid();
}

function setupDropZone(el, day){
  el.addEventListener('dragover', (e)=>{
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    el.classList.add('drag-over');
  });
  el.addEventListener('dragleave', ()=>{
    el.classList.remove('drag-over');
  });
  el.addEventListener('drop', (e)=>{
    e.preventDefault();
    el.classList.remove('drag-over');
    const mealId = e.dataTransfer.getData('text/plain');
    if(mealId) assignMealToDay(mealId, day);
  });
}

function renderScheduleGrid(){
  const scheduleGrid = document.getElementById('scheduleGrid');
  const unscheduledColumn = document.getElementById('unscheduledColumn');
  const weekDates = getWeekDates();
  const planMeals = [...planIds].map(mealById).filter(Boolean);

  scheduleGrid.innerHTML = '';
  DAY_NAMES.forEach((name, i)=>{
    const row = document.createElement('div');
    row.className = 'day-row';

    const head = document.createElement('div');
    head.className = 'day-row-head';
    head.innerHTML = `<span class="day-row-name">${name}</span><span class="day-row-date">${formatDate(weekDates[i])}</span>`;

    const col = document.createElement('div');
    col.className = 'day-column';
    col.dataset.day = i;
    setupDropZone(col, i);
    planMeals.filter(m=>dayAssignments[m.id]===i).forEach(m=>{
      col.appendChild(buildPlanCard(m));
    });

    const note = document.createElement('input');
    note.type = 'text';
    note.className = 'day-note';
    note.placeholder = 'No meal planned — e.g. "eating out"';
    note.value = dayNotes[i] || '';
    note.addEventListener('input', ()=>{
      if(note.value.trim()) dayNotes[i] = note.value;
      else delete dayNotes[i];
      saveDayNotes();
    });

    row.appendChild(head);
    row.appendChild(col);
    row.appendChild(note);
    scheduleGrid.appendChild(row);
  });

  unscheduledColumn.innerHTML = '';
  setupDropZone(unscheduledColumn, null);
  const unscheduled = planMeals.filter(m=> dayAssignments[m.id]===undefined || dayAssignments[m.id]===null);
  unscheduled.forEach(m=> unscheduledColumn.appendChild(buildPlanCard(m)));

  document.getElementById('unscheduledCount').textContent = `(${unscheduled.length})`;

  if(planMeals.length===0){
    unscheduledColumn.innerHTML = '<p class="empty-note">Add meals from Browse to start planning.</p>';
  }
}

/* ---------- Shopping list ---------- */
function walmartSearchUrl(item){
  return `https://www.walmart.com/search?q=${encodeURIComponent(item)}`;
}

function renderShoppingList(){
  const container = document.getElementById('shoppingContent');
  const selectedMeals = [...planIds].map(mealById).filter(Boolean);
  if(selectedMeals.length===0){
    container.innerHTML = '<p class="empty-note">Add meals from Browse to build your list.</p>';
    return;
  }
  const counts = {};
  selectedMeals.forEach(m=>{
    m.ingredients.forEach(ing=>{
      const key = ing.trim();
      counts[key] = (counts[key]||0)+1;
    });
  });
  const byCategory = {};
  Object.keys(counts).forEach(name=>{
    const cat = categoryFor(name);
    if(!byCategory[cat]) byCategory[cat]=[];
    byCategory[cat].push({name, count:counts[name]});
  });
  let html = '';
  CATEGORY_ORDER.forEach(cat=>{
    if(!byCategory[cat]) return;
    html += `<div class="cat-group"><h3>${cat}</h3>`;
    byCategory[cat].sort((a,b)=>a.name.localeCompare(b.name)).forEach(item=>{
      const id = 'item-' + item.name.replace(/\W+/g,'-');
      const checked = checkedItems.has(item.name) ? 'checked' : '';
      html += `
        <div class="item-row ${checked ? 'checked' : ''}">
          <input type="checkbox" id="${id}" data-name="${item.name}" ${checked}>
          <label for="${id}">${item.name}</label>
          ${item.count>1 ? `<span class="item-count">×${item.count} recipes</span>` : ''}
          <a class="item-find" href="${walmartSearchUrl(item.name)}" target="_blank" rel="noopener">Find ↗</a>
        </div>`;
    });
    html += `</div>`;
  });
  container.innerHTML = html;
  container.querySelectorAll('input[type=checkbox]').forEach(cb=>{
    cb.addEventListener('change', ()=>{
      const name = cb.dataset.name;
      if(cb.checked) checkedItems.add(name); else checkedItems.delete(name);
      saveChecked();
      cb.closest('.item-row').classList.toggle('checked', cb.checked);
    });
  });
}

function buildPlainTextList(){
  const selectedMeals = [...planIds].map(mealById).filter(Boolean);
  const counts = {};
  selectedMeals.forEach(m=>m.ingredients.forEach(ing=>{
    counts[ing] = (counts[ing]||0)+1;
  }));
  const byCategory = {};
  Object.keys(counts).forEach(name=>{
    const cat = categoryFor(name);
    if(!byCategory[cat]) byCategory[cat]=[];
    byCategory[cat].push(name);
  });
  let text = "This Week's Shopping List\n\n";
  CATEGORY_ORDER.forEach(cat=>{
    if(!byCategory[cat]) return;
    text += cat.toUpperCase() + "\n";
    byCategory[cat].sort().forEach(n=> text += "- " + n + "\n");
    text += "\n";
  });
  return text.trim();
}

/* ---------- Share plan as image ---------- */
function drawWeekPlanCanvas(){
  const weekDates = getWeekDates();
  const planMeals = [...planIds].map(mealById).filter(Boolean);
  const rowsData = DAY_NAMES.map((name, i)=>{
    const dayMeals = planMeals.filter(m=>dayAssignments[m.id]===i).map(m=>m.name);
    return { name, date: formatDate(weekDates[i]), meals: dayMeals, note: dayNotes[i] || '' };
  });

  const width = 720;
  const rowHeight = 74;
  const headerHeight = 96;
  const footerHeight = 30;
  const height = headerHeight + rowsData.length*rowHeight + footerHeight;

  const canvas = document.createElement('canvas');
  const scale = 2; // sharper export
  canvas.width = width*scale;
  canvas.height = height*scale;
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);

  const paper = '#F6F1E6', ink = '#2B2B26', forestDark = '#243322', forest = '#33472F',
        mustard = '#C98A2C', line = '#E4DBC7', muted = '#7A7568', card = '#FFFFFF';

  ctx.fillStyle = paper;
  ctx.fillRect(0,0,width,height);

  ctx.fillStyle = forestDark;
  ctx.font = '700 26px Georgia, "Source Serif 4", serif';
  ctx.fillText('Weekly Meal Plan', 24, 42);

  ctx.fillStyle = muted;
  ctx.font = '600 14px Arial, sans-serif';
  ctx.fillText(`${rowsData[0].date} – ${rowsData[6].date}`, 24, 66);

  ctx.strokeStyle = forest;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(24, headerHeight-16);
  ctx.lineTo(width-24, headerHeight-16);
  ctx.stroke();

  let y = headerHeight;
  rowsData.forEach((row, i)=>{
    if(i%2===1){
      ctx.fillStyle = card;
      ctx.fillRect(24, y, width-48, rowHeight);
    }
    ctx.fillStyle = forest;
    ctx.font = '700 15px Arial, sans-serif';
    ctx.fillText(row.name, 40, y+30);
    ctx.fillStyle = muted;
    ctx.font = '600 12px Arial, sans-serif';
    ctx.fillText(row.date, 40, y+48);

    ctx.fillStyle = ink;
    ctx.font = '400 15px Arial, sans-serif';
    const textX = 170;
    const maxWidth = width - textX - 40;
    let content;
    if(row.meals.length){
      content = row.meals.join('  •  ');
    }else if(row.note){
      content = row.note;
      ctx.font = 'italic 400 15px Arial, sans-serif';
      ctx.fillStyle = muted;
    }else{
      content = '—';
      ctx.fillStyle = '#C9C2AE';
    }
    wrapText(ctx, content, textX, y+30, maxWidth, 20, 2);

    ctx.strokeStyle = line;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(24, y+rowHeight);
    ctx.lineTo(width-24, y+rowHeight);
    ctx.stroke();

    y += rowHeight;
  });

  ctx.fillStyle = mustard;
  ctx.font = '600 12px Arial, sans-serif';
  ctx.fillText('Made with the family meal planner', 24, height-12);

  return canvas;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines){
  const words = text.split(' ');
  let line = '';
  let lines = [];
  for(const word of words){
    const test = line ? line + ' ' + word : word;
    if(ctx.measureText(test).width > maxWidth && line){
      lines.push(line);
      line = word;
    }else{
      line = test;
    }
  }
  lines.push(line);
  if(lines.length > maxLines){
    lines = lines.slice(0, maxLines);
    lines[maxLines-1] = lines[maxLines-1].replace(/\s*\S*$/, '') + '…';
  }
  lines.forEach((l, i)=> ctx.fillText(l, x, y + i*lineHeight));
}

async function sharePlanImage(){
  const canvas = drawWeekPlanCanvas();
  canvas.toBlob(async (blob)=>{
    if(!blob) return;
    let copied = false;
    try{
      if(navigator.clipboard && window.ClipboardItem){
        await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
        copied = true;
      }
    }catch(e){ /* clipboard image write not supported/allowed, fall back below */ }

    const flash = document.getElementById('imageFlash');
    if(copied){
      flash.textContent = 'Copied image to clipboard!';
      flash.style.display = 'inline';
      setTimeout(()=> flash.style.display='none', 2200);
    }else{
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'weekly-meal-plan.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      flash.textContent = 'Clipboard copy isn\'t supported here — downloaded instead.';
      flash.style.display = 'inline';
      setTimeout(()=> flash.style.display='none', 3200);
    }
  }, 'image/png');
}

/* ---------- Event wiring ---------- */
document.getElementById('search').addEventListener('input', renderGrid);
document.getElementById('sortSelect').addEventListener('change', renderGrid);

document.getElementById('tabBrowse').addEventListener('click', ()=> setView('browse'));
document.getElementById('tabPlan').addEventListener('click', ()=> setView('plan'));

document.getElementById('copyBtn').addEventListener('click', async ()=>{
  const text = buildPlainTextList();
  try{
    await navigator.clipboard.writeText(text);
  }catch(e){
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  const flash = document.getElementById('copiedFlash');
  flash.style.display = 'inline';
  setTimeout(()=> flash.style.display='none', 1800);
});

document.getElementById('shareImageBtn').addEventListener('click', sharePlanImage);

document.getElementById('clearBtn').addEventListener('click', clearPlan);
document.getElementById('clearPlanHeaderBtn').addEventListener('click', clearPlan);

document.getElementById('toggleAddBtn').addEventListener('click', ()=>{
  const form = document.getElementById('addForm');
  form.style.display = form.style.display==='none' ? 'block' : 'none';
});
document.getElementById('cancelAddBtn').addEventListener('click', ()=>{
  document.getElementById('addForm').style.display = 'none';
  document.getElementById('newMealName').value='';
  document.getElementById('newMealIngredients').value='';
});
document.getElementById('saveMealBtn').addEventListener('click', ()=>{
  const name = document.getElementById('newMealName').value.trim();
  const ingredientsRaw = document.getElementById('newMealIngredients').value.trim();
  if(!name || !ingredientsRaw) return;
  const ingredients = ingredientsRaw.split(',').map(s=>s.trim()).filter(Boolean);
  const id = 'm' + Date.now();
  meals.unshift({id, name, ingredients});
  saveLibrary();
  document.getElementById('newMealName').value='';
  document.getElementById('newMealIngredients').value='';
  document.getElementById('addForm').style.display='none';
  render();
});

/* ---------- Init ---------- */
loadData();
const initialView = window.location.hash==='#plan' ? 'plan' : 'browse';
setView(initialView);
render();

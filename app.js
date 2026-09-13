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
 {name:"Lemon Parmesan Sausage Rigatoni with Kale", lastMade:"9/9", ingredients:["Rigatoni","Italian Sausage","Garlic","Heavy Cream","Chicken Broth","Kale","Lemon","Parmigiano-Reggiano","Brown Bread"]},
 {name:"Pulled Pork Paninis", lastMade:"9/8", ingredients:["Pulled Pork","Ciabatta Rolls","Sharp Cheddar","Coleslaw","BBQ Sauce","Dill Pickles","Red Onion"]},
 {name:"Smash Burgers", lastMade:"9/7", ingredients:["Beef","American Cheese","Pickles","Bacon Jam","Yellow Onion","Iceberg Lettuce","Buns","Waffle Fries","Bell Peppers"]},
 {name:"Tik Tok Pasta (Baked Feta)", lastMade:"9/2", ingredients:["Rigatoni","Feta","Cherry Tomatoes","Brown Bread","Salad"]},
 {name:"Prosciutto Paninis", lastMade:"9/1", ingredients:["French Bread","Prosciutto","Brie Cheese","Arugula","Fig Jam","Tomato Basil Soup","Caesar Salad Kit"]},
 {name:"Chicken Spinach Orzo", lastMade:"8/31", ingredients:["Chicken Thighs","Orzo","Chicken Broth","Baby Spinach","Garlic","Yellow Onion","Lemon","Parmigiano-Reggiano"]},
 {name:"Butter Chicken", lastMade:"8/23", ingredients:["Butter Chicken Sauce","Chicken Thighs","Rice","Naan","Cauliflower"]},
 {name:"Pulled Pork Sandwiches", lastMade:"8/20", ingredients:["Pulled Pork","Buns","Coleslaw","Baked Beans"]},
 {name:"Vodka Sausage Rigatoni/Cellantini", lastMade:"8/19", ingredients:["Cellantini","Vodka Sauce","Heavy Whipping Cream","Ground Sausage","Broccoli","Brown Bread"]},
 {name:"Stuffed Peppers", lastMade:"8/13", ingredients:["Bell Peppers","Ground Beef","Rice","Marinara","Mozzarella","French Bread","Salad"]},
 {name:"Greek Chicken Bowls", lastMade:"8/12", ingredients:["Rotisserie Chicken","Rice","Cucumber","Grape Tomatoes","Kalamata Olives","Hummus","Tzatziki","Feta"]},
 {name:"Chicken Parmesan (Little Big Meal)", lastMade:"8/11", ingredients:["Chicken Cutlets","Marinara","Mozzarella","Rigatoni"]},
 {name:"Blackstone Breakfast", lastMade:"8/2", ingredients:["Eggs","Pancakes","Bacon","Hash Browns"]},
 {name:"Grilled Skirt Steak", lastMade:"7/12", ingredients:["Skirt Steak","Chimichurri","Fingerling Potatoes","Salad"]},
 {name:"Protein Bowls", lastMade:"7/1", ingredients:["Rice","Black Beans","Corn","Hard Boiled Eggs","Avocado","Pickled Red Onions","Korean Beef","Salsa"]},
 {name:"Korean Beef Bowls", lastMade:"5/18", ingredients:["Rice","Korean Beef","Broccoli","Potstickers"]},
 {name:"Korean Beef or Tikka Masala + Rice + Broccoli", lastMade:"6/23", ingredients:["Korean Beef","Tikka Masala Sauce","Rice","Broccoli"]},
 {name:"Gyros", lastMade:"5/26", ingredients:["Gyro Meat","Pita","Tzatziki","Cucumber","Tomatoes","Red Onion","Lemon"]},
 {name:"Carnitas / Slow Cooker Pork Tacos", lastMade:"5/25", ingredients:["Pork Shoulder","Corn Tortillas","Limes","Cilantro","Pickled Red Onions","Sour Cream","Queso Fresco","Tortilla Chips","Salsa"]},
 {name:"Lemon Spinach Ricotta Pasta w/ Shrimp", lastMade:"5/21", shellfish:true, ingredients:["Rigatoni","Ricotta","Lemon Zest","Basil","Baby Spinach","Shrimp","Brown Bread"]},
 {name:"Sheet Pan Sausage & Veggies", lastMade:"5/20", ingredients:["Kielbasa","Bell Peppers","Zucchini","Red Onion","French Bread"]},
 {name:"Burrito Bowls", lastMade:"5/11", ingredients:["Chicken","Hard Boiled Eggs","Rice","Black Beans","Avocado","Corn","Queso Fresco","Pickled Red Onion","Cilantro"]},
 {name:"Carnitas Nachos", lastMade:"5/3", ingredients:["Tortilla Chips","Carnitas","Black Olives","Refried Beans","Oaxaca Cheese","Monterey Jack"]},
 {name:"Rotisserie Chicken Sliders", lastMade:"5/7", ingredients:["Rotisserie Chicken","Hawaiian Rolls","Swiss Cheese","Chik-Fil-A Sauce","Pickles","Sweet Potato Fries"]},
 {name:"Carbonara", lastMade:"5/5", ingredients:["Bucatini","Pancetta","Pecorino Romano","Eggs"]},
 {name:"Flank Steak, Broccoli & Mashed Potato", lastMade:"4/29", ingredients:["Flank Steak","Broccoli","Mashed Potato"]},
 {name:"Slow Cooker Pot Roast", lastMade:"4/21", ingredients:["Chuck Roast","Fingerling Potatoes","Carrots","Yellow Onion","Horseradish Sauce","French Bread","Salad"]},
 {name:"Ham & Swiss Sliders", lastMade:"4/13", ingredients:["Ham","Swiss Cheese","Hawaiian Rolls","Pickles","Chik-Fil-A Sauce","Sweet Potato Fries"]},
 {name:"Brats & Dogs", lastMade:"4/12", ingredients:["Bratwurst","Hot Dogs","Buns","Relish","Sauerkraut","Fruit Salad","Chips"]},
 {name:"Steaks & Wedge Salad", lastMade:"3/22", ingredients:["Steak","Iceberg Lettuce","Sharp Cheddar","Bacon","Tomatoes","Fingerling Potatoes","French Bread"]},
 {name:"Rotisserie Chicken Tacos", lastMade:"3/2", ingredients:["Rotisserie Chicken","Corn Tortillas","Salsa","Sour Cream"]},
 {name:"Ribs, Coleslaw & Cornbread", lastMade:"3/1", ingredients:["Ribs","Coleslaw","Cornbread","Baked Beans"]},
 {name:"Chicken, Broccoli & Rice Bowls", lastMade:"2/17", ingredients:["Chicken","Broccoli","Rice","Honey Soy Sauce"]},
 {name:"Costco Tikka Masala, Rice & Naan", lastMade:"3/23", ingredients:["Tikka Masala Sauce","Rice","Naan","Broccoli"]},
 {name:"Burgers & Corn on the Cob", lastMade:"4/26", ingredients:["Ground Beef","Hamburger Buns","Corn on the Cob","Pasta Salad"]},
 {name:"Little Big Meal – Stir Fry Noodles", lastMade:"5/28", ingredients:["Rigatoni","Ground Beef","Broccoli"]},
 {name:"Little Big Meal – Crispy Chicken Cutlets", lastMade:"6/10", ingredients:["Chicken Cutlets","Rice","Broccoli"]},
 {name:"Mediterranean Skillet (Fresh Market)", lastMade:"4/15", ingredients:["Chicken","Rice","Feta","Tomatoes"]},
 {name:"Fresh Market Meatloaf", lastMade:"3/26", ingredients:["Ground Beef","Mashed Potato","Broccoli"]}
];

const MEAL_META = {
  "Lemon Parmesan Sausage Rigatoni with Kale": {kw:"creamy-pasta", tc:1},
  "Pulled Pork Paninis": {kw:"panini-sandwich", tc:1},
  "Smash Burgers": {kw:"smash-burger", tc:6},
  "Tik Tok Pasta (Baked Feta)": {kw:"baked-feta-pasta", tc:7},
  "Prosciutto Paninis": {kw:"prosciutto-sandwich", tc:1},
  "Chicken Spinach Orzo": {kw:"orzo", tc:6},
  "Butter Chicken": {kw:"butter-chicken", tc:2},
  "Pulled Pork Sandwiches": {kw:"pulled-pork", tc:2},
  "Vodka Sausage Rigatoni/Cellantini": {kw:"vodka-pasta", tc:5},
  "Stuffed Peppers": {kw:"stuffed-peppers", tc:3},
  "Greek Chicken Bowls": {kw:"greek-bowl", tc:3},
  "Chicken Parmesan (Little Big Meal)": {kw:"chicken-parmesan", tc:3},
  "Blackstone Breakfast": {kw:"breakfast-skillet", tc:1},
  "Grilled Skirt Steak": {kw:"grilled-steak", tc:1},
  "Protein Bowls": {kw:"rice-bowl", tc:3},
  "Korean Beef Bowls": {kw:"korean-beef-bowl", tc:2},
  "Korean Beef or Tikka Masala + Rice + Broccoli": {kw:"tikka-masala", tc:2},
  "Gyros": {kw:"gyro", tc:1},
  "Carnitas / Slow Cooker Pork Tacos": {kw:"carnitas-tacos", tc:3},
  "Lemon Spinach Ricotta Pasta w/ Shrimp": {kw:"shrimp-pasta", tc:1},
  "Sheet Pan Sausage & Veggies": {kw:"sausage-veggies", tc:1},
  "Burrito Bowls": {kw:"burrito-bowl", tc:3},
  "Carnitas Nachos": {kw:"nachos", tc:1},
  "Rotisserie Chicken Sliders": {kw:"chicken-sliders", tc:3},
  "Carbonara": {kw:"carbonara", tc:1},
  "Flank Steak, Broccoli & Mashed Potato": {kw:"flank-steak", tc:1},
  "Slow Cooker Pot Roast": {kw:"pot-roast", tc:1},
  "Ham & Swiss Sliders": {kw:"ham-sliders", tc:1},
  "Brats & Dogs": {kw:"bratwurst", tc:1},
  "Steaks & Wedge Salad": {kw:"wedge-salad-steak", tc:1},
  "Rotisserie Chicken Tacos": {kw:"chicken-tacos", tc:1},
  "Ribs, Coleslaw & Cornbread": {kw:"bbq-ribs", tc:1},
  "Chicken, Broccoli & Rice Bowls": {kw:"chicken-rice-bowl", tc:1},
  "Costco Tikka Masala, Rice & Naan": {kw:"tikka-masala", tc:2},
  "Burgers & Corn on the Cob": {kw:"burger-corn", tc:1},
  "Little Big Meal – Stir Fry Noodles": {kw:"stir-fry-noodles", tc:2},
  "Little Big Meal – Crispy Chicken Cutlets": {kw:"crispy-chicken-cutlet", tc:2},
  "Mediterranean Skillet (Fresh Market)": {kw:"mediterranean-skillet", tc:1},
  "Fresh Market Meatloaf": {kw:"meatloaf", tc:1}
};

function hashCode(str){
  let h = 0;
  for(let i=0;i<str.length;i++){
    h = (h*31 + str.charCodeAt(i)) >>> 0;
  }
  return h % 500;
}
function imageKeywordFor(meal){
  if(MEAL_META[meal.name]) return MEAL_META[meal.name].kw;
  const words = meal.name.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/).filter(Boolean);
  return words.slice(0,2).join('-') || 'homecooked-meal';
}
function timesCookedFor(meal){
  return (MEAL_META[meal.name] && MEAL_META[meal.name].tc) || 1;
}
function imageUrlFor(meal){
  return `https://loremflickr.com/400/300/${encodeURIComponent(imageKeywordFor(meal))}?lock=${hashCode(meal.id)}`;
}
function recencyValue(meal){
  if(!meal.lastMade) return -1;
  const parts = meal.lastMade.split('/');
  if(parts.length!==2) return -1;
  return parseInt(parts[0],10)*100 + parseInt(parts[1],10);
}

/* ---------- Persistence (localStorage) ---------- */
const LS_KEYS = {
  library:'mp_meal_library',
  plan:'mp_plan_ids',
  assignments:'mp_day_assignments',
  checked:'mp_checked_items'
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
}
function saveLibrary(){ saveJSON(LS_KEYS.library, meals); }
function savePlan(){ saveJSON(LS_KEYS.plan, [...planIds]); }
function saveAssignments(){ saveJSON(LS_KEYS.assignments, dayAssignments); }
function saveChecked(){ saveJSON(LS_KEYS.checked, [...checkedItems]); }

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

  if(sortBy==='recent') list.sort((a,b)=> recencyValue(b) - recencyValue(a));
  else if(sortBy==='oldest') list.sort((a,b)=> recencyValue(a) - recencyValue(b));
  else if(sortBy==='popular') list.sort((a,b)=> timesCookedFor(b) - timesCookedFor(a));
  else if(sortBy==='az') list.sort((a,b)=> a.name.localeCompare(b.name));

  grid.innerHTML = '';
  if(list.length===0){
    grid.innerHTML = '<p class="empty-note">No meals match that search.</p>';
    return;
  }

  list.forEach(m=>{
    const card = document.createElement('div');
    const selected = planIds.has(m.id);
    card.className = 'grid-card' + (selected ? ' selected' : '');
    const tc = timesCookedFor(m);
    card.innerHTML = `
      <div class="gc-image-wrap">
        <img src="${imageUrlFor(m)}" alt="${m.name}" loading="lazy" onerror="this.style.display='none'">
      </div>
      <div class="gc-add-btn" title="${selected ? 'Remove from plan' : 'Add to plan'}">${selected ? '✓' : '+'}</div>
      <div class="gc-body">
        <p class="gc-name">${m.name}</p>
        <p class="gc-ingredients">${m.ingredients.join(', ')}</p>
        <div class="gc-meta">
          ${m.lastMade ? `<span class="tag tag-last">Last made ${m.lastMade}</span>` : ''}
          <span class="tag tag-pop">Made ${tc}×</span>
          ${m.shellfish ? `<span class="tag tag-shellfish">Shellfish</span>` : ''}
        </div>
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
const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

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

function buildPlanCard(meal, assignedDay){
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
    const wrap = document.createElement('div');
    wrap.className = 'day-col-wrap';
    wrap.innerHTML = `<div class="day-col-head"><span>${name}</span><span class="day-date">${formatDate(weekDates[i])}</span></div>`;
    const col = document.createElement('div');
    col.className = 'day-column';
    col.dataset.day = i;
    setupDropZone(col, i);
    planMeals.filter(m=>dayAssignments[m.id]===i).forEach(m=>{
      col.appendChild(buildPlanCard(m, i));
    });
    wrap.appendChild(col);
    scheduleGrid.appendChild(wrap);
  });

  unscheduledColumn.innerHTML = '';
  setupDropZone(unscheduledColumn, null);
  const unscheduled = planMeals.filter(m=> dayAssignments[m.id]===undefined || dayAssignments[m.id]===null);
  unscheduled.forEach(m=> unscheduledColumn.appendChild(buildPlanCard(m, null)));

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

document.getElementById('clearBtn').addEventListener('click', ()=>{
  if(!confirm('Clear all meals from this week\'s plan?')) return;
  planIds = new Set();
  dayAssignments = {};
  checkedItems = new Set();
  savePlan();
  saveAssignments();
  saveChecked();
  render();
});

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

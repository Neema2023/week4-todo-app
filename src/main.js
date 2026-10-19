
import './style.css'

// Keep icons as trusted SVG markup; no icon library is required.
const iconPaths = {
  dashboard: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
  tasks: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 9 1.5 1.5L12 8"/><path d="M14 10h2M8 15h8"/>',
  orders: '<path d="M6 3h12l2 3v15H4V6l2-3Z"/><path d="M4 7h16M8 11h8M8 15h8"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h3M8 17h6"/>',
  tables: '<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  inventory: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5M12 13v8"/>',
  staff: '<circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M17 5a4 4 0 0 1 0 7M18 15a6 6 0 0 1 4 6"/>',
  reports: '<path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 5-7"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.8-.6a8 8 0 0 1-1.7 1l-.3 1.9h-2.8l-.3-1.9a8 8 0 0 1-1.7-1l-1.8.6-1.4-2.4 1.4-1.2a7 7 0 0 1 0-2l-1.4-1.2 1.4-2.4 1.8.6a8 8 0 0 1 1.7-1l.3-1.9h2.8l.3 1.9a8 8 0 0 1 1.7 1l1.8-.6 1.4 2.4-1.4 1.2a7 7 0 0 1-.1 2Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
  moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  arrow: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2m-10 0 1 15h10l1-15M10 10v7m4-7v7"/>',
  edit: '<path d="m15 5 4 4M4 20l4-.8L19 8a2.8 2.8 0 0 0-4-4L4 15l0 5Z"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  fork: '<path d="M6 3v6a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v6M6 3v18M18 3v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>'
}

// Return a small inline SVG for a named icon.
function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.dashboard}</svg>`
}

// Fixed photography URLs used by the app. Task text never controls image URLs.
const photos = {
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
  table: 'https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?auto=format&fit=crop&w=900&q=80',
  chicken: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80',
  pasta: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80',
  juice: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80',
  cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
  salad: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
  coffee: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80'
}

// Create the shared dashboard shell.
const app = document.querySelector('#app')

app.innerHTML = `
<div class="min-h-screen bg-[#f5f7f5] text-slate-800 dark:bg-[#101713] dark:text-slate-100">
  <button id="sidebar-backdrop" class="sidebar-backdrop" type="button" aria-label="Close navigation"></button>

  <aside id="app-sidebar" class="sidebar-panel fixed inset-y-0 left-0 z-40 w-[264px] flex-col border-r border-slate-200 bg-white px-5 py-6 dark:border-slate-800 dark:bg-[#151e19]">
    <button type="button" data-page="dashboard" class="brand-button mb-8">
      <span class="brand-mark">${icon('fork', 25)}</span>
      <span><span class="block text-xl font-extrabold">RestoFlow</span><span class="block text-xs text-slate-500 dark:text-slate-400">Restaurant operations</span></span>
    </button>

    <p class="nav-section-label">WORKSPACE</p>
    <nav id="sidebar-nav" class="space-y-1" aria-label="Restaurant navigation">
      <button type="button" data-page="dashboard" class="nav-link">${icon('dashboard')}<span>Dashboard</span></button>
      <button type="button" data-page="tasks" class="nav-link">${icon('tasks')}<span>Task Manager</span><span id="nav-tasks-count" class="nav-count">0</span></button>
      <button type="button" data-page="orders" class="nav-link">${icon('orders')}<span>Orders</span><span id="nav-orders-count" class="nav-count">0</span></button>
      <button type="button" data-page="reservations" class="nav-link">${icon('calendar')}<span>Reservations</span></button>
      <button type="button" data-page="tables" class="nav-link">${icon('tables')}<span>Tables</span></button>
      <button type="button" data-page="menu" class="nav-link">${icon('fork')}<span>Food menu</span></button>
      <button type="button" data-page="inventory" class="nav-link">${icon('inventory')}<span>Inventory</span><span id="nav-stock-count" class="nav-count">0</span></button>
      <button type="button" data-page="staff" class="nav-link">${icon('staff')}<span>Staff</span></button>
      <button type="button" data-page="reports" class="nav-link">${icon('reports')}<span>Reports</span></button>
    </nav>

    <div class="my-6 border-t border-slate-100 dark:border-slate-800"></div>
    <p class="nav-section-label">PREFERENCES</p>
    <button type="button" data-page="settings" class="nav-link">${icon('settings')}<span>Settings</span></button>

    <div class="mt-auto pt-8">
      <div class="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/40">
        <div class="mb-3 flex items-center justify-between gap-2">
          <p class="text-sm font-bold text-emerald-950 dark:text-emerald-100">Shift progress</p>
          <span id="sidebar-progress-percent" class="text-sm font-extrabold text-emerald-800 dark:text-emerald-300">0%</span>
        </div>
        <div class="h-2 overflow-hidden rounded-full bg-emerald-200 dark:bg-emerald-900"><div id="sidebar-progress-bar" class="h-full w-0 rounded-full bg-emerald-700 transition-all dark:bg-emerald-400"></div></div>
        <p class="mt-3 text-xs leading-5 text-emerald-900/70 dark:text-emerald-200/70">Track tasks completed during the shift.</p>
      </div>
      <p class="mt-5 text-center text-[10px] text-slate-400">RESTOFLOW · LOCAL DEMO</p>
    </div>
  </aside>

  <div class="min-h-screen lg:ml-[264px]">
    <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-[#151e19]/95">
      <div class="flex min-h-[76px] items-center gap-3 px-3 sm:px-6 lg:px-9">
        <button id="menu-toggle" type="button" class="mobile-menu-button lg:hidden" aria-label="Open navigation menu" aria-expanded="false">${icon('menu', 19)}<span>Menu</span></button>
        <div class="hidden shrink-0 md:block"><p class="text-xs text-slate-400">Restaurant workspace</p><h1 id="page-title" class="mt-1 text-base font-extrabold">Dashboard</h1></div>
        <div class="dashboard-search ml-auto flex min-w-0 max-w-md flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-slate-700 dark:bg-slate-900">
          ${icon('search', 18)}
          <label for="global-search" class="sr-only">Search current page</label>
          <input id="global-search" type="search" placeholder="Search current page..." autocomplete="off" class="min-w-0 w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
          <kbd class="hidden rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400 sm:block dark:border-slate-700 dark:bg-slate-800">/</kbd>
        </div>
        <button id="theme-toggle" type="button" class="theme-button" aria-label="Switch to dark mode"><span id="theme-icon">${icon('moon', 17)}</span><span id="theme-label" class="hidden sm:inline">Dark mode</span></button>
      </div>
    </header>
    <main id="page-content" class="mx-auto max-w-[1600px] px-4 py-6 sm:px-7 sm:py-8 lg:px-9"></main>
    <footer class="flex flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-slate-400 sm:flex-row"><span>RestoFlow · Restaurant Task Manager</span><span>Local demo — data stays in this browser</span></footer>
  </div>
</div>
`

// Select shared interface controls.
const pageContent = document.querySelector('#page-content')
const sidebar = document.querySelector('#app-sidebar')
const backdrop = document.querySelector('#sidebar-backdrop')
const menuToggle = document.querySelector('#menu-toggle')
const searchInput = document.querySelector('#global-search')
const themeToggle = document.querySelector('#theme-toggle')
const themeIcon = document.querySelector('#theme-icon')
const themeLabel = document.querySelector('#theme-label')

// Generate a unique local ID for a record.
function makeId(prefix = 'item') {
  if (globalThis.crypto && typeof crypto.randomUUID === 'function') return `${prefix}-${crypto.randomUUID()}`
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

// Return a date string offset by a number of days.
function dateOffset(days = 0) {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

// Read browser storage safely.
function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value === null ? fallback : value
  } catch {
    return fallback
  }
}

// Write browser storage safely.
function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    console.error('Could not save local data. Check browser storage settings.')
  }
}

// Load a collection from localStorage or seed it with sample records.
function loadCollection(key, initialRecords = []) {
  try {
    const stored = localStorage.getItem(`restoflow-${key}`)
    if (stored !== null) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed)) return parsed
    }
  } catch {
    console.warn(`Could not load ${key}; using sample data.`)
  }
  const result = JSON.parse(JSON.stringify(initialRecords))
  writeStorage(`restoflow-${key}`, JSON.stringify(result))
  return result
}

// Save a collection as JSON.
function saveCollection(key, records) {
  writeStorage(`restoflow-${key}`, JSON.stringify(records))
}

// Create the task collection.
const tasks = loadCollection('tasks', [])

// Create local demo data for the other restaurant pages.
const orders = loadCollection('orders', [
  { id: 'ORD-1001', customer: 'Walk-in guest', details: 'Grilled chicken and juice', table: 'T1', total: 14500, status: 'Preparing', createdAt: Date.now(), image: 'chicken' },
  { id: 'ORD-1002', customer: 'Table 3', details: 'Vegetable pasta', table: 'T3', total: 9000, status: 'Pending', createdAt: Date.now() - 60000, image: 'pasta' },
  { id: 'ORD-1003', customer: 'Pickup guest', details: 'Coffee and cake', table: 'Pickup', total: 7500, status: 'Ready', createdAt: Date.now() - 120000, image: 'coffee' }
])

const reservations = loadCollection('reservations', [
  { id: makeId('res'), name: 'Alex M.', date: dateOffset(0), time: '18:00', guests: 4, status: 'Booked' },
  { id: makeId('res'), name: 'Jordan K.', date: dateOffset(1), time: '19:00', guests: 2, status: 'Booked' }
])

const tables = loadCollection('tables', [
  { id: 'table-1', number: 1, seats: 2, status: 'Available' },
  { id: 'table-2', number: 2, seats: 2, status: 'Occupied' },
  { id: 'table-3', number: 3, seats: 4, status: 'Reserved' },
  { id: 'table-4', number: 4, seats: 4, status: 'Available' },
  { id: 'table-5', number: 5, seats: 6, status: 'Available' },
  { id: 'table-6', number: 6, seats: 2, status: 'Occupied' }
])

const menuItems = loadCollection('menu', [
  { id: makeId('dish'), name: 'Grilled Chicken', category: 'Main course', price: 12000, available: true, image: 'chicken' },
  { id: makeId('dish'), name: 'Vegetable Pasta', category: 'Main course', price: 9000, available: true, image: 'pasta' },
  { id: makeId('dish'), name: 'Fresh Juice', category: 'Drinks', price: 3000, available: true, image: 'juice' },
  { id: makeId('dish'), name: 'Chocolate Cake', category: 'Dessert', price: 4500, available: false, image: 'cake' }
])

const inventory = loadCollection('inventory', [
  { id: makeId('stock'), name: 'Rice', quantity: 18, unit: 'kg', minimum: 5 },
  { id: makeId('stock'), name: 'Cooking oil', quantity: 3, unit: 'litres', minimum: 5 },
  { id: makeId('stock'), name: 'Coffee beans', quantity: 7, unit: 'kg', minimum: 2 },
  { id: makeId('stock'), name: 'Milk', quantity: 2, unit: 'litres', minimum: 4 }
])

const staff = loadCollection('staff', [
  { id: makeId('staff'), name: 'Aline', role: 'Restaurant manager', shift: 'Morning', onDuty: true },
  { id: makeId('staff'), name: 'Eric', role: 'Chef', shift: 'Evening', onDuty: true },
  { id: makeId('staff'), name: 'Maya', role: 'Server', shift: 'Evening', onDuty: false }
])

const pageNames = ['dashboard', 'tasks', 'orders', 'reservations', 'tables', 'menu', 'inventory', 'staff', 'reports', 'settings']
const pageLabels = {
  dashboard: 'Dashboard', tasks: 'Task Manager', orders: 'Orders',
  reservations: 'Reservations', tables: 'Tables', menu: 'Food Menu',
  inventory: 'Inventory', staff: 'Staff', reports: 'Reports', settings: 'Settings'
}

let currentPage = pageNames.includes(readStorage('restoflow-page', 'dashboard')) ? readStorage('restoflow-page', 'dashboard') : 'dashboard'
let currentFilter = ['all', 'active', 'completed'].includes(readStorage('restoflow-filter', 'all')) ? readStorage('restoflow-filter', 'all') : 'all'
let currentSort = ['recent', 'priority'].includes(readStorage('restoflow-sort', 'recent')) ? readStorage('restoflow-sort', 'recent') : 'recent'
let searchQuery = ''
let editingTaskId = null
let isDarkMode = readStorage('restoflow-theme', 'light') === 'dark'

// Create a text element safely.
function el(tag, className = '', text = '') {
  const node = document.createElement(tag)
  if (className) node.className = className
  node.textContent = String(text)
  return node
}

// Create an image using a fixed, trusted local mapping of image keys.
function createPhoto(key, alt, className = 'food-thumbnail') {
  const image = document.createElement('img')
  image.src = photos[key] || photos.salad
  image.alt = alt
  image.loading = 'lazy'
  image.className = className
  image.addEventListener('error', () => image.classList.add('image-unavailable'), { once: true })
  return image
}

// Return the image key based on a known menu category or dish.
function photoKeyFor(item) {
  if (item.image && photos[item.image]) return item.image
  const text = `${item.name || ''} ${item.category || ''}`.toLowerCase()
  if (text.includes('chicken') || text.includes('meat') || text.includes('grill')) return 'chicken'
  if (text.includes('pasta') || text.includes('noodle')) return 'pasta'
  if (text.includes('juice') || text.includes('drink')) return 'juice'
  if (text.includes('cake') || text.includes('dessert')) return 'cake'
  if (text.includes('coffee')) return 'coffee'
  if (text.includes('main')) return 'pasta'
  return 'salad'
}

// Create a text label with a colored status.
function statusBadge(status) {
  const map = {
    Pending: 'status-pending', Preparing: 'status-preparing', Ready: 'status-ready',
    Served: 'status-complete', Booked: 'status-preparing', Seated: 'status-ready',
    Available: 'status-ready', Occupied: 'status-pending', Reserved: 'status-preparing',
    Cancelled: 'status-cancelled', 'Low stock': 'status-pending', 'In stock': 'status-ready',
    'On duty': 'status-ready', 'Off duty': 'status-cancelled'
  }
  const labels = { AvailableMenu: 'Available', UnavailableMenu: 'Unavailable' }
  return el('span', `status-pill ${map[status] || ''}`, labels[status] || status)
}

// Create a button with an optional SVG and a data-action for event delegation.
function actionButton(label, action, id, className = 'btn-secondary', iconName = '') {
  const button = el('button', className, '')
  button.type = 'button'
  button.dataset.action = action
  if (id !== undefined) button.dataset.id = String(id)
  if (iconName) button.innerHTML = icon(iconName, 15)
  button.append(document.createTextNode(` ${label}`))
  button.setAttribute('aria-label', id !== undefined ? `${label} ${id}` : label)
  return button
}

// Create a record heading with safe text insertion.
function recordHeading(title, subtitle, status) {
  const header = el('div', 'record-card-heading')
  const detail = el('div', 'min-w-0')
  detail.append(el('h3', 'record-title', title), el('p', 'record-subtitle', subtitle))
  header.append(detail, statusBadge(status))
  return header
}

// Create a reusable record card.
function recordCard(title, subtitle, status, actions = []) {
  const card = el('article', 'record-card')
  card.append(recordHeading(title, subtitle, status))
  if (actions.length) {
    const footer = el('div', 'record-actions')
    actions.forEach((action) => footer.append(action))
    card.append(footer)
  }
  return card
}

// Return a section heading for a page.
function pageHeading(kicker, title, description, extra = '') {
  const section = el('section', 'mb-7')
  const label = el('p', 'eyebrow', kicker)
  const heading = el('h2', 'page-title', title)
  const subtitle = el('p', 'page-description', description)
  section.append(label, heading, subtitle)
  if (extra) {
    const holder = el('div', 'mt-4')
    holder.innerHTML = extra
    section.append(holder)
  }
  return section
}

// Build the dashboard page.
function dashboardTemplate() {
  return `
    <section class="hero-photo relative mb-7 overflow-hidden rounded-3xl">
      <img src="${photos.restaurant}" class="hero-photo-image" alt="Warm, welcoming restaurant dining room" />
      <div class="hero-photo-overlay"></div>
      <div class="relative z-10 max-w-2xl p-6 text-white sm:p-10">
        <p class="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-100">RESTAURANT OPERATIONS</p>
        <h2 class="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">Every shift,<br/>under control.</h2>
        <p class="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:text-base">Manage restaurant tasks, orders, bookings, tables and kitchen stock in one workspace.</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <button class="btn-white" data-page="tasks">${icon('tasks', 17)} Open task manager</button>
          <button class="btn-glass" data-page="orders">${icon('orders', 17)} View orders</button>
        </div>
      </div>
    </section>

    <section class="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Restaurant statistics">
      <article class="stat-card">${icon('tasks', 22)}<p class="stat-label mt-3">Tasks remaining</p><p id="dash-tasks" class="stat-number">0</p><p class="stat-caption">Uncompleted shift tasks</p></article>
      <article class="stat-card">${icon('orders', 22)}<p class="stat-label mt-3">Open orders</p><p id="dash-orders" class="stat-number">0</p><p class="stat-caption">Waiting to be served</p></article>
      <article class="stat-card">${icon('calendar', 22)}<p class="stat-label mt-3">Today's reservations</p><p id="dash-reservations" class="stat-number">0</p><p class="stat-caption">Bookings for today</p></article>
      <article class="stat-card">${icon('inventory', 22)}<p class="stat-label mt-3">Low stock items</p><p id="dash-stock" class="stat-number">0</p><p class="stat-caption">Supplies to check</p></article>
    </section>

    <section class="mb-7">
      <div class="mb-4"><p class="eyebrow">MENU HIGHLIGHTS</p><h2 class="section-title">Popular dishes</h2></div>
      <div id="dashboard-food-grid" class="food-grid"></div>
    </section>

    <section class="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <article class="app-panel"><div class="panel-heading"><div><h3>Recent tasks</h3><p>Things the team needs to complete</p></div><button class="btn-secondary" data-page="tasks">All tasks ${icon('arrow', 14)}</button></div><ul id="dash-task-list" class="record-list"></ul></article>
      <article class="app-panel"><div class="panel-heading"><div><h3>Recent orders</h3><p>Local order overview</p></div><button class="btn-secondary" data-page="orders">All orders ${icon('arrow', 14)}</button></div><div id="dash-order-list" class="record-list"></div></article>
    </section>`
}

// Build the task manager page.
function tasksTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">DAILY CHECKLIST</p><h2 class="page-title">Restaurant Task Manager</h2><p class="page-description">Add, complete, edit and organize the work your restaurant team needs to do.</p></section>
    <section class="app-panel mb-6">
      <div class="panel-heading"><div><h3>Create a task</h3><p>Task descriptions must contain 1–100 characters.</p></div></div>
      <form id="task-form" class="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_180px_auto] md:items-end">
        <div><label class="form-label" for="task-input">Task description</label><input id="task-input" class="form-control w-full" placeholder="e.g. Prepare the dining tables" autocomplete="off" aria-describedby="task-error" /></div>
        <div><label class="form-label" for="task-priority">Priority</label><select id="task-priority" class="form-control w-full"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select></div>
        <button class="btn-primary" type="submit">${icon('plus', 17)} Add task</button>
      </form>
      <p id="task-error" class="mt-3 hidden text-sm font-semibold text-red-600 dark:text-red-400" role="alert" aria-live="polite"></p>
    </section>
    <section class="app-panel">
      <div class="panel-heading"><div><h3>Your tasks</h3><p>Double-click a task to edit, or use its Edit button.</p></div><button id="clear-completed" class="btn-danger" type="button">${icon('trash', 15)} Clear completed</button></div>
      <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap gap-2" role="group" aria-label="Filter tasks">
          <button type="button" data-task-filter="all" class="filter-tab">All</button>
          <button type="button" data-task-filter="active" class="filter-tab">Active</button>
          <button type="button" data-task-filter="completed" class="filter-tab">Completed</button>
        </div>
        <div class="flex items-center gap-2"><label for="task-sort" class="text-xs font-bold text-slate-500">Sort by</label><select id="task-sort" class="form-control"><option value="recent">Newest first</option><option value="priority">Priority</option></select></div>
      </div>
      <ul id="task-list" class="space-y-3" aria-label="Restaurant tasks"></ul>
      <div id="task-empty" class="empty-state"><span class="empty-symbol">${icon('check', 25)}</span><h3 id="task-empty-title">Your task list is clear</h3><p id="task-empty-description">Add your first restaurant task above.</p></div>
      <div class="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"><p id="task-counter" class="text-sm font-bold">0 tasks left</p></div>
    </section>`
}

// Build the orders page.
function ordersTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">FRONT OF HOUSE</p><h2 class="page-title">Orders</h2><p class="page-description">Create and track dine-in, takeaway and pickup orders. Changes are saved in this browser.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Create an order</h3><p>Enter the customer, order details, table and total.</p></div></div>
      <form id="order-form" class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div><label class="form-label" for="order-customer">Customer / order name</label><input id="order-customer" class="form-control w-full" required placeholder="Walk-in guest"/></div>
        <div><label class="form-label" for="order-details">Items ordered</label><input id="order-details" class="form-control w-full" required placeholder="Chicken and juice"/></div>
        <div><label class="form-label" for="order-table">Table / type</label><input id="order-table" class="form-control w-full" required placeholder="Table 4 or Pickup"/></div>
        <div><label class="form-label" for="order-total">Total amount (RWF)</label><input id="order-total" type="number" min="0" step="1" class="form-control w-full" required placeholder="12000"/></div>
        <div class="md:col-span-2 xl:col-span-4"><button type="submit" class="btn-primary">${icon('plus', 16)} Create order</button><p id="order-error" class="mt-2 hidden text-sm text-red-600" role="alert"></p></div>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Order board</h3><p>Advance an order from Pending to Preparing, Ready and Served.</p></div><span id="order-page-count" class="pill">0 orders</span></div><div id="orders-list" class="record-list"></div><div id="orders-empty" class="empty-state hidden">No matching orders.</div></section>`
}

// Build the reservations page.
function reservationsTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">GUEST EXPERIENCE</p><h2 class="page-title">Reservations</h2><p class="page-description">Track bookings, times and guest numbers.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Book a table</h3><p>Create a local reservation for a guest.</p></div></div>
      <form id="reservation-form" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div><label class="form-label" for="reservation-name">Guest name</label><input id="reservation-name" class="form-control w-full" required placeholder="Guest name"/></div>
        <div><label class="form-label" for="reservation-date">Date</label><input id="reservation-date" type="date" class="form-control w-full" required/></div>
        <div><label class="form-label" for="reservation-time">Time</label><input id="reservation-time" type="time" class="form-control w-full" required/></div>
        <div><label class="form-label" for="reservation-guests">Guests</label><input id="reservation-guests" type="number" min="1" max="50" class="form-control w-full" required value="2"/></div>
        <div class="sm:col-span-2 xl:col-span-4"><button type="submit" class="btn-primary">${icon('plus', 16)} Add reservation</button><p id="reservation-error" class="mt-2 hidden text-sm text-red-600" role="alert"></p></div>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Bookings</h3><p>Mark guests as seated or remove a booking.</p></div></div><div id="reservations-list" class="record-list"></div><div id="reservations-empty" class="empty-state hidden">No reservations found.</div></section>`
}

// Build the tables page.
function tablesTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">DINING ROOM</p><h2 class="page-title">Tables</h2><p class="page-description">Track available, occupied and reserved tables.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Add a table</h3><p>Enter a table number and its seating capacity.</p></div></div>
      <form id="table-form" class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div><label class="form-label" for="table-number">Table number</label><input id="table-number" type="number" min="1" class="form-control w-full" required placeholder="7"/></div>
        <div><label class="form-label" for="table-seats">Seats</label><input id="table-seats" type="number" min="1" max="30" value="4" class="form-control w-full" required/></div>
        <div class="flex items-end"><button type="submit" class="btn-primary w-full">${icon('plus', 16)} Add table</button></div>
        <p id="table-error" class="hidden text-sm text-red-600 sm:col-span-3" role="alert"></p>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Table layout</h3><p>Change a table between Available, Occupied and Reserved.</p></div></div><div id="tables-list" class="table-grid"></div><div id="tables-empty" class="empty-state hidden">No tables have been added yet.</div></section>`
}

// Build the food menu page.
function menuTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">FOOD & DRINKS</p><h2 class="page-title">Food menu</h2><p class="page-description">Manage dishes, prices, categories, photos and availability.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Add a menu item</h3><p>Enter a dish name, category and price.</p></div></div>
      <form id="menu-form" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div><label class="form-label" for="menu-name">Item name</label><input id="menu-name" class="form-control w-full" required placeholder="Grilled fish"/></div>
        <div><label class="form-label" for="menu-category">Category</label><select id="menu-category" class="form-control w-full"><option>Main course</option><option>Starter</option><option>Drinks</option><option>Dessert</option><option>Other</option></select></div>
        <div><label class="form-label" for="menu-price">Price (RWF)</label><input id="menu-price" type="number" min="0" step="1" class="form-control w-full" required placeholder="8500"/></div>
        <div class="flex items-end"><button type="submit" class="btn-primary w-full">${icon('plus', 16)} Add item</button></div>
        <p id="menu-error" class="hidden text-sm text-red-600 sm:col-span-2 xl:col-span-4" role="alert"></p>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Menu items</h3><p>Toggle a dish when it's sold out or available again.</p></div></div><div id="menu-list" class="food-grid"></div><div id="menu-empty" class="empty-state hidden">No menu items found.</div></section>`
}

// Build the inventory page.
function inventoryTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">KITCHEN & SUPPLIES</p><h2 class="page-title">Inventory</h2><p class="page-description">Track supplies and identify items that need restocking.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Add inventory item</h3><p>Set stock quantity and a minimum level.</p></div></div>
      <form id="inventory-form" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div><label class="form-label" for="stock-name">Item name</label><input id="stock-name" class="form-control w-full" required placeholder="Flour"/></div>
        <div><label class="form-label" for="stock-quantity">Current quantity</label><input id="stock-quantity" type="number" min="0" step="0.1" class="form-control w-full" required value="0"/></div>
        <div><label class="form-label" for="stock-unit">Unit</label><input id="stock-unit" class="form-control w-full" required placeholder="kg, litres, packs"/></div>
        <div><label class="form-label" for="stock-minimum">Minimum quantity</label><input id="stock-minimum" type="number" min="0" step="0.1" class="form-control w-full" required value="2"/></div>
        <div class="sm:col-span-2 xl:col-span-4"><button type="submit" class="btn-primary">${icon('plus', 16)} Add inventory item</button><p id="stock-error" class="mt-2 hidden text-sm text-red-600" role="alert"></p></div>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Stock levels</h3><p>Use the plus and minus controls to update stock.</p></div><span id="low-stock-count" class="pill">0 low stock</span></div><div id="inventory-list" class="record-list"></div><div id="inventory-empty" class="empty-state hidden">No inventory items found.</div></section>`
}

// Build the staff page.
function staffTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">TEAM MANAGEMENT</p><h2 class="page-title">Staff</h2><p class="page-description">Maintain a local list of team members, roles and shifts.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Add a team member</h3><p>This is a local demo roster, not a login or payroll system.</p></div></div>
      <form id="staff-form" class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div><label class="form-label" for="staff-name">Full name</label><input id="staff-name" class="form-control w-full" required placeholder="Name"/></div>
        <div><label class="form-label" for="staff-role">Role</label><select id="staff-role" class="form-control w-full"><option>Manager</option><option>Chef</option><option>Server</option><option>Cashier</option><option>Cleaner</option><option>Other</option></select></div>
        <div><label class="form-label" for="staff-shift">Shift</label><select id="staff-shift" class="form-control w-full"><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Flexible</option></select></div>
        <div class="sm:col-span-3"><button type="submit" class="btn-primary">${icon('plus', 16)} Add team member</button><p id="staff-error" class="mt-2 hidden text-sm text-red-600" role="alert"></p></div>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Team roster</h3><p>Mark who is currently on duty.</p></div></div><div id="staff-list" class="record-list"></div><div id="staff-empty" class="empty-state hidden">No team members found.</div></section>`
}

// Build the reports page.
function reportsTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">RESTAURANT OVERVIEW</p><h2 class="page-title">Reports</h2><p class="page-description">Summaries calculated from data saved in this browser.</p></section>
    <section class="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article class="stat-card"><p class="stat-label">Order value</p><p id="report-sales" class="stat-number">0 RWF</p><p class="stat-caption">Total of recorded demo orders</p></article>
      <article class="stat-card"><p class="stat-label">Tasks completed</p><p id="report-tasks" class="stat-number">0%</p><p class="stat-caption">Share marked complete</p></article>
      <article class="stat-card"><p class="stat-label">Tables available</p><p id="report-tables" class="stat-number">0</p><p class="stat-caption">Currently marked available</p></article>
      <article class="stat-card"><p class="stat-label">Staff on duty</p><p id="report-staff" class="stat-number">0</p><p class="stat-caption">Local roster members</p></article>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Local data summary</h3><p>These figures are not connected to real payments or restaurant services.</p></div></div><div id="report-breakdown" class="report-breakdown"></div></section>`
}

// Build the settings page.
function settingsTemplate() {
  return `
    <section class="mb-7"><p class="eyebrow">APPLICATION PREFERENCES</p><h2 class="page-title">Settings</h2><p class="page-description">Manage the theme and local demo records.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Appearance</h3><p>Choose a visual theme for this browser.</p></div></div><div class="setting-row"><div><h4>Dark mode</h4><p>Remember your theme preference after a refresh.</p></div><button id="settings-theme-toggle" class="btn-secondary" type="button">Toggle theme</button></div></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Local storage</h3><p>Your data stays in this browser. Clearing site data may remove it.</p></div><span class="pill">Static app</span></div><div class="setting-row"><div><h4>Saved records</h4><p id="settings-record-count">0 records stored</p></div><button id="refresh-local-data" class="btn-secondary" type="button">Refresh summary</button></div></section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Reset demo data</h3><p>Restore sample orders, reservations, tables, menu, inventory and staff. Tasks will be cleared.</p></div></div><button id="reset-demo-data" class="btn-danger" type="button">${icon('trash', 16)} Reset local data</button></section>`
}

// Return the template for each named page.
function getPageTemplate(page) {
  const templates = {
    dashboard: dashboardTemplate,
    tasks: tasksTemplate,
    orders: ordersTemplate,
    reservations: reservationsTemplate,
    tables: tablesTemplate,
    menu: menuTemplate,
    inventory: inventoryTemplate,
    staff: staffTemplate,
    reports: reportsTemplate,
    settings: settingsTemplate
  }
  return templates[page] ? templates[page]() : dashboardTemplate()
}

// Navigate to a page and store the selection.
function navigate(page) {
  if (!pageNames.includes(page)) return
  currentPage = page
  searchQuery = ''
  searchInput.value = ''
  editingTaskId = null
  writeStorage('restoflow-page', page)
  closeMobileSidebar()
  renderPage()
}



// Update the counts in the persistent sidebar.
function updateSidebarCounts() {
  document.querySelector('#nav-tasks-count').textContent = String(tasks.filter((task) => !task.done).length)
  document.querySelector('#nav-orders-count').textContent = String(orders.filter((order) => order.status !== 'Served').length)
  document.querySelector('#nav-stock-count').textContent = String(inventory.filter((item) => Number(item.quantity) <= Number(item.minimum)).length)
  const done = tasks.filter((task) => task.done).length
  const progress = tasks.length ? Math.round(done / tasks.length * 100) : 0
  document.querySelector('#sidebar-progress-percent').textContent = `${progress}%`
  document.querySelector('#sidebar-progress-bar').style.width = `${progress}%`
}

// Show the selected page and render its data.
function renderPage() {
  pageContent.innerHTML = getPageTemplate(currentPage)
  updateNavigation()
  updateSidebarCounts()

  const renderers = {
    dashboard: renderDashboard,
    tasks: renderTaskList,
    orders: renderOrders,
    reservations: renderReservations,
    tables: renderTables,
    menu: renderMenu,
    inventory: renderInventory,
    staff: renderStaff,
    reports: renderReports,
    settings: renderSettings
  }
  renderers[currentPage]()
  preparePageInputs()
}

// Set helpful default values for date controls.
function preparePageInputs() {
  const date = document.querySelector('#reservation-date')
  if (date) date.value = dateOffset(0)
  const sort = document.querySelector('#task-sort')
  if (sort) sort.value = currentSort
}

// Update the dashboard summary and recent lists.
function renderDashboard() {
  document.querySelector('#dash-tasks').textContent = String(tasks.filter((task) => !task.done).length)
  document.querySelector('#dash-orders').textContent = String(orders.filter((order) => order.status !== 'Served').length)
  document.querySelector('#dash-reservations').textContent = String(reservations.filter((item) => item.date === dateOffset(0)).length)
  document.querySelector('#dash-stock').textContent = String(inventory.filter((item) => Number(item.quantity) <= Number(item.minimum)).length)

  const foods = menuItems.filter((item) => item.available).slice(0, 4)
  const foodGrid = document.querySelector('#dashboard-food-grid')
  foodGrid.replaceChildren()
  for (const item of foods) foodGrid.append(createFoodCard(item, false))

  const taskList = document.querySelector('#dash-task-list')
  taskList.replaceChildren()
  const recentTasks = tasks.filter((task) => !searchQuery || task.text.toLowerCase().includes(searchQuery)).slice(0, 5)
  if (!recentTasks.length) taskList.append(el('li', 'muted-line', 'No tasks yet. Open Task Manager to add one.'))

  for (const task of recentTasks) {
    const row = el('li', 'preview-row')
    row.append(el('span', task.done ? 'line-through text-slate-400' : 'font-semibold', task.text))
    row.append(actionButton('Open', 'open-tasks'))
    taskList.append(row)
  }

  const orderList = document.querySelector('#dash-order-list')
  orderList.replaceChildren()
  const recentOrders = orders.filter((order) => `${order.customer} ${order.details} ${order.id}`.toLowerCase().includes(searchQuery)).slice(0, 4)
  if (!recentOrders.length) orderList.append(el('p', 'muted-line', 'No orders match your search.'))

  for (const order of recentOrders) {
    const row = el('div', 'preview-row')
    const thumbnail = createPhoto(order.image || photoKeyFor(order), `Food for order ${order.id}`, 'order-thumbnail')
    const detail = el('div', 'min-w-0 flex-1')
    detail.append(el('p', 'font-bold', order.customer), el('p', 'record-subtitle', `${order.id} · ${order.details}`))
    row.append(thumbnail, detail, statusBadge(order.status))
    orderList.append(row)
  }
}

// Show the appropriate task priority badge.
function priorityBadge(priority) {
  return el('span', `priority-badge priority-${priority}`, `${priority} priority`)
}

// Show a category's recommended dish image.
function imageKeyForMenu(item) {
  if (item.image && photos[item.image]) return item.image
  const words = `${item.name} ${item.category}`.toLowerCase()
  if (words.includes('chicken') || words.includes('grill') || words.includes('meat')) return 'chicken'
  if (words.includes('pasta') || words.includes('noodle')) return 'pasta'
  if (words.includes('juice') || words.includes('drink')) return 'juice'
  if (words.includes('coffee')) return 'coffee'
  if (words.includes('cake') || words.includes('dessert')) return 'cake'
  return 'salad'
}

// Render one photo-led dish card.
function createFoodCard(item, includeActions = true) {
  const card = el('article', 'food-card')
  card.append(createPhoto(imageKeyForMenu(item), item.name, 'food-card-image'))
  const body = el('div', 'food-card-body')
  body.append(el('p', 'food-category', item.category), el('h3', 'food-name', item.name))

  const bottom = el('div', 'mt-3 flex items-center justify-between gap-2')
  bottom.append(el('span', 'food-price', `${Number(item.price).toLocaleString()} RWF`))
  bottom.append(statusBadge(item.available ? 'Available' : 'UnavailableMenu'))
  body.append(bottom)

  if (includeActions) {
    const actions = el('div', 'record-actions')
    actions.append(actionButton(item.available ? 'Mark unavailable' : 'Make available', 'menu-toggle', item.id))
    actions.append(actionButton('Delete', 'menu-delete', item.id, 'btn-danger', 'trash'))
    body.append(actions)
  }
  card.append(body)
  return card
}

// Create the task checkbox.
function createTaskCheckbox(task) {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = task.done
  checkbox.dataset.role = 'task-complete'
  checkbox.setAttribute('aria-label', task.done ? `Mark ${task.text} active` : `Mark ${task.text} complete`)
  checkbox.className = 'task-checkbox'
  return checkbox
}

// Create a task row from current state. Task text uses textContent.
function createTaskRow(task) {
  const row = el('li', 'task-row')
  row.dataset.id = String(task.id)

  const main = el('div', 'task-main')
  main.append(createTaskCheckbox(task))
  const detail = el('div', 'min-w-0 flex-1')

  if (editingTaskId === task.id) {
    const input = document.createElement('input')
    input.type = 'text'
    input.value = task.text
    input.dataset.role = 'edit-input'
    input.setAttribute('aria-label', 'Edit task description')
    input.className = 'form-control w-full'
    detail.append(input)
  } else {
    const text = el('p', task.done ? 'task-text is-done' : 'task-text', task.text)
    text.dataset.role = 'task-text'
    text.title = 'Double-click to edit'
    detail.append(text)
  }

  const meta = el('div', 'mt-2 flex flex-wrap items-center gap-2')
  meta.append(priorityBadge(task.priority), el('span', 'text-xs text-slate-400', `Added ${new Date(task.createdAt).toLocaleDateString()}`))
  detail.append(meta)
  main.append(detail)

  const actions = el('div', 'task-row-actions')
  if (editingTaskId === task.id) {
    actions.append(actionButton('Save', 'task-save', task.id, 'btn-primary', 'check'))
    actions.append(actionButton('Cancel', 'task-cancel', task.id, 'btn-secondary', 'close'))
  } else {
    actions.append(actionButton('Edit', 'task-edit', task.id, 'btn-secondary', 'edit'))
    actions.append(actionButton('Delete', 'task-delete', task.id, 'btn-danger', 'trash'))
  }
  row.append(main, actions)
  return row
}

// Filter and sort tasks, then redraw the task-list page.
function renderTaskList() {
  const list = document.querySelector('#task-list')
  if (!list) return

  const visible = tasks.filter((task) => {
    if (currentFilter === 'active' && task.done) return false
    if (currentFilter === 'completed' && !task.done) return false
    return !searchQuery || task.text.toLowerCase().includes(searchQuery)
  })

  const rank = { high: 0, medium: 1, low: 2 }
  visible.sort(currentSort === 'priority'
    ? (a, b) => rank[a.priority] - rank[b.priority] || b.createdAt - a.createdAt
    : (a, b) => b.createdAt - a.createdAt)

  list.replaceChildren()
  for (const task of visible) list.append(createTaskRow(task))

  const completed = tasks.filter((task) => task.done).length
  const left = tasks.length - completed
  document.querySelector('#task-counter').textContent = `${left} ${left === 1 ? 'task' : 'tasks'} left`
  document.querySelector('#clear-completed').disabled = completed === 0

  for (const button of document.querySelectorAll('[data-task-filter]')) {
    const selected = button.dataset.taskFilter === currentFilter
    button.classList.toggle('is-active', selected)
    button.setAttribute('aria-pressed', String(selected))
  }

  const empty = document.querySelector('#task-empty')
  empty.classList.toggle('hidden', visible.length > 0)
  document.querySelector('#task-empty-title').textContent = searchQuery ? 'No matching tasks' : currentFilter === 'active' ? 'All caught up!' : currentFilter === 'completed' ? 'No completed tasks yet' : 'Your task list is clear'
  document.querySelector('#task-empty-description').textContent = searchQuery ? 'Try another search term.' : 'Add a restaurant task above to get started.'

  if (editingTaskId !== null) {
    const input = list.querySelector('[data-role="edit-input"]')
    if (input) {
      input.focus()
      input.select()
    }
  }
  updateSidebarCounts()
}

// Validate and display a task form error.
function setTaskError(message) {
  const output = document.querySelector('#task-error')
  output.textContent = message
  output.classList.toggle('hidden', !message)
}

// Add a task, requiring non-empty text no longer than 100 characters.
function addTask() {
  const input = document.querySelector('#task-input')
  const text = input.value.trim()
  if (!text) return setTaskError('Please enter a task.')
  if (text.length > 100) return setTaskError('Task descriptions must be 100 characters or fewer.')

  tasks.push({
    id: makeId('task'),
    text,
    done: false,
    priority: document.querySelector('#task-priority').value,
    createdAt: Date.now()
  })
  editingTaskId = null
  saveCollection('tasks', tasks)
  renderPage()
}

// Toggle the completion state of a task.
function toggleTask(id, isDone) {
  const task = tasks.find((item) => String(item.id) === String(id))
  if (!task) return
  task.done = isDone
  saveCollection('tasks', tasks)
  renderPage()
}

// Delete a task only after user confirmation.
function deleteTask(id) {
  const index = tasks.findIndex((task) => String(task.id) === String(id))
  if (index < 0 || !window.confirm(`Delete task "${tasks[index].text}"?`)) return
  tasks.splice(index, 1)
  editingTaskId = null
  saveCollection('tasks', tasks)
  renderPage()
}

// Validate and save the edited task description.
function saveTaskEdit(id, value) {
  const text = value.trim()
  if (!text) return setTaskError('A task cannot be empty. Enter text or cancel the edit.')
  if (text.length > 100) return setTaskError('Task descriptions must be 100 characters or fewer.')

  const task = tasks.find((item) => String(item.id) === String(id))
  if (!task) return
  task.text = text
  editingTaskId = null
  saveCollection('tasks', tasks)
  renderPage()
}

// Remove all completed tasks from the state array.
function clearCompletedTasks() {
  const remaining = tasks.filter((task) => !task.done)
  if (remaining.length === tasks.length) return
  tasks.splice(0, tasks.length, ...remaining)
  editingTaskId = null
  saveCollection('tasks', tasks)
  renderPage()
}

// Render the orders collection and its action buttons.
function renderOrders() {
  const list = document.querySelector('#orders-list')
  const visible = orders.filter((order) => `${order.id} ${order.customer} ${order.details} ${order.table} ${order.status}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()
  document.querySelector('#order-page-count').textContent = `${visible.length} orders`

  for (const order of visible) {
    const card = recordCard(`${order.id} · ${order.customer}`, order.details, order.status, [
      actionButton('Advance status', 'order-advance', order.id, 'btn-secondary', 'arrow'),
      actionButton('Delete', 'order-delete', order.id, 'btn-danger', 'trash')
    ])
    const photoRow = el('div', 'order-photo-row')
    photoRow.append(createPhoto(order.image || 'salad', `Order ${order.id}`, 'order-card-image'), el('p', 'record-note', `Table: ${order.table} · ${Number(order.total).toLocaleString()} RWF`))
    card.insertBefore(photoRow, card.lastElementChild)
    list.append(card)
  }
  document.querySelector('#orders-empty').classList.toggle('hidden', visible.length > 0)
}

// Render reservations and actions.
function renderReservations() {
  const list = document.querySelector('#reservations-list')
  const visible = reservations.filter((item) => `${item.name} ${item.date} ${item.time} ${item.status}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()

  for (const item of visible) {
    list.append(recordCard(item.name, `${item.guests} guest(s) · ${item.date} at ${item.time}`, item.status, [
      actionButton(item.status === 'Seated' ? 'Mark booked' : 'Mark seated', 'reservation-next', item.id, 'btn-secondary', 'check'),
      actionButton('Delete', 'reservation-delete', item.id, 'btn-danger', 'trash')
    ]))
  }
  document.querySelector('#reservations-empty').classList.toggle('hidden', visible.length > 0)
}

// Render the dining tables and their statuses.
function renderTables() {
  const list = document.querySelector('#tables-list')
  const visible = tables.filter((table) => `table ${table.number} ${table.status} ${table.seats}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()

  for (const table of visible) {
    const card = el('article', 'table-card')
    card.append(createPhoto('table', `Table ${table.number}`, 'table-photo'))
    card.append(el('p', 'text-xs font-bold uppercase tracking-widest text-slate-400', 'DINING TABLE'))
    card.append(el('h3', 'text-3xl font-extrabold', `T${table.number}`))
    card.append(el('p', 'text-sm text-slate-500', `${table.seats} seats`))
    card.append(statusBadge(table.status))
    card.append(actionButton('Change status', 'table-next', table.id))
    card.append(actionButton('Delete table', 'table-delete', table.id, 'btn-danger', 'trash'))
    list.append(card)
  }
  document.querySelector('#tables-empty').classList.toggle('hidden', visible.length > 0)
}

// Render photo-led menu cards.
function renderMenu() {
  const list = document.querySelector('#menu-list')
  const visible = menuItems.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()
  for (const item of visible) list.append(createFoodCard(item))
  document.querySelector('#menu-empty').classList.toggle('hidden', visible.length > 0)
}

// Render inventory levels and low-stock warnings.
function renderInventory() {
  const list = document.querySelector('#inventory-list')
  const visible = inventory.filter((item) => `${item.name} ${item.unit}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()

  const low = inventory.filter((item) => Number(item.quantity) <= Number(item.minimum)).length
  document.querySelector('#low-stock-count').textContent = `${low} low stock`

  for (const item of visible) {
    const isLow = Number(item.quantity) <= Number(item.minimum)
    const card = recordCard(item.name, `Minimum: ${item.minimum} ${item.unit}`, isLow ? 'Low stock' : 'In stock', [
      actionButton('−', 'stock-minus', item.id),
      actionButton('+', 'stock-plus', item.id),
      actionButton('Delete', 'stock-delete', item.id, 'btn-danger', 'trash')
    ])
    card.append(el('p', 'record-note', `Current quantity: ${item.quantity} ${item.unit}`))
    list.append(card)
  }
  document.querySelector('#inventory-empty').classList.toggle('hidden', visible.length > 0)
  updateSidebarCounts()
}

// Render the local staff roster.
function renderStaff() {
  const list = document.querySelector('#staff-list')
  const visible = staff.filter((person) => `${person.name} ${person.role} ${person.shift}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()

  for (const person of visible) {
    const card = recordCard(person.name, `${person.role} · ${person.shift} shift`, person.onDuty ? 'On duty' : 'Off duty', [
      actionButton(person.onDuty ? 'Set off duty' : 'Set on duty', 'staff-toggle', person.id),
      actionButton('Remove', 'staff-delete', person.id, 'btn-danger', 'trash')
    ])
    list.append(card)
  }
  document.querySelector('#staff-empty').classList.toggle('hidden', visible.length > 0)
}

// Calculate report values from locally stored records.
function renderReports() {
  const sales = orders.reduce((sum, order) => sum + Number(order.total || 0), 0)
  const completed = tasks.filter((task) => task.done).length
  const percentage = tasks.length ? Math.round(completed / tasks.length * 100) : 0

  document.querySelector('#report-sales').textContent = `${sales.toLocaleString()} RWF`
  document.querySelector('#report-tasks').textContent = `${percentage}%`
  document.querySelector('#report-tables').textContent = String(tables.filter((table) => table.status === 'Available').length)
  document.querySelector('#report-staff').textContent = String(staff.filter((person) => person.onDuty).length)

  const breakdown = document.querySelector('#report-breakdown')
  breakdown.replaceChildren()
  const rows = [
    ['Orders recorded', orders.length],
    ['Reservations recorded', reservations.length],
    ['Menu items', menuItems.length],
    ['Inventory items', inventory.length],
    ['Open tasks', tasks.filter((task) => !task.done).length]
  ]
  for (const [label, value] of rows) {
    const row = el('div', 'setting-row')
    row.append(el('span', 'font-semibold', label), el('strong', '', value))
    breakdown.append(row)
  }
}

// Display local-storage information and current appearance preference.
function renderSettings() {
  document.querySelector('#settings-theme-toggle').textContent = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
  const total = tasks.length + orders.length + reservations.length + tables.length + menuItems.length + inventory.length + staff.length
  document.querySelector('#settings-record-count').textContent = `${total} restaurant records stored in this browser`
}

// Persist an updated collection and redraw the current page.
function persistAndRender(key, collection) {
  saveCollection(key, collection)
  updateSidebarCounts()
  renderPage()
}

// Add a reservation from the form.
function addReservation() {
  const name = document.querySelector('#reservation-name').value.trim()
  const date = document.querySelector('#reservation-date').value
  const time = document.querySelector('#reservation-time').value
  const guests = Number(document.querySelector('#reservation-guests').value)
  if (!name || !date || !time || !Number.isInteger(guests) || guests < 1) {
    return showFormError('#reservation-error', 'Complete every field with a valid guest count.')
  }
  reservations.push({ id: makeId('res'), name, date, time, guests, status: 'Booked' })
  persistAndRender('reservations', reservations)
}

// Add a restaurant order from the form.
function addOrder() {
  const customer = document.querySelector('#order-customer').value.trim()
  const details = document.querySelector('#order-details').value.trim()
  const table = document.querySelector('#order-table').value.trim()
  const totalField = document.querySelector('#order-total').value
  const total = Number(totalField)
  if (!customer || !details || !table || totalField === '' || !Number.isFinite(total) || total < 0) {
    return showFormError('#order-error', 'Enter the customer, items, table/type and a valid total.')
  }
  orders.unshift({ id: `ORD-${Date.now().toString().slice(-6)}`, customer, details, table, total, status: 'Pending', createdAt: Date.now(), image: imageKeyForText(details) })
  persistAndRender('orders', orders)
}

// Add a dining table after validating its number.
function addTable() {
  const number = Number(document.querySelector('#table-number').value)
  const seats = Number(document.querySelector('#table-seats').value)
  if (number < 1 || seats < 1) return showFormError('#table-error', 'Enter a valid table number and seat count.')
  if (tables.some((table) => Number(table.number) === number)) return showFormError('#table-error', 'That table number already exists.')
  tables.push({ id: makeId('table'), number, seats, status: 'Available' })
  persistAndRender('tables', tables)
}

// Add a dish to the local restaurant menu.
function addMenuItem() {
  const name = document.querySelector('#menu-name').value.trim()
  const category = document.querySelector('#menu-category').value
  const value = document.querySelector('#menu-price').value
  const price = Number(value)
  if (!name || value === '' || !Number.isFinite(price) || price < 0) return showFormError('#menu-error', 'Enter a dish name and a valid price.')
  menuItems.push({ id: makeId('dish'), name, category, price, available: true, image: imageKeyForText(`${name} ${category}`) })
  persistAndRender('menu', menuItems)
}

// Add a stock item to inventory.
function addInventoryItem() {
  const name = document.querySelector('#stock-name').value.trim()
  const quantityText = document.querySelector('#stock-quantity').value
  const unit = document.querySelector('#stock-unit').value.trim()
  const minimumText = document.querySelector('#stock-minimum').value
  const quantity = Number(quantityText)
  const minimum = Number(minimumText)
  if (!name || !unit || quantityText === '' || minimumText === '' || quantity < 0 || minimum < 0) {
    return showFormError('#stock-error', 'Enter an item, unit and valid non-negative quantities.')
  }
  inventory.push({ id: makeId('stock'), name, quantity, unit, minimum })
  persistAndRender('inventory', inventory)
}

// Add a team member to the local roster.
function addStaffMember() {
  const name = document.querySelector('#staff-name').value.trim()
  const role = document.querySelector('#staff-role').value
  const shift = document.querySelector('#staff-shift').value
  if (!name) return showFormError('#staff-error', 'Enter the team member name.')
  staff.push({ id: makeId('staff'), name, role, shift, onDuty: true })
  persistAndRender('staff', staff)
}

// Choose a menu image from a fixed set based on a dish's category or name.
function imageKeyForText(text) {
  const value = text.toLowerCase()
  if (value.includes('chicken') || value.includes('grill') || value.includes('meat')) return 'chicken'
  if (value.includes('pasta') || value.includes('noodle')) return 'pasta'
  if (value.includes('juice') || value.includes('drink')) return 'juice'
  if (value.includes('cake') || value.includes('dessert')) return 'cake'
  if (value.includes('coffee')) return 'coffee'
  if (value.includes('rice') || value.includes('salad') || value.includes('vegetable')) return 'salad'
  return 'table'
}

// Show a validation message in the relevant form.
function showFormError(selector, message) {
  const element = document.querySelector(selector)
  if (!element) return
  element.textContent = message
  element.classList.remove('hidden')
}

// Advance an order from pending through preparing, ready and served.
function advanceOrder(id) {
  const order = orders.find((item) => item.id === id)
  if (!order) return
  const states = ['Pending', 'Preparing', 'Ready', 'Served']
  order.status = states[(states.indexOf(order.status) + 1) % states.length]
  persistAndRender('orders', orders)
}

// Handle deletes and status toggles for reservation, table, menu, inventory and staff records.
function handleRecordAction(action, id) {
  if (action.startsWith('order-')) {
    if (action === 'order-advance') return advanceOrder(id)
    const index = orders.findIndex((item) => item.id === id)
    if (index >= 0 && window.confirm(`Delete order ${orders[index].id}?`)) {
      orders.splice(index, 1)
      return persistAndRender('orders', orders)
    }
  }

  if (action.startsWith('reservation-')) {
    const index = reservations.findIndex((item) => String(item.id) === String(id))
    if (index < 0) return
    if (action === 'reservation-next') reservations[index].status = reservations[index].status === 'Seated' ? 'Booked' : 'Seated'
    if (action === 'reservation-delete' && window.confirm(`Delete reservation for ${reservations[index].name}?`)) reservations.splice(index, 1)
    return persistAndRender('reservations', reservations)
  }

  if (action.startsWith('table-')) {
    const index = tables.findIndex((item) => String(item.id) === String(id))
    if (index < 0) return
    if (action === 'table-next') {
      const states = ['Available', 'Occupied', 'Reserved']
      tables[index].status = states[(states.indexOf(tables[index].status) + 1) % states.length]
    }
    if (action === 'table-delete') {
      if (!window.confirm(`Delete table ${tables[index].number}?`)) return
      tables.splice(index, 1)
    }
    return persistAndRender('tables', tables)
  }

  if (action.startsWith('menu-')) {
    const index = menuItems.findIndex((item) => String(item.id) === String(id))
    if (index < 0) return
    if (action === 'menu-toggle') menuItems[index].available = !menuItems[index].available
    if (action === 'menu-delete') {
      if (!window.confirm(`Delete ${menuItems[index].name} from the menu?`)) return
      menuItems.splice(index, 1)
    }
    return persistAndRender('menu', menuItems)
  }

  if (action.startsWith('stock-')) {
    const index = inventory.findIndex((item) => String(item.id) === String(id))
    if (index < 0) return
    if (action === 'stock-plus') inventory[index].quantity = Number(inventory[index].quantity) + 1
    if (action === 'stock-minus') inventory[index].quantity = Math.max(0, Number(inventory[index].quantity) - 1)
    if (action === 'stock-delete') {
      if (!window.confirm(`Delete ${inventory[index].name} from inventory?`)) return
      inventory.splice(index, 1)
    }
    return persistAndRender('inventory', inventory)
  }

  if (action.startsWith('staff-')) {
    const index = staff.findIndex((item) => item.id === id)
    if (index < 0) return
    if (action === 'staff-toggle') staff[index].onDuty = !staff[index].onDuty
    if (action === 'staff-delete') {
      if (!window.confirm(`Remove ${staff[index].name} from the roster?`)) return
      staff.splice(index, 1)
    }
    persistAndRender('staff', staff)
  }
}

// Handle all form submissions through one application listener.
function handleSubmit(event) {
  const actions = {
    'task-form': addTask,
    'order-form': addOrder,
    'reservation-form': addReservation,
    'table-form': addTable,
    'menu-form': addMenuItem,
    'inventory-form': addInventoryItem,
    'staff-form': addStaffMember
  }
  const action = actions[event.target.id]
  if (!action) return
  event.preventDefault()
  action()
}

// Close the mobile navigation panel.
function closeMobileSidebar() {
  sidebar.classList.remove('is-open')
  backdrop.classList.remove('is-visible')
  menuToggle.setAttribute('aria-expanded', 'false')
  menuToggle.setAttribute('aria-label', 'Open navigation menu')
}

// Open the mobile navigation panel.
function openMobileSidebar() {
  sidebar.classList.add('is-open')
  backdrop.classList.add('is-visible')
  menuToggle.setAttribute('aria-expanded', 'true')
  menuToggle.setAttribute('aria-label', 'Close navigation menu')
}

// Toggle the mobile menu.
function toggleMobileSidebar() {
  if (sidebar.classList.contains('is-open')) closeMobileSidebar()
  else openMobileSidebar()
}

// Highlight the active page in navigation.
function updateNavigation() {
  document.querySelector('#page-title').textContent = pageLabels[currentPage]
  for (const button of document.querySelectorAll('#sidebar-nav [data-page]')) {
    const active = button.dataset.page === currentPage
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-current', active ? 'page' : 'false')
  }
}

// Set dark mode across the application.
function applyTheme() {
  document.documentElement.classList.toggle('dark', isDarkMode)
  themeIcon.innerHTML = icon(isDarkMode ? 'sun' : 'moon', 17)
  themeLabel.textContent = isDarkMode ? 'Light mode' : 'Dark mode'
  themeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode')
}

// Toggle and persist dark mode.
function toggleTheme() {
  isDarkMode = !isDarkMode
  writeStorage('restoflow-theme', isDarkMode ? 'dark' : 'light')
  applyTheme()
  if (currentPage === 'settings') renderSettings()
}

// Navigate to Task Manager and focus the input.
function goToTaskInput() {
  navigate('tasks')
  document.querySelector('#task-input')?.focus()
}

// Reset the local demo collections after confirmation.
function resetDemoData() {
  if (!window.confirm('Reset all local data? This clears your tasks and restores the example restaurant records.')) return
  for (const key of ['tasks', 'orders', 'reservations', 'tables', 'menu', 'inventory', 'staff', 'page', 'filter', 'sort']) {
    localStorage.removeItem(`restoflow-${key}`)
  }
  window.location.reload()
}

// Handle clicks across all pages using event delegation.
function handleClick(event) {
  const pageButton = event.target.closest('[data-page]')
  if (pageButton) {
    event.preventDefault()
    navigate(pageButton.dataset.page)
    return
  }

  if (event.target.closest('#menu-toggle')) return toggleMobileSidebar()
  if (event.target.closest('#sidebar-backdrop')) return closeMobileSidebar()
  if (event.target.closest('#theme-toggle') || event.target.closest('#settings-theme-toggle')) return toggleTheme()
  if (event.target.closest('#reset-demo-data')) return resetDemoData()
  if (event.target.closest('#refresh-local-data')) return renderSettings()
  if (event.target.closest('#clear-completed')) return clearCompletedTasks()

  const filterButton = event.target.closest('[data-task-filter]')
  if (filterButton) {
    currentFilter = filterButton.dataset.taskFilter
    writeStorage('restoflow-filter', currentFilter)
    renderTaskList()
    return
  }

  const button = event.target.closest('[data-action]')
  if (!button) return
  const { action, id } = button.dataset

  if (action === 'open-tasks') return navigate('tasks')
  if (action === 'task-edit') {
    editingTaskId = id
    renderTaskList()
    return
  }
  if (action === 'task-delete') return deleteTask(id)
  if (action === 'task-save') {
    const row = button.closest('[data-id]')
    const input = row?.querySelector('[data-role="edit-input"]')
    if (input) saveTaskEdit(id, input.value)
    return
  }
  if (action === 'task-cancel') {
    editingTaskId = null
    renderTaskList()
    return
  }
  handleRecordAction(action, id)
}

// Handle checkbox and sort changes.
function handleChange(event) {
  if (event.target.matches('[data-role="task-complete"]')) {
    const row = event.target.closest('[data-id]')
    if (row) toggleTask(row.dataset.id, event.target.checked)
  }

  if (event.target.id === 'task-sort') {
    currentSort = event.target.value
    writeStorage('restoflow-sort', currentSort)
    renderTaskList()
  }
}

// Handle editing keyboard commands and the slash search shortcut.
function handleKeydown(event) {
  if (event.target.matches('[data-role="edit-input"]')) {
    const row = event.target.closest('[data-id]')
    if (row && event.key === 'Enter') {
      event.preventDefault()
      saveTaskEdit(row.dataset.id, event.target.value)
      return
    }
    if (event.key === 'Escape') {
      editingTaskId = null
      renderTaskList()
      return
    }
  }

  if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
    event.preventDefault()
    searchInput.focus()
  }
}

// Filter records on the currently open page.
function handleSearch() {
  searchQuery = searchInput.value.trim().toLowerCase()
  if (currentPage === 'dashboard') renderDashboard()
  if (currentPage === 'tasks') renderTaskList()
  if (currentPage === 'orders') renderOrders()
  if (currentPage === 'reservations') renderReservations()
  if (currentPage === 'tables') renderTables()
  if (currentPage === 'menu') renderMenu()
  if (currentPage === 'inventory') renderInventory()
  if (currentPage === 'staff') renderStaff()
}

// Set up the app-wide event listeners.
function initializeEvents() {
  app.addEventListener('click', handleClick)
  app.addEventListener('submit', handleSubmit)
  app.addEventListener('change', handleChange)
  app.addEventListener('keydown', handleKeydown)
  searchInput.addEventListener('input', handleSearch)
}

// Initialize and display the selected page.
function initializeApp() {
  document.documentElement.classList.toggle('dark', isDarkMode)
  applyTheme()
  initializeEvents()
  updateSidebarCounts()
  renderPage()
}

// Start RestoFlow.
initializeApp()

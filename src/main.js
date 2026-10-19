
import './style.css'

// Create the static application shell. No user-entered values are included here.
const app = document.querySelector('#app')

app.innerHTML = `
<div class="min-h-screen bg-[#f5f7f5] text-slate-800 dark:bg-[#101713] dark:text-slate-100">
  <button id="sidebar-backdrop" class="sidebar-backdrop" type="button" aria-label="Close menu"></button>

  <aside id="app-sidebar" class="sidebar-panel fixed inset-y-0 left-0 z-40 w-[264px] flex-col border-r border-slate-200 bg-white px-5 py-6 dark:border-slate-800 dark:bg-[#151e19]">
    <button type="button" data-page="dashboard" class="mb-8 flex items-center gap-3 text-left">
      <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-2xl font-black text-white">R</span>
      <span>
        <span class="block text-xl font-extrabold">RestoFlow</span>
        <span class="block text-xs text-slate-500 dark:text-slate-400">Restaurant operations</span>
      </span>
    </button>

    <p class="nav-section-label">WORKSPACE</p>
    <nav id="sidebar-nav" class="space-y-1" aria-label="Restaurant navigation">
      <button type="button" data-page="dashboard" class="nav-link">
        <span class="nav-icon" aria-hidden="true">▦</span> Dashboard
      </button>
      <button type="button" data-page="tasks" class="nav-link">
        <span class="nav-icon" aria-hidden="true">✓</span> Task Manager
        <span id="nav-tasks-count" class="nav-count">0</span>
      </button>
      <button type="button" data-page="orders" class="nav-link">
        <span class="nav-icon" aria-hidden="true">▤</span> Orders
        <span id="nav-orders-count" class="nav-count">0</span>
      </button>
      <button type="button" data-page="reservations" class="nav-link">
        <span class="nav-icon" aria-hidden="true">▣</span> Reservations
      </button>
      <button type="button" data-page="tables" class="nav-link">
        <span class="nav-icon" aria-hidden="true">▦</span> Tables
      </button>
      <button type="button" data-page="menu" class="nav-link">
        <span class="nav-icon" aria-hidden="true">≡</span> Menu
      </button>
      <button type="button" data-page="inventory" class="nav-link">
        <span class="nav-icon" aria-hidden="true">▧</span> Inventory
        <span id="nav-stock-count" class="nav-count">0</span>
      </button>
      <button type="button" data-page="staff" class="nav-link">
        <span class="nav-icon" aria-hidden="true">♙</span> Staff
      </button>
      <button type="button" data-page="reports" class="nav-link">
        <span class="nav-icon" aria-hidden="true">↗</span> Reports
      </button>
    </nav>

    <div class="my-6 border-t border-slate-100 dark:border-slate-800"></div>
    <p class="nav-section-label">PREFERENCES</p>
    <button type="button" data-page="settings" class="nav-link">
      <span class="nav-icon" aria-hidden="true">⚙</span> Settings
    </button>

    <div class="mt-auto pt-8">
      <div class="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/40">
        <p class="text-sm font-bold text-emerald-950 dark:text-emerald-100">Daily shift progress</p>
        <p id="sidebar-progress-percent" class="mt-3 text-2xl font-extrabold text-emerald-800 dark:text-emerald-300">0%</p>
        <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-200 dark:bg-emerald-900">
          <div id="sidebar-progress-bar" class="h-full w-0 rounded-full bg-emerald-700 transition-all dark:bg-emerald-400"></div>
        </div>
        <p class="mt-2 text-xs text-emerald-900/70 dark:text-emerald-200/70">Tasks completed during the shift</p>
      </div>
      <p class="mt-5 text-center text-[10px] text-slate-400">RESTOFLOW · LOCAL DEMO</p>
    </div>
  </aside>

  <div class="min-h-screen lg:ml-[264px]">
    <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-[#151e19]/95">
      <div class="flex min-h-[76px] items-center gap-3 px-3 sm:px-6 lg:px-9">
        <button id="menu-toggle" type="button" class="mobile-menu-button lg:hidden" aria-label="Open navigation menu" aria-expanded="false">
          <span aria-hidden="true">☰</span><span>Menu</span>
        </button>

        <div class="hidden shrink-0 md:block">
          <p class="text-xs text-slate-400">Restaurant workspace</p>
          <h1 id="page-title" class="mt-1 text-base font-extrabold">Dashboard</h1>
        </div>

        <div class="dashboard-search ml-auto flex min-w-0 max-w-md flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-slate-700 dark:bg-slate-900">
          <span class="text-lg text-slate-400" aria-hidden="true">⌕</span>
          <label for="global-search" class="sr-only">Search the current page</label>
          <input id="global-search" type="search" placeholder="Search current page..." autocomplete="off" class="min-w-0 w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
          <kbd class="hidden rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400 sm:block dark:border-slate-700 dark:bg-slate-800">/</kbd>
        </div>

        <button id="theme-toggle" type="button" class="flex h-10 shrink-0 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800" aria-label="Switch to dark mode">
          <span id="theme-icon" aria-hidden="true">☾</span>
          <span id="theme-label" class="hidden sm:inline">Dark mode</span>
        </button>
      </div>
    </header>

    <main id="page-content" class="mx-auto max-w-[1600px] px-4 py-6 sm:px-7 sm:py-8 lg:px-9"></main>
  </div>
</div>
`

// Select the shared interface controls.
const pageContent = document.querySelector('#page-content')
const sidebar = document.querySelector('#app-sidebar')
const backdrop = document.querySelector('#sidebar-backdrop')
const menuToggle = document.querySelector('#menu-toggle')
const searchInput = document.querySelector('#global-search')
const themeToggle = document.querySelector('#theme-toggle')
const themeIcon = document.querySelector('#theme-icon')
const themeLabel = document.querySelector('#theme-label')

// Create a unique record ID.
function makeId(prefix = 'item') {
  if (globalThis.crypto && typeof crypto.randomUUID === 'function') {
    return `${prefix}-${crypto.randomUUID()}`
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

// Return an ISO date with an optional day offset.
function dateOffset(days = 0) {
  const date = new Date()
  date.setDate(date.getDate() + days)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
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

// Load a collection from localStorage and seed demo records on first use.
function loadCollection(key, initialRecords = []) {
  try {
    const stored = localStorage.getItem(`restoflow-${key}`)
    if (stored !== null) {
      const parsed = JSON.parse(stored)
      return Array.isArray(parsed) ? parsed : []
    }
  } catch {
    console.warn(`Could not load ${key}; using demo data.`)
  }

  const freshRecords = JSON.parse(JSON.stringify(initialRecords))
  writeStorage(`restoflow-${key}`, JSON.stringify(freshRecords))
  return freshRecords
}

// Save one application collection as JSON.
function saveCollection(key, records) {
  writeStorage(`restoflow-${key}`, JSON.stringify(records))
}

// Load restaurant tasks. This collection starts empty for the assignment.
const tasks = loadCollection('tasks', [])

// Load example restaurant records for local testing.
const orders = loadCollection('orders', [
  { id: 'ORD-1001', customer: 'Walk-in guest', details: '2 cappuccinos, 1 croissant', table: 'T1', total: 8500, status: 'Preparing', createdAt: Date.now() },
  { id: 'ORD-1002', customer: 'Table 3', details: 'Grilled chicken, fresh juice', table: 'T3', total: 14500, status: 'Pending', createdAt: Date.now() - 60000 },
  { id: 'ORD-1003', customer: 'Online pickup', details: 'Vegetable pasta', table: 'Pickup', total: 9000, status: 'Ready', createdAt: Date.now() - 120000 }
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
  { id: makeId('dish'), name: 'Grilled Chicken', category: 'Main course', price: 12000, available: true },
  { id: makeId('dish'), name: 'Vegetable Pasta', category: 'Main course', price: 9000, available: true },
  { id: makeId('dish'), name: 'Fresh Juice', category: 'Drinks', price: 3000, available: true },
  { id: makeId('dish'), name: 'Chocolate Cake', category: 'Dessert', price: 4500, available: false }
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

// Keep page and task preferences between refreshes.
const pageNames = ['dashboard', 'tasks', 'orders', 'reservations', 'tables', 'menu', 'inventory', 'staff', 'reports', 'settings']
let currentPage = pageNames.includes(readStorage('restoflow-page', 'dashboard'))
  ? readStorage('restoflow-page', 'dashboard')
  : 'dashboard'

let currentFilter = ['all', 'active', 'completed'].includes(readStorage('restoflow-filter', 'all'))
  ? readStorage('restoflow-filter', 'all')
  : 'all'

let currentSort = ['recent', 'priority'].includes(readStorage('restoflow-sort', 'recent'))
  ? readStorage('restoflow-sort', 'recent')
  : 'recent'

let searchQuery = ''
let editingTaskId = null
let isDarkMode = readStorage('restoflow-theme', 'light') === 'dark'

// Turn a value into a safe DOM element.
function createElement(tag, className = '', text = '') {
  const element = document.createElement(tag)
  if (className) element.className = className
  element.textContent = String(text)
  return element
}

// Create an accessible button carrying an action and record ID.
function createActionButton(label, action, id, className = 'btn-secondary') {
  const button = createElement('button', className, label)
  button.type = 'button'
  button.dataset.action = action
  if (id !== undefined) button.dataset.id = String(id)
  return button
}

// Add one page title and introductory description.
function pageHeading(title, description, action = '') {
  return `
    <section class="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p class="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">RESTOFLOW WORKSPACE</p>
        <h2 class="text-3xl font-extrabold tracking-tight">${title}</h2>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">${description}</p>
      </div>
      ${action}
    </section>`
}

// Page templates contain static UI only; record text is rendered later using textContent.
const pageTemplates = {
  dashboard: `
    <section class="hero-panel mb-7 rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 p-6 text-white sm:p-9">
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Restaurant operations</p>
      <h2 class="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">Every shift, under control.</h2>
      <p class="mt-4 max-w-xl text-sm leading-6 text-emerald-100/80 sm:text-base">Manage tasks, orders, reservations, tables and kitchen inventory in one workspace.</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <button class="btn-white" data-page="tasks">Open task manager →</button>
        <button class="btn-glass" data-page="orders">View orders</button>
      </div>
    </section>

    <section class="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article class="stat-card"><p class="stat-label">Tasks left</p><p id="dash-tasks" class="stat-number">0</p><p class="stat-caption">Uncompleted shift tasks</p></article>
      <article class="stat-card"><p class="stat-label">Open orders</p><p id="dash-orders" class="stat-number">0</p><p class="stat-caption">Waiting to be served</p></article>
      <article class="stat-card"><p class="stat-label">Today's reservations</p><p id="dash-reservations" class="stat-number">0</p><p class="stat-caption">Bookings for today</p></article>
      <article class="stat-card"><p class="stat-label">Low stock items</p><p id="dash-stock" class="stat-number">0</p><p class="stat-caption">Items at or below their limit</p></article>
    </section>

    <section class="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <article class="app-panel">
        <div class="panel-heading"><div><h3>Recent tasks</h3><p>Things the team needs to do</p></div><button class="btn-secondary" data-page="tasks">All tasks</button></div>
        <ul id="dash-task-list" class="record-list"></ul>
      </article>
      <article class="app-panel">
        <div class="panel-heading"><div><h3>Recent orders</h3><p>Live order overview stored on this device</p></div><button class="btn-secondary" data-page="orders">All orders</button></div>
        <div id="dash-order-list" class="record-list"></div>
      </article>
    </section>`,

  tasks: `
    <section class="mb-7">
      <p class="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">DAILY CHECKLIST</p>
      <h2 class="text-3xl font-extrabold tracking-tight">Restaurant Task Manager</h2>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Create tasks, track completion, and keep the whole shift organized.</p>
    </section>

    <section class="app-panel mb-6">
      <div class="panel-heading"><div><h3>Add a task</h3><p>Task descriptions must contain 1–100 characters.</p></div></div>
      <form id="task-form" class="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_180px_auto] md:items-end">
        <div><label class="form-label" for="task-input">Task description</label><input id="task-input" class="form-control w-full" placeholder="e.g. Prepare dining tables" autocomplete="off" aria-describedby="task-error" /></div>
        <div><label class="form-label" for="task-priority">Priority</label><select id="task-priority" class="form-control w-full"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select></div>
        <button class="btn-primary" type="submit">＋ Add task</button>
      </form>
      <p id="task-error" class="mt-3 hidden text-sm font-semibold text-red-600" role="alert" aria-live="polite"></p>
    </section>

    <section class="app-panel">
      <div class="panel-heading"><div><h3>Your tasks</h3><p>Use Edit or double-click a task to change it. Press Enter to save or Escape to cancel.</p></div><button id="clear-completed" class="btn-danger" type="button">Clear completed</button></div>
      <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap gap-2" role="group" aria-label="Filter tasks">
          <button type="button" data-task-filter="all" class="filter-tab">All</button>
          <button type="button" data-task-filter="active" class="filter-tab">Active</button>
          <button type="button" data-task-filter="completed" class="filter-tab">Completed</button>
        </div>
        <div class="flex items-center gap-2"><label for="task-sort" class="text-xs font-bold text-slate-500">Sort</label><select id="task-sort" class="form-control"><option value="recent">Newest first</option><option value="priority">Priority</option></select></div>
      </div>
      <ul id="task-list" class="space-y-3" aria-label="Restaurant tasks"></ul>
      <div id="task-empty" class="empty-state"><div class="empty-symbol">✓</div><h3 id="task-empty-title">Your task list is clear</h3><p id="task-empty-description">Add your first restaurant task above.</p></div>
      <div class="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"><p id="task-counter" class="text-sm font-bold text-slate-600 dark:text-slate-300">0 tasks left</p></div>
    </section>`,

  orders: `
    <section class="mb-7"><p class="eyebrow">FRONT OF HOUSE</p><h2 class="page-title">Orders</h2><p class="page-description">Create and track dine-in, takeaway, and pickup orders. All changes are saved locally.</p></section>
    <section class="app-panel mb-6">
      <div class="panel-heading"><div><h3>Create an order</h3><p>Enter the customer, order details, table and total.</p></div></div>
      <form id="order-form" class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div><label class="form-label" for="order-customer">Customer / order name</label><input id="order-customer" class="form-control w-full" required placeholder="Walk-in guest" /></div>
        <div><label class="form-label" for="order-details">Items ordered</label><input id="order-details" class="form-control w-full" required placeholder="Chicken and juice" /></div>
        <div><label class="form-label" for="order-table">Table / type</label><input id="order-table" class="form-control w-full" required placeholder="Table 4 or Pickup" /></div>
        <div><label class="form-label" for="order-total">Total amount (RWF)</label><input id="order-total" type="number" min="0" step="1" class="form-control w-full" required placeholder="12000" /></div>
        <div class="md:col-span-2 xl:col-span-4"><button type="submit" class="btn-primary">＋ Create order</button><p id="order-error" class="mt-2 hidden text-sm text-red-600" role="alert"></p></div>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Order board</h3><p>Advance an order from Pending to Preparing, Ready, and Served.</p></div><span id="order-page-count" class="pill">0 orders</span></div><div id="orders-list" class="record-list"></div><div id="orders-empty" class="empty-state hidden">No matching orders.</div></section>`,

  reservations: `
    <section class="mb-7"><p class="eyebrow">GUEST EXPERIENCE</p><h2 class="page-title">Reservations</h2><p class="page-description">Keep track of upcoming bookings and guest numbers.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Book a table</h3><p>Create a reservation for a guest.</p></div></div>
      <form id="reservation-form" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div><label class="form-label" for="reservation-name">Guest name</label><input id="reservation-name" class="form-control w-full" required placeholder="Guest name" /></div>
        <div><label class="form-label" for="reservation-date">Date</label><input id="reservation-date" type="date" class="form-control w-full" required /></div>
        <div><label class="form-label" for="reservation-time">Time</label><input id="reservation-time" type="time" class="form-control w-full" required /></div>
        <div><label class="form-label" for="reservation-guests">Number of guests</label><input id="reservation-guests" type="number" min="1" max="50" class="form-control w-full" required value="2" /></div>
        <div class="sm:col-span-2 xl:col-span-4"><button type="submit" class="btn-primary">＋ Add reservation</button><p id="reservation-error" class="mt-2 hidden text-sm text-red-600" role="alert"></p></div>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Bookings</h3><p>Mark guests as seated or remove a reservation.</p></div></div><div id="reservations-list" class="record-list"></div><div id="reservations-empty" class="empty-state hidden">No reservations found.</div></section>`,

  tables: `
    <section class="mb-7"><p class="eyebrow">DINING ROOM</p><h2 class="page-title">Tables</h2><p class="page-description">Track available, occupied, and reserved tables.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Add a table</h3><p>Set the table number and number of seats.</p></div></div>
      <form id="table-form" class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div><label class="form-label" for="table-number">Table number</label><input id="table-number" type="number" min="1" class="form-control w-full" required placeholder="7" /></div>
        <div><label class="form-label" for="table-seats">Seats</label><input id="table-seats" type="number" min="1" max="30" value="4" class="form-control w-full" required /></div>
        <div class="flex items-end"><button type="submit" class="btn-primary w-full">＋ Add table</button></div>
        <p id="table-error" class="hidden text-sm text-red-600 sm:col-span-3" role="alert"></p>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Table layout</h3><p>Click a status button to cycle Available, Occupied, and Reserved.</p></div></div><div id="tables-list" class="table-grid"></div><div id="tables-empty" class="empty-state hidden">No tables have been added yet.</div></section>`,

  menu: `
    <section class="mb-7"><p class="eyebrow">FOOD & DRINKS</p><h2 class="page-title">Menu</h2><p class="page-description">Manage menu items, prices, categories and availability.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Add a menu item</h3><p>Keep the menu up to date for the service team.</p></div></div>
      <form id="menu-form" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div><label class="form-label" for="menu-name">Item name</label><input id="menu-name" class="form-control w-full" required placeholder="Grilled fish" /></div>
        <div><label class="form-label" for="menu-category">Category</label><select id="menu-category" class="form-control w-full"><option>Main course</option><option>Starter</option><option>Drinks</option><option>Dessert</option><option>Other</option></select></div>
        <div><label class="form-label" for="menu-price">Price (RWF)</label><input id="menu-price" type="number" min="0" step="1" class="form-control w-full" required placeholder="8500" /></div>
        <div class="flex items-end"><button type="submit" class="btn-primary w-full">＋ Add item</button></div>
        <p id="menu-error" class="hidden text-sm text-red-600 sm:col-span-2 xl:col-span-4" role="alert"></p>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Menu items</h3><p>Toggle availability when a dish sells out.</p></div></div><div id="menu-list" class="record-list"></div><div id="menu-empty" class="empty-state hidden">No menu items found.</div></section>`,

  inventory: `
    <section class="mb-7"><p class="eyebrow">KITCHEN & SUPPLIES</p><h2 class="page-title">Inventory</h2><p class="page-description">Track supplies and identify items that need restocking.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Add inventory item</h3><p>Set the amount in stock and the minimum level you want to maintain.</p></div></div>
      <form id="inventory-form" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div><label class="form-label" for="stock-name">Item name</label><input id="stock-name" class="form-control w-full" required placeholder="Flour" /></div>
        <div><label class="form-label" for="stock-quantity">Current quantity</label><input id="stock-quantity" type="number" min="0" step="0.1" class="form-control w-full" required value="0" /></div>
        <div><label class="form-label" for="stock-unit">Unit</label><input id="stock-unit" class="form-control w-full" required placeholder="kg, litres, packs" /></div>
        <div><label class="form-label" for="stock-minimum">Minimum quantity</label><input id="stock-minimum" type="number" min="0" step="0.1" class="form-control w-full" required value="2" /></div>
        <div class="sm:col-span-2 xl:col-span-4"><button type="submit" class="btn-primary">＋ Add inventory item</button><p id="stock-error" class="mt-2 hidden text-sm text-red-600" role="alert"></p></div>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Stock levels</h3><p>Use + and − to update counts after deliveries or use.</p></div><span id="low-stock-count" class="pill">0 low stock</span></div><div id="inventory-list" class="record-list"></div><div id="inventory-empty" class="empty-state hidden">No inventory items found.</div></section>`,

  staff: `
    <section class="mb-7"><p class="eyebrow">TEAM MANAGEMENT</p><h2 class="page-title">Staff</h2><p class="page-description">Keep a local list of restaurant staff, their roles and shifts.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Add a team member</h3><p>This is a local demo roster, not a real staff account system.</p></div></div>
      <form id="staff-form" class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div><label class="form-label" for="staff-name">Full name</label><input id="staff-name" class="form-control w-full" required placeholder="Name" /></div>
        <div><label class="form-label" for="staff-role">Role</label><select id="staff-role" class="form-control w-full"><option>Manager</option><option>Chef</option><option>Server</option><option>Cashier</option><option>Cleaner</option><option>Other</option></select></div>
        <div><label class="form-label" for="staff-shift">Shift</label><select id="staff-shift" class="form-control w-full"><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Flexible</option></select></div>
        <div class="sm:col-span-3"><button type="submit" class="btn-primary">＋ Add team member</button><p id="staff-error" class="mt-2 hidden text-sm text-red-600" role="alert"></p></div>
      </form>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Team roster</h3><p>Toggle whether a staff member is currently on duty.</p></div></div><div id="staff-list" class="record-list"></div><div id="staff-empty" class="empty-state hidden">No team members found.</div></section>`,

  reports: `
    <section class="mb-7"><p class="eyebrow">RESTAURANT OVERVIEW</p><h2 class="page-title">Reports</h2><p class="page-description">A summary calculated from data saved in this browser.</p></section>
    <section class="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article class="stat-card"><p class="stat-label">Order value</p><p id="report-sales" class="stat-number">0 RWF</p><p class="stat-caption">Sum of recorded local orders</p></article>
      <article class="stat-card"><p class="stat-label">Tasks completed</p><p id="report-tasks" class="stat-number">0%</p><p class="stat-caption">Share of tasks marked complete</p></article>
      <article class="stat-card"><p class="stat-label">Tables available</p><p id="report-tables" class="stat-number">0</p><p class="stat-caption">Tables marked available</p></article>
      <article class="stat-card"><p class="stat-label">Staff on duty</p><p id="report-staff" class="stat-number">0</p><p class="stat-caption">Roster members currently on duty</p></article>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Local demo data</h3><p>These figures are derived from records in your browser. They are not connected to a payment or restaurant service.</p></div></div><div id="report-breakdown" class="report-breakdown"></div></section>`,

  settings: `
    <section class="mb-7"><p class="eyebrow">APPLICATION PREFERENCES</p><h2 class="page-title">Settings</h2><p class="page-description">Manage the appearance and local data for this demo app.</p></section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Appearance</h3><p>Choose the theme for your current browser.</p></div></div>
      <div class="setting-row"><div><h4>Dark mode</h4><p>Switch between light and dark themes. Your choice is saved locally.</p></div><button id="settings-theme-toggle" class="btn-secondary" type="button">Toggle theme</button></div>
    </section>
    <section class="app-panel mb-6"><div class="panel-heading"><div><h3>Local storage</h3><p>Records stay in this browser on this device. Clearing browser site data may remove them.</p></div><span class="pill">No backend</span></div>
      <div class="setting-row"><div><h4>Saved records</h4><p id="settings-record-count">0 records saved</p></div><button id="refresh-local-data" class="btn-secondary" type="button">Refresh summary</button></div>
    </section>
    <section class="app-panel"><div class="panel-heading"><div><h3>Reset demo data</h3><p>Remove local changes and restore the example restaurant records. Tasks will be cleared.</p></div></div><button id="reset-demo-data" type="button" class="btn-danger">Reset local demo data</button></section>`
}

// Set the current page and remember the navigation choice.
function navigate(page) {
  if (!pageNames.includes(page)) return
  currentPage = page
  writeStorage('restoflow-page', page)
  searchQuery = ''
  searchInput.value = ''
  editingTaskId = null
  closeMobileSidebar()
  renderPage()
}

// Change the sidebar selection and page heading.
function updateNavigation() {
  const names = {
    dashboard: 'Dashboard',
    tasks: 'Task Manager',
    orders: 'Orders',
    reservations: 'Reservations',
    tables: 'Tables',
    menu: 'Menu',
    inventory: 'Inventory',
    staff: 'Staff',
    reports: 'Reports',
    settings: 'Settings'
  }

  document.querySelector('#page-title').textContent = names[currentPage]
  for (const button of document.querySelectorAll('[data-page]')) {
    button.classList.toggle('is-active', button.dataset.page === currentPage)
    button.setAttribute('aria-current', button.dataset.page === currentPage ? 'page' : 'false')
  }
}

// Display the selected page and draw its records.
function renderPage() {
  pageContent.innerHTML = pageTemplates[currentPage]
  updateNavigation()
  updateSidebarCounts()

  if (currentPage === 'dashboard') renderDashboard()
  if (currentPage === 'tasks') renderTaskList()
  if (currentPage === 'orders') renderOrders()
  if (currentPage === 'reservations') renderReservations()
  if (currentPage === 'tables') renderTables()
  if (currentPage === 'menu') renderMenu()
  if (currentPage === 'inventory') renderInventory()
  if (currentPage === 'staff') renderStaff()
  if (currentPage === 'reports') renderReports()
  if (currentPage === 'settings') renderSettings()
}

// Update the counts displayed in the persistent sidebar.
function updateSidebarCounts() {
  document.querySelector('#nav-tasks-count').textContent = String(tasks.filter((task) => !task.done).length)
  document.querySelector('#nav-orders-count').textContent = String(orders.filter((order) => order.status !== 'Served').length)
  document.querySelector('#nav-stock-count').textContent = String(inventory.filter((item) => Number(item.quantity) <= Number(item.minimum)).length)

  const completed = tasks.filter((task) => task.done).length
  const percent = tasks.length ? Math.round(completed / tasks.length * 100) : 0
  document.querySelector('#sidebar-progress-percent').textContent = `${percent}%`
  document.querySelector('#sidebar-progress-bar').style.width = `${percent}%`
}

// Add a labeled statistic card.
function createStatCard(label, value, note = '') {
  const card = createElement('article', 'stat-card')
  card.append(createElement('p', 'stat-label', label))
  card.append(createElement('p', 'stat-number', value))
  card.append(createElement('p', 'stat-caption', note))
  return card
}

// Draw the dashboard counts and recent-record previews.
function renderDashboard() {
  document.querySelector('#dash-tasks').textContent = String(tasks.filter((task) => !task.done).length)
  document.querySelector('#dash-orders').textContent = String(orders.filter((order) => order.status !== 'Served').length)
  document.querySelector('#dash-reservations').textContent = String(reservations.filter((item) => item.date === dateOffset(0)).length)
  document.querySelector('#dash-stock').textContent = String(inventory.filter((item) => Number(item.quantity) <= Number(item.minimum)).length)

  const taskList = document.querySelector('#dash-task-list')
  const orderList = document.querySelector('#dash-order-list')
  taskList.replaceChildren()
  orderList.replaceChildren()

  const recentTasks = tasks.filter((task) => !searchQuery || task.text.toLowerCase().includes(searchQuery)).slice(0, 5)
  if (!recentTasks.length) taskList.append(createElement('li', 'muted-line', 'No tasks yet. Open Task Manager to add one.'))

  for (const task of recentTasks) {
    const row = createElement('li', 'preview-row')
    const text = createElement('span', task.done ? 'line-through text-slate-400' : 'font-semibold', task.text)
    const action = createActionButton('Open', 'open-tasks')
    row.append(text, action)
    taskList.append(row)
  }

  const recentOrders = orders.filter((order) => !searchQuery || `${order.customer} ${order.details} ${order.id}`.toLowerCase().includes(searchQuery)).slice(0, 5)
  if (!recentOrders.length) orderList.append(createElement('p', 'muted-line', 'No orders match your search.'))

  for (const order of recentOrders) {
    const row = createElement('div', 'preview-row')
    const details = createElement('div', 'min-w-0')
    details.append(createElement('p', 'font-bold', order.customer), createElement('p', 'truncate text-xs text-slate-500', `${order.id} · ${order.details}`))
    row.append(details, statusBadge(order.status))
    orderList.append(row)
  }
}

// Create a status badge using known CSS classes.
function statusBadge(status) {
  const classes = {
    Pending: 'status-pill status-pending',
    Preparing: 'status-pill status-preparing',
    Ready: 'status-pill status-ready',
    Served: 'status-pill status-complete',
    Booked: 'status-pill status-preparing',
    Seated: 'status-pill status-ready',
    Available: 'status-pill status-ready',
    Occupied: 'status-pill status-pending',
    Reserved: 'status-pill status-preparing',
    Cancelled: 'status-pill status-cancelled',
    'On duty': 'status-pill status-ready',
    'Off duty': 'status-pill status-cancelled',
    AvailableMenu: 'status-pill status-ready',
    UnavailableMenu: 'status-pill status-cancelled',
    'Low stock': 'status-pill status-pending',
    'In stock': 'status-pill status-ready'
  }

  return createElement('span', classes[status] || 'status-pill', status)
}

// Create a simple title/description row for a record card.
function createRecordHeader(title, subtitle, status) {
  const head = createElement('div', 'record-card-heading')
  const text = createElement('div', 'min-w-0')
  text.append(createElement('h4', 'record-title', title), createElement('p', 'record-subtitle', subtitle))
  head.append(text, statusBadge(status))
  return head
}

// Create a reusable record card.
function createRecordCard(title, subtitle, status, actions = []) {
  const card = createElement('article', 'record-card')
  card.append(createRecordHeader(title, subtitle, status))
  const footer = createElement('div', 'record-actions')
  for (const action of actions) footer.append(action)
  if (actions.length) card.append(footer)
  return card
}

// Create an accessible empty message for collection pages.
function showEmpty(containerSelector, emptySelector, records) {
  const container = document.querySelector(containerSelector)
  const empty = document.querySelector(emptySelector)
  if (!container || !empty) return
  empty.classList.toggle('hidden', records.length > 0)
}

// Render the task list using the saved filter, sorting, and search.
function renderTaskList() {
  const list = document.querySelector('#task-list')
  if (!list) return

  list.replaceChildren()
  let visible = tasks.filter((task) => {
    if (currentFilter === 'active' && task.done) return false
    if (currentFilter === 'completed' && !task.done) return false
    return !searchQuery || task.text.toLowerCase().includes(searchQuery)
  })

  if (currentSort === 'priority') {
    const rank = { high: 0, medium: 1, low: 2 }
    visible.sort((a, b) => rank[a.priority] - rank[b.priority] || b.createdAt - a.createdAt)
  } else {
    visible.sort((a, b) => b.createdAt - a.createdAt)
  }

  for (const task of visible) list.append(createTaskRow(task))

  const empty = document.querySelector('#task-empty')
  empty.classList.toggle('hidden', visible.length > 0)
  document.querySelector('#task-counter').textContent = `${tasks.filter((task) => !task.done).length} ${tasks.filter((task) => !task.done).length === 1 ? 'task' : 'tasks'} left`
  document.querySelector('#clear-completed').disabled = !tasks.some((task) => task.done)
  document.querySelector('#task-sort').value = currentSort

  for (const button of document.querySelectorAll('[data-task-filter]')) {
    button.classList.toggle('is-active', button.dataset.taskFilter === currentFilter)
    button.setAttribute('aria-pressed', String(button.dataset.taskFilter === currentFilter))
  }

  if (editingTaskId) {
    const input = list.querySelector('[data-role="edit-input"]')
    if (input) {
      input.focus()
      input.select()
    }
  }

  if (!visible.length) {
    document.querySelector('#task-empty-title').textContent = searchQuery ? 'No matching tasks' : currentFilter === 'active' ? 'All caught up!' : currentFilter === 'completed' ? 'No completed tasks yet' : 'Your task list is clear'
    document.querySelector('#task-empty-description').textContent = searchQuery ? 'Try another search term.' : 'Add a restaurant task above to get started.'
  }
}

// Build an individual task row with safe DOM insertion.
function createTaskRow(task) {
  const row = createElement('li', 'task-row')
  row.dataset.id = String(task.id)

  const main = createElement('div', 'task-main')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = task.done
  checkbox.dataset.role = 'task-complete'
  checkbox.setAttribute('aria-label', task.done ? `Mark ${task.text} active` : `Mark ${task.text} complete`)
  checkbox.className = 'task-checkbox'

  const detail = createElement('div', 'min-w-0 flex-1')
  if (editingTaskId === task.id) {
    const editInput = document.createElement('input')
    editInput.type = 'text'
    editInput.value = task.text
    editInput.dataset.role = 'edit-input'
    editInput.className = 'form-control w-full'
    editInput.setAttribute('aria-label', 'Edit task description')
    detail.append(editInput)
  } else {
    const text = createElement('p', task.done ? 'task-text is-done' : 'task-text', task.text)
    text.dataset.role = 'task-text'
    text.title = 'Double-click to edit'
    detail.append(text)
  }

  const meta = createElement('div', 'mt-2 flex flex-wrap items-center gap-2')
  const priority = createElement('span', `priority-badge priority-${task.priority}`, `${task.priority} priority`)
  meta.append(priority, createElement('span', 'text-xs text-slate-400', `Added ${new Date(task.createdAt).toLocaleDateString()}`))
  detail.append(meta)
  main.append(checkbox, detail)

  const actions = createElement('div', 'task-row-actions')
  if (editingTaskId === task.id) {
    actions.append(createActionButton('Save', 'task-save', task.id), createActionButton('Cancel', 'task-cancel', task.id))
  } else {
    actions.append(createActionButton('Edit', 'task-edit', task.id), createActionButton('Delete', 'task-delete', task.id, 'btn-danger'))
  }
  row.append(main, actions)
  return row
}

// Display a task form error without blocking the user with an alert.
function setFormError(selector, message) {
  const error = document.querySelector(selector)
  if (!error) return
  error.textContent = message
  error.classList.toggle('hidden', !message)
}

// Save tasks and refresh dependent navigation counts.
function persistTasks() {
  saveCollection('tasks', tasks)
  updateSidebarCounts()
}

// Validate and add a task.
function addTask() {
  const text = document.querySelector('#task-input').value.trim()
  if (!text) return setFormError('#task-error', 'Please enter a task.')
  if (text.length > 100) return setFormError('#task-error', 'Task descriptions must be 100 characters or fewer.')

  tasks.push({
    id: makeId('task'),
    text,
    done: false,
    priority: document.querySelector('#task-priority').value,
    createdAt: Date.now()
  })
  editingTaskId = null
  persistTasks()
  renderPage()
}

// Update a task's completion status.
function toggleTask(id, isDone) {
  const task = tasks.find((item) => String(item.id) === String(id))
  if (!task) return
  task.done = isDone
  persistTasks()
  renderPage()
}

// Delete a task after confirmation.
function deleteTask(id) {
  const index = tasks.findIndex((item) => String(item.id) === String(id))
  if (index < 0 || !window.confirm(`Delete task "${tasks[index].text}"?`)) return
  tasks.splice(index, 1)
  editingTaskId = null
  persistTasks()
  renderPage()
}

// Validate and save an edited task.
function saveTaskEdit(id, value) {
  const text = value.trim()
  if (!text) return setFormError('#task-error', 'A task cannot be empty. Enter text or cancel the edit.')
  if (text.length > 100) return setFormError('#task-error', 'Task descriptions must be 100 characters or fewer.')

  const task = tasks.find((item) => String(item.id) === String(id))
  if (!task) return
  task.text = text
  editingTaskId = null
  persistTasks()
  renderPage()
}

// Remove all completed tasks in one state update.
function clearCompletedTasks() {
  const keep = tasks.filter((task) => !task.done)
  tasks.splice(0, tasks.length, ...keep)
  editingTaskId = null
  persistTasks()
  renderPage()
}

// Advance an order through its workflow.
function advanceOrder(id) {
  const sequence = ['Pending', 'Preparing', 'Ready', 'Served']
  const order = orders.find((item) => item.id === id)
  if (!order) return
  order.status = sequence[(sequence.indexOf(order.status) + 1) % sequence.length]
  saveCollection('orders', orders)
  renderPage()
}

// Render all orders matching the search.
function renderOrders() {
  const list = document.querySelector('#orders-list')
  const visible = orders.filter((order) => `${order.id} ${order.customer} ${order.details} ${order.table} ${order.status}`.toLowerCase().includes(searchQuery))
  document.querySelector('#order-page-count').textContent = `${visible.length} orders`
  list.replaceChildren()

  for (const order of visible) {
    const card = createRecordCard(`${order.id} · ${order.customer}`, order.details, order.status, [
      createActionButton('Advance status →', 'order-advance', order.id),
      createActionButton('Delete', 'order-delete', order.id, 'btn-danger')
    ])
    const info = createElement('p', 'record-note', `Table: ${order.table} · ${Number(order.total).toLocaleString()} RWF`)
    card.insertBefore(info, card.lastElementChild)
    list.append(card)
  }
  showEmpty('#orders-list', '#orders-empty', visible)
  updateSidebarCounts()
}

// Render reservations and their guest details.
function renderReservations() {
  const list = document.querySelector('#reservations-list')
  const visible = reservations.filter((item) => `${item.name} ${item.date} ${item.time} ${item.status}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()

  for (const item of visible) {
    const card = createRecordCard(item.name, `${item.guests} guest(s) · ${item.date} at ${item.time}`, item.status, [
      createActionButton(item.status === 'Seated' ? 'Mark booked' : 'Mark seated', 'reservation-next', item.id),
      createActionButton('Delete', 'reservation-delete', item.id, 'btn-danger')
    ])
    list.append(card)
  }
  showEmpty('#reservations-list', '#reservations-empty', visible)
}

// Display tables with clickable availability status.
function renderTables() {
  const list = document.querySelector('#tables-list')
  const visible = tables.filter((table) => `table ${table.number} ${table.status} ${table.seats}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()

  for (const table of visible) {
    const card = createElement('article', 'table-card')
    card.append(createElement('p', 'text-xs font-bold uppercase tracking-widest text-slate-400', 'DINING TABLE'))
    card.append(createElement('h3', 'mt-2 text-3xl font-extrabold', `T${table.number}`))
    card.append(createElement('p', 'mt-1 text-sm text-slate-500', `${table.seats} seats`))
    card.append(statusBadge(table.status))
    card.append(createActionButton('Change status', 'table-next', table.id))
    card.append(createActionButton('Delete table', 'table-delete', table.id, 'btn-danger'))
    list.append(card)
  }
  showEmpty('#tables-list', '#tables-empty', visible)
}

// Render menu items with availability controls.
function renderMenu() {
  const list = document.querySelector('#menu-list')
  const visible = menuItems.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()

  for (const item of visible) {
    const status = item.available ? 'AvailableMenu' : 'UnavailableMenu'
    const card = createRecordCard(item.name, item.category, status, [
      createActionButton(item.available ? 'Mark unavailable' : 'Make available', 'menu-toggle', item.id),
      createActionButton('Delete', 'menu-delete', item.id, 'btn-danger')
    ])
    card.insertBefore(createElement('p', 'record-note', `${Number(item.price).toLocaleString()} RWF`), card.lastElementChild)
    list.append(card)
  }
  showEmpty('#menu-list', '#menu-empty', visible)
}

// Render stock amounts and indicate low inventory.
function renderInventory() {
  const list = document.querySelector('#inventory-list')
  const visible = inventory.filter((item) => `${item.name} ${item.unit}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()
  const lowCount = inventory.filter((item) => Number(item.quantity) <= Number(item.minimum)).length
  document.querySelector('#low-stock-count').textContent = `${lowCount} low stock`

  for (const item of visible) {
    const low = Number(item.quantity) <= Number(item.minimum)
    const card = createRecordCard(item.name, `Minimum level: ${item.minimum} ${item.unit}`, low ? 'Low stock' : 'In stock', [
      createActionButton('−', 'stock-minus', item.id),
      createActionButton('+', 'stock-plus', item.id),
      createActionButton('Delete', 'stock-delete', item.id, 'btn-danger')
    ])
    card.insertBefore(createElement('p', 'record-note', `Current: ${item.quantity} ${item.unit}`), card.lastElementChild)
    list.append(card)
  }
  showEmpty('#inventory-list', '#inventory-empty', visible)
  updateSidebarCounts()
}

// Render staff names, roles, shifts and duty status.
function renderStaff() {
  const list = document.querySelector('#staff-list')
  const visible = staff.filter((person) => `${person.name} ${person.role} ${person.shift}`.toLowerCase().includes(searchQuery))
  list.replaceChildren()

  for (const person of visible) {
    const card = createRecordCard(person.name, `${person.role} · ${person.shift} shift`, person.onDuty ? 'On duty' : 'Off duty', [
      createActionButton(person.onDuty ? 'Set off duty' : 'Set on duty', 'staff-toggle', person.id),
      createActionButton('Remove', 'staff-delete', person.id, 'btn-danger')
    ])
    list.append(card)
  }
  showEmpty('#staff-list', '#staff-empty', visible)
}

// Calculate and display summaries from the locally stored data.
function renderReports() {
  const sales = orders.reduce((sum, order) => sum + Number(order.total || 0), 0)
  const completed = tasks.filter((task) => task.done).length
  const taskPercent = tasks.length ? Math.round(completed / tasks.length * 100) : 0

  document.querySelector('#report-sales').textContent = `${sales.toLocaleString()} RWF`
  document.querySelector('#report-tasks').textContent = `${taskPercent}%`
  document.querySelector('#report-tables').textContent = String(tables.filter((table) => table.status === 'Available').length)
  document.querySelector('#report-staff').textContent = String(staff.filter((person) => person.onDuty).length)

  const box = document.querySelector('#report-breakdown')
  box.replaceChildren()
  const rows = [
    ['Orders recorded', orders.length],
    ['Reservations recorded', reservations.length],
    ['Menu items', menuItems.length],
    ['Inventory items', inventory.length],
    ['Tasks still open', tasks.filter((task) => !task.done).length]
  ]
  for (const [label, value] of rows) {
    const row = createElement('div', 'setting-row')
    row.append(createElement('span', 'font-semibold', label), createElement('strong', '', value))
    box.append(row)
  }
}

// Display local storage counts and theme controls.
function renderSettings() {
  document.querySelector('#settings-theme-toggle').textContent = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
  const total = tasks.length + orders.length + reservations.length + tables.length + menuItems.length + inventory.length + staff.length
  document.querySelector('#settings-record-count').textContent = `${total} restaurant records stored in this browser`
}

// Save a reservation and refresh its page.
function addReservation() {
  const name = document.querySelector('#reservation-name').value.trim()
  const date = document.querySelector('#reservation-date').value
  const time = document.querySelector('#reservation-time').value
  const guests = Number(document.querySelector('#reservation-guests').value)
  if (!name || !date || !time || guests < 1) return setFormError('#reservation-error', 'Complete all reservation fields.')

  reservations.push({ id: makeId('res'), name, date, time, guests, status: 'Booked' })
  saveCollection('reservations', reservations)
  renderPage()
}

// Save a new order with input validation.
function addOrder() {
  const customer = document.querySelector('#order-customer').value.trim()
  const details = document.querySelector('#order-details').value.trim()
  const table = document.querySelector('#order-table').value.trim()
  const total = Number(document.querySelector('#order-total').value)

  if (!customer || !details || !table || !Number.isFinite(total) || total < 0) return setFormError('#order-error', 'Enter the customer, items, table/type, and a valid total.')

  orders.unshift({ id: `ORD-${Date.now().toString().slice(-6)}`, customer, details, table, total, status: 'Pending', createdAt: Date.now() })
  saveCollection('orders', orders)
  renderPage()
}

// Add a dining table after checking the table number.
function addTable() {
  const number = Number(document.querySelector('#table-number').value)
  const seats = Number(document.querySelector('#table-seats').value)
  if (number < 1 || seats < 1) return setFormError('#table-error', 'Enter a valid table number and seat count.')
  if (tables.some((table) => Number(table.number) === number)) return setFormError('#table-error', 'That table number already exists.')

  tables.push({ id: makeId('table'), number, seats, status: 'Available' })
  saveCollection('tables', tables)
  renderPage()
}

// Add an item to the restaurant menu.
function addMenuItem() {
  const name = document.querySelector('#menu-name').value.trim()
  const category = document.querySelector('#menu-category').value
  const price = Number(document.querySelector('#menu-price').value)
  if (!name || !Number.isFinite(price) || price < 0) return setFormError('#menu-error', 'Enter an item name and a valid price.')

  menuItems.push({ id: makeId('dish'), name, category, price, available: true })
  saveCollection('menu', menuItems)
  renderPage()
}

// Add an inventory item.
function addInventoryItem() {
  const name = document.querySelector('#stock-name').value.trim()
  const quantity = Number(document.querySelector('#stock-quantity').value)
  const unit = document.querySelector('#stock-unit').value.trim()
  const minimum = Number(document.querySelector('#stock-minimum').value)
  if (!name || !unit || quantity < 0 || minimum < 0) return setFormError('#stock-error', 'Enter a name, unit, and valid non-negative amounts.')

  inventory.push({ id: makeId('stock'), name, quantity, unit, minimum })
  saveCollection('inventory', inventory)
  renderPage()
}

// Add a roster member.
function addStaffMember() {
  const name = document.querySelector('#staff-name').value.trim()
  const role = document.querySelector('#staff-role').value
  const shift = document.querySelector('#staff-shift').value
  if (!name) return setFormError('#staff-error', 'Please enter the staff member’s name.')

  staff.push({ id: makeId('staff'), name, role, shift, onDuty: true })
  saveCollection('staff', staff)
  renderPage()
}

// Handle submissions for each page's form.
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

// Switch between light mode and dark mode.
function toggleTheme() {
  isDarkMode = !isDarkMode
  document.documentElement.classList.toggle('dark', isDarkMode)
  themeIcon.textContent = isDarkMode ? '☀' : '☾'
  themeLabel.textContent = isDarkMode ? 'Light mode' : 'Dark mode'
  themeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode')
  writeStorage('restoflow-theme', isDarkMode ? 'dark' : 'light')
  if (currentPage === 'settings') renderSettings()
}

// Open the mobile sidebar and display its backdrop.
function openMobileSidebar() {
  sidebar.classList.add('is-open')
  backdrop.classList.add('is-visible')
  menuToggle.setAttribute('aria-expanded', 'true')
  menuToggle.setAttribute('aria-label', 'Close navigation menu')
}

// Close the sidebar on mobile.
function closeMobileSidebar() {
  sidebar.classList.remove('is-open')
  backdrop.classList.remove('is-visible')
  menuToggle.setAttribute('aria-expanded', 'false')
  menuToggle.setAttribute('aria-label', 'Open navigation menu')
}

// Toggle the mobile navigation drawer.
function toggleMobileSidebar() {
  if (sidebar.classList.contains('is-open')) closeMobileSidebar()
  else openMobileSidebar()
}

// Move focus to the task input after opening Task Manager.
function goToTaskInput() {
  navigate('tasks')
  document.querySelector('#task-input')?.focus()
}

// Advance an order status.
function handleOrderAction(action, id) {
  if (action === 'order-advance') advanceOrder(id)
  if (action === 'order-delete') {
    const index = orders.findIndex((item) => item.id === id)
    if (index >= 0 && window.confirm(`Delete order ${orders[index].id}?`)) {
      orders.splice(index, 1)
      saveCollection('orders', orders)
      renderPage()
    }
  }
}

// Handle table state changes.
function handleTableAction(action, id) {
  const index = tables.findIndex((item) => item.id === id)
  if (index < 0) return

  if (action === 'table-next') {
    const states = ['Available', 'Occupied', 'Reserved']
    tables[index].status = states[(states.indexOf(tables[index].status) + 1) % states.length]
  }
  if (action === 'table-delete' && window.confirm(`Delete table ${tables[index].number}?`)) tables.splice(index, 1)
  saveCollection('tables', tables)
  renderPage()
}

// Handle reservation seating and deletion.
function handleReservationAction(action, id) {
  const index = reservations.findIndex((item) => String(item.id) === String(id))
  if (index < 0) return

  if (action === 'reservation-next') reservations[index].status = reservations[index].status === 'Seated' ? 'Booked' : 'Seated'
  if (action === 'reservation-delete' && window.confirm(`Delete reservation for ${reservations[index].name}?`)) reservations.splice(index, 1)
  saveCollection('reservations', reservations)
  renderPage()
}

// Handle menu availability and deletion.
function handleMenuAction(action, id) {
  const index = menuItems.findIndex((item) => item.id === id)
  if (index < 0) return

  if (action === 'menu-toggle') menuItems[index].available = !menuItems[index].available
  if (action === 'menu-delete' && window.confirm(`Delete ${menuItems[index].name} from the menu?`)) menuItems.splice(index, 1)
  saveCollection('menu', menuItems)
  renderPage()
}

// Update inventory counts or delete a stock item.
function handleInventoryAction(action, id) {
  const index = inventory.findIndex((item) => item.id === id)
  if (index < 0) return

  if (action === 'stock-plus') inventory[index].quantity = Number(inventory[index].quantity) + 1
  if (action === 'stock-minus') inventory[index].quantity = Math.max(0, Number(inventory[index].quantity) - 1)
  if (action === 'stock-delete' && window.confirm(`Delete ${inventory[index].name} from inventory?`)) inventory.splice(index, 1)
  saveCollection('inventory', inventory)
  renderPage()
}

// Toggle a staff member's duty status or remove the record.
function handleStaffAction(action, id) {
  const index = staff.findIndex((person) => person.id === id)
  if (index < 0) return

  if (action === 'staff-toggle') staff[index].onDuty = !staff[index].onDuty
  if (action === 'staff-delete' && window.confirm(`Remove ${staff[index].name} from the local roster?`)) staff.splice(index, 1)
  saveCollection('staff', staff)
  renderPage()
}

// Route an action button to the correct collection handler.
function handleRecordAction(action, id) {
  if (action.startsWith('order-')) return handleOrderAction(action, id)
  if (action.startsWith('table-')) return handleTableAction(action, id)
  if (action.startsWith('reservation-')) return handleReservationAction(action, id)
  if (action.startsWith('menu-')) return handleMenuAction(action, id)
  if (action.startsWith('stock-')) return handleInventoryAction(action, id)
  if (action.startsWith('staff-')) return handleStaffAction(action, id)
}

// Clear all demo records after confirmation.
function resetDemoData() {
  const confirmed = window.confirm('Reset all local demo data? Your task list and changes will be cleared.')
  if (!confirmed) return

  for (const key of ['tasks', 'orders', 'reservations', 'tables', 'menu', 'inventory', 'staff', 'page', 'filter', 'sort']) {
    localStorage.removeItem(`restoflow-${key}`)
  }
  window.location.reload()
}

// Handle clicks throughout the app using event delegation.
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
  if (event.target.closest('#refresh-local-data')) return renderSettings()
  if (event.target.closest('#reset-demo-data')) return resetDemoData()
  if (event.target.closest('#clear-completed')) return clearCompletedTasks()
  if (event.target.closest('#hero-add-task')) return goToTaskInput()

  const taskFilterButton = event.target.closest('[data-task-filter]')
  if (taskFilterButton) {
    currentFilter = taskFilterButton.dataset.taskFilter
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
    const input = pageContent.querySelector(`[data-id="${CSS.escape(id)}"] [data-role="edit-input"]`)
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

// Handle checkboxes and sort controls when they change.
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

// Handle Enter/Escape in an inline task editor.
function handleKeydown(event) {
  if (event.target.matches('[data-role="edit-input"]')) {
    const row = event.target.closest('[data-id]')
    if (!row) return
    if (event.key === 'Enter') {
      event.preventDefault()
      saveTaskEdit(row.dataset.id, event.target.value)
    }
    if (event.key === 'Escape') {
      editingTaskId = null
      renderTaskList()
    }
  }

  if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
    event.preventDefault()
    searchInput.focus()
  }
}

// Filter the currently displayed page while the user types.
function handleSearch(event) {
  if (event.target.id !== 'global-search') return
  searchQuery = event.target.value.trim().toLowerCase()

  if (currentPage === 'tasks') renderTaskList()
  if (currentPage === 'dashboard') renderDashboard()
  if (currentPage === 'orders') renderOrders()
  if (currentPage === 'reservations') renderReservations()
  if (currentPage === 'tables') renderTables()
  if (currentPage === 'menu') renderMenu()
  if (currentPage === 'inventory') renderInventory()
  if (currentPage === 'staff') renderStaff()
}

// Save theme preference and draw the first page.
function initializeApp() {
  document.documentElement.classList.toggle('dark', isDarkMode)
  themeIcon.textContent = isDarkMode ? '☀' : '☾'
  themeLabel.textContent = isDarkMode ? 'Light mode' : 'Dark mode'
  themeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode')
  document.querySelector('#global-search').value = ''
  renderPage()
}

// Register application-wide event listeners.
app.addEventListener('click', handleClick)
app.addEventListener('submit', handleSubmit)
app.addEventListener('change', handleChange)
app.addEventListener('keydown', handleKeydown)
app.addEventListener('input', (event) => {
  if (event.target.id === 'global-search') handleSearch(event)
  if (event.target.id === 'task-input') setFormError('#task-error', '')
})

// Apply state changes without leaving the user on a stale screen.
function handlePageVisibility() {
  if (currentPage === 'dashboard') renderDashboard()
  updateSidebarCounts()
}

// Set default reservation date when its page is first displayed.
function prepareReservationDefaults() {
  const field = document.querySelector('#reservation-date')
  if (field) field.value = dateOffset(0)
}

// Render an individual page then prepare form defaults.
const originalRenderPage = renderPage
function renderPageWithDefaults() {
  originalRenderPage()
  prepareReservationDefaults()
}

// Use the form-aware renderer for future navigation.
renderPage = renderPageWithDefaults

// Start the app.
initializeApp()

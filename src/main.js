import './style.css'

// Create the main dashboard layout. This template contains no user-provided text.
const app = document.querySelector('#app')

app.innerHTML = `
<div class="min-h-screen bg-[#f5f7f5] text-slate-800 transition-colors dark:bg-[#101713] dark:text-slate-100">

  <button id="sidebar-backdrop"
    class="fixed inset-0 z-30 hidden bg-slate-950/40 backdrop-blur-sm lg:hidden"
    aria-label="Close navigation"></button>

  <aside id="app-sidebar"
    class="fixed inset-y-0 left-0 z-40 hidden w-[264px] flex-col border-r border-slate-200 bg-white px-5 py-6 dark:border-slate-800 dark:bg-[#151e19] lg:flex">

    <a href="#" class="mb-9 flex items-center gap-3 rounded-xl">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-2xl font-black text-white shadow-lg shadow-emerald-900/20">
        R
      </div>
      <div>
        <p class="text-xl font-extrabold tracking-tight">RestoFlow</p>
        <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Restaurant operations</p>
      </div>
    </a>

    <p class="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
      Workspace
    </p>

    <nav id="sidebar-nav" class="space-y-2" aria-label="Task navigation">
      <button type="button" data-filter="all" data-filter-type="sidebar"
        class="sidebar-link is-active" aria-pressed="true">
        <span class="nav-icon" aria-hidden="true">▦</span>
        <span>Overview</span>
      </button>

      <button type="button" data-filter="active" data-filter-type="sidebar"
        class="sidebar-link" aria-pressed="false">
        <span class="nav-icon" aria-hidden="true">◷</span>
        <span>Active tasks</span>
        <span id="sidebar-active-count" class="nav-count">0</span>
      </button>

      <button type="button" data-filter="completed" data-filter-type="sidebar"
        class="sidebar-link" aria-pressed="false">
        <span class="nav-icon" aria-hidden="true">✓</span>
        <span>Completed</span>
      </button>
    </nav>

    <div class="my-7 border-t border-slate-100 dark:border-slate-800"></div>

    <p class="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
      Your shift
    </p>

    <div class="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/40">
      <div class="mb-3 flex items-center justify-between">
        <span class="text-sm font-bold text-emerald-950 dark:text-emerald-100">Shift progress</span>
        <span id="sidebar-progress-percent" class="text-sm font-extrabold text-emerald-800 dark:text-emerald-300">0%</span>
      </div>
      <div class="h-2 overflow-hidden rounded-full bg-emerald-200 dark:bg-emerald-900">
        <div id="sidebar-progress-bar" class="h-full w-0 rounded-full bg-emerald-700 transition-all duration-300 dark:bg-emerald-400"></div>
      </div>
      <p class="mt-3 text-xs leading-5 text-emerald-900/70 dark:text-emerald-200/70">
        Every completed task brings your team closer to a smooth shift.
      </p>
    </div>

    <div class="mt-auto pt-8">
      <div class="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
        <div class="mb-2 flex items-center gap-2">
          <span class="text-lg" aria-hidden="true">🍽️</span>
          <span class="text-sm font-bold">Team workspace</span>
        </div>
        <p class="text-xs leading-5 text-slate-500 dark:text-slate-400">
          Kitchen, service and daily operations — all in one place.
        </p>
      </div>
      <p class="mt-5 text-center text-[10px] font-medium text-slate-400">
        RESTOFLOW · DAILY TASK MANAGER
      </p>
    </div>
  </aside>

  <div class="min-h-screen lg:ml-[264px]">

    <header class="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-[#151e19]/90">
      <div class="mx-auto flex min-h-[76px] max-w-[1600px] items-center gap-3 px-4 sm:px-7 lg:px-9">

        <button id="menu-toggle" type="button"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-xl hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-emerald-700 dark:border-slate-700 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open navigation" aria-expanded="false">
          ☰
        </button>

        <div class="hidden shrink-0 md:block">
          <p class="text-xs font-medium text-slate-400">Workspace / Daily operations</p>
          <p id="today-label" class="mt-1 text-sm font-bold">Restaurant dashboard</p>
        </div>

        <div class="dashboard-search ml-auto flex min-w-0 max-w-md flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 dark:border-slate-700 dark:bg-slate-900">
          <span class="text-lg text-slate-400" aria-hidden="true">⌕</span>
          <label for="task-search" class="sr-only">Search restaurant tasks</label>
          <input id="task-search" type="search" placeholder="Search tasks..."
            autocomplete="off"
            class="min-w-0 w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
          <kbd class="hidden rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400 sm:block dark:border-slate-700 dark:bg-slate-800">/</kbd>
        </div>

        <button id="theme-toggle" type="button"
          class="flex h-10 shrink-0 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-semibold hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-emerald-700 dark:border-slate-700 dark:hover:bg-slate-800"
          aria-label="Switch to dark mode">
          <span id="theme-icon" aria-hidden="true">☾</span>
          <span class="hidden sm:inline">Theme</span>
        </button>

        <div class="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-900 sm:flex dark:bg-emerald-900 dark:text-emerald-100"
          aria-label="Restaurant team">RF</div>
      </div>
    </header>

    <main class="mx-auto max-w-[1600px] px-4 py-6 sm:px-7 sm:py-8 lg:px-9">

      <section class="hero-panel relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 p-6 text-white shadow-xl shadow-emerald-950/10 sm:p-9">
        <div class="relative z-10 max-w-2xl">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-100">
            <span class="h-1.5 w-1.5 rounded-full bg-lime-300"></span>
            Restaurant operations
          </span>

          <h1 class="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Every shift,<br class="hidden sm:block" /> under control.
          </h1>

          <p class="mt-4 max-w-lg text-sm leading-6 text-emerald-100/80 sm:text-base">
            Keep kitchen preparation, customer service and daily restaurant tasks organized in one place.
          </p>

          <a href="#add-task-section"
            class="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-emerald-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <span aria-hidden="true">+</span> Create a task
          </a>
        </div>

        <div class="pointer-events-none absolute -right-16 -top-20 hidden h-80 w-80 rounded-full border border-white/10 sm:block"></div>
        <div class="pointer-events-none absolute -right-4 -top-9 hidden h-60 w-60 rounded-full border border-white/10 sm:block"></div>
        <div class="pointer-events-none absolute -bottom-24 right-24 hidden h-52 w-52 rounded-full bg-white/[0.04] sm:block"></div>

        <div class="pointer-events-none absolute bottom-7 right-10 hidden h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-4xl shadow-2xl backdrop-blur sm:flex">
          🍃
        </div>
      </section>

      <section class="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Task statistics">

        <article class="stat-card">
          <div class="flex items-start justify-between gap-2">
            <p class="stat-label">Total tasks</p>
            <span class="stat-icon bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">▦</span>
          </div>
          <p id="total-count" class="stat-number">0</p>
          <p class="stat-caption">Across your restaurant shift</p>
        </article>

        <article class="stat-card">
          <div class="flex items-start justify-between gap-2">
            <p class="stat-label">Tasks remaining</p>
            <span class="stat-icon bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">◷</span>
          </div>
          <p id="remaining-count" class="stat-number">0 tasks left</p>
          <p class="stat-caption">Still to be completed</p>
        </article>

        <article class="stat-card">
          <div class="flex items-start justify-between gap-2">
            <p class="stat-label">Completed tasks</p>
            <span class="stat-icon bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">✓</span>
          </div>
          <p id="completed-count" class="stat-number">0</p>
          <p class="stat-caption">Great work by your team</p>
        </article>

        <article class="stat-card">
          <div class="flex items-start justify-between gap-2">
            <p class="stat-label">Completion rate</p>
            <span class="stat-icon bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300">↗</span>
          </div>
          <p id="progress-percent" class="stat-number">0%</p>
          <div class="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div id="progress-bar" class="h-full w-0 rounded-full bg-emerald-600 transition-all duration-300 dark:bg-emerald-400"></div>
          </div>
          <span class="sr-only" id="progress-description">0% of tasks completed</span>
        </article>
      </section>

      <section id="add-task-section" class="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-[#151e19]">
        <div class="mb-5 flex items-start gap-3">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">+</div>
          <div>
            <h2 class="text-lg font-extrabold">Create a new task</h2>
            <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Add something your restaurant team needs to get done.</p>
          </div>
        </div>

        <form id="task-form" class="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_170px_auto] md:items-end">
          <div class="min-w-0">
            <label for="task-input" class="mb-2 block text-sm font-bold">Task description</label>
            <input id="task-input" type="text" maxlength="100"
              placeholder="e.g. Prepare the dining tables"
              autocomplete="off" aria-describedby="form-error"
              class="form-control w-full" />
          </div>

          <div>
            <label for="task-priority" class="mb-2 block text-sm font-bold">Priority level</label>
            <select id="task-priority" class="form-control w-full">
              <option value="high">High priority</option>
              <option value="medium" selected>Medium priority</option>
              <option value="low">Low priority</option>
            </select>
          </div>

          <button type="submit"
            class="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
            <span aria-hidden="true">+</span> Add task
          </button>
        </form>

        <p id="form-error" class="mt-3 hidden text-sm font-semibold text-red-600 dark:text-red-400" role="alert" aria-live="polite"></p>
      </section>

      <section class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#151e19]">
        <div class="border-b border-slate-100 p-5 sm:p-6 dark:border-slate-800">
          <div class="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
            <div>
              <div class="flex items-center gap-3">
                <h2 class="text-xl font-extrabold tracking-tight">Task board</h2>
                <span class="rounded-lg bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">Daily checklist</span>
              </div>
              <p class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">Select a task to complete it, or edit its details at any time.</p>
            </div>

            <div id="filter-buttons" class="flex flex-wrap gap-2" role="group" aria-label="Filter tasks">
              <button type="button" data-filter="all" data-filter-type="tab" class="filter-tab is-active" aria-pressed="true">All tasks</button>
              <button type="button" data-filter="active" data-filter-type="tab" class="filter-tab" aria-pressed="false">Active</button>
              <button type="button" data-filter="completed" data-filter-type="tab" class="filter-tab" aria-pressed="false">Completed</button>
            </div>
          </div>

          <div class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Sort by</span>
              <select id="sort-select" class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 dark:border-slate-700 dark:bg-slate-900">
                <option value="recent">Newest first</option>
                <option value="priority">High priority first</option>
              </select>
            </div>

            <button id="clear-completed" type="button"
              class="self-start rounded-lg px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-950/30 sm:self-auto">
              Clear completed
            </button>
          </div>
        </div>

        <div class="p-4 sm:p-6">
          <ul id="task-list" class="space-y-3" aria-label="Restaurant tasks" aria-live="polite"></ul>

          <div id="empty-state" class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 px-5 py-14 text-center dark:border-slate-700">
            <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl dark:bg-emerald-950">✓</div>
            <h3 id="empty-title" class="text-lg font-extrabold">Your task list is clear!</h3>
            <p id="empty-description" class="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">Add your first restaurant task above to get started.</p>
          </div>
        </div>
      </section>

      <footer class="flex flex-col items-center justify-between gap-2 py-7 text-xs text-slate-400 sm:flex-row">
        <p>© RestoFlow · Restaurant Task Manager</p>
        <p>Made to keep every shift running smoothly.</p>
      </footer>
    </main>
  </div>
</div>
`

// Select the elements used by the app.
const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-input')
const priorityInput = document.querySelector('#task-priority')
const taskList = document.querySelector('#task-list')
const formError = document.querySelector('#form-error')
const emptyState = document.querySelector('#empty-state')
const emptyTitle = document.querySelector('#empty-title')
const emptyDescription = document.querySelector('#empty-description')
const totalCount = document.querySelector('#total-count')
const remainingCount = document.querySelector('#remaining-count')
const completedCount = document.querySelector('#completed-count')
const progressPercent = document.querySelector('#progress-percent')
const progressBar = document.querySelector('#progress-bar')
const progressDescription = document.querySelector('#progress-description')
const sidebarActiveCount = document.querySelector('#sidebar-active-count')
const sidebarProgressPercent = document.querySelector('#sidebar-progress-percent')
const sidebarProgressBar = document.querySelector('#sidebar-progress-bar')
const sidebarNav = document.querySelector('#sidebar-nav')
const filterButtons = document.querySelector('#filter-buttons')
const sortSelect = document.querySelector('#sort-select')
const clearCompletedButton = document.querySelector('#clear-completed')
const themeToggle = document.querySelector('#theme-toggle')
const themeIcon = document.querySelector('#theme-icon')
const searchInput = document.querySelector('#task-search')
const sidebar = document.querySelector('#app-sidebar')
const sidebarBackdrop = document.querySelector('#sidebar-backdrop')
const menuToggle = document.querySelector('#menu-toggle')

// Read a stored value safely, returning the fallback if storage is unavailable.
function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value === null ? fallback : value
  } catch {
    return fallback
  }
}

// Save a value safely so unavailable browser storage does not crash the app.
function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    showError('Your browser could not save changes. Check your storage settings.')
  }
}

// Load saved tasks and keep only entries with a valid structure.
function loadTasks() {
  try {
    const saved = JSON.parse(readStorage('restoflow-tasks', '[]'))
    if (!Array.isArray(saved)) return []

    const result = []
    for (const task of saved) {
      if (!task || task.id == null || typeof task.text !== 'string' || typeof task.done !== 'boolean') continue

      const priority = ['high', 'medium', 'low'].includes(task.priority) ? task.priority : 'medium'
      result.push({
        id: String(task.id),
        text: task.text.slice(0, 100),
        done: task.done,
        priority,
        createdAt: Number(task.createdAt) || Date.now()
      })
    }
    return result
  } catch {
    return []
  }
}

// Load and validate the saved task filter.
function loadFilter() {
  const saved = readStorage('restoflow-filter', 'all')
  return ['all', 'active', 'completed'].includes(saved) ? saved : 'all'
}

// Load the saved sorting preference.
function loadSort() {
  const saved = readStorage('restoflow-sort', 'recent')
  return ['recent', 'priority'].includes(saved) ? saved : 'recent'
}

// Load the saved theme preference.
function loadTheme() {
  return readStorage('restoflow-theme', 'light') === 'dark'
}

// Save the tasks array as JSON.
function saveTasks() {
  writeStorage('restoflow-tasks', JSON.stringify(tasks))
}

// Save the current filter choice.
function saveFilter() {
  writeStorage('restoflow-filter', currentFilter)
}

// Save the selected sorting preference.
function saveSort() {
  writeStorage('restoflow-sort', currentSort)
}

// Save the selected theme.
function saveTheme() {
  writeStorage('restoflow-theme', isDarkMode ? 'dark' : 'light')
}

// Store the application state in one task array plus view settings.
const tasks = loadTasks()
let currentFilter = loadFilter()
let currentSort = loadSort()
let searchQuery = ''
let editingTaskId = null
let isDarkMode = loadTheme()

// Display a validation or browser-storage error on the page.
function showError(message) {
  formError.textContent = message
  formError.classList.remove('hidden')
}

// Clear the current form error.
function clearError() {
  formError.textContent = ''
  formError.classList.add('hidden')
}

// Return the tasks matching the active filter and search query.
function getVisibleTasks() {
  const visibleTasks = []

  for (const task of tasks) {
    if (currentFilter === 'active' && task.done) continue
    if (currentFilter === 'completed' && !task.done) continue
    if (searchQuery && !task.text.toLowerCase().includes(searchQuery)) continue
    visibleTasks.push(task)
  }

  const priorityOrder = { high: 0, medium: 1, low: 2 }
  if (currentSort === 'priority') {
    visibleTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority] || b.createdAt - a.createdAt)
  } else {
    visibleTasks.sort((a, b) => b.createdAt - a.createdAt)
  }
  return visibleTasks
}

// Return the appropriate visual class for a priority badge.
function getPriorityClass(priority) {
  if (priority === 'high') return 'priority-high'
  if (priority === 'low') return 'priority-low'
  return 'priority-medium'
}

// Format a task creation date for display.
function formatTaskDate(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// Create a checkbox with an accessible label for task completion.
function createTaskCheckbox(task) {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = task.done
  checkbox.dataset.role = 'complete'
  checkbox.setAttribute('aria-label', task.done ? `Mark ${task.text} active` : `Mark ${task.text} complete`)
  checkbox.className = 'task-checkbox mt-1'
  return checkbox
}

// Create an accessible Edit or Delete button.
function createActionButton(action, task) {
  const button = document.createElement('button')
  button.type = 'button'
  button.dataset.action = action
  button.textContent = action === 'edit' ? 'Edit' : 'Delete'
  button.setAttribute('aria-label', `${button.textContent} task: ${task.text}`)
  button.className = action === 'delete' ? 'task-action task-action-delete' : 'task-action'
  return button
}

// Create the task description, editor and metadata using safe DOM methods.
function createTaskDetails(task) {
  const details = document.createElement('div')
  details.className = 'min-w-0 flex-1'

  if (editingTaskId === task.id) {
    const input = document.createElement('input')
    input.type = 'text'
    input.value = task.text
    input.maxLength = 100
    input.dataset.role = 'edit-input'
    input.setAttribute('aria-label', 'Edit task description')
    input.className = 'form-control w-full'
    details.append(input)
  } else {
    const text = document.createElement('span')
    text.textContent = task.text
    text.dataset.role = 'task-text'
    text.title = 'Double-click to edit'
    text.className = task.done
      ? 'cursor-text break-words font-semibold text-slate-400 line-through dark:text-slate-500'
      : 'cursor-text break-words font-bold text-slate-800 dark:text-slate-100'
    details.append(text)
  }

  const meta = document.createElement('div')
  meta.className = 'mt-2 flex flex-wrap items-center gap-2'

  const badge = document.createElement('span')
  badge.textContent = `${task.priority.charAt(0).toUpperCase()}${task.priority.slice(1)} priority`
  badge.className = `priority-badge ${getPriorityClass(task.priority)}`

  const date = document.createElement('span')
  date.textContent = `Added ${formatTaskDate(task.createdAt)}`
  date.className = 'text-xs text-slate-400'

  meta.append(badge, date)
  details.append(meta)
  return details
}

// Create the task row actions.
function createTaskActions(task) {
  const actions = document.createElement('div')
  actions.className = 'flex shrink-0 items-center gap-2 pl-8 sm:pl-0'
  actions.append(createActionButton('edit', task), createActionButton('delete', task))
  return actions
}

// Build one task row using textContent rather than inserting user text as HTML.
function createTaskElement(task) {
  const item = document.createElement('li')
  item.dataset.id = task.id
  item.className = 'task-row flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-[#151e19] dark:hover:border-emerald-800'

  const main = document.createElement('div')
  main.className = 'flex min-w-0 flex-1 items-start gap-3'
  main.append(createTaskCheckbox(task), createTaskDetails(task))

  item.append(main, createTaskActions(task))
  return item
}

// Update all task summary counts and their singular/plural wording.
function updateCounts() {
  let completed = 0
  for (const task of tasks) {
    if (task.done) completed++
  }

  const remaining = tasks.length - completed
  totalCount.textContent = String(tasks.length)
  remainingCount.textContent = `${remaining} ${remaining === 1 ? 'task' : 'tasks'} left`
  completedCount.textContent = String(completed)
  sidebarActiveCount.textContent = String(remaining)
}

// Update the dashboard and sidebar progress bars.
function updateProgress() {
  let completed = 0
  for (const task of tasks) {
    if (task.done) completed++
  }

  const percent = tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100)
  progressPercent.textContent = `${percent}%`
  progressDescription.textContent = `${percent}% of tasks completed`
  progressBar.style.width = `${percent}%`
  progressBar.setAttribute('role', 'progressbar')
  progressBar.setAttribute('aria-valuemin', '0')
  progressBar.setAttribute('aria-valuemax', '100')
  progressBar.setAttribute('aria-valuenow', String(percent))
  sidebarProgressPercent.textContent = `${percent}%`
  sidebarProgressBar.style.width = `${percent}%`
}

// Highlight the selected navigation filter.
function updateFilterStyles() {
  for (const button of document.querySelectorAll('[data-filter]')) {
    const selected = button.dataset.filter === currentFilter
    button.classList.toggle('is-active', selected)
    button.setAttribute('aria-pressed', String(selected))
  }
}

// Display the correct empty-state message for filters and search.
function updateEmptyState(visibleTasks) {
  if (visibleTasks.length > 0) {
    emptyState.classList.add('hidden')
    return
  }

  emptyState.classList.remove('hidden')

  if (searchQuery) {
    emptyTitle.textContent = 'No matching tasks'
    emptyDescription.textContent = 'Try another search term, or clear the search box to see your tasks.'
  } else if (currentFilter === 'active') {
    emptyTitle.textContent = 'All caught up!'
    emptyDescription.textContent = 'There are no active tasks. Your restaurant team is on track.'
  } else if (currentFilter === 'completed') {
    emptyTitle.textContent = 'Nothing completed yet'
    emptyDescription.textContent = 'Completed tasks will appear here when your team finishes them.'
  } else {
    emptyTitle.textContent = 'Your task list is clear!'
    emptyDescription.textContent = 'Add your first restaurant task above to get started.'
  }
}

// Draw the complete interface from the task array and current view state.
function render() {
  const visibleTasks = getVisibleTasks()
  taskList.replaceChildren()

  for (const task of visibleTasks) {
    taskList.append(createTaskElement(task))
  }

  updateCounts()
  updateProgress()
  updateFilterStyles()
  updateEmptyState(visibleTasks)
  clearCompletedButton.disabled = !tasks.some((task) => task.done)
  sortSelect.value = currentSort

  if (editingTaskId !== null) {
    const editInput = taskList.querySelector('[data-role="edit-input"]')
    if (editInput) {
      editInput.focus()
      editInput.select()
    }
  }
}

// Create a unique identifier for a new task.
function createTaskId() {
  if (globalThis.crypto && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

// Validate and add a new task to the state array.
function addTask() {
  const text = taskInput.value.trim()

  if (!text) {
    showError('Please enter a task before adding it.')
    taskInput.focus()
    return
  }

  if (text.length > 100) {
    showError('Task descriptions must be 100 characters or fewer.')
    taskInput.focus()
    return
  }

  tasks.push({
    id: createTaskId(),
    text,
    done: false,
    priority: priorityInput.value,
    createdAt: Date.now()
  })

  taskInput.value = ''
  priorityInput.value = 'medium'
  clearError()
  saveTasks()
  render()
  taskInput.focus()
}

// Update the completion state of a task.
function toggleTask(id, isDone) {
  const task = tasks.find((item) => item.id === id)
  if (!task) return

  task.done = isDone
  saveTasks()
  render()
}

// Delete a task only after the user confirms the action.
function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id)
  if (index === -1) return

  if (!window.confirm(`Are you sure you want to delete "${tasks[index].text}"?`)) return

  tasks.splice(index, 1)
  if (editingTaskId === id) editingTaskId = null
  clearError()
  saveTasks()
  render()
}

// Switch a task into in-place editing mode.
function startEditing(id) {
  if (!tasks.some((task) => task.id === id)) return
  editingTaskId = id
  clearError()
  render()
}

// Validate and save an edited task description.
function saveEdit(id, value) {
  const text = value.trim()

  if (!text) {
    showError('A task cannot be empty. Enter text or press Escape to cancel.')
    return
  }

  if (text.length > 100) {
    showError('Task descriptions must be 100 characters or fewer.')
    return
  }

  const task = tasks.find((item) => item.id === id)
  if (!task) return

  task.text = text
  editingTaskId = null
  clearError()
  saveTasks()
  render()
}

// Remove every completed task from the state array.
function clearCompletedTasks() {
  let removedAny = false

  for (let index = tasks.length - 1; index >= 0; index--) {
    if (tasks[index].done) {
      tasks.splice(index, 1)
      removedAny = true
    }
  }

  if (!removedAny) return
  editingTaskId = null
  clearError()
  saveTasks()
  render()
}

// Handle task form submission, including pressing Enter.
function handleFormSubmit(event) {
  event.preventDefault()
  addTask()
}

// Handle Edit and Delete actions using event delegation on the task list.
function handleTaskListClick(event) {
  const button = event.target.closest('[data-action]')
  if (!button) return

  const item = button.closest('li[data-id]')
  if (!item) return

  if (button.dataset.action === 'edit') startEditing(item.dataset.id)
  if (button.dataset.action === 'delete') deleteTask(item.dataset.id)
}

// Handle task completion checkbox changes through event delegation.
function handleTaskListChange(event) {
  if (!event.target.matches('[data-role="complete"]')) return

  const item = event.target.closest('li[data-id]')
  if (item) toggleTask(item.dataset.id, event.target.checked)
}

// Allow a task to enter edit mode when its description is double-clicked.
function handleTaskDoubleClick(event) {
  const text = event.target.closest('[data-role="task-text"]')
  if (!text) return

  const item = text.closest('li[data-id]')
  if (item) startEditing(item.dataset.id)
}

// Save edits with Enter and cancel edits with Escape.
function handleTaskKeydown(event) {
  if (!event.target.matches('[data-role="edit-input"]')) return

  const item = event.target.closest('li[data-id]')
  if (!item) return

  if (event.key === 'Enter') {
    event.preventDefault()
    saveEdit(item.dataset.id, event.target.value)
  }

  if (event.key === 'Escape') {
    editingTaskId = null
    clearError()
    render()
  }
}

// Remove an edit error as the user types a correction.
function handleTaskInput(event) {
  if (event.target.matches('[data-role="edit-input"]')) clearError()
}

// Apply a filter and persist it for the next page visit.
function applyFilter(filter) {
  if (!['all', 'active', 'completed'].includes(filter)) return

  currentFilter = filter
  editingTaskId = null
  clearError()
  saveFilter()
  closeMobileSidebar()
  render()
}

// Handle filter clicks from both the sidebar and the task-board tabs.
function handleFilterClick(event) {
  const button = event.target.closest('[data-filter]')
  if (button) applyFilter(button.dataset.filter)
}

// Filter tasks live as the user types in the search box.
function handleSearchInput() {
  searchQuery = searchInput.value.trim().toLowerCase()
  editingTaskId = null
  clearError()
  render()
}

// Update the task sorting preference.
function handleSortChange() {
  currentSort = sortSelect.value
  saveSort()
  render()
}

// Apply dark mode and remember the user's preference.
function applyTheme() {
  document.documentElement.classList.toggle('dark', isDarkMode)
  themeIcon.textContent = isDarkMode ? '☀' : '☾'
  themeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode')
  themeToggle.title = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
}

// Toggle between light mode and dark mode.
function toggleTheme() {
  isDarkMode = !isDarkMode
  applyTheme()
  saveTheme()
}

// Open or close the mobile navigation sidebar.
function toggleMobileSidebar() {
  const isOpen = !sidebar.classList.contains('hidden')

  if (isOpen) {
    closeMobileSidebar()
  } else {
    sidebar.classList.remove('hidden')
    sidebarBackdrop.classList.remove('hidden')
    menuToggle.setAttribute('aria-expanded', 'true')
  }
}

// Close the mobile sidebar after a navigation action.
function closeMobileSidebar() {
  if (window.innerWidth >= 1024) return

  sidebar.classList.add('hidden')
  sidebarBackdrop.classList.add('hidden')
  menuToggle.setAttribute('aria-expanded', 'false')
}

// Display the current date in the top header.
function showTodayDate() {
  const today = new Date()
  document.querySelector('#today-label').textContent = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  })
}

// Pressing / outside a form field focuses the new-task input.
function handleKeyboardShortcut(event) {
  const tag = document.activeElement.tagName
  if (event.key !== '/' || ['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return

  event.preventDefault()
  taskInput.focus()
  document.querySelector('#add-task-section').scrollIntoView({ behavior: 'smooth', block: 'center' })
}

// Register events without inline onclick attributes.
taskForm.addEventListener('submit', handleFormSubmit)
taskInput.addEventListener('input', clearError)
taskList.addEventListener('click', handleTaskListClick)
taskList.addEventListener('change', handleTaskListChange)
taskList.addEventListener('dblclick', handleTaskDoubleClick)
taskList.addEventListener('keydown', handleTaskKeydown)
taskList.addEventListener('input', handleTaskInput)
sidebarNav.addEventListener('click', handleFilterClick)
filterButtons.addEventListener('click', handleFilterClick)
searchInput.addEventListener('input', handleSearchInput)
sortSelect.addEventListener('change', handleSortChange)
clearCompletedButton.addEventListener('click', clearCompletedTasks)
themeToggle.addEventListener('click', toggleTheme)
menuToggle.addEventListener('click', toggleMobileSidebar)
sidebarBackdrop.addEventListener('click', closeMobileSidebar)
document.addEventListener('keydown', handleKeyboardShortcut)

// Apply saved settings and draw the initial page.
applyTheme()
showTodayDate()
render()